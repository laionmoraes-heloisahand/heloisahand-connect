const http = require("http");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
let webpush = null;
try {
  webpush = require("web-push");
} catch (error) {
  webpush = null;
}

const root = __dirname;
const port = Number(process.env.PORT || 5400);
const dataDir = process.env.DATA_DIR || path.join(root, "data");
const uploadsDir = process.env.UPLOADS_DIR || path.join(root, "uploads");
const mediaFile = path.join(dataDir, "media.json");
const authFile = path.join(dataDir, "auth.json");
const supabaseUrl = (process.env.SUPABASE_URL || "").replace(/\/rest\/v1\/?$/, "").replace(/\/$/, "");
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || "";
const hasSupabase = Boolean(supabaseUrl && supabaseKey);
const seedDataDir = path.join(root, "data");
const seedMediaFile = path.join(seedDataDir, "media.json");
const seedAuthFile = path.join(seedDataDir, "auth.json");
const maxUploadBytes = 12 * 1024 * 1024;
const defaultPassword = "1234";
const sessions = new Map();
const mailFrom = process.env.MAIL_FROM || `Instituto HeloisaHand <${process.env.SMTP_USER || "institutoheloisahand@gmail.com"}>`;
const vapidPublicKey = (process.env.VAPID_PUBLIC_KEY || "").trim();
const vapidPrivateKey = (process.env.VAPID_PRIVATE_KEY || "").trim();
const vapidSubject = (process.env.VAPID_SUBJECT || `mailto:${process.env.SMTP_USER || "institutoheloisahand@gmail.com"}`).trim();
let pushEnabled = false;
if (webpush && vapidPublicKey && vapidPrivateKey) {
  try {
    webpush.setVapidDetails(vapidSubject, vapidPublicKey, vapidPrivateKey);
    pushEnabled = true;
  } catch (error) {
    console.warn(`[HeloisaHand] Notificacoes push desativadas: ${error.message}`);
  }
}

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
};

fs.mkdirSync(dataDir, { recursive: true });
fs.mkdirSync(uploadsDir, { recursive: true });
if (!process.env.DATA_DIR || !process.env.UPLOADS_DIR) {
  console.warn("[HeloisaHand] Configure DATA_DIR e UPLOADS_DIR em um disco persistente no Render para nao perder cadastros, presencas, ranking, campanhas e fotos em novos deploys.");
}
if (hasSupabase) {
  console.info("[HeloisaHand] Supabase ativo para dados persistentes.");
}
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

async function supabaseFetch(pathname, options = {}) {
  if (!hasSupabase) return null;
  const headers = {
    apikey: supabaseKey,
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };
  if (!supabaseKey.startsWith("sb_secret_") && !supabaseKey.startsWith("sb_publishable_")) {
    headers.Authorization = `Bearer ${supabaseKey}`;
  }
  const response = await fetch(`${supabaseUrl}/rest/v1/${pathname}`, {
    ...options,
    headers,
  });
  if (!response.ok) {
    const details = await response.text().catch(() => "");
    console.error(`[HeloisaHand] Erro Supabase em ${pathname}: ${response.status} ${details}`);
    throw new Error(`Supabase ${response.status}: ${details}`);
  }
  if (response.status === 204) return null;
  const text = await response.text();
  if (!text.trim()) return null;
  return JSON.parse(text);
}

async function readStateFromSupabase(key, fallback) {
  if (!hasSupabase) return fallback;
  const rows = await supabaseFetch(`app_state?key=eq.${encodeURIComponent(key)}&select=payload&limit=1`);
  if (Array.isArray(rows) && rows[0]) return rows[0].payload;
  await saveStateToSupabase(key, fallback);
  return fallback;
}

async function saveStateToSupabase(key, payload) {
  if (!hasSupabase) return;
  await supabaseFetch("app_state?on_conflict=key", {
    method: "POST",
    headers: { Prefer: "resolution=merge-duplicates" },
    body: JSON.stringify([{ key, payload, updated_at: new Date().toISOString() }]),
  });
}

