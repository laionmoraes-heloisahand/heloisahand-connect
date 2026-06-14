const http = require("http");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const root = __dirname;
const port = Number(process.env.PORT || 5400);
const dataDir = process.env.DATA_DIR || path.join(root, "data");
const uploadsDir = process.env.UPLOADS_DIR || path.join(root, "uploads");
const mediaFile = path.join(dataDir, "media.json");
const authFile = path.join(dataDir, "auth.json");
const seedDataDir = path.join(root, "data");
const seedMediaFile = path.join(seedDataDir, "media.json");
const seedAuthFile = path.join(seedDataDir, "auth.json");
const maxUploadBytes = 12 * 1024 * 1024;
const defaultPassword = "1234";
const sessions = new Map();

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
};

fs.mkdirSync(dataDir, { recursive: true });
fs.mkdirSync(uploadsDir, { recursive: true });
if (!fs.existsSync(mediaFile)) {
  fs.writeFileSync(mediaFile, fs.existsSync(seedMediaFile) ? fs.readFileSync(seedMediaFile, "utf8") : "[]");
}
if (!fs.existsSync(authFile) && fs.existsSync(seedAuthFile)) {
  fs.writeFileSync(authFile, fs.readFileSync(seedAuthFile, "utf8"));
}

function readJsonFile(file, fallback) {
  try {
    if (!fs.existsSync(file)) return fallback;
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch (error) {
    return fallback;
  }
}

function saveJsonFile(file, payload) {
  fs.writeFileSync(file, JSON.stringify(payload, null, 2));
}

function readMedia() {
  return readJsonFile(mediaFile, []);
}

function saveMedia(items) {
  saveJsonFile(mediaFile, items);
}

function normalizeAuthData(data) {
  if (!data || !Array.isArray(data.users)) return { data, changed: false };
  let changed = false;
  data.users.forEach((user) => {
    if (!user.password) return;
    if (user.password !== defaultPassword && user.mustChangePassword !== false) {
      user.mustChangePassword = false;
      changed = true;
    }
    if (user.password === defaultPassword && typeof user.mustChangePassword !== "boolean") {
      user.mustChangePassword = true;
      changed = true;
    }
  });
  return { data, changed };
}

function readAuthData() {
  const data = readJsonFile(authFile, null);
  const normalized = normalizeAuthData(data);
  if (normalized.changed) saveJsonFile(authFile, normalized.data);
  return normalized.data;
}

function saveAuthData(payload) {
  saveJsonFile(authFile, payload);
}

function getAuthToken(req) {
  const header = req.headers.authorization || "";
  return header.startsWith("Bearer ") ? header.slice(7) : "";
}

function getSession(req) {
  const token = getAuthToken(req);
  return token ? sessions.get(token) : null;
}

function createSession(user) {
  const token = crypto.randomBytes(32).toString("hex");
  sessions.set(token, { userId: user.id, role: user.role, createdAt: Date.now() });
  return token;
}

function sanitizeUser(user, includePrivate = false) {
  if (!user) return null;
  const { password, ...rest } = user;
  if (includePrivate) return rest;
  const { cpf, scout, birthDate, ...publicUser } = rest;
  return publicUser;
}

function dataForCoach(data) {
  return {
    ...data,
    users: data.users.map((user) => sanitizeUser(user, true)),
  };
}

function dataForAthlete(data, userId) {
  const user = data.users.find((item) => item.id === userId);
  return {
    users: user ? [sanitizeUser(user, true)] : [],
    notices: data.notices || [],
    messages: (data.messages || []).filter((msg) => msg.recipientId === "team" || msg.recipientId === userId || msg.fromId === userId),
    media: [],
    events: data.events || [],
    attendance: (data.attendance || []).filter((item) => item.athleteId === userId),
    interests: [],
  };
}

function publicData(data) {
  return {
    users: [],
    notices: [],
    messages: [],
    media: [],
    events: data?.events || [],
    interests: [],
    sponsors: data?.sponsors || [],
    campaigns: data?.campaigns || [],
  };
}

function sendJson(res, status, payload) {
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" });
  res.end(JSON.stringify(payload));
}

function collectBody(req, limit = maxUploadBytes) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on("data", (chunk) => {
      size += chunk.length;
      if (size > limit) {
        reject(new Error("Arquivo muito grande"));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

function parseMultipart(buffer, contentType) {
  const boundaryMatch = contentType.match(/boundary=(.+)$/);
  if (!boundaryMatch) return { fields: {}, files: {} };

  const boundary = `--${boundaryMatch[1]}`;
  const parts = buffer.toString("binary").split(boundary).slice(1, -1);
  const fields = {};
  const files = {};

  parts.forEach((part) => {
    const trimmed = part.replace(/^\r\n/, "").replace(/\r\n$/, "");
    const splitIndex = trimmed.indexOf("\r\n\r\n");
    if (splitIndex === -1) return;

    const rawHeaders = trimmed.slice(0, splitIndex);
    const rawBody = trimmed.slice(splitIndex + 4);
    const nameMatch = rawHeaders.match(/name="([^"]+)"/);
    if (!nameMatch) return;

    const name = nameMatch[1];
    const filenameMatch = rawHeaders.match(/filename="([^"]*)"/);
    if (filenameMatch && filenameMatch[1]) {
      const typeMatch = rawHeaders.match(/Content-Type:\s*([^\r\n]+)/i);
      files[name] = {
        filename: path.basename(filenameMatch[1]),
        contentType: typeMatch ? typeMatch[1].trim() : "application/octet-stream",
        data: Buffer.from(rawBody, "binary"),
      };
      return;
    }
    fields[name] = Buffer.from(rawBody, "binary").toString("utf8").trim();
  });

  return { fields, files };
}

function getYoutubeVideoId(url) {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtu.be")) return parsed.pathname.replace("/", "").slice(0, 20);
    if (parsed.hostname.includes("youtube.com")) {
      if (parsed.searchParams.get("v")) return parsed.searchParams.get("v").slice(0, 20);
      const shortsMatch = parsed.pathname.match(/\/shorts\/([^/?]+)/);
      if (shortsMatch) return shortsMatch[1].slice(0, 20);
    }
  } catch (error) {
    return "";
  }
  return "";
}

async function handleApi(req, res, cleanUrl) {
  if (req.method === "GET" && cleanUrl === "/api/public-data") {
    sendJson(res, 200, publicData(readAuthData() || { events: [] }));
    return true;
  }

  if (req.method === "POST" && cleanUrl === "/api/login") {
    try {
      const body = await collectBody(req, 1024 * 64);
      const payload = JSON.parse(body.toString("utf8"));
      const cpf = String(payload.cpf || "").replace(/\D/g, "");
      const data = readAuthData();
      if (!data) {
        sendJson(res, 503, { error: "Banco de dados ainda nao inicializado." });
        return true;
      }
      const user = data.users.find((item) => item.role === payload.role && item.cpf === cpf);
      if (!user || user.password !== payload.password) {
        sendJson(res, 401, { error: "Login ou senha invalidos." });
        return true;
      }
      const token = createSession(user);
      sendJson(res, 200, {
        token,
        session: { userId: user.id, role: user.role },
        data: user.role === "coach" ? dataForCoach(data) : dataForAthlete(data, user.id),
      });
    } catch (error) {
      sendJson(res, 400, { error: "Nao foi possivel fazer login." });
    }
    return true;
  }

  if (req.method === "GET" && cleanUrl === "/api/auth") {
    const session = getSession(req);
    if (!session) {
      sendJson(res, 401, { error: "Sessao expirada ou nao autorizada." });
      return true;
    }
    const data = readAuthData();
    sendJson(res, 200, session.role === "coach" ? dataForCoach(data) : dataForAthlete(data, session.userId));
    return true;
  }

  if (req.method === "POST" && cleanUrl === "/api/auth") {
    const session = getSession(req);
    if (!session || session.role !== "coach") {
      sendJson(res, 403, { error: "Acesso restrito ao treinador." });
      return true;
    }
    try {
      const body = await collectBody(req, 1024 * 1024 * 8);
      const payload = JSON.parse(body.toString("utf8"));
      if (!payload || !Array.isArray(payload.users)) {
        sendJson(res, 400, { error: "Dados invalidos." });
        return true;
      }
      const current = readAuthData() || { users: [] };
      const currentById = new Map((current.users || []).map((user) => [user.id, user]));
      payload.users = payload.users.map((user) => ({
        ...user,
        password: user.password || currentById.get(user.id)?.password || defaultPassword,
        mustChangePassword:
          currentById.get(user.id)?.mustChangePassword === false && !user.password && user.mustChangePassword === true
            ? false
            : user.mustChangePassword,
      }));
      saveAuthData(payload);
      sendJson(res, 200, { ok: true });
    } catch (error) {
      sendJson(res, 400, { error: "Nao foi possivel salvar os dados." });
    }
    return true;
  }

  if (req.method === "POST" && cleanUrl === "/api/change-password") {
    const session = getSession(req);
    if (!session) {
      sendJson(res, 401, { error: "Sessao expirada." });
      return true;
    }
    try {
      const body = await collectBody(req, 1024 * 64);
      const payload = JSON.parse(body.toString("utf8"));
      const data = readAuthData();
      const user = data.users.find((item) => item.id === session.userId);
      if (!user) {
        sendJson(res, 404, { error: "Usuario nao encontrado." });
        return true;
      }
      user.password = payload.password;
      user.mustChangePassword = false;
      saveAuthData(data);
      sendJson(res, 200, { data: session.role === "coach" ? dataForCoach(data) : dataForAthlete(data, user.id) });
    } catch (error) {
      sendJson(res, 400, { error: "Nao foi possivel trocar a senha." });
    }
    return true;
  }

  if (req.method === "POST" && cleanUrl === "/api/athlete-message") {
    const session = getSession(req);
    if (!session || session.role !== "athlete") {
      sendJson(res, 403, { error: "Acesso restrito ao atleta." });
      return true;
    }
    try {
      const body = await collectBody(req, 1024 * 64);
      const payload = JSON.parse(body.toString("utf8"));
      const data = readAuthData();
      const user = data.users.find((item) => item.id === session.userId);
      data.messages = data.messages || [];
      data.messages.push({
        category: "internal",
        from: user.name,
        fromId: user.id,
        recipientId: "coach-main",
        recipientName: "Treinador",
        text: String(payload.text || "").trim(),
        createdAt: new Date().toISOString(),
      });
      saveAuthData(data);
      sendJson(res, 200, { data: dataForAthlete(data, user.id) });
    } catch (error) {
      sendJson(res, 400, { error: "Nao foi possivel enviar a mensagem." });
    }
    return true;
  }

  if (req.method === "POST" && cleanUrl === "/api/interests") {
    try {
      const body = await collectBody(req, 1024 * 128);
      const payload = JSON.parse(body.toString("utf8"));
      const data = readAuthData();
      data.interests = data.interests || [];
      data.interests.push(payload);
      saveAuthData(data);
      sendJson(res, 201, { ok: true });
    } catch (error) {
      sendJson(res, 400, { error: "Nao foi possivel registrar o contato." });
    }
    return true;
  }

  if (req.method === "GET" && cleanUrl === "/api/media") {
    sendJson(res, 200, readMedia());
    return true;
  }

  if (req.method === "POST" && cleanUrl === "/api/media/photo") {
    try {
      const body = await collectBody(req);
      const { fields, files } = parseMultipart(body, req.headers["content-type"] || "");
      const file = files.photo;
      if (!file || !file.contentType.startsWith("image/")) {
        sendJson(res, 400, { error: "Selecione uma imagem valida." });
        return true;
      }

      const ext = path.extname(file.filename).toLowerCase() || ".jpg";
      const safeName = `${Date.now()}-${Math.random().toString(16).slice(2)}${ext}`;
      const filePath = path.join(uploadsDir, safeName);
      fs.writeFileSync(filePath, file.data);

      const media = readMedia();
      const item = {
        id: `media-${Date.now()}`,
        type: "photo",
        title: fields.title || "Foto do instituto",
        src: `/uploads/${safeName}`,
        createdAt: new Date().toISOString(),
      };
      media.push(item);
      saveMedia(media);
      sendJson(res, 201, item);
    } catch (error) {
      sendJson(res, 400, { error: error.message || "Nao foi possivel salvar a foto." });
    }
    return true;
  }

  if (req.method === "POST" && cleanUrl === "/api/media/youtube") {
    try {
      const body = await collectBody(req, 1024 * 128);
      const payload = JSON.parse(body.toString("utf8"));
      const videoId = getYoutubeVideoId(payload.url || "");
      if (!videoId) {
        sendJson(res, 400, { error: "Cole um link valido do YouTube." });
        return true;
      }

      const media = readMedia();
      const item = {
        id: `media-${Date.now()}`,
        type: "youtube",
        title: payload.title || "Video do instituto",
        description: payload.description || "",
        url: payload.url,
        thumbnail: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
        createdAt: new Date().toISOString(),
      };
      media.push(item);
      saveMedia(media);
      sendJson(res, 201, item);
    } catch (error) {
      sendJson(res, 400, { error: "Nao foi possivel salvar o video." });
    }
    return true;
  }

  if (req.method === "DELETE" && cleanUrl.startsWith("/api/media/")) {
    const id = decodeURIComponent(cleanUrl.replace("/api/media/", ""));
    const media = readMedia();
    const item = media.find((entry) => entry.id === id);
    const next = media.filter((entry) => entry.id !== id);
    if (item?.type === "photo" && item.src?.startsWith("/uploads/")) {
      const filePath = path.join(root, item.src);
      if (filePath.startsWith(uploadsDir) && fs.existsSync(filePath)) fs.unlinkSync(filePath);
    }
    saveMedia(next);
    sendJson(res, 200, { ok: true });
    return true;
  }

  return false;
}

http
  .createServer(async (req, res) => {
    const cleanUrl = req.url.split("?")[0];

    if (cleanUrl.startsWith("/api/") && (await handleApi(req, res, cleanUrl))) return;

    const requestPath = cleanUrl === "/" ? "index.html" : decodeURIComponent(cleanUrl.slice(1));
    const filePath = path.join(root, requestPath);

    if (!filePath.startsWith(root)) {
      res.writeHead(403);
      res.end("Forbidden");
      return;
    }

    fs.readFile(filePath, (error, data) => {
      if (error) {
        res.writeHead(404);
        res.end("Not found");
        return;
      }
      res.writeHead(200, {
        "Content-Type": types[path.extname(filePath).toLowerCase()] || "application/octet-stream",
        "Cache-Control": "no-store",
      });
      res.end(data);
    });
  })
  .listen(port, "0.0.0.0", () => {
    console.log(`HeloisaHand site running on port ${port}`);
  });