async function checkSupabaseStatus() {
  if (!hasSupabase) {
    return { configured: false, ok: false, message: "Supabase nao configurado no Render." };
  }
  try {
    const rows = await supabaseFetch("app_state?select=key,updated_at&limit=1");
    return {
      configured: true,
      ok: true,
      url: supabaseUrl,
      keyType: supabaseKey.startsWith("sb_secret_") ? "secret" : supabaseKey.startsWith("sb_publishable_") ? "publishable" : "legacy",
      rows: Array.isArray(rows) ? rows.length : 0,
    };
  } catch (error) {
    return {
      configured: true,
      ok: false,
      url: supabaseUrl,
      keyType: supabaseKey.startsWith("sb_secret_") ? "secret" : supabaseKey.startsWith("sb_publishable_") ? "publishable" : "legacy",
      message: error.message,
    };
  }
}

async function readMedia() {
  const fallback = readJsonFile(mediaFile, []);
  if (hasSupabase) return readStateFromSupabase("media", fallback);
  return readJsonFile(mediaFile, []);
}

async function saveMedia(items) {
  if (hasSupabase) await saveStateToSupabase("media", items);
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

async function readAuthData() {
  const data = readJsonFile(authFile, null);
  const remoteData = hasSupabase ? await readStateFromSupabase("auth", data) : data;
  if (!remoteData) return remoteData;
  const normalized = normalizeAuthData(remoteData);
  if (normalized.changed) await saveAuthData(normalized.data);
  return normalized.data;
}

async function saveAuthData(payload) {
  if (hasSupabase) await saveStateToSupabase("auth", payload);
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

function hashResetCode(code) {
  return crypto.createHash("sha256").update(String(code)).digest("hex");
}

function hasSmtpConfig() {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
}

async function sendPasswordResetEmail(user, email, code) {
  if (!hasSmtpConfig()) return false;
  const nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 465),
    secure: String(process.env.SMTP_SECURE || "true") !== "false",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  await transporter.sendMail({
    from: mailFrom,
    to: email,
    subject: "Recuperacao de senha - HeloisaHand Connect",
    text: [
      `Ola, ${user.profile?.nickname || user.name}.`,
      "",
      `Seu codigo de recuperacao de senha e: ${code}`,
      "Esse codigo vale por 30 minutos.",
      "",
      "Se voce nao solicitou essa recuperacao, ignore esta mensagem.",
      "Instituto HeloisaHand",
    ].join("\n"),
  });
  return true;
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
  const rankings = (data.rankings || []).length ? data.rankings : [createAutoRanking(data)].filter(Boolean);
  return {
    users: user ? [sanitizeUser(user, true)] : [],
    notices: data.notices || [],
    messages: (data.messages || []).filter((msg) => msg.recipientId === "team" || msg.recipientId === userId || msg.fromId === userId),
    media: [],
    events: data.events || [],
    attendance: (data.attendance || []).filter((item) => item.athleteId === userId),
    rankings,
    products: data.products || [],
    quizQuestions: publicQuizQuestions(data),
    quizScores: mergeQuizScores(data.quizScores || []),
    interests: [],
  };
}

function getAthleteScoutAverage(athlete) {
  const scores = athlete?.scout?.scores || {};
  const values = Object.values(scores).map(Number).filter((value) => Number.isFinite(value));
  if (!values.length) return 0;
  return Math.round((values.reduce((sum, value) => sum + value, 0) / values.length) * 10) / 10;
}

function createAutoRanking(data) {
  const athletes = (data?.users || [])
    .filter((user) => user.role === "athlete")
    .map((athlete) => ({ athlete, average: getAthleteScoutAverage(athlete) }))
    .sort((a, b) => b.average - a.average || a.athlete.name.localeCompare(b.athlete.name))
    .slice(0, 5);
  if (!athletes.length) return null;
  return {
    id: `ranking-auto-${new Date().toISOString().slice(0, 7)}`,
    monthKey: new Date().toISOString().slice(0, 7),
    title: "Top 5 atletas do mes",
    description: "Ranking inicial gerado automaticamente pelo scout. O treinador pode ajustar os nomes e motivos na area de ranking.",
    autoGenerated: true,
    items: athletes.map(({ athlete, average }) => ({
      athleteId: athlete.id,
      name: athlete.name,
      reason: average
        ? `Destaque pelo desempenho geral no scout, com media ${average}.`
        : "Destaque inicial do elenco. O treinador pode editar este motivo.",
    })),
  };
}

function publicQuizQuestions(data) {
  return (data?.quizQuestions || [])
    .filter((item) => item.active !== false)
    .map((item) => ({
      id: item.id,
      scope: item.scope,
      level: item.level,
      question: item.question,
      options: item.options || [],
      answerIndex: Number(item.answerIndex || 0),
      explanation: item.explanation || "",
      active: item.active !== false,
    }));
}

function slugifyValue(value) {
  return String(value || "visitante")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 48) || "visitante";
}

function mergeQuizScores(scores = []) {
  const map = new Map();
  scores.forEach((item) => {
    const playerName = String(item.playerName || "Visitante").slice(0, 40);
    const playerKey = item.playerKey || `visitor:${slugifyValue(playerName)}`;
    const scope = item.scope || "handball";
    const key = `${scope}:${playerKey}`;
    const current = map.get(key);
    const score = Number(item.score || 0);
    const total = Number(item.total || item.questionsAnswered || 0);
    if (current) {
      current.score += score;
      current.total += total;
      current.attempts += Number(item.attempts || 1);
      current.seenQuestionIds = [...new Set([...(current.seenQuestionIds || []), ...(item.seenQuestionIds || [])])];
      current.lastPlayedAt = item.lastPlayedAt || item.createdAt || current.lastPlayedAt;
    } else {
      map.set(key, {
        ...item,
        scope,
        playerName,
        playerKey,
        score,
        total,
        attempts: Number(item.attempts || 1),
        seenQuestionIds: item.seenQuestionIds || [],
        lastPlayedAt: item.lastPlayedAt || item.createdAt || "",
      });
    }
  });
  return [...map.values()];
}

function upsertQuizScore(scores = [], entry) {
  const merged = mergeQuizScores(scores);
  const key = `${entry.scope}:${entry.playerKey}`;
  const current = merged.find((item) => `${item.scope}:${item.playerKey}` === key);
  if (current) {
    current.score = Number(current.score || 0) + Number(entry.score || 0);
    current.total = Number(current.total || 0) + Number(entry.total || 0);
    current.attempts = Number(current.attempts || 0) + 1;
    current.lastScore = Number(entry.score || 0);
    current.seenQuestionIds = [...new Set([...(current.seenQuestionIds || []), ...(entry.seenQuestionIds || [])])];
    current.lastPlayedAt = entry.createdAt;
  } else {
    merged.unshift({ ...entry, attempts: 1, lastScore: Number(entry.score || 0), lastPlayedAt: entry.createdAt });
  }
  return merged.slice(0, 160);
}

function publicData(data) {
  const rankings = (data?.rankings || []).length ? data.rankings : [createAutoRanking(data)].filter(Boolean);
  const rankingAthleteIds = new Set(rankings.flatMap((ranking) => (ranking.items || []).map((item) => item.athleteId)));
  return {
    users: (data?.users || [])
      .filter((user) => rankingAthleteIds.has(user.id))
      .map((user) => ({
        id: user.id,
        role: user.role,
        name: user.name,
        position: user.position,
        profile: { nickname: user.profile?.nickname || "", avatar: user.profile?.avatar || "" },
      })),
    notices: [],
    messages: [],
    media: [],
    events: data?.events || [],
    rankings,
    interests: [],
    sponsors: data?.sponsors || [],
    campaigns: data?.campaigns || [],
    products: data?.products || [],
    quizQuestions: publicQuizQuestions(data),
    quizScores: mergeQuizScores(data?.quizScores || []),
  };
}

function sendJson(res, status, payload) {
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" });
  res.end(JSON.stringify(payload));
}

function sanitizePushSubscription(subscription) {
  if (!subscription || typeof subscription !== "object") return null;
  const endpoint = String(subscription.endpoint || "");
  const p256dh = String(subscription.keys?.p256dh || "");
  const auth = String(subscription.keys?.auth || "");
  if (!endpoint || !p256dh || !auth) return null;
  return {
    endpoint,
    expirationTime: subscription.expirationTime || null,
    keys: { p256dh, auth },
    updatedAt: new Date().toISOString(),
  };
}

function mergeProfilePreservingCurrent(incoming = {}, current = {}) {
  const merged = { ...(current || {}), ...(incoming || {}) };
  ["nickname", "phone", "email", "address", "avatar"].forEach((key) => {
    if ((incoming?.[key] === undefined || incoming?.[key] === "") && current?.[key]) {
      merged[key] = current[key];
    }
  });
  return merged;
}

async function sendPush(subscription, payload) {
  if (!pushEnabled || !subscription) return false;
  try {
    await webpush.sendNotification(subscription, JSON.stringify(payload));
    return true;
  } catch (error) {
    return false;
  }
}

async function notifyAthletes(data, athleteIds, payload) {
  if (!pushEnabled) return { attempted: 0, sent: 0 };
  const ids = new Set(athleteIds);
  const subscriptions = (data.users || [])
    .filter((user) => user.role === "athlete" && ids.has(user.id) && user.pushSubscription);
  const results = await Promise.all(subscriptions.map((user) => sendPush(user.pushSubscription, payload)));
  return { attempted: subscriptions.length, sent: results.filter(Boolean).length };
}

async function notifyAllAthletes(data, payload) {
  if (!pushEnabled) return { attempted: 0, sent: 0 };
  const subscriptions = (data.users || []).filter((user) => user.role === "athlete" && user.pushSubscription);
  const results = await Promise.all(subscriptions.map((user) => sendPush(user.pushSubscription, payload)));
  return { attempted: subscriptions.length, sent: results.filter(Boolean).length };
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
  if (req.method === "GET" && cleanUrl === "/api/health") {
    sendJson(res, 200, {
      ok: true,
      version: "v58",
      supabase: await checkSupabaseStatus(),
    });
    return true;
  }

  if (req.method === "GET" && cleanUrl === "/api/public-data") {
    sendJson(res, 200, publicData((await readAuthData()) || { events: [] }));
    return true;
  }

  if (req.method === "GET" && cleanUrl === "/api/push-public-key") {
    sendJson(res, 200, { enabled: pushEnabled, publicKey: vapidPublicKey });
    return true;
  }

  if (req.method === "POST" && cleanUrl === "/api/push-subscribe") {
    const session = getSession(req);
    if (!session || session.role !== "athlete") {
      sendJson(res, 403, { error: "Acesso restrito ao atleta." });
      return true;
    }
    if (!pushEnabled) {
      sendJson(res, 503, { error: "Notificacoes push ainda nao foram configuradas no servidor." });
      return true;
    }
    try {
      const body = await collectBody(req, 1024 * 128);
      const payload = JSON.parse(body.toString("utf8"));
      const subscription = sanitizePushSubscription(payload.subscription);
      if (!subscription) {
        sendJson(res, 400, { error: "Assinatura de notificacao invalida." });
        return true;
      }
      const data = await readAuthData();
      const user = data.users.find((item) => item.id === session.userId);
      user.pushSubscription = subscription;
      await saveAuthData(data);
      await sendPush(subscription, {
        title: "Notificacoes ativadas",
        body: "Agora o Instituto HeloisaHand pode te avisar sobre treinos, jogos e novidades.",
        url: "/#/notificacoes",
      });
      sendJson(res, 200, { ok: true, data: dataForAthlete(data, user.id) });
    } catch (error) {
      sendJson(res, 400, { error: "Nao foi possivel ativar as notificacoes." });
    }
    return true;
  }

  if (req.method === "POST" && cleanUrl === "/api/push-broadcast") {
    const session = getSession(req);
    if (!session || session.role !== "coach") {
      sendJson(res, 403, { error: "Acesso restrito ao treinador." });
      return true;
    }
    if (!pushEnabled) {
      sendJson(res, 503, { error: "Notificacoes push ainda nao foram configuradas no servidor." });
      return true;
    }
    try {
      const body = await collectBody(req, 1024 * 32);
      const payload = JSON.parse(body.toString("utf8"));
      const data = await readAuthData();
      const result = await notifyAllAthletes(data, {
        title: String(payload.title || "Instituto HeloisaHand").slice(0, 80),
        body: String(payload.body || "Voce tem uma novidade no aplicativo.").slice(0, 180),
        url: String(payload.url || "/#/notificacoes").slice(0, 120),
      });
      sendJson(res, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(res, 400, { error: "Nao foi possivel enviar a notificacao." });
    }
    return true;
  }

  if (req.method === "POST" && cleanUrl === "/api/push-athlete") {
    const session = getSession(req);
    if (!session || session.role !== "coach") {
      sendJson(res, 403, { error: "Acesso restrito ao treinador." });
      return true;
    }
    if (!pushEnabled) {
      sendJson(res, 503, { error: "Notificacoes push ainda nao foram configuradas no servidor." });
      return true;
    }
    try {
      const body = await collectBody(req, 1024 * 32);
      const payload = JSON.parse(body.toString("utf8"));
      const data = await readAuthData();
      const result = await notifyAthletes(data, [String(payload.athleteId || "")], {
        title: String(payload.title || "Instituto HeloisaHand").slice(0, 80),
        body: String(payload.body || "Voce tem uma novidade no aplicativo.").slice(0, 180),
        url: String(payload.url || "/#/notificacoes").slice(0, 120),
      });
      sendJson(res, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(res, 400, { error: "Nao foi possivel enviar a notificacao." });
    }
    return true;
  }

  if (req.method === "POST" && cleanUrl === "/api/push-test") {
    const session = getSession(req);
    if (!session || session.role !== "coach") {
      sendJson(res, 403, { error: "Acesso restrito ao treinador." });
      return true;
    }
    if (!pushEnabled) {
      sendJson(res, 503, { error: "Notificacoes push ainda nao foram configuradas no servidor." });
      return true;
    }
    const data = await readAuthData();
    const result = await notifyAllAthletes(data, {
      title: "Teste HeloisaHand",
      body: "Se voce recebeu isso, suas notificacoes estao funcionando.",
      url: "/#/notificacoes",
    });
    sendJson(res, 200, { ok: true, ...result });
    return true;
  }

  if (req.method === "POST" && cleanUrl === "/api/quiz-score") {
    try {
      const body = await collectBody(req, 1024 * 64);
      const payload = JSON.parse(body.toString("utf8"));
      const data = (await readAuthData()) || { users: [] };
      data.quizScores = data.quizScores || [];
      const entry = {
        id: `quiz-score-${Date.now()}`,
        scope: String(payload.scope || "handball").slice(0, 20),
        level: String(payload.level || "facil").slice(0, 20),
        playerName: String(payload.playerName || "Visitante").replace(/[<>]/g, "").slice(0, 40),
        playerKey: String(payload.playerKey || `visitor:${slugifyValue(payload.playerName || "Visitante")}`).replace(/[<>]/g, "").slice(0, 80),
        score: Math.max(0, Math.min(100, Number(payload.score || 0))),
        total: Math.max(1, Math.min(100, Number(payload.total || 1))),
        percent: Math.max(0, Math.min(100, Number(payload.percent || 0))),
        seenQuestionIds: Array.isArray(payload.seenQuestionIds) ? payload.seenQuestionIds.map((id) => String(id).slice(0, 80)).slice(0, 20) : [],
        createdAt: new Date().toISOString(),
      };
      data.quizScores = upsertQuizScore(data.quizScores, entry);
      await saveAuthData(data);
      sendJson(res, 200, { ok: true, data: publicData(data) });
    } catch (error) {
      sendJson(res, 400, { error: "Nao foi possivel salvar a pontuacao." });
    }
    return true;
  }

  if (req.method === "POST" && cleanUrl === "/api/login") {
    try {
      const body = await collectBody(req, 1024 * 64);
      const payload = JSON.parse(body.toString("utf8"));
      const cpf = String(payload.cpf || "").replace(/\D/g, "");
      const data = await readAuthData();
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
    const data = await readAuthData();
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
      const current = (await readAuthData()) || { users: [] };
      const currentById = new Map((current.users || []).map((user) => [user.id, user]));
      payload.users = payload.users.map((user) => {
        const currentUser = currentById.get(user.id);
        const incomingHasPassword = Object.prototype.hasOwnProperty.call(user, "password");
        const password = user.password || currentUser?.password || defaultPassword;
        const explicitReset = incomingHasPassword && user.password === defaultPassword && user.mustChangePassword === true;
        const mustChangePassword = explicitReset
          ? true
          : password !== defaultPassword
            ? false
            : currentUser?.mustChangePassword === false && !incomingHasPassword
              ? false
              : user.mustChangePassword;
        return {
          ...user,
          password,
          mustChangePassword,
          profile: mergeProfilePreservingCurrent(user.profile, currentUser?.profile),
          pushSubscription: user.pushSubscription || currentUser?.pushSubscription,
        };
      });
      await saveAuthData(payload);
      sendJson(res, 200, { ok: true });
    } catch (error) {
      console.error("[HeloisaHand] Falha ao salvar /api/auth:", error);
      sendJson(res, 400, { error: "Nao foi possivel salvar os dados.", details: error.message });
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
      const data = await readAuthData();
      const user = data.users.find((item) => item.id === session.userId);
      if (!user) {
        sendJson(res, 404, { error: "Usuario nao encontrado." });
        return true;
      }
      user.password = payload.password;
      user.mustChangePassword = false;
      await saveAuthData(data);
      sendJson(res, 200, { data: session.role === "coach" ? dataForCoach(data) : dataForAthlete(data, user.id) });
    } catch (error) {
      console.error("[HeloisaHand] Falha ao trocar senha:", error);
      sendJson(res, 400, { error: "Nao foi possivel trocar a senha.", details: error.message });
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
      const data = await readAuthData();
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
      await saveAuthData(data);
      sendJson(res, 200, { data: dataForAthlete(data, user.id) });
    } catch (error) {
      sendJson(res, 400, { error: "Nao foi possivel enviar a mensagem." });
    }
    return true;
  }

  if (req.method === "POST" && cleanUrl === "/api/athlete-profile") {
    const session = getSession(req);
    if (!session || session.role !== "athlete") {
      sendJson(res, 403, { error: "Acesso restrito ao atleta." });
      return true;
    }
    try {
      const body = await collectBody(req, 1024 * 128);
      const payload = JSON.parse(body.toString("utf8"));
      const data = await readAuthData();
      const user = data.users.find((item) => item.id === session.userId);
      user.profile = {
        ...(user.profile || {}),
        nickname: String(payload.nickname || "").trim(),
        phone: String(payload.phone || "").trim(),
        email: String(payload.email || "").trim(),
        address: String(payload.address || "").trim(),
      };
      await saveAuthData(data);
      sendJson(res, 200, { data: dataForAthlete(data, user.id) });
    } catch (error) {
      sendJson(res, 400, { error: "Nao foi possivel salvar o perfil." });
    }
    return true;
  }

  if (req.method === "POST" && cleanUrl === "/api/athlete-avatar") {
    const session = getSession(req);
    if (!session || session.role !== "athlete") {
      sendJson(res, 403, { error: "Acesso restrito ao atleta." });
      return true;
    }
    try {
      const body = await collectBody(req, maxUploadBytes);
      const { files } = parseMultipart(body, req.headers["content-type"] || "");
      const file = files.avatar;
      if (!file || !file.contentType.startsWith("image/")) {
        sendJson(res, 400, { error: "Selecione uma imagem valida." });
        return true;
      }
      if (file.data.length > 1024 * 1024) {
        sendJson(res, 400, { error: "A foto ficou muito grande. Escolha uma imagem menor." });
        return true;
      }
      const data = await readAuthData();
      const user = data.users.find((item) => item.id === session.userId);
      user.profile = { ...(user.profile || {}), avatar: `data:${file.contentType};base64,${file.data.toString("base64")}` };
      await saveAuthData(data);
      sendJson(res, 200, { data: dataForAthlete(data, user.id) });
    } catch (error) {
      sendJson(res, 400, { error: "Nao foi possivel salvar a foto." });
    }
    return true;
  }

  if (req.method === "POST" && cleanUrl === "/api/password-reset-request") {
    try {
      const body = await collectBody(req, 1024 * 64);
      const payload = JSON.parse(body.toString("utf8"));
      const role = String(payload.role || "athlete");
      const cpf = String(payload.cpf || "").replace(/\D/g, "");
      const email = String(payload.email || "").trim().toLowerCase();
      const data = await readAuthData();
      const user = data.users.find((item) => item.role === role && item.cpf === cpf && String(item.profile?.email || "").toLowerCase() === email);
      data.passwordResets = data.passwordResets || [];
      if (user) {
        const code = String(crypto.randomInt(100000, 999999));
        let status = "pending-email-config";
        try {
          status = (await sendPasswordResetEmail(user, email, code)) ? "sent" : "pending-email-config";
        } catch (error) {
          status = "email-error";
        }
        data.passwordResets.push({
          id: `reset-${Date.now()}`,
          userId: user.id,
          email,
          codeHash: hashResetCode(code),
          status,
          createdAt: new Date().toISOString(),
          expiresAt: new Date(Date.now() + 30 * 60 * 1000).toISOString(),
        });
        await saveAuthData(data);
      }
      sendJson(res, 200, { ok: true, message: "Se o e-mail estiver cadastrado, a recuperacao sera processada." });
    } catch (error) {
      sendJson(res, 400, { error: "Nao foi possivel solicitar recuperacao." });
    }
    return true;
  }

  if (req.method === "POST" && cleanUrl === "/api/password-reset-complete") {
    try {
      const body = await collectBody(req, 1024 * 64);
      const payload = JSON.parse(body.toString("utf8"));
      const role = String(payload.role || "athlete");
      const cpf = String(payload.cpf || "").replace(/\D/g, "");
      const email = String(payload.email || "").trim().toLowerCase();
      const code = String(payload.code || "").trim();
      const password = String(payload.password || "");
      if (cpf.length !== 11 || !email || code.length < 4 || password.length < 4 || password === defaultPassword) {
        sendJson(res, 400, { error: "Dados de recuperacao invalidos." });
        return true;
      }
      const data = await readAuthData();
      const user = data.users.find((item) => item.role === role && item.cpf === cpf && String(item.profile?.email || "").toLowerCase() === email);
      const reset = (data.passwordResets || []).slice().reverse().find((item) =>
        item.userId === user?.id &&
        item.email === email &&
        item.status !== "used" &&
        item.codeHash === hashResetCode(code) &&
        new Date(item.expiresAt).getTime() > Date.now()
      );
      if (!user || !reset) {
        sendJson(res, 400, { error: "Codigo invalido ou expirado." });
        return true;
      }
      user.password = password;
      user.mustChangePassword = false;
      reset.status = "used";
      reset.usedAt = new Date().toISOString();
      await saveAuthData(data);
      sendJson(res, 200, { ok: true });
    } catch (error) {
      sendJson(res, 400, { error: "Nao foi possivel redefinir a senha." });
    }
    return true;
  }

  if (req.method === "POST" && cleanUrl === "/api/interests") {
    try {
      const body = await collectBody(req, 1024 * 128);
      const payload = JSON.parse(body.toString("utf8"));
      const data = await readAuthData();
      data.interests = data.interests || [];
      data.interests.push(payload);
      await saveAuthData(data);
      sendJson(res, 201, { ok: true });
    } catch (error) {
      sendJson(res, 400, { error: "Nao foi possivel registrar o contato." });
    }
    return true;
  }

  if (req.method === "GET" && cleanUrl === "/api/media") {
    sendJson(res, 200, await readMedia());
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

      const media = await readMedia();
      const item = {
        id: `media-${Date.now()}`,
        type: "photo",
        title: fields.title || "Foto do instituto",
        src: `/uploads/${safeName}`,
        createdAt: new Date().toISOString(),
      };
      media.push(item);
      await saveMedia(media);
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

      const media = await readMedia();
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
      await saveMedia(media);
      sendJson(res, 201, item);
    } catch (error) {
      sendJson(res, 400, { error: "Nao foi possivel salvar o video." });
    }
    return true;
  }

  if (req.method === "DELETE" && cleanUrl.startsWith("/api/media/")) {
    const id = decodeURIComponent(cleanUrl.replace("/api/media/", ""));
    const media = await readMedia();
    const item = media.find((entry) => entry.id === id);
    const next = media.filter((entry) => entry.id !== id);
    if (item?.type === "photo" && item.src?.startsWith("/uploads/")) {
      const filePath = path.join(root, item.src);
      if (filePath.startsWith(uploadsDir) && fs.existsSync(filePath)) fs.unlinkSync(filePath);
    }
    await saveMedia(next);
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
    const filePath = requestPath.startsWith("uploads/")
      ? path.join(uploadsDir, requestPath.replace(/^uploads[\\/]/, ""))
      : path.join(root, requestPath);

    const allowedRoot = requestPath.startsWith("uploads/") ? uploadsDir : root;
    if (!filePath.startsWith(allowedRoot)) {
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
