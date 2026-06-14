const phone = "5527999377026";
const authStoreKey = "heloisahand_auth_v2";
const sessionStoreKey = "heloisahand_session_v2";
const rememberedLoginKey = "heloisahand_remembered_login_v1";
const pendingRememberKey = "heloisahand_pending_remember_v1";
const defaultPassword = "1234";
const coachCpf = "";
const pixKey = "lalves.unimed@gmail.com";
const pixPayload = "00020126450014br.gov.bcb.pix0123lalves.unimed@gmail.com5204000053039865802BR5914LAIONEL MORAES6007VITORIA62130509HHCONNECT6304EAA6";

const categories = [
  {
    name: "Mirim",
    age: "11 a 12 anos",
    tag: "Base",
    icon: "🌱",
    tone: "green",
    description:
      "A base de tudo. Aqui os jovens tem o primeiro contato com o handebol de forma ludica e divertida, desenvolvendo coordenacao motora, concentracao e espirito de equipe.",
    skills: ["Coordenacao motora", "Fundamentos basicos", "Integracao social", "Disciplina inicial"],
  },
  {
    name: "Infantil",
    age: "13 a 14 anos",
    tag: "Evolucao",
    icon: "⚡",
    tone: "yellow",
    description:
      "O momento de evolucao. Os atletas aprofundam as tecnicas, iniciam participacao em competicoes e fortalecem responsabilidade, pontualidade e compromisso com o coletivo.",
    skills: ["Tecnica avancada", "Primeiras competicoes", "Trabalho em equipe", "Responsabilidade"],
  },
  {
    name: "Cadete",
    age: "15 a 17 anos",
    tag: "Performance",
    icon: "🏆",
    tone: "deep",
    description:
      "A elite da formacao. Atletas com maturidade esportiva, prontos para competicoes de alto nivel, lideranca dentro de quadra e preparacao para uma trajetoria no esporte.",
    skills: ["Alta performance", "Lideranca", "Competicoes estaduais", "Formacao profissional"],
  },
];

const defaultTeamEvents = [
  {
    id: "event-jemvi-2026-2606-0800-hajm-evs",
    title: "JEMVI 2026",
    type: "competition",
    date: "2026-06-26",
    time: "08:00",
    location: "Ginasio do Tancredao",
    opponent: "HAJM x EVS",
    notes: "Jogo J1. Nossa equipe entra em quadra como HAJM.",
  },
  {
    id: "event-jemvi-2026-2606-0830-vsp-hajm",
    title: "JEMVI 2026",
    type: "competition",
    date: "2026-06-26",
    time: "08:30",
    location: "Ginasio do Tancredao",
    opponent: "VSP x HAJM",
    notes: "Jogo J1. Nossa equipe entra em quadra como HAJM.",
  },
  {
    id: "event-jemvi-2026-2606-0930-hajm-as",
    title: "JEMVI 2026",
    type: "competition",
    date: "2026-06-26",
    time: "09:30",
    location: "Ginasio do Tancredao",
    opponent: "HAJM x AS",
    notes: "Jogo J2. Nossa equipe entra em quadra como HAJM.",
  },
  {
    id: "event-jemvi-2026-2606-0900-as-vsp",
    title: "JEMVI 2026",
    type: "competition",
    date: "2026-06-26",
    time: "09:00",
    location: "Ginasio do Tancredao",
    opponent: "AS x VSP",
    notes: "Jogo J2 da rodada do JEMVI.",
  },
  {
    id: "event-jemvi-2026-2606-1000-hajm-vsp",
    title: "JEMVI 2026",
    type: "competition",
    date: "2026-06-26",
    time: "10:00",
    location: "Ginasio do Tancredao",
    opponent: "HAJM x VSP",
    notes: "Jogo J3. Nossa equipe entra em quadra como HAJM.",
  },
  {
    id: "event-jemvi-2026-2606-1030-as-vsp",
    title: "JEMVI 2026",
    type: "competition",
    date: "2026-06-26",
    time: "10:30",
    location: "Ginasio do Tancredao",
    opponent: "AS x VSP",
    notes: "Jogo da rodada do JEMVI.",
  },
  {
    id: "event-jemvi-2026-3006-0900-hajm-as",
    title: "JEMVI 2026",
    type: "competition",
    date: "2026-06-30",
    time: "09:00",
    location: "Ginasio do Tancredao",
    opponent: "HAJM x AS",
    notes: "Jogo J5. Nossa equipe entra em quadra como HAJM.",
  },
  {
    id: "event-jemvi-2026-3006-0800-as-evs",
    title: "JEMVI 2026",
    type: "competition",
    date: "2026-06-30",
    time: "08:00",
    location: "Ginasio do Tancredao",
    opponent: "AS x EVS",
    notes: "Jogo J4 da rodada do JEMVI.",
  },
  {
    id: "event-jemvi-2026-3006-1000-vsp-evs",
    title: "JEMVI 2026",
    type: "competition",
    date: "2026-06-30",
    time: "10:00",
    location: "Ginasio do Tancredao",
    opponent: "VSP x EVS",
    notes: "Jogo J6 da rodada do JEMVI.",
  },
  {
    id: "event-training-2026-1",
    title: "Treino Tecnico/Tatico",
    type: "training",
    date: "2026-06-20",
    time: "08:10",
    location: "Quadra do Instituto",
    opponent: "",
    notes: "Treino preparatorio.",
  },
];

const stories = [
  ["Educacao", "Da reprovacao para as melhores notas", "Com a rotina de treinos, um atleta com dificuldades na escola passou a fazer as licoes em dia, melhorou a concentracao e se tornou destaque da turma."],
  ["Convivencia", "De solitario a lider da equipe", "Um jovem timido encontrou no handebol um espaco seguro para se expressar e hoje toma iniciativa na escola e dentro da equipe."],
  ["Familia", "O esporte que uniu uma familia", "O instituto se tornou uma segunda casa, ajudando a transformar rotina, habitos e vinculos familiares."],
  ["Autoconfianca", "Vencer o medo de errar", "Com apoio do grupo e da comissao tecnica, uma atleta aprendeu que errar faz parte do processo e voltou a competir com confianca."],
  ["Foco e Metas", 'Do "nao consigo" ao podio', "Depois de meses de persistencia, um atleta que duvidava de si mesmo foi destaque em sua primeira competicao."],
  ["Transformacao", "O instituto como projeto de vida", "Um jovem sem planos claros passou a enxergar no esporte uma possibilidade real de futuro."],
];

const handballPositions = [
  "Goleiro",
  "Ponta esquerda",
  "Ponta direita",
  "Armador esquerdo",
  "Armador central",
  "Armador direito",
  "Pivo",
];

const privateLessonPackages = [
  { id: "1h", label: "1 hora", price: "R$ 60" },
  { id: "1h30", label: "1h30", price: "R$ 85" },
  { id: "2h", label: "2 horas", price: "R$ 110" },
];

const trainingLevels = ["Iniciante", "Intermediário", "Avançado", "Atleta em competição"];
const trainingObjectives = ["Aprender fundamentos", "Melhorar arremesso", "Melhorar passe e recepção", "Defesa e posicionamento", "Preparação física", "Treino para goleiro"];

const seedUpdatedAt = "2026-06-12T00:00:00.000Z";

function lineScout(scores, notes, improvements) {
  return {
    type: "line",
    scores: {
      shooting: scores.shooting,
      pass: scores.pass,
      dribble: scores.dribble,
      ballControl: scores.ballControl ?? scores.pass,
      defense: scores.defense,
      tacticalIntelligence: scores.reading,
      positioning: scores.positioning,
      decisionMaking: scores.reading,
      transition: scores.positioning,
      emotionalControl: scores.discipline,
      discipline: scores.discipline,
      commitment: scores.commitment,
      communication: scores.communication ?? scores.commitment,
    },
    notes,
    improvements,
    updatedAt: seedUpdatedAt,
  };
}

function goalkeeperScout(scores, notes, improvements) {
  return {
    type: "goalkeeper",
    scores: {
      goalPositioning: scores.positioning,
      highDefense: scores.defense,
      lowDefense: scores.defense,
      reflex: scores.defense,
      sevenMeterDefense: scores.defense,
      goalExit: scores.dribble,
      counterAttackPass: scores.pass,
      shotReading: scores.reading,
      defenseCoverage: scores.positioning,
      emotionalControl: scores.discipline,
      communication: scores.communication ?? scores.commitment,
      decisionCourage: scores.reading,
      discipline: scores.discipline,
      commitment: scores.commitment,
    },
    notes,
    improvements,
    updatedAt: seedUpdatedAt,
  };
}

const athleteSeeds = [];

const scoutTemplates = {
  line: [
    { title: "AVALIACAO TECNICA", items: [["shooting", "Arremesso"], ["pass", "Passe"], ["dribble", "Finta / Drible"], ["ballControl", "Recepcao / Controle de bola"], ["defense", "Defesa"]] },
    { title: "AVALIACAO TATICA", items: [["tacticalIntelligence", "Inteligencia tatica"], ["positioning", "Posicionamento"], ["decisionMaking", "Tomada de decisao"], ["transition", "Transicao defesa-ataque"]] },
    { title: "COMPORTAMENTO", items: [["emotionalControl", "Controle emocional"], ["discipline", "Disciplina"], ["commitment", "Comprometimento"], ["communication", "Comunicacao em quadra"]] },
  ],
  goalkeeper: [
    { title: "AVALIACAO TECNICA DO GOLEIRO", items: [["goalPositioning", "Posicionamento na baliza"], ["highDefense", "Defesa alta"], ["lowDefense", "Defesa baixa"], ["reflex", "Reflexo"], ["sevenMeterDefense", "Defesa de 7 metros"]] },
    { title: "AVALIACAO TATICA DO GOLEIRO", items: [["goalExit", "Saida do goleiro"], ["counterAttackPass", "Reposicao para contra-ataque"], ["shotReading", "Leitura do arremesso"], ["defenseCoverage", "Cobertura da defesa"]] },
    { title: "COMPORTAMENTO", items: [["emotionalControl", "Controle emocional"], ["communication", "Comunicacao com a defesa"], ["decisionCourage", "Coragem / tomada de decisao"], ["discipline", "Disciplina"], ["commitment", "Comprometimento"]] },
  ],
};

const app = document.querySelector("#app");
const nav = document.querySelector("#mainNav");
let authDataCache = null;
let handballHubTimer = null;

const routes = {
  "/": renderHome,
  "/projeto": renderProject,
  "/treinar": renderTraining,
  "/apoiar": renderSupport,
  "/atleta": renderAthlete,
  "/treinador": renderCoach,
  "/categorias": renderCategories,
  "/competicoes": renderCompetitions,
  "/inclusao": renderInclusion,
  "/atletas-em-acao": renderAthletesAction,
};

document.querySelector("#menuButton").addEventListener("click", () => nav.classList.toggle("open"));
window.addEventListener("hashchange", renderRoute);
initApp();

async function initApp() {
  const session = getSession();
  authDataCache = session?.token ? await fetchBackendAuthData("/api/auth") : null;
  if (!authDataCache && session?.token) {
    clearSession();
  }
  if (!authDataCache) {
    authDataCache = await fetchBackendAuthData("/api/public-data");
  }
  if (!authDataCache) {
    authDataCache = createInitialAuthData();
  } else {
    getAuthData();
  }
  renderRoute();
}

function getAuthHeaders() {
  const session = getSession();
  return session?.token ? { Authorization: `Bearer ${session.token}` } : {};
}

async function fetchBackendAuthData(url = "/api/auth") {
  try {
    const response = await fetch(url, { cache: "no-store", headers: getAuthHeaders() });
    if (!response.ok) return null;
    return await response.json();
  } catch (error) {
    return null;
  }
}

function persistBackendAuthData(data) {
  fetch("/api/auth", {
    method: "POST",
    headers: { "Content-Type": "application/json", ...getAuthHeaders() },
    body: JSON.stringify(data),
  }).catch(() => {
    localStorage.setItem(authStoreKey, JSON.stringify(data));
  });
}

function normalizePortugueseText(root = document.body) {
  const replacements = [
    ["HeloisaHand e um projeto", "HeloisaHand é um projeto"],
    ["formacao e unica", "formação é única"],
    ["formação e unica", "formação é única"],
    ["handebol e o caminho", "handebol é o caminho"],
    ["transformacao de vida e o destino", "transformação de vida é o destino"],
    ["transformação de vida e o destino", "transformação de vida é o destino"],
    ["transformacao de vida e o resultado", "transformação de vida é o resultado"],
    ["transformação de vida e o resultado", "transformação de vida é o resultado"],
    ["Qual e a sua duvida", "Qual é a sua dúvida"],
    ["Qual e a sua dúvida", "Qual é a sua dúvida"],
    ["jovens tem", "jovens têm"],
    ["ludica", "lúdica"],
    ["coordenacao", "coordenação"],
    ["espirito", "espírito"],
    ["Evolucao", "Evolução"],
    ["evolucao", "evolução"],
    ["tecnicas", "técnicas"],
    ["participacao", "participação"],
    ["competicoes", "competições"],
    ["competicao", "competição"],
    ["Competicoes", "Competições"],
    ["Competicao", "Competição"],
    ["formacao", "formação"],
    ["Formacao", "Formação"],
    ["nivel", "nível"],
    ["lideranca", "liderança"],
    ["preparacao", "preparação"],
    ["trajetoria", "trajetória"],
    ["Tecnica", "Técnica"],
    ["tecnica", "técnica"],
    ["avancada", "avançada"],
    ["Ginasio", "Ginásio"],
    ["Tancredao", "Tancredão"],
    ["Tecnico", "Técnico"],
    ["tecnico", "técnico"],
    ["Tatico", "Tático"],
    ["tatico", "tático"],
    ["Educacao", "Educação"],
    ["educacao", "educação"],
    ["reprovacao", "reprovação"],
    ["licoes", "lições"],
    ["concentracao", "concentração"],
    ["Convivencia", "Convivência"],
    ["solitario", "solitário"],
    ["Familia", "Família"],
    ["familia", "família"],
    ["habitos", "hábitos"],
    ["vinculos", "vínculos"],
    ["Autoconfianca", "Autoconfiança"],
    ["confianca", "confiança"],
    ["comissao", "comissão"],
    ["nao", "não"],
    ["Nao", "Não"],
    ["podio", "pódio"],
    ["persistencia", "persistência"],
    ["Transformacao", "Transformação"],
    ["transformacao", "transformação"],
    ["AVALIACAO", "AVALIAÇÃO"],
    ["TATICA", "TÁTICA"],
    ["Inteligencia", "Inteligência"],
    ["tatica", "tática"],
    ["decisao", "decisão"],
    ["Transicao", "Transição"],
    ["Recepcao", "Recepção"],
    ["Reposicao", "Reposição"],
    ["Saida", "Saída"],
    ["Comunicacao", "Comunicação"],
    ["posicao", "posição"],
    ["Posicao", "Posição"],
    ["Pivo", "Pivô"],
    ["Inicio", "Início"],
    ["Area", "Área"],
    ["areas", "áreas"],
    ["familias", "famílias"],
    ["atraves", "através"],
    ["Atraves", "Através"],
    ["rapidos", "rápidos"],
    ["Inclusao", "Inclusão"],
    ["inclusao", "inclusão"],
    ["historias", "histórias"],
    ["Historias", "Histórias"],
    ["coracao", "coração"],
    ["missao", "missão"],
    ["Missao", "Missão"],
    ["convivencia", "convivência"],
    ["saudavel", "saudável"],
    ["carater", "caráter"],
    ["cidadaos", "cidadãos"],
    ["vitoria", "vitória"],
    ["Voce", "Você"],
    ["voce", "você"],
    ["doacao", "doação"],
    ["doacoes", "doações"],
    ["Inscricoes", "Inscrições"],
    ["copia", "cópia"],
    ["Codigo", "Código"],
    ["atencao", "atenção"],
    ["comeco", "começo"],
    ["duvida", "dúvida"],
    ["duvidas", "dúvidas"],
    ["Duvida", "Dúvida"],
    ["Duvidas", "Dúvidas"],
    ["Formulario", "Formulário"],
    ["observacoes", "observações"],
    ["Observacoes", "Observações"],
    ["Ainda nao sei", "Ainda não sei"],
    ["Calendario", "Calendário"],
    ["Horario", "Horário"],
    ["horario", "horário"],
    ["Midia", "Mídia"],
    ["midia", "mídia"],
    ["Videos", "Vídeos"],
    ["videos", "vídeos"],
    ["possivel", "possível"],
    ["midias", "mídias"],
    ["validos", "válidos"],
    ["valido", "válido"],
    ["invalidos", "inválidos"],
    ["invalidas", "inválidas"],
    ["indisponiveis", "indisponíveis"],
    ["temporaria", "temporária"],
    ["proximas", "próximas"],
    ["proximos", "próximos"],
    ["Responsavel", "Responsável"],
    ["responsavel", "responsável"],
    ["Titulo", "Título"],
    ["titulo", "título"],
    ["Noticia", "Notícia"],
    ["Noticias", "Notícias"],
    ["noticia", "notícia"],
    ["noticias", "notícias"],
    ["Presencas", "Presenças"],
    ["presencas", "presenças"],
    ["criterios", "critérios"],
    ["inscricoes", "inscrições"],
    ["solicitacao", "solicitação"],
    ["alguem", "alguém"],
    ["usuario", "usuário"],
    ["rapido", "rápido"],
    ["rapida", "rápida"],
    ["retorno", "retorno"],
    ["Esta versao", "Esta versão"],
    ["esta rodando", "está rodando"],
    ["comunicacao", "comunicação"],
    ["finalizacao", "finalização"],
    ["ultimas", "últimas"],
    ["ultimos", "últimos"],
    ["Ultimo", "Último"],
    ["Ultima", "Última"],
    ["primeiro acesso", "primeiro acesso"],
    ["ja existe", "já existe"],
    ["Ja existe", "Já existe"],
    ["restrita", "restrita"],
    ["Ja", "Já"],
    ["criterios", "critérios"],
    ["Objetivo tecnico", "Objetivo técnico"],
    ["Media geral", "Média geral"],
    ["Ultima avaliacao", "Última avaliação"],
    ["avaliacao", "avaliação"],
    ["Aguardando primeira avaliacao", "Aguardando primeira avaliação"],
    ["CampeÃ£s", "Campeãs"],
    ["VitÃ³ria", "Vitória"],
    ["ForÃ§aHand", "ForçaHand"],
    ["tÃ©cnico", "técnico"],
    ["â˜…", "★"],
    ["â€º", "›"],
    ["â™¥", "♥"],
    ["â™¡", "♡"],
    ["âŒ—", "#"],
    ["â–¦", "▦"],
    ["â–°", "▰"],
    ["ðŸŒ±", "🌱"],
    ["âš¡", "⚡"],
    ["ðŸ†", "🏆"],
    ["ðŸ¥…", "🥅"],
    ["ðŸ‘•", "👕"],
    ["ðŸšŒ", "🚌"],
    ["ðŸ“š", "📚"],
    ["ðŸ’š", "💚"],
  ];

  const normalize = (value) => replacements.reduce((text, [from, to]) => text.replaceAll(from, to), value);
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const tag = node.parentElement?.tagName;
      return ["SCRIPT", "STYLE", "TEXTAREA", "CODE"].includes(tag) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
    },
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => {
    node.nodeValue = normalize(node.nodeValue);
  });

  root.querySelectorAll?.("[placeholder], [aria-label], [alt], [title], [data-empty]").forEach((element) => {
    ["placeholder", "aria-label", "alt", "title", "data-empty"].forEach((attribute) => {
      if (element.hasAttribute(attribute)) element.setAttribute(attribute, normalize(element.getAttribute(attribute)));
    });
  });
}

function renderRoute() {
  const path = location.hash.replace("#", "") || "/";
  const view = routes[path] || renderHome;
  setActiveNav(path);
  app.innerHTML = view();
  bindInteractions();
  hydrateMediaViews(path);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setActiveNav(path) {
  document.querySelectorAll(".main-nav a").forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${path}`);
  });
  nav.classList.remove("open");
}

function whatsappLink(message) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

function whatsappLinkTo(targetPhone, message) {
  const target = onlyDigits(targetPhone);
  const normalized = target.startsWith("55") ? target : `55${target}`;
  return `https://wa.me/${normalized}?text=${encodeURIComponent(message)}`;
}

function cta(label, href, variant = "") {
  return `<a class="button ${variant}" href="${href}">${label}</a>`;
}

function pageIntro(kicker, title, text) {
  return `
    <section class="section">
      <div class="section-head center">
        <span class="eyebrow">${kicker}</span>
        <h2>${title}</h2>
        <p>${text}</p>
      </div>
    </section>
  `;
}

function featureCard(title, text, href, icon, yellow = false) {
  return `
    <a class="card ${yellow ? "yellow" : ""}" href="${href}">
      <span class="icon-pill">${icon}</span>
      <h3>${title}</h3>
      <p>${text}</p>
    </a>
  `;
}

function optionCard(title, text, href, icon) {
  return `
    <a class="option-card" href="${href}">
      <span>${icon}</span>
      <div>
        <h3>${title}</h3>
        <p>${text}</p>
      </div>
      <strong>›</strong>
    </a>
  `;
}

function renderHome() {
  return `
    <section class="hero">
      <div class="hero-inner">
        <div class="hero-copy">
          <span class="eyebrow">Instituto de Handebol</span>
          <h1 class="hero-brand-title">
            <span class="hero-name-prefix">Instituto</span>
            <span class="hero-name-heloisa">Heloísa</span><span class="hero-name-hand">Hand</span>
          </h1>
          <p class="hero-subtitle">Transformando vidas atraves do handebol</p>
          <p>O Instituto HeloisaHand conecta jovens atletas, familias, treinadores e apoiadores em uma jornada de disciplina, desenvolvimento humano, esporte e oportunidade.</p>
          <div class="hero-actions">
            ${cta("Quero Treinar", "#/treinar", "yellow")}
            ${cta("Apoiar o Projeto", "#/apoiar", "ghost")}
          </div>
          <div class="impact-links" aria-label="Acessos rapidos do instituto">
            <a class="impact-link" href="#/atletas-em-acao">
              <strong>50+</strong>
              <span>Atletas atendidos</span>
              <small>Ver trajetorias</small>
            </a>
            <a class="impact-link" href="#/categorias">
              <strong>3</strong>
              <span>Categorias de base</span>
              <small>Conhecer fases</small>
            </a>
            <a class="impact-link" href="#/inclusao">
              <strong>100%</strong>
              <span>Inclusao e desenvolvimento</span>
              <small>Ver impacto</small>
            </a>
            <a class="impact-link" href="#/competicoes">
              <strong>+</strong>
              <span>Treinos e competicoes</span>
              <small>Acompanhar agenda</small>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="section-head center">
        <span class="eyebrow">Caminhos do instituto</span>
        <h2>Treinar, evoluir, competir e transformar</h2>
        <p>Por aqui nós organizamos a formação esportiva dos atletas, damos suporte e apoio social, reunimos informações de competições e histórias incríveis de transformação, além de acessos exclusivos na plataforma para atletas e apoiadores.</p>
      </div>
      <div class="grid three">
        ${featureCard("Conhecer o Projeto", "Quem somos, nossa missao e por que o handebol transforma.", "#/projeto", "CP")}
        ${featureCard("Quero Treinar", "Seletivas, aulas particulares e informacoes para novos atletas.", "#/treinar", "TR")}
        ${featureCard("Apoie o Projeto", "Apoio financeiro, materiais, voluntariado e parcerias.", "#/apoiar", "AP", true)}
      </div>
    </section>
    <section class="section options-section">
      <div class="section-head center">
        <h2>O que voce procura?</h2>
        <p>Escolha uma opcao para comecar.</p>
      </div>
      <div class="option-grid">
        ${optionCard("Conhecer o Projeto", "Saiba mais sobre o Instituto HeloisaHand", "#/projeto", "i")}
        ${optionCard("Quero Treinar Handebol", "Seletivas e aulas particulares", "#/treinar", "TR")}
        ${optionCard("Ja Sou Atleta", "Area restrita para atletas", "#/atleta", "AT")}
        ${optionCard("Quero Apoiar o Instituto", "Doe, patrocine ou seja parceiro", "#/apoiar", "♥")}
      </div>
    </section>
    <section class="section band">
      <div class="section-head">
        <span class="eyebrow">Categorias de Base</span>
        <h2>Formação por fase de desenvolvimento</h2>
        <p>Cada fase da formação é única. Respeitamos o tempo de desenvolvimento de cada atleta.</p>
      </div>
      ${renderCategoryGrid()}
    </section>
    <section class="section impact">
      <div class="section-head center">
        <span class="eyebrow">Inclusão e Desenvolvimento</span>
        <h2>O handebol é o caminho. A transformação de vida é o destino.</h2>
        <p>Histórias reais de como o esporte muda a escola, a casa e o coração de cada atleta.</p>
      </div>
      <div class="grid three">
        <div class="card"><h3>80%</h3><p>melhoram na escola com rotina, disciplina e acompanhamento.</p></div>
        <div class="card yellow"><h3>95%</h3><p>continuam ate o fim do ano, fortalecendo vinculo e compromisso.</p></div>
        <div class="card"><h3>100%</h3><p>relatam mudanca pessoal dentro e fora das quadras.</p></div>
      </div>
    </section>
    ${renderHandballHub()}
  `;
}

function renderHandballHub() {
  const topics = getHandballTopics();
  const teams = getHandballTeams();
  const stars = getHandballStars();
  const positionTips = getPositionTips();
  return `
    <section class="section handball-hub">
      <div class="section-head center">
        <span class="eyebrow">Fique por dentro do handebol</span>
        <h2>Conhecimento também entra em quadra</h2>
        <p>Curiosidades, regras, história e dicas para atletas acompanharem o esporte com mais inteligência.</p>
      </div>
      <div class="hub-grid">
        ${topics
          .map(
            (topic, topicIndex) => `
              <article class="hub-card insight ${topic.tone}" data-action="open-hub-topic" data-topic-index="${topicIndex}" data-current-index="0">
                <span>${topic.tag}</span>
                <i>${topic.icon}</i>
                <h3>${topic.title}</h3>
                <p data-hub-rotating-text>${topic.items[0].short}</p>
                <small>Clique para saber mais</small>
              </article>
            `,
          )
          .join("")}
      </div>
      <div class="hub-feature-grid">
        <article class="hub-rank-card teams">
          <span class="eyebrow">Cenário mundial</span>
          <h3>10 seleções para acompanhar</h3>
          <ol>${teams.map((team) => `<li class="${team.flag}"><strong>${team.name}</strong><small>${team.reason}</small></li>`).join("")}</ol>
          <p>Lista editorial baseada em tradição, títulos recentes, força continental e relevância internacional.</p>
        </article>
        <article class="hub-rank-card players">
          <span class="eyebrow">Referências do esporte</span>
          <h3>Atletas para conhecer</h3>
          <ol>${stars.map((player) => `<li><strong>${player.name}</strong><small>${player.reason}</small></li>`).join("")}</ol>
          <p>Nomes importantes do handebol masculino e feminino para pesquisar, assistir e aprender.</p>
        </article>
      </div>
      <div class="position-tips">
        <div>
          <span class="eyebrow">Dicas por posição</span>
          <h3>Escolha sua função e evolua melhor</h3>
        </div>
        <div class="position-tip-grid">
          ${positionTips
            .map(
              (item, index) => `
                <article class="position-tip-card" data-action="open-position-tip" data-position-index="${index}">
                  <span>${item.icon}</span>
                  <strong>${item.position}</strong>
                  <p>${item.tips[0]}</p>
                  <small>Ver plano de evolução</small>
                </article>
              `,
            )
            .join("")}
        </div>
      </div>
      <div id="handballHubModal" class="hub-modal" hidden></div>
    </section>
  `;
}

function getHandballTopics() {
  return [
    {
      title: "Você sabia disso?",
      tag: "Curiosidade",
      icon: "!",
      tone: "curiosity",
      items: [
        { short: "O handebol indoor usa 7 jogadores por equipe: 6 na linha e 1 goleiro.", detail: "Esse formato deixa o jogo muito rápido, com transições constantes entre ataque e defesa." },
        { short: "O arremesso de 7 metros é a cobrança mais parecida com um pênalti.", detail: "Ele aparece quando uma chance clara de gol é impedida de forma irregular." },
        { short: "O goleiro pode virar o primeiro atacante da equipe.", detail: "Uma reposição rápida após defesa pode criar contra-ataque antes da defesa adversária se organizar." },
        { short: "Ponta boa não depende só de ângulo: depende de tempo de salto.", detail: "O melhor salto abre o corpo, aumenta a visão do goleiro e permite finalizar com mais opções." },
        { short: "O pivô joga muito sem bola.", detail: "Bloqueio, giro, posicionamento e leitura do defensor são tão importantes quanto receber e finalizar." },
      ],
    },
    {
      title: "Regras que todo atleta precisa saber",
      tag: "Regras",
      icon: "#",
      tone: "rules",
      items: [
        { short: "Com a bola na mão, o atleta pode dar até 3 passos.", detail: "Depois disso, precisa quicar, passar ou arremessar. Essa regra muda toda a tomada de decisão." },
        { short: "A área de 6 metros pertence ao goleiro.", detail: "Jogadores de linha podem saltar sobre a área, mas precisam soltar a bola antes de tocar o solo dentro dela." },
        { short: "Dois minutos fora mudam o jogo.", detail: "A exclusão temporária deixa a equipe com um atleta a menos e exige organização defensiva." },
        { short: "Jogo passivo pune ataque sem objetivo.", detail: "Quando a arbitragem sinaliza passivo, o ataque precisa finalizar rápido e com intenção real." },
        { short: "Contato existe, mas empurrar por trás não é permitido.", detail: "Defender bem é ocupar espaço, controlar corpo e antecipar, não derrubar o adversário." },
      ],
    },
    {
      title: "História do handebol",
      tag: "História",
      icon: "H",
      tone: "history",
      items: [
        { short: "O handebol moderno cresceu muito na Europa.", detail: "A modalidade se organizou internacionalmente e virou esporte forte em escolas, clubes e seleções." },
        { short: "O jogo de quadra consolidou o formato 40x20.", detail: "A quadra indoor deixou a modalidade mais veloz, técnica e intensa." },
        { short: "A IHF organiza os Mundiais da modalidade.", detail: "Os campeonatos mundiais ajudam a revelar seleções, estilos de jogo e grandes atletas." },
        { short: "O handebol feminino tem enorme tradição competitiva.", detail: "Noruega, França, Dinamarca e outros países ajudaram a elevar o nível técnico mundial." },
        { short: "No Brasil, o handebol é muito forte no ambiente escolar.", detail: "A escola costuma ser a porta de entrada de muitos atletas para clubes, jogos estudantis e seleções." },
      ],
    },
    {
      title: "Performance inteligente",
      tag: "Performance",
      icon: "+",
      tone: "performance",
      items: [
        { short: "Decisão rápida vale tanto quanto força.", detail: "Saber quando passar, infiltrar ou arremessar costuma separar atletas comuns de atletas decisivos." },
        { short: "Treino de perna melhora arremesso.", detail: "Impulsão, equilíbrio e transferência de força nascem muito antes do braço acelerar." },
        { short: "Comunicação organiza a defesa.", detail: "Falar troca, cobertura e lado da bola evita buracos e ajuda o goleiro a ler melhor o chute." },
        { short: "Recuperação também é treino.", detail: "Sono, hidratação e alimentação influenciam velocidade, concentração e prevenção de lesões." },
        { short: "Assistir jogos acelera leitura tática.", detail: "Observar atletas de alto nível ajuda a entender movimento sem bola, tempo de passe e variação de finalização." },
      ],
    },
  ];
}

function getHandballTeams() {
  return [
    { name: "Dinamarca", flag: "flag-denmark", reason: "Potência atual: tetracampeã mundial masculina e campeã olímpica em 2024." },
    { name: "França", flag: "flag-france", reason: "Maior vencedora histórica do Mundial masculino, com seis títulos." },
    { name: "Suécia", flag: "flag-sweden", reason: "Escola tradicional, quatro vezes campeã mundial masculina." },
    { name: "Espanha", flag: "flag-spain", reason: "Seleção muito regular, forte taticamente e sempre competitiva em torneios grandes." },
    { name: "Alemanha", flag: "flag-germany", reason: "Tem liga muito forte e formação que revela atletas de alto nível." },
    { name: "Noruega", flag: "flag-norway", reason: "Referência enorme no feminino, com jogadoras decisivas e cultura vencedora." },
    { name: "Egito", flag: "flag-egypt", reason: "Principal força africana recente e cada vez mais perigosa contra europeus." },
    { name: "Croácia", flag: "flag-croatia", reason: "Vice mundial masculino em 2025 e dona de torcida e tradição muito fortes." },
    { name: "Hungria", flag: "flag-hungary", reason: "País com clubes fortes, base competitiva e muita tradição no feminino." },
    { name: "Brasil", flag: "flag-brazil", reason: "Referência nas Américas e campeão mundial feminino em 2013." },
  ];
}

function getHandballStars() {
  return [
    { name: "Mathias Gidsel", reason: "Eleito melhor do mundo pela IHF em 2023, 2024 e 2025; MVP e artilheiro do Mundial 2025." },
    { name: "Henny Reistad", reason: "Uma das maiores estrelas atuais; venceu o prêmio de melhor do mundo pela IHF em sequência recente." },
    { name: "Nikola Karabatic", reason: "Lenda francesa, três vezes eleito melhor do mundo pela IHF." },
    { name: "Mikkel Hansen", reason: "Craque dinamarquês, também três vezes melhor do mundo pela IHF." },
    { name: "Cristina Neagu", reason: "Referência histórica do feminino, conhecida por técnica, arremesso e liderança." },
    { name: "Dika Mem", reason: "Um dos nomes mais explosivos da França, destaque por potência e tomada de decisão." },
    { name: "Sander Sagosen", reason: "Armador norueguês de elite, famoso por leitura, passe e arremesso de longa distância." },
    { name: "Stine Oftedal", reason: "Central norueguesa, eleita melhor do mundo pela IHF em 2019." },
    { name: "Estavana Polman", reason: "Campeã mundial com os Países Baixos e destaque por criatividade ofensiva." },
    { name: "Bruna de Paula", reason: "Brasileira de alto nível internacional, referência técnica para jovens atletas do Brasil." },
  ];
}

function getPositionTips() {
  return [
    { position: "Goleiro", icon: "G", tips: ["Leia o braço de arremesso antes da bola sair.", "Treine queda curta e recuperação rápida.", "Converse com a defesa em toda posse.", "Estude os cantos preferidos dos adversários.", "Capriche na reposição para contra-ataque."] },
    { position: "Ponta", icon: "P", tips: ["Treine finalização com pouco ângulo.", "Melhore impulsão lateral.", "Acelere o contra-ataque antes da defesa voltar.", "Varie alto, baixo, rosca e cavadinha.", "Aprenda a entrar no tempo certo do passe."] },
    { position: "Armador", icon: "A", tips: ["Leia a segunda linha da defesa.", "Treine passe em movimento.", "Varie cruzamento, finta e arremesso externo.", "Chame jogadas com clareza.", "Aprenda a acelerar e desacelerar o ataque."] },
    { position: "Pivô", icon: "PV", tips: ["Brigue por espaço antes da bola chegar.", "Use bloqueios sem falta de ataque.", "Treine giro curto para os dois lados.", "Proteja a bola no contato.", "Converse com armadores para combinar entradas."] },
  ];
}

function renderCategoryGrid() {
  return `
    <div class="category-showcase">
      ${categories
        .map(
          (cat) => `
            <article class="category-card ${cat.tone}">
              <span class="category-icon">${cat.icon}</span>
              <h3>${cat.name}</h3>
              <strong>${cat.age}</strong>
              <p>${cat.description}</p>
              <ul>${cat.skills.map((skill) => `<li><span>★</span>${skill}</li>`).join("")}</ul>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderTraining() {
  return `
    <section class="section training-page">
      <div class="training-hero">
        <span class="eyebrow">Quero Treinar Handebol</span>
        <h2>Escolha como você quer começar</h2>
        <p>Seja para participar da seletiva, marcar uma aula particular ou tirar dúvidas, a gente organiza seu pedido e envia direto para a área do treinador.</p>
      </div>
      <div class="training-choice-grid">
        ${trainingChoiceCard("seletiva", "Participar da seletiva", "Para atletas que querem entrar no projeto e passar por uma avaliação.", "SE", "Preencher dados")}
        ${trainingChoiceCard("aula", "Aula particular", "Para evoluir fundamentos, confiança, técnica e entendimento de jogo.", "AP", "Solicitar aula")}
        ${trainingChoiceCard("duvida", "Tirar dúvidas", "Para famílias ou atletas que ainda querem entender melhor como funciona.", "?", "Falar com a equipe")}
      </div>
      <div id="trainingFormWrap" class="training-form-wrap" hidden></div>
    </section>
  `;
}

function trainingChoiceCard(type, title, text, icon, actionLabel) {
  return `
    <article class="training-choice-card ${type}">
      <span>${icon}</span>
      <h3>${title}</h3>
      <p>${text}</p>
      <button class="invite-button ${type === "aula" ? "secondary-light" : "primary"}" type="button" data-action="open-training-form" data-interest-type="${type}">${actionLabel}</button>
    </article>
  `;
}

function renderProject() {
  return `
    <section class="section project-page">
      <div class="project-hero">
        <span class="eyebrow">Conhecer o Projeto</span>
        <h2>Handebol como caminho. Desenvolvimento humano como destino.</h2>
        <p>O Instituto HeloisaHand nasceu para aproximar jovens do esporte, da disciplina, da convivencia saudavel e de novas possibilidades de futuro.</p>
      </div>
      <div class="grid two project-story-grid">
        <article class="project-story-card">
          <h3>Quem somos</h3>
          <p>O Instituto HeloisaHand é um projeto de handebol voltado para adolescentes de 11 a 17 anos, promovendo esporte, disciplina, inclusão, educação e oportunidades de vida.</p>
          <p>Idealizado pelo treinador Laionel Alves de Moraes, ex-atleta que interrompeu a carreira aos 20 anos mas nunca abandonou o amor pelo handebol, e pelo Professor Fabio, grande profissional e incentivador do projeto, juntos transformam sonhos em realidade.</p>
          <p>Acreditamos que o esporte transforma. Atraves do handebol, construimos carater, formamos cidadaos e abrimos portas para um futuro melhor.</p>
        </article>
        <article class="project-story-card green">
          <h3>Nossa missao</h3>
          <p>Criar um ambiente onde cada atleta possa treinar, pertencer, evoluir e enxergar novas oportunidades dentro e fora da quadra.</p>
        <p>A vitória importa, mas a transformação de vida é o resultado mais importante do projeto.</p>
        </article>
      </div>
      <div class="project-values">
        <article><span>01</span><h3>Formação</h3><p>Ensino progressivo por categoria, respeitando idade, maturidade e ritmo de evolução.</p></article>
        <article><span>02</span><h3>Pertencimento</h3><p>O atleta encontra equipe, referência, rotina e um espaço seguro para crescer.</p></article>
        <article><span>03</span><h3>Impacto</h3><p>O esporte fortalece disciplina, escola, autoestima, convivência e projeto de vida.</p></article>
      </div>
      <div class="project-cta">
        <h3>Quer caminhar com a gente?</h3>
        <p>Voce pode treinar, apoiar ou acompanhar o desenvolvimento dos nossos atletas.</p>
        <div class="actions">
          ${cta("Quero Treinar", "#/treinar", "yellow")}
          ${cta("Apoiar o Instituto", "#/apoiar")}
        </div>
      </div>
    </section>
  `;
}

function renderSupport() {
  return `
    <section class="section support-page">
      <div class="section-head center">
        <span class="eyebrow">Apoie o Projeto</span>
        <h2>Onde vai sua doacao?</h2>
        <p>Veja o impacto direto do seu apoio na rotina dos atletas.</p>
      </div>
      <div class="support-impact-grid">
        ${supportImpactCard("🥅", "Equipamentos", "Bolas, coletes e materiais de treino para todos os atletas.")}
        ${supportImpactCard("👕", "Uniformes", "Camisas e shorts oficiais para representar o instituto.")}
        ${supportImpactCard("🚌", "Transporte", "Levar atletas a competicoes em outras cidades.")}
        ${supportImpactCard("🏆", "Competicoes", "Inscricoes em campeonatos estaduais e nacionais.")}
        ${supportImpactCard("📚", "Educacao", "Suporte educacional junto ao projeto esportivo.")}
        ${supportImpactCard("💚", "Sonhos", "Cada doacao transforma a vida de um jovem atleta.")}
      </div>
      <div class="support-donation-grid">
        <article class="pix-card">
          <span class="pix-icon">⌗</span>
          <h3>Doe via Pix</h3>
          <p>Use a chave Pix abaixo ou escaneie o QR Code para fazer sua doacao.</p>
          <img class="pix-qr" src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(pixPayload)}" alt="QR Code Pix para doacao ao Instituto HeloisaHand" />
          <div class="pix-key-box">
            <strong>Chave Pix</strong>
            <span>${pixKey}</span>
          </div>
          <label>Pix copia e cola<textarea readonly>${pixPayload}</textarea></label>
          <button class="button yellow" type="button" data-action="copy-pix">Copiar Pix</button>
          <div id="pixFeedback" class="portal-message"></div>
        </article>
        <article class="support-options-card">
          <h3>Outras formas de apoio</h3>
          <p>Empresas, patrocinadores e parceiros podem chamar no WhatsApp para combinarmos a melhor forma de contribuir.</p>
          <a href="${whatsappLink("Ola! Quero apoiar o Instituto HeloisaHand como empresa/parceiro.")}"><span>▦</span>Apoiar como empresa</a>
          <a href="${whatsappLink("Ola! Quero fazer uma doacao para o Instituto HeloisaHand.")}"><span>♡</span>Fazer uma doacao</a>
          <a href="${whatsappLink("Ola! Quero patrocinar uniformes para o Instituto HeloisaHand.")}"><span>▰</span>Patrocinar uniformes</a>
          ${cta("Conversar no WhatsApp", whatsappLink("Ola! Quero apoiar o Instituto HeloisaHand."))}
        </article>
      </div>
    </section>
  `;
}

function supportImpactCard(icon, title, text) {
  return `<article class="support-impact-card"><span>${icon}</span><h3>${title}</h3><p>${text}</p></article>`;
}

function renderCategories() {
  return `
    <section class="section category-page">
      <div class="section-head center">
        <span class="eyebrow">Categorias de Base</span>
        <h2>3 Categorias de Base</h2>
        <p>Cada fase da formação é única. Respeitamos o tempo de desenvolvimento de cada atleta, com acompanhamento especializado por faixa etária.</p>
      </div>
      ${renderCategoryGrid()}
      ${renderCategoryInvite()}
    </section>
  `;
}

function renderCategoryInvite() {
  return `
    <section class="category-invite" id="categoryInvite">
      <div class="category-invite-copy">
        <span class="eyebrow">Entre para o time</span>
        <h2>Quer fazer parte dessa equipe?</h2>
        <p>Se o handebol chamou sua atencao, esse pode ser o comeco de uma nova historia. Fale com a gente para participar de uma seletiva ou tirar suas duvidas sobre o projeto.</p>
      </div>
      <div class="category-invite-actions">
        <button class="invite-button primary" type="button" data-action="open-interest-form" data-interest-type="seletiva">Participar da seletiva</button>
        <button class="invite-button secondary" type="button" data-action="open-interest-form" data-interest-type="duvida">Tirar duvidas</button>
      </div>
      <div id="interestFormWrap" class="interest-form-wrap" hidden>
        ${renderInterestForm("seletiva")}
      </div>
    </section>
  `;
}

function renderInterestForm(type) {
  const isTryout = type === "seletiva";
  const isClass = type === "aula";
  const label = isTryout ? "Seletiva" : isClass ? "Aula particular" : "Dúvidas";
  const title = isTryout ? "Formulário para participar da seletiva" : isClass ? "Formulário para solicitar aula particular" : "Envie sua dúvida para a equipe";
  const intro = isTryout
    ? "Preencha os dados abaixo para o treinador avaliar o melhor retorno."
    : isClass
      ? "Conte o objetivo da aula para prepararmos um atendimento mais certeiro."
      : "Conta pra gente o que você quer saber e retornamos pelo WhatsApp.";
  return `
    <form id="interestForm" class="interest-form form-grid" data-interest-type="${type}">
      <div>
        <span class="eyebrow">${label}</span>
        <h3>${title}</h3>
        <p>${intro}</p>
      </div>
      <div class="form-grid two">
        <label>Nome do atleta/interessado<input id="interestName" required placeholder="Nome completo" /></label>
        <label>WhatsApp para retorno<input id="interestPhone" required placeholder="Ex.: 27 99937-7026" /></label>
        <label>Idade<input id="interestAge" type="number" min="5" max="60" placeholder="Ex.: 13" /></label>
        <label>Categoria de interesse
          <select id="interestCategory">
            <option value="">Ainda nao sei</option>
            ${categories.map((cat) => `<option value="${cat.name}">${cat.name} - ${cat.age}</option>`).join("")}
          </select>
        </label>
        ${!isClass ? `<label>Posição do atleta
          <select id="interestPosition">
            <option value="">Ainda não sei</option>
            ${handballPositions.map((position) => `<option value="${position}">${position}</option>`).join("")}
          </select>
        </label>` : ""}
      </div>
      ${isClass ? renderPrivateLessonFields() : ""}
      <label>${isTryout ? "Disponibilidade / observações" : isClass ? "Observações adicionais" : "Qual é a sua dúvida?"}<textarea id="interestMessage" required placeholder="${isTryout ? "Ex.: Quero participar da seletiva, tenho disponibilidade aos sábados..." : isClass ? "Ex.: Quero melhorar arremesso, passe, defesa ou condicionamento..." : "Escreva sua pergunta aqui..."}"></textarea></label>
      <button class="button" type="submit">${isTryout ? "Enviar pedido de seletiva" : isClass ? "Enviar pedido de aula" : "Enviar dúvida"}</button>
      <div id="interestFeedback" class="portal-message"></div>
    </form>
  `;
}

function renderPrivateLessonFields() {
  return `
    <section class="lesson-form-section">
      <h4>Informações do treino</h4>
      <div class="form-grid two">
        <label>Nível atual
          <select id="lessonLevel" required>
            <option value="">Selecione</option>
            ${trainingLevels.map((level) => `<option value="${level}">${level}</option>`).join("")}
          </select>
        </label>
        <label>Objetivo
          <select id="lessonObjective" required>
            <option value="">Selecione</option>
            ${trainingObjectives.map((objective) => `<option value="${objective}">${objective}</option>`).join("")}
          </select>
        </label>
      </div>
      <label>Posição de interesse
        <select id="interestPosition" required>
          <option value="">Selecione</option>
          ${handballPositions.map((position) => `<option value="${position}">${position}</option>`).join("")}
        </select>
      </label>
    </section>
    <section class="lesson-form-section">
      <h4>Duração e Valor</h4>
      <input id="lessonPackage" type="hidden" value="" required />
      <div class="lesson-package-grid">
        ${privateLessonPackages
          .map(
            (item) => `
              <button class="lesson-package-card" type="button" data-action="select-lesson-package" data-package-id="${item.id}" data-package-label="${item.label}" data-package-price="${item.price}">
                <strong>${item.label}</strong>
                <span>${item.price}</span>
              </button>
            `,
          )
          .join("")}
      </div>
      <p class="helper-text">Escolha uma duração para continuar. O valor selecionado será enviado junto com o pedido.</p>
    </section>
    <section class="lesson-form-section">
      <h4>Agendamento</h4>
      <div class="form-grid two">
        <label>Data da aula<input id="lessonDate" type="date" required /></label>
        <label>Horário<input id="lessonTime" type="time" required /></label>
      </div>
    </section>
  `;
}

function renderCompetitions() {
  const events = getTeamEvents();
  const nextHajmGames = events.filter((event) => isHajmEvent(event)).slice(0, 3);
  return `
    <section class="section competitions-page">
      <div class="competition-hero">
        <span class="eyebrow">🏆 Competições</span>
        <h2>Competições e <span>Jogos</span></h2>
        <p>Calendario de jogos, amistosos, treinos importantes e momentos publicados pela equipe.</p>
      </div>
      ${
        nextHajmGames.length
          ? `<div class="hajm-highlight">
              <span>Agenda HAJM</span>
              <strong>Próximos jogos da nossa equipe</strong>
              <div>${nextHajmGames.map((event) => `<b>${formatShortEventDate(event)} - ${escapeHtml(event.opponent)}</b>`).join("")}</div>
            </div>`
          : ""
      }
      <div class="competition-tabs" role="tablist">
        <button class="active" type="button" data-competition-tab="calendar">📅 Calendario</button>
        <button type="button" data-competition-tab="photos">🖼️ Fotos</button>
        <button type="button" data-competition-tab="videos">🎞️ Videos</button>
      </div>
      <div class="competition-content-shell">
        <div id="competitionCalendar" class="competition-panel public-event-list" data-competition-panel="calendar">
          ${events.length ? events.map(renderPublicEventItem).join("") : `<div class="empty-state compact"><strong>Nenhum evento agendado.</strong><p>Quando o treinador cadastrar jogos ou amistosos, eles aparecem aqui.</p></div>`}
        </div>
        <div class="competition-panel media-panel" data-competition-panel="photos" hidden>
          <div class="media-panel-head">
            <span class="icon-pill">FT</span>
            <div><h3>Fotos das competições</h3><p>Registros publicados pelo treinador ficam separados aqui.</p></div>
          </div>
          <div id="competitionPhotos" class="media-preview-list full" data-empty="Nenhuma foto publicada ainda."></div>
        </div>
        <div class="competition-panel media-panel" data-competition-panel="videos" hidden>
          <div class="media-panel-head">
            <span class="icon-pill">VD</span>
            <div><h3>Vídeos das competições</h3><p>Vídeos publicados aparecem com miniatura para abrir com contexto.</p></div>
          </div>
          <div id="competitionVideos" class="media-preview-list full" data-empty="Nenhum vídeo publicado ainda."></div>
        </div>
      </div>
    </section>
  `;
}

function renderInclusion() {
  return `
    ${pageIntro("Inclusão e Desenvolvimento", "100% Inclusão e Desenvolvimento", "O handebol é o caminho. A transformação de vida é o destino.")}
    <section class="section">
      <div class="grid two">
        ${stories
          .map(
            ([tag, title, story]) => `
              <article class="card story">
                <span class="story-symbol">${tag.slice(0, 2)}</span>
                <div>
                  <p><strong>${tag}</strong></p>
                  <h3>${title}</h3>
                  <p>${story}</p>
                </div>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderAthletesAction() {
  return `
    ${pageIntro("Galeria", "50+ Atletas em Acao", "Momentos reais de dedicacao, garra e superacao dos nossos atletas dentro e fora das quadras.")}
    <section class="section">
      <div id="publicMediaGallery" class="media-gallery"></div>
    </section>
  `;
}

function formBlock(title, button, fields) {
  return `
    <div class="card form-card">
      <h3>${title}</h3>
      <form class="form-grid demo-form">
        <div class="form-grid two">
          ${fields.map((field) => `<label>${field}<input required placeholder="${field}" /></label>`).join("")}
        </div>
        <label>Mensagem<textarea placeholder="Conte um pouco sobre o interesse no instituto"></textarea></label>
        <button class="button" type="submit">${button}</button>
      </form>
    </div>
  `;
}

function getScoutType(position) {
  return position === "Goleiro" ? "goalkeeper" : "line";
}

function getScoutTemplate(position) {
  return scoutTemplates[getScoutType(position)];
}

function getScoutItems(position) {
  return getScoutTemplate(position).flatMap((section) => section.items);
}

function createDefaultScout(position) {
  return {
    type: getScoutType(position),
    scores: Object.fromEntries(getScoutItems(position).map(([key]) => [key, 5])),
    notes: "",
    improvements: "",
    updatedAt: "",
  };
}

function getScoreTone(value) {
  const score = Number(value || 0);
  if (score <= 4) return "low";
  if (score <= 6) return "mid";
  return "high";
}

function renderScoutReadOnly(athlete) {
  const scout = getAthleteScout(athlete);
  return `
    <div class="scout-readonly">
      ${getScoutTemplate(athlete.position)
        .map(
          (section) => `
            <div class="scout-readonly-section">
              <h4>${section.title}</h4>
              ${section.items
                .map(([key, label]) => {
                  const value = Number(scout.scores[key] ?? 0);
                  return `
                    <div class="scout-result-row ${getScoreTone(value)}">
                      <span>${label}</span>
                      <div class="scout-result-track" style="--score-pct: ${value * 10}%"><i></i></div>
                      <strong>${value}</strong>
                    </div>
                  `;
                })
                .join("")}
            </div>
          `,
        )
        .join("")}
    </div>
  `;
}

function getTeamEvents(data = getAuthData()) {
  return [...(data.events || [])].sort((a, b) => `${a.date}T${a.time || "00:00"}`.localeCompare(`${b.date}T${b.time || "00:00"}`));
}

function getEventTypeLabel(type) {
  return {
    competition: "Competicao",
    friendly: "Amistoso",
    training: "Treino",
    meeting: "Reuniao",
  }[type] || "Evento";
}

function getEventDate(event) {
  return new Date(`${event.date}T${event.time || "00:00"}:00`);
}

function isHajmEvent(event) {
  return /HAJM/i.test(`${event.opponent || ""} ${event.notes || ""}`);
}

function formatShortEventDate(event) {
  const date = getEventDate(event);
  return `${date.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" })} às ${event.time || "--:--"}`;
}

function getMonthLabel(date) {
  return date.toLocaleDateString("pt-BR", { month: "long", year: "numeric" }).replace(/^\w/, (char) => char.toUpperCase());
}

function getDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function renderPublicEventItem(event) {
  const date = getEventDate(event);
  const day = date.toLocaleDateString("pt-BR", { day: "2-digit" });
  const month = date.toLocaleDateString("pt-BR", { month: "short" }).replace(".", "").toUpperCase();
  return `
    <article class="public-event-card ${event.type} ${isHajmEvent(event) ? "hajm-game" : ""}">
      <div class="event-date-box"><strong>${day}</strong><span>${month}</span></div>
      <div class="event-info">
        <h3>${escapeHtml(event.title)}</h3>
        <p>📍 ${escapeHtml(event.location || "Local a definir")}</p>
        <p>🕘 ${escapeHtml(event.time || "Horario a definir")}</p>
      </div>
      <div class="event-badges">
        <span>${getEventTypeLabel(event.type)}</span>
        ${event.opponent ? `<strong>🏅 ${escapeHtml(event.opponent)}</strong>` : ""}
      </div>
    </article>
  `;
}

function renderCalendarMonth(events, interactive = false) {
  const reference = events[0] ? getEventDate(events[0]) : new Date();
  const year = reference.getFullYear();
  const month = reference.getMonth();
  const first = new Date(year, month, 1);
  const start = new Date(year, month, 1 - first.getDay());
  const todayKey = getDateKey(new Date());
  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
  const cells = Array.from({ length: 42 }, (_, index) => {
    const day = new Date(start);
    day.setDate(start.getDate() + index);
    const key = getDateKey(day);
    const dayEvents = events.filter((event) => event.date === key);
    return `
      <div class="calendar-cell ${day.getMonth() !== month ? "muted" : ""} ${key === todayKey ? "today" : ""} ${interactive ? "clickable" : ""}" ${interactive ? `data-action="select-event-date" data-event-date="${key}" title="Adicionar evento em ${day.toLocaleDateString("pt-BR")}"` : ""}>
        <strong>${day.getDate()}</strong>
        <div class="calendar-event-stack">
          ${dayEvents.map((event) => `<span class="calendar-chip ${event.type}">${event.time} ${escapeHtml(event.title)}</span>`).join("")}
        </div>
      </div>
    `;
  }).join("");

  return `
    <div class="calendar-board">
      <div class="calendar-month-head">
        <button type="button" aria-label="Mes anterior">‹</button>
        <h3>${getMonthLabel(reference)}</h3>
        <button type="button" aria-label="Proximo mes">›</button>
      </div>
      <div class="calendar-weekdays">${weekDays.map((day) => `<span>${day}</span>`).join("")}</div>
      <div class="calendar-grid">${cells}</div>
    </div>
  `;
}

function getAthleteScout(athlete) {
  const base = createDefaultScout(athlete.position);
  const saved = athlete.scout || {};
  return {
    type: base.type,
    scores: { ...base.scores, ...(saved.type === base.type ? saved.scores : {}) },
    notes: saved.type === base.type ? saved.notes || "" : "",
    improvements: saved.type === base.type ? saved.improvements || "" : "",
    updatedAt: saved.type === base.type ? saved.updatedAt || "" : "",
  };
}

function renderPositionOptions(selected = "") {
  const options = handballPositions.includes(selected) || !selected ? handballPositions : [selected, ...handballPositions];
  return `<option value="">Selecione a posicao</option>${options.map((position) => `<option value="${position}" ${position === selected ? "selected" : ""}>${position}</option>`).join("")}`;
}

function renderScoutTemplatePreview(position = "") {
  const selectedPosition = position || "Ponta esquerda";
  const scout = createDefaultScout(selectedPosition);
  const scoutName = getScoutType(selectedPosition) === "goalkeeper" ? "SCOUT DO GOLEIRO" : "SCOUT DO ATLETA DE LINHA";
  return `
    <div class="scout-preview">
      <div class="scout-title-row">
        <div>
          <strong>${scoutName}</strong>
          <span>${selectedPosition}</span>
        </div>
        <small>Arraste cada barra de 0 a 10 conforme o desempenho.</small>
      </div>
      ${renderScoutBars(selectedPosition, scout, "new")}
      ${renderScoutObservationFields()}
    </div>
  `;
}

function ensureSeedAthletes(data) {
  let changed = false;
  athleteSeeds.forEach((seed) => {
    const existing = data.users.find((user) => user.id === seed.id || user.name?.toLowerCase() === seed.name.toLowerCase());
    if (!existing) {
      data.users.push(JSON.parse(JSON.stringify(seed)));
      changed = true;
      return;
    }
    ["school", "position", "age", "birthDate"].forEach((field) => {
      if (!existing[field] && seed[field]) {
        existing[field] = seed[field];
        changed = true;
      }
    });
    if (!existing.cpf || existing.cpf === "00000000002") {
      existing.cpf = seed.cpf;
      changed = true;
    }
    if (!existing.scout) {
      existing.scout = JSON.parse(JSON.stringify(seed.scout));
      changed = true;
    }
  });
  return changed;
}

function normalizeSavedAthleteData(data) {
  let changed = false;
  data.users
    .filter((user) => user.role === "athlete")
    .forEach((athlete) => {
      if (athlete.school && /Helo.+sa Abreu/i.test(athlete.school) && athlete.school !== "Heloísa Abreu") {
        athlete.school = "Heloísa Abreu";
        changed = true;
      }
      const calculatedAge = calculateAgeFromBirthDate(athlete.birthDate);
      if (calculatedAge && athlete.age !== calculatedAge) {
        athlete.age = calculatedAge;
        changed = true;
      }
    });
  return changed;
}

function ensureDefaultEvents(data) {
  if (!Array.isArray(data.events)) data.events = [];
  let changed = false;
  const eventById = new Map(data.events.map((event) => [event.id, event]));
  defaultTeamEvents.forEach((event) => {
    if (!eventById.has(event.id)) {
      data.events.push({ ...event });
      changed = true;
    }
  });
  return changed;
}

function createInitialAuthData() {
  const initial = {
    users: [
      {
        id: "coach-main",
        role: "coach",
        name: "Treinador HeloisaHand",
        cpf: coachCpf,
        password: defaultPassword,
        mustChangePassword: true,
      },
    ],
    notices: [],
    messages: [],
    media: [],
    events: defaultTeamEvents,
    interests: [],
  };
  ensureSeedAthletes(initial);
  return initial;
}

function normalizeAuthData(data) {
  const normalized = data || createInitialAuthData();
  if (!Array.isArray(normalized.users)) normalized.users = [];
  const coach = normalized.users.find((user) => user.role === "coach");
  let changed = false;
  if (!Array.isArray(normalized.media)) {
    normalized.media = [];
    changed = true;
  }
  if (!Array.isArray(normalized.events)) {
    normalized.events = defaultTeamEvents;
    changed = true;
  }
  if (ensureDefaultEvents(normalized)) changed = true;
  if (!Array.isArray(normalized.interests)) {
    normalized.interests = [];
    changed = true;
  }
  if (!Array.isArray(normalized.notices)) {
    normalized.notices = [];
    changed = true;
  }
  if (!Array.isArray(normalized.messages)) {
    normalized.messages = [];
    changed = true;
  }
  if (!Array.isArray(normalized.attendance)) {
    normalized.attendance = [];
    changed = true;
  }
  if (repairObjectText(normalized)) changed = true;
  if (ensureSeedAthletes(normalized)) changed = true;
  if (normalizeSavedAthleteData(normalized)) changed = true;
  if (coachCpf && coach && coach.cpf !== coachCpf) {
    coach.cpf = coachCpf;
    changed = true;
  }
  normalized.users
    .filter((user) => user.role === "athlete")
    .forEach((athlete) => {
      if (!athlete.position) {
        athlete.position = "Ponta esquerda";
        changed = true;
      }
      if (!athlete.scout) {
        athlete.scout = createDefaultScout(athlete.position);
        changed = true;
      }
    });
  if (!normalized.users.some((user) => user.role === "coach")) {
    normalized.users.unshift({
      id: "coach-main",
      role: "coach",
      name: "Treinador HeloisaHand",
      cpf: coachCpf,
      password: defaultPassword,
      mustChangePassword: true,
    });
    changed = true;
  }
  return { data: normalized, changed };
}

function getAuthData() {
  const normalized = normalizeAuthData(authDataCache);
  authDataCache = normalized.data;
  if (normalized.changed) saveAuthData(authDataCache);
  return authDataCache;
}

function saveAuthData(data) {
  authDataCache = data;
  localStorage.setItem(authStoreKey, JSON.stringify(data));
  persistBackendAuthData(data);
}

function getSession() {
  const saved = localStorage.getItem(sessionStoreKey);
  return saved ? JSON.parse(saved) : null;
}

function setSession(user, token = getSession()?.token || "") {
  localStorage.setItem(sessionStoreKey, JSON.stringify({ userId: user.id, role: user.role, token }));
}

function clearSession() {
  localStorage.removeItem(sessionStoreKey);
}

function getRememberedLogins() {
  try {
    return JSON.parse(localStorage.getItem(rememberedLoginKey) || "{}");
  } catch (error) {
    return {};
  }
}

function getRememberedLogin(role) {
  return getRememberedLogins()[role] || null;
}

async function hashLoginPassword(password) {
  if (!crypto?.subtle) return "";
  const bytes = new TextEncoder().encode(password);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function saveRememberedLogin(role, cpf, password) {
  const remembered = getRememberedLogins();
  remembered[role] = { cpf, passwordHash: await hashLoginPassword(password), savedAt: new Date().toISOString() };
  localStorage.setItem(rememberedLoginKey, JSON.stringify(remembered));
}

function clearRememberedLogin(role) {
  const remembered = getRememberedLogins();
  delete remembered[role];
  localStorage.setItem(rememberedLoginKey, JSON.stringify(remembered));
}

function setPendingRemember(role, cpf, enabled) {
  if (!enabled) {
    localStorage.removeItem(pendingRememberKey);
    return;
  }
  localStorage.setItem(pendingRememberKey, JSON.stringify({ role, cpf }));
}

function getPendingRemember() {
  try {
    return JSON.parse(localStorage.getItem(pendingRememberKey) || "null");
  } catch (error) {
    return null;
  }
}

function handleExpiredSession(message = "Sessao expirada. Entre novamente com CPF e senha.") {
  clearSession();
  authDataCache = null;
  renderRoute();
  setTimeout(() => showPortalMessage(message, "error"), 0);
}

function getCurrentUser(role) {
  const session = getSession();
  if (!session || session.role !== role) return null;
  const user = getAuthData().users.find((item) => item.id === session.userId && item.role === role) || null;
  return user;
}

function onlyDigits(value) {
  return String(value || "").replace(/\D/g, "");
}

function formatCpf(cpf) {
  const digits = onlyDigits(cpf).slice(0, 11);
  return digits
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

function formatBirthDate(date) {
  if (!date) return "";
  return new Date(`${date}T00:00:00`).toLocaleDateString("pt-BR");
}

function calculateAgeFromBirthDate(date, reference = new Date()) {
  if (!date) return "";
  const birth = new Date(`${date}T00:00:00`);
  if (Number.isNaN(birth.getTime())) return "";
  let age = reference.getFullYear() - birth.getFullYear();
  const hadBirthday =
    reference.getMonth() > birth.getMonth() ||
    (reference.getMonth() === birth.getMonth() && reference.getDate() >= birth.getDate());
  if (!hadBirthday) age -= 1;
  return String(age);
}

function repairMojibakeText(value) {
  if (typeof value !== "string" || !/[ÃÂâ]/.test(value)) return value;
  let current = value;
  for (let index = 0; index < 3 && /[ÃÂâ]/.test(current); index += 1) {
    const bytes = Uint8Array.from(Array.from(current), (char) => char.charCodeAt(0) & 255);
    const decoded = new TextDecoder("utf-8").decode(bytes);
    if (!decoded || decoded === current || decoded.includes("�")) break;
    current = decoded;
  }
  return current;
}

function repairObjectText(value) {
  let changed = false;
  const visit = (item) => {
    if (!item || typeof item !== "object") return;
    Object.keys(item).forEach((key) => {
      if (typeof item[key] === "string") {
        const repaired = repairMojibakeText(item[key]);
        if (repaired !== item[key]) {
          item[key] = repaired;
          changed = true;
        }
      } else if (typeof item[key] === "object") {
        visit(item[key]);
      }
    });
  };
  visit(value);
  return changed;
}

function showPortalMessage(message, type = "ok") {
  const target = document.querySelector("#portalMessage");
  if (!target) return;
  target.textContent = message;
  target.className = `portal-message ${type}`;
}

function renderAuthGate(role, title, subtitle) {
  const remembered = getRememberedLogin(role);
  const rememberedCpf = remembered?.cpf ? formatCpf(remembered.cpf) : "";
  return `
    <section class="section portal-section">
      <div class="portal-card auth-card">
        <span class="eyebrow">${role === "coach" ? "Area Treinador" : "Area do Atleta"}</span>
        <h2>${title}</h2>
        <p>${subtitle}</p>
        <form id="loginForm" class="form-grid" data-role="${role}">
          <label>CPF<input id="loginId" autocomplete="username" inputmode="numeric" placeholder="000.000.000-00" value="${escapeAttribute(rememberedCpf)}" required /></label>
          <label>Senha<input id="loginPassword" type="password" autocomplete="current-password" placeholder="Digite sua senha" required /></label>
          <label class="remember-login"><input id="rememberCpf" type="checkbox" ${rememberedCpf ? "checked" : ""} /> Lembrar CPF neste aparelho</label>
          <button class="button" type="submit">Entrar</button>
          <div id="portalMessage" class="portal-message"></div>
        </form>
      </div>
    </section>
  `;
}

function renderPasswordChange(user, intro) {
  return `
    <section class="section portal-section">
      <div class="portal-card auth-card">
        <span class="eyebrow">Primeiro acesso</span>
        <h2>Crie sua senha pessoal</h2>
        <p>${intro}</p>
        <form id="changePasswordForm" class="form-grid" data-user-id="${user.id}">
          <label>Nova senha<input id="newPassword" type="password" minlength="4" placeholder="Digite uma nova senha" required /></label>
          <label>Confirmar nova senha<input id="confirmPassword" type="password" minlength="4" placeholder="Repita a nova senha" required /></label>
          <button class="button" type="submit">Salvar nova senha</button>
          <div id="portalMessage" class="portal-message"></div>
        </form>
      </div>
    </section>
  `;
}

function renderAthlete() {
  const user = getCurrentUser("athlete");
  if (!user) {
    return renderAuthGate("athlete", "Acesso do atleta", "Entre usando o CPF completo cadastrado pelo treinador. No primeiro acesso, a senha temporaria e 1234; depois voce cria sua senha pessoal. Atletas sem CPF cadastrado ainda precisam falar com o treinador.");
  }
  if (user.mustChangePassword) {
    return renderPasswordChange(user, "Por seguranca, todo atleta precisa trocar a senha temporaria no primeiro acesso.");
  }
  return `
    <section class="section portal-section">
      <div class="portal-header">
        <div>
          <span class="eyebrow">Area do Atleta</span>
          <h2>Bem-vindo, ${user.name}</h2>
          <p>Consulte comunicados, treinos, presencas e mensagens da comissao tecnica.</p>
        </div>
        <button class="button ghost-dark" data-action="logout">Sair</button>
      </div>
      <div class="athlete-dashboard">
        <article class="portal-card"><h3>Minha ficha</h3><p><strong>CPF:</strong> ${user.cpf ? formatCpf(user.cpf) : "Pendente"}</p>${user.birthDate ? `<p><strong>Nascimento:</strong> ${formatBirthDate(user.birthDate)}</p>` : ""}<p><strong>Posicao:</strong> ${user.position || "A definir"}</p><p><strong>Idade:</strong> ${user.age || "A definir"}</p><p><strong>Status:</strong> ativo</p></article>
        <article class="portal-card"><h3>Meu scout</h3>${renderAthleteScoutSummary(user)}</article>
        <article class="portal-card"><h3>Avisos recentes</h3>${renderAthleteNotices()}</article>
        <article class="portal-card">
          <h3>Chat com treinador</h3>
          <div class="athlete-message-list">${renderAthleteMessages(user)}</div>
          <form id="athleteMessageForm" class="form-grid">
            <textarea id="athleteMessage" placeholder="Escreva uma mensagem para a comissao tecnica"></textarea>
            <button class="button" type="submit">Enviar mensagem</button>
          </form>
        </article>
      </div>
    </section>
  `;
}

function renderAthleteMessages(user) {
  const messages = getAuthData().messages
    .filter((msg) => msg.category !== "external" && (msg.recipientId === "team" || msg.recipientId === user.id || msg.fromId === user.id))
    .slice(-6)
    .reverse();
  return messages.length
    ? messages.map((msg) => `<div class="chat-message ${msg.fromId === user.id ? "sent" : "received"}"><strong>${escapeHtml(msg.from)}</strong><span>${escapeHtml(msg.text)}</span><small>${new Date(msg.createdAt).toLocaleString("pt-BR")}</small></div>`).join("")
    : `<p class="helper-text">Nenhuma conversa ainda.</p>`;
}

function renderAthleteScoutSummary(athlete) {
  const scout = getAthleteScout(athlete);
  const items = getScoutItems(athlete.position);
  const average = items.length ? Math.round((items.reduce((sum, [key]) => sum + Number(scout.scores[key] || 0), 0) / items.length) * 10) / 10 : 0;
  return `
    <p class="score-highlight">${average}</p>
    <p>Media geral da ultima avaliacao.</p>
    ${scout.updatedAt ? `<p><strong>Atualizado:</strong> ${new Date(scout.updatedAt).toLocaleDateString("pt-BR")}</p>` : "<p>Aguardando primeira avaliacao do treinador.</p>"}
    ${scout.updatedAt ? renderScoutReadOnly(athlete) : ""}
    ${scout.notes ? `<p><strong>Pontos positivos:</strong> ${scout.notes}</p>` : ""}
    ${scout.improvements ? `<p><strong>Pontos a melhorar:</strong> ${scout.improvements}</p>` : ""}
  `;
}

function renderAthleteNotices() {
  const notices = getAuthData().notices.slice(-4).reverse();
  if (!notices.length) return `<p>Nenhum aviso publicado ainda.</p>`;
  return notices.map((notice) => `<div class="notice-item"><strong>${notice.title}</strong><span>${notice.text}</span></div>`).join("");
}

function renderCoach() {
  const user = getCurrentUser("coach");
  if (!user) {
    return renderAuthGate("coach", "Acesso do treinador", "Entre com seu CPF autorizado e sua senha de acesso. No primeiro acesso, o sistema exige uma nova senha pessoal.");
  }
  if (user.mustChangePassword) {
    return renderPasswordChange(user, "A senha temporaria deve ser usada apenas uma vez. Crie uma senha pessoal para liberar o painel.");
  }
  return renderCoachDashboard();
}

function renderCoachDashboard(activeTab = "athletes") {
  const tabs = [
    ["athletes", "Atletas"],
    ["events", "Treinos & Jogos"],
    ["interests", "Interessados"],
    ["notices", "Avisos"],
    ["news", "Noticias"],
    ["tryouts", "Seletivas"],
    ["classes", "Aulas"],
    ["supporters", "Apoiadores"],
    ["media", "Fotos & Videos"],
    ["attendance", "Presencas"],
    ["chat", "Chat"],
  ];
  return `
    <section class="coach-shell">
      <div class="coach-topbar">
        <div><span class="eyebrow">Painel interno</span><h2>Area Treinador</h2></div>
        <button class="button ghost-dark" data-action="logout">Sair</button>
      </div>
      <div class="coach-tabs">
        ${tabs.map(([id, label]) => `<button class="${id === activeTab ? "active" : ""}" data-coach-tab="${id}">${label}</button>`).join("")}
      </div>
      <div id="coachPanel">${renderCoachTab(activeTab, getAuthData())}</div>
    </section>
  `;
}

function renderCoachTab(tab, data) {
  const renderers = {
    athletes: () => renderCoachAthletes(data),
    events: () => renderCoachEvents(data),
    interests: () => renderInterestManager(data),
    notices: () => renderNoticeManager(data),
    news: () => renderSimpleManager("Noticias", "Nova noticia", "Titulo da noticia", "Texto da noticia"),
    tryouts: () => renderSimpleManager("Seletivas", "Nova seletiva", "Categoria", "Data, local e criterios"),
    classes: () => renderSimpleManager("Aulas", "Nova aula", "Tema da aula", "Objetivo tecnico"),
    supporters: () => renderSimpleManager("Apoiadores", "Novo apoiador", "Nome do apoiador", "Tipo de apoio"),
    media: () => renderMediaManager(data),
    attendance: () => renderAttendanceManager(data),
    chat: () => renderChatManager(data),
  };
  return (renderers[tab] || renderers.athletes)();
}

function renderCoachEvents(data) {
  const events = getTeamEvents(data);
  return `
    <div class="coach-panel-head calendar-toolbar">
      <h3>Treinos & Jogos</h3>
      <div class="calendar-actions">
        <span class="view-pill active">📅 Calendario</span>
        <span class="view-pill">☰ Lista</span>
        <button class="button" data-action="open-event-form">+ Novo Evento</button>
      </div>
    </div>
    <div id="eventFormWrap" class="portal-card event-form-wrap" hidden>
      <h3>Novo evento da equipe</h3>
      <form id="teamEventForm" class="form-grid">
        <div class="form-grid two">
          <label>Titulo<input id="eventTitle" required placeholder="Ex.: JEMVI 2026" /></label>
          <label>Tipo
            <select id="eventType" required>
              <option value="competition">Competicao</option>
              <option value="friendly">Amistoso</option>
              <option value="training">Treino</option>
              <option value="meeting">Reuniao</option>
            </select>
          </label>
          <label>Data<input id="eventDate" type="date" required /></label>
          <label>Horario<input id="eventTime" type="time" required /></label>
          <label>Local<input id="eventLocation" required placeholder="Ex.: Ginasio do Tancredao" /></label>
          <label>Adversario / Placar curto<input id="eventOpponent" placeholder="Ex.: HAJM x AS" /></label>
        </div>
        <label>Observacoes<textarea id="eventNotes" placeholder="Detalhes para equipe, atletas e familias"></textarea></label>
        <button class="button" type="submit">Salvar evento</button>
        <div id="portalMessage" class="portal-message"></div>
      </form>
    </div>
    ${renderCalendarMonth(events, true)}
    <div class="event-list-panel">
      <h3>Proximos eventos publicados</h3>
      <div class="coach-event-list">
        ${events.length ? events.map(renderCoachEventItem).join("") : `<div class="empty-state compact">Nenhum evento cadastrado ainda.</div>`}
      </div>
    </div>
  `;
}

function renderInterestManager(data) {
  const interests = [...(data.interests || [])].reverse();
  return `
    <div class="coach-panel-head">
      <h3>Interessados (${interests.length})</h3>
      <p class="panel-subtitle">Pedidos enviados pelos botoes das categorias. Use esta fila para responder rapido e acompanhar quem quer entrar no projeto.</p>
    </div>
    <div class="interest-board">
      ${interests.length ? interests.map(renderInterestCard).join("") : `<div class="empty-state compact"><strong>Nenhum interessado ainda.</strong><p>Quando alguém enviar seletiva, aula particular ou dúvida pelo site, aparece aqui.</p></div>`}
    </div>
  `;
}

function renderInterestCard(item) {
  const isTryout = item.type === "seletiva";
  const isClass = item.type === "aula";
  const label = isTryout ? "Seletiva" : isClass ? "Aula particular" : "Dúvida";
  const replySubject = isTryout ? "solicitação para participar da seletiva" : isClass ? "solicitação de aula particular" : "dúvida sobre o Instituto HeloisaHand";
  const reply = `Olá, ${item.name}! Recebi sua ${replySubject} e vou te responder por aqui.`;
  const lessonDate = item.lessonDate ? new Date(`${item.lessonDate}T00:00:00`).toLocaleDateString("pt-BR") : "";
  const lessonDetails = isClass
    ? `
      <div class="interest-lesson-details">
        <strong>Detalhes da aula</strong>
        <span>${escapeHtml(item.lessonPackage || "Duração e valor a definir")}</span>
        <span>Nível: ${escapeHtml(item.lessonLevel || "A definir")}</span>
        <span>Objetivo: ${escapeHtml(item.lessonObjective || "A definir")}</span>
        <span>Agendamento: ${escapeHtml(lessonDate || "Data a definir")} ${escapeHtml(item.lessonTime || "")}</span>
      </div>
    `
    : "";
  return `
    <article class="interest-card ${item.type}">
      <div class="interest-card-head">
        <span>${label}</span>
        <small>${new Date(item.createdAt).toLocaleString("pt-BR")}</small>
      </div>
      <h3>${escapeHtml(item.name)}</h3>
      <p><strong>WhatsApp:</strong> ${escapeHtml(item.phone)}</p>
      <p><strong>Idade:</strong> ${escapeHtml(item.age || "Nao informado")}</p>
      <p><strong>Categoria:</strong> ${escapeHtml(item.category || "A definir")}</p>
      <p><strong>Posição:</strong> ${escapeHtml(item.position || "A definir")}</p>
      ${lessonDetails}
      <p>${escapeHtml(item.message)}</p>
      <div class="interest-actions">
        <a class="button" href="${whatsappLinkTo(item.phone, reply)}" target="_blank" rel="noreferrer">Responder no WhatsApp</a>
        <button type="button" data-action="delete-interest" data-interest-id="${escapeAttribute(item.id)}">Arquivar</button>
      </div>
    </article>
  `;
}

function renderCoachEventItem(event) {
  return `
    <article class="coach-event-item ${event.type}">
      <div>
        <strong>${escapeHtml(event.title)}</strong>
        <span>${new Date(`${event.date}T${event.time}:00`).toLocaleDateString("pt-BR")} • ${escapeHtml(event.time)} • ${escapeHtml(event.location || "Local a definir")}</span>
      </div>
      <div class="event-item-actions">
        <small>${getEventTypeLabel(event.type)}</small>
        <button type="button" data-action="delete-event" data-event-id="${escapeAttribute(event.id)}">Remover</button>
      </div>
    </article>
  `;
}

function renderCoachAthletes(data) {
  const athletes = data.users.filter((user) => user.role === "athlete");
  return `
    <div class="coach-panel-head">
      <h3>Fichas dos Atletas (${athletes.length})</h3>
      <button class="button" data-action="open-athlete-form">+ Novo Atleta</button>
    </div>
    <div id="athleteFormWrap" class="portal-card athlete-form-wrap" hidden>
      <h3>Cadastrar atleta</h3>
      <form id="newAthleteForm" class="form-grid">
        <div class="form-grid two">
          <label>Nome completo<input id="athleteName" required /></label>
          <label>CPF<input id="athleteCpf" placeholder="000.000.000-00" required /></label>
          <label>Idade<input id="athleteAge" type="number" min="5" max="30" /></label>
          <label>Posicao<select id="athletePosition" required>${renderPositionOptions()}</select></label>
        </div>
        <div id="scoutPreview">${renderScoutTemplatePreview()}</div>
        <button class="button" type="submit">Salvar atleta</button>
        <div id="portalMessage" class="portal-message"></div>
      </form>
    </div>
    <div class="athlete-list">
      ${athletes.length ? athletes.map((athlete) => renderAthleteCard(athlete)).join("") : `<div class="empty-state">Nenhum atleta cadastrado ainda. Clique em Novo Atleta para comecar.</div>`}
    </div>
  `;
}

function renderAthleteCard(athlete) {
  const scout = getAthleteScout(athlete);
  return `
    <article class="athlete-card" data-athlete-id="${athlete.id}">
      <div class="athlete-avatar">A</div>
      <div class="athlete-main">
        <div class="athlete-card-top"><h3>${athlete.name}</h3><span class="status-pill">ativo</span></div>
        <p>${athlete.position || "Posicao a definir"} <span>&bull;</span> ${athlete.age || "--"} anos</p>
        ${athlete.school ? `<p class="school-line">${escapeHtml(athlete.school)}</p>` : ""}
        <p class="cpf-line">CPF: ${athlete.cpf ? formatCpf(athlete.cpf) : "pendente"}${athlete.birthDate ? ` | Nascimento: ${formatBirthDate(athlete.birthDate)}` : ""} | Acesso: ${athlete.cpf ? athlete.mustChangePassword ? "troca de senha pendente" : "senha pessoal criada" : "aguardando CPF"}</p>
        <details>
          <summary>Abrir ficha completa e scout</summary>
          <div class="athlete-details">
            <p><strong>Login:</strong> CPF + senha pessoal.</p>
            <p><strong>Primeiro acesso:</strong> senha temporaria com troca obrigatoria.</p>
            ${scout.updatedAt ? `<p><strong>Ultima avaliacao:</strong> ${new Date(scout.updatedAt).toLocaleDateString("pt-BR")}</p>` : ""}
            ${scout.updatedAt ? renderScoutReadOnly(athlete) : ""}
            ${renderScoutControls(athlete)}
          </div>
        </details>
        <div id="edit-${escapeAttribute(athlete.id)}" class="athlete-edit-wrap" hidden>
          ${renderAthleteEditForm(athlete)}
        </div>
      </div>
      <div class="card-actions">
        <button data-action="edit-athlete" data-athlete-id="${athlete.id}">Editar</button>
        <button data-action="reset-athlete-password" data-athlete-id="${athlete.id}">Redefinir acesso</button>
        <button data-action="delete-athlete" data-athlete-id="${athlete.id}">Excluir</button>
      </div>
    </article>
  `;
}

function renderAthleteEditForm(athlete) {
  return `
    <form class="athlete-edit-form form-grid" data-athlete-id="${escapeAttribute(athlete.id)}">
      <div class="form-grid two">
        <label>Nome completo<input name="name" value="${escapeAttribute(athlete.name || "")}" required /></label>
        <label>CPF<input name="cpf" value="${escapeAttribute(formatCpf(athlete.cpf || ""))}" placeholder="000.000.000-00" /></label>
        <label>Data de nascimento<input name="birthDate" type="date" value="${escapeAttribute(athlete.birthDate || "")}" data-age-target="age" /></label>
        <label>Idade<input name="age" type="number" min="5" max="30" value="${escapeAttribute(athlete.age || "")}" readonly /></label>
        <label>Posição<select name="position" required>${renderPositionOptions(athlete.position || "")}</select></label>
        <label>Escola/equipe<input name="school" value="${escapeAttribute(athlete.school || "")}" placeholder="Ex.: Heloísa Abreu" /></label>
      </div>
      <div class="edit-actions">
        <button class="button" type="submit">Salvar alterações</button>
        <button type="button" data-action="cancel-athlete-edit" data-athlete-id="${escapeAttribute(athlete.id)}">Cancelar</button>
      </div>
      <div class="portal-message edit-message"></div>
    </form>
  `;
}

function renderScoutControls(athlete) {
  const scout = getAthleteScout(athlete);
  const scoutName = getScoutType(athlete.position) === "goalkeeper" ? "SCOUT DO GOLEIRO" : "SCOUT DO ATLETA DE LINHA";
  return `
    <form class="scout-form" data-athlete-id="${athlete.id}">
      <div class="scout-title-row">
        <div>
          <strong>${scoutName}</strong>
          <span>${athlete.position || "Posicao a definir"}</span>
        </div>
        <small>Arraste cada barra de 0 a 10 conforme o desempenho.</small>
      </div>
      ${renderScoutBars(athlete.position, scout, athlete.id)}
      ${renderScoutObservationFields(scout)}
      <button class="button" type="submit">Salvar scout</button>
      <div class="portal-message scout-message"></div>
    </form>
  `;
}

function renderScoutObservationFields(scout = { notes: "", improvements: "" }) {
  return `
    <div class="scout-section">
      <h4>FEEDBACK DO ATLETA</h4>
      <div class="scout-notes-grid">
        <label>Pontos positivos / Observacoes<textarea name="notes" placeholder="Ex.: demonstrou evolucao no passe, manteve boa comunicacao e ajudou a equipe defensivamente.">${scout.notes || ""}</textarea></label>
        <label>Pontos a melhorar<textarea name="improvements" placeholder="Ex.: melhorar tomada de decisao, controle emocional, finalizacao ou posicionamento.">${scout.improvements || ""}</textarea></label>
      </div>
    </div>
  `;
}

function renderScoutBars(position, scout, idPrefix) {
  return getScoutTemplate(position)
    .map(
      (section) => `
        <div class="scout-section">
          <h4>${section.title}</h4>
          <div class="scout-grid">
            ${section.items
              .map(([key, label]) => {
                const value = scout.scores[key] ?? 5;
                const outputId = `${idPrefix}-${key}`;
                return `
                  <label class="scout-field">
                    <span>${label}</span>
                    <div class="range-line" style="--score-pct: ${value * 10}%">
                      <em>0</em>
                      <input class="scout-slider" type="range" min="0" max="10" step="1" name="${key}" value="${value}" data-score-output="${outputId}" />
                      <em>10</em>
                      <strong id="score-${outputId}">${value}</strong>
                    </div>
                  </label>
                `;
              })
              .join("")}
          </div>
        </div>
      `,
    )
    .join("");
}

function renderNoticeManager(data) {
  return `
    <div class="coach-panel-head"><h3>Avisos para atletas</h3></div>
    <div class="grid two">
      <div class="portal-card"><h3>Novo aviso</h3><form id="noticeForm" class="form-grid"><label>Titulo<input id="noticeTitle" required /></label><label>Mensagem<textarea id="noticeText" required></textarea></label><button class="button" type="submit">Publicar aviso</button></form></div>
      <div class="portal-card"><h3>Avisos publicados</h3>${data.notices.length ? data.notices.slice().reverse().map((notice) => `<div class="notice-item"><strong>${notice.title}</strong><span>${notice.text}</span></div>`).join("") : "<p>Nenhum aviso publicado.</p>"}</div>
    </div>
  `;
}

function renderAttendanceManager(data) {
  const athletes = data.users.filter((user) => user.role === "athlete").sort((a, b) => a.name.localeCompare(b.name));
  return `
    <div class="coach-panel-head">
      <h3>Presencas</h3>
      <p class="panel-subtitle">Controle presencas, faltas e acompanhe a frequencia de cada atleta nos treinos.</p>
    </div>
    <div class="attendance-table portal-card">
      <div class="attendance-row attendance-head">
        <span>Atleta</span>
        <span>Presencas</span>
        <span>Faltas</span>
        <span>Frequencia</span>
        <span></span>
      </div>
      ${
        athletes.length
          ? athletes.map((athlete) => renderAttendanceRow(athlete, getAttendanceRecord(data, athlete.id))).join("")
          : `<div class="empty-state compact"><strong>Nenhum atleta cadastrado.</strong><p>Cadastre atletas primeiro para controlar a frequencia.</p></div>`
      }
    </div>
  `;
}

function getAttendanceRecord(data, athleteId) {
  return (data.attendance || []).find((item) => item.athleteId === athleteId) || { athleteId, presences: 0, absences: 0, notes: "" };
}

function getAttendanceRate(record) {
  const presences = Number(record.presences || 0);
  const absences = Number(record.absences || 0);
  const total = presences + absences;
  if (!total) return null;
  return Math.round((presences / total) * 100);
}

function renderAttendanceRow(athlete, record) {
  const rate = getAttendanceRate(record);
  const rateClass = rate === null ? "empty" : rate >= 75 ? "good" : rate >= 50 ? "warn" : "danger";
  return `
    <div class="attendance-row">
      <div class="attendance-athlete">
        <strong>${escapeHtml(athlete.name)}</strong>
        <small>${escapeHtml(athlete.position || "Posicao a definir")}</small>
      </div>
      <div class="attendance-count present"><strong>${Number(record.presences || 0)}</strong><small>presencas</small></div>
      <div class="attendance-count absent"><strong>${Number(record.absences || 0)}</strong><small>faltas</small></div>
      <div class="frequency-cell ${rateClass}">
        ${
          rate === null
            ? `<span>Sem dados</span>`
            : `<div class="frequency-bar"><i style="width: ${rate}%"></i></div><strong>${rate}%</strong>`
        }
      </div>
      <button class="attendance-edit-button" type="button" data-action="edit-attendance" data-athlete-id="${escapeAttribute(athlete.id)}" aria-label="Editar presenca de ${escapeAttribute(athlete.name)}">Editar</button>
      <div id="attendance-edit-${escapeAttribute(athlete.id)}" class="attendance-edit-wrap" hidden>
        <form class="attendance-edit-form" data-athlete-id="${escapeAttribute(athlete.id)}">
          <label>Presencas<input name="presences" type="number" min="0" value="${Number(record.presences || 0)}" /></label>
          <label>Faltas<input name="absences" type="number" min="0" value="${Number(record.absences || 0)}" /></label>
          <label class="attendance-notes">Observacoes<textarea name="notes" placeholder="Ex.: faltou por motivo de saude, justificou ausencia, precisa melhorar frequencia...">${escapeHtml(record.notes || "")}</textarea></label>
          <div class="edit-actions">
            <button class="button" type="submit">Salvar frequencia</button>
            <button type="button" data-action="cancel-attendance-edit" data-athlete-id="${escapeAttribute(athlete.id)}">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  `;
}

function renderChatManager(data) {
  const athletes = data.users.filter((user) => user.role === "athlete");
  const messages = data.messages.filter((msg) => msg.category !== "external").slice().reverse();
  const external = [...(data.interests || [])].reverse();
  return `
    <div class="coach-panel-head">
      <h3>Central de Comunicação</h3>
      <p class="panel-subtitle">Converse com atletas cadastrados e acompanhe separados os contatos externos de seletiva, dúvidas e aulas particulares.</p>
    </div>
    <div class="chat-tabs">
      <button class="active" type="button" data-chat-tab="team">Equipe do instituto</button>
      <button type="button" data-chat-tab="external">Novos contatos (${external.length})</button>
    </div>
    <div class="coach-chat-layout" data-chat-panel="team">
      <div class="portal-card chat-compose-card">
        <span class="eyebrow">Chat interno</span>
        <h3>Mensagem para atletas</h3>
        <p id="chatRecipientLabel">Enviando para toda a equipe.</p>
        <form id="coachMessageForm" class="form-grid">
          <input id="coachMessageRecipient" type="hidden" value="team" />
          <input id="coachMessageRecipientName" type="hidden" value="Toda a equipe" />
          <label>Mensagem<textarea id="coachMessage" required placeholder="Escreva um recado para a equipe ou selecione um atleta ao lado."></textarea></label>
          <button class="button" type="submit">Enviar mensagem</button>
        </form>
      </div>
      <aside class="portal-card athlete-chat-sidebar">
        <h3>Atletas</h3>
        <button class="athlete-chat-button active" type="button" data-action="select-chat-athlete" data-athlete-id="team" data-athlete-name="Toda a equipe">
          <span>Todos</span><small>Mensagem coletiva</small>
        </button>
        ${athletes
          .map(
            (athlete) => `
              <button class="athlete-chat-button" type="button" data-action="select-chat-athlete" data-athlete-id="${escapeAttribute(athlete.id)}" data-athlete-name="${escapeAttribute(athlete.name)}">
                <span>${escapeHtml(athlete.name)}</span>
                <small>${escapeHtml(athlete.position || "Atleta")} ${athlete.cpf ? `• ${formatCpf(athlete.cpf)}` : "• CPF pendente"}</small>
              </button>
            `,
          )
          .join("")}
      </aside>
      <div class="portal-card chat-history-card">
        <h3>Conversas da equipe</h3>
        <div class="chat-message-list">
          ${messages.length ? messages.map(renderCoachMessageItem).join("") : "<p>Nenhuma mensagem interna ainda.</p>"}
        </div>
      </div>
    </div>
    <div class="external-inbox" data-chat-panel="external" hidden>
      <div class="portal-card">
        <h3>Mensagens externas</h3>
        <p class="panel-subtitle">Pedidos vindos do site: seletiva, dúvidas e aulas particulares. Use esta área para separar contatos de fora das conversas da equipe.</p>
        <div class="external-inbox-list">
          ${external.length ? external.map(renderExternalMessageItem).join("") : `<div class="empty-state compact"><strong>Nenhuma mensagem externa.</strong><p>Quando alguém preencher um formulário no site, aparece aqui.</p></div>`}
        </div>
      </div>
    </div>
  `;
}

function renderCoachMessageItem(msg) {
  const destination = msg.recipientId === "team" ? "Toda a equipe" : msg.recipientName || "Atleta";
  const direction = msg.from === "Treinador" ? `para ${destination}` : "para treinador";
  return `
    <div class="chat-message ${msg.from === "Treinador" ? "sent" : "received"}">
      <strong>${escapeHtml(msg.from)} <small>${escapeHtml(direction)}</small></strong>
      <span>${escapeHtml(msg.text)}</span>
      <small>${new Date(msg.createdAt).toLocaleString("pt-BR")}</small>
    </div>
  `;
}

function renderExternalMessageItem(item) {
  const typeLabel = item.type === "aula" ? "Aula particular" : item.type === "seletiva" ? "Seletiva" : "Dúvida";
  const reply = `Olá, ${item.name}! Recebi sua mensagem pelo site do Instituto HeloísaHand e vou te responder por aqui.`;
  return `
    <article class="external-message-card ${item.type}">
      <div>
        <span>${typeLabel}</span>
        <small>${new Date(item.createdAt).toLocaleString("pt-BR")}</small>
      </div>
      <h4>${escapeHtml(item.name)}</h4>
      <p>${escapeHtml(item.message || "Sem mensagem.")}</p>
      <small>${escapeHtml(item.phone || "WhatsApp não informado")}</small>
      <a class="button" href="${whatsappLinkTo(item.phone, reply)}" target="_blank" rel="noreferrer">Responder no WhatsApp</a>
    </article>
  `;
}

function renderMediaManager(data) {
  return `
    <div class="coach-panel-head"><h3>Fotos & Videos</h3></div>
    <div class="grid two media-manager">
      <div class="portal-card">
        <h3>Novo item de midia</h3>
        <form id="mediaForm" class="form-grid">
          <label>Titulo<input id="mediaTitle" required placeholder="Ex.: Treino da categoria infantil" /></label>
          <label>Tipo de midia
            <select id="mediaType" required>
              <option value="photo">Foto do computador</option>
              <option value="youtube">Video do YouTube</option>
            </select>
          </label>
          <div id="photoFields">
            <label>Escolher foto<input id="mediaPhoto" type="file" accept="image/*" /></label>
            <p class="helper-text">A foto sera salva na pasta local do site em qualidade original, ate 12 MB.</p>
          </div>
          <div id="youtubeFields" hidden>
            <label>Link do YouTube<input id="mediaYoutube" type="url" placeholder="https://www.youtube.com/watch?v=..." /></label>
            <label>Descricao do video<textarea id="mediaDescription" placeholder="Conte rapidamente o que aparece no video"></textarea></label>
          </div>
          <button class="button" type="submit">Salvar midia</button>
          <div id="portalMessage" class="portal-message"></div>
        </form>
      </div>
      <div class="portal-card">
        <h3>Midias publicadas</h3>
        <div id="coachMediaList" class="media-list"></div>
      </div>
    </div>
  `;
}

function renderMediaCard(item, editable = false) {
  const isVideo = item.type === "youtube";
  const thumb = isVideo ? item.thumbnail : item.src;
  const title = escapeHtml(item.title || "Midia do instituto");
  const description = escapeHtml(item.description || (isVideo ? "Video do canal do instituto" : "Foto publicada pelo treinador"));
  const content = isVideo
    ? `<a class="media-thumb video" href="${escapeAttribute(item.url)}" target="_blank" rel="noreferrer" aria-label="Abrir video ${title} no YouTube"><img src="${escapeAttribute(thumb)}" alt="${title}" /><span>Assistir no YouTube</span></a>`
    : `<a class="media-thumb photo" href="${escapeAttribute(thumb)}" target="_blank" rel="noreferrer" aria-label="Ver foto ${title}"><img src="${escapeAttribute(thumb)}" alt="${title}" /></a>`;
  return `
    <article class="media-card">
      ${content}
      <div class="media-card-body">
        <strong>${title}</strong>
        <span>${description}</span>
      </div>
      ${editable ? `<button class="media-delete" type="button" data-action="delete-media" data-media-id="${escapeAttribute(item.id)}">Remover</button>` : ""}
    </article>
  `;
}

function renderCompactMediaCard(item) {
  const isVideo = item.type === "youtube";
  const thumb = isVideo ? item.thumbnail : item.src;
  const title = escapeHtml(item.title || "Midia do instituto");
  const href = isVideo ? item.url : item.src;
  return `
    <a class="compact-media-card ${isVideo ? "video" : "photo"}" href="${escapeAttribute(href)}" target="_blank" rel="noreferrer">
      <img src="${escapeAttribute(thumb)}" alt="${title}" />
      <span>${title}</span>
    </a>
  `;
}

function renderSimpleManager(title, button, field, textLabel) {
  return `<div class="coach-panel-head"><h3>${title}</h3></div><div class="portal-card"><h3>${button}</h3><form class="form-grid demo-panel-form"><label>${field}<input required /></label><label>${textLabel}<textarea required></textarea></label><button class="button" type="submit">Salvar</button></form></div>`;
}

async function fetchServerMedia() {
  const response = await fetch("/api/media", { cache: "no-store" });
  if (!response.ok) throw new Error("Nao foi possivel carregar as midias.");
  return response.json();
}

async function hydrateMediaViews(path) {
  const needsMedia = path === "/competicoes" || path === "/atletas-em-acao" || document.querySelector("#coachMediaList");
  if (!needsMedia) return;
  try {
    const media = await fetchServerMedia();
    renderCoachMediaList(media);
    renderPublicMediaGallery(media);
    renderCompetitionMedia(media);
    bindInteractions();
  } catch (error) {
    document.querySelectorAll("#coachMediaList, #publicMediaGallery, .media-preview-list").forEach((target) => {
      target.innerHTML = `<div class="empty-state compact"><strong>Midias indisponiveis agora.</strong><p>Verifique se o servidor local esta rodando.</p></div>`;
    });
  }
}

function renderCoachMediaList(media) {
  const target = document.querySelector("#coachMediaList");
  if (!target) return;
  target.innerHTML = media.length ? media.slice().reverse().map((item) => renderMediaCard(item, true)).join("") : "<p>Nenhuma foto ou video publicado ainda.</p>";
}

function renderPublicMediaGallery(media) {
  const target = document.querySelector("#publicMediaGallery");
  if (!target) return;
  target.innerHTML = media.length
    ? media.slice().reverse().map((item) => renderMediaCard(item, false)).join("")
    : `<div class="empty-state"><strong>As fotos e videos serao adicionados em breve!</strong><p>Acompanhe as novidades do instituto.</p></div>`;
}

function renderCompetitionMedia(media) {
  const photos = media.filter((item) => item.type === "photo").reverse();
  const videos = media.filter((item) => item.type === "youtube").reverse();
  const photoTarget = document.querySelector("#competitionPhotos");
  const videoTarget = document.querySelector("#competitionVideos");
  if (photoTarget) photoTarget.innerHTML = photos.length ? photos.map(renderCompactMediaCard).join("") : `<div class="empty-state compact">${photoTarget.dataset.empty}</div>`;
  if (videoTarget) videoTarget.innerHTML = videos.length ? videos.map(renderCompactMediaCard).join("") : `<div class="empty-state compact">${videoTarget.dataset.empty}</div>`;
}

function escapeHtml(value) {
  return String(value || "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

function escapeAttribute(value) {
  return escapeHtml(value);
}

function bindInteractions() {
  document.querySelectorAll(".demo-form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      window.open(whatsappLink("Ola! Preenchi o formulario do site e quero falar com a equipe do Instituto HeloisaHand."), "_blank");
    });
  });
  document.querySelector("#loginForm")?.addEventListener("submit", handleLogin);
  document.querySelector("#changePasswordForm")?.addEventListener("submit", handlePasswordChange);
  document.querySelector("#interestForm")?.addEventListener("submit", handleInterestSubmit);
  document.querySelector("#newAthleteForm")?.addEventListener("submit", handleNewAthlete);
  document.querySelectorAll(".athlete-edit-form").forEach((form) => form.addEventListener("submit", handleAthleteEdit));
  document.querySelector("#athletePosition")?.addEventListener("change", handlePositionPreview);
  document.querySelectorAll("[data-age-target]").forEach((input) => input.addEventListener("change", handleBirthDateAgeUpdate));
  document.querySelector("#noticeForm")?.addEventListener("submit", handleNotice);
  document.querySelector("#teamEventForm")?.addEventListener("submit", handleTeamEvent);
  document.querySelectorAll(".attendance-edit-form").forEach((form) => form.addEventListener("submit", handleAttendanceSave));
  document.querySelector("#mediaForm")?.addEventListener("submit", handleMediaSubmit);
  document.querySelector("#mediaType")?.addEventListener("change", handleMediaTypeChange);
  document.querySelector("#coachMessageForm")?.addEventListener("submit", handleCoachMessage);
  document.querySelector("#athleteMessageForm")?.addEventListener("submit", handleAthleteMessage);
  document.querySelectorAll(".scout-form").forEach((form) => form.addEventListener("submit", handleScoutSave));
  document.querySelectorAll("[data-competition-tab]").forEach((button) => button.addEventListener("click", handleCompetitionTab));
  document.querySelectorAll("[data-chat-tab]").forEach((button) => button.addEventListener("click", handleChatTab));
  startHandballHubRotation();
  bindScoutRangeInputs();
  document.querySelectorAll(".demo-panel-form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("Item salvo no prototipo. Na proxima etapa conectamos ao banco de dados.");
      form.reset();
    });
  });
  document.querySelectorAll("[data-coach-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      app.innerHTML = renderCoachDashboard(button.dataset.coachTab);
      bindInteractions();
    });
  });
  document.querySelectorAll("[data-action]").forEach((button) => button.addEventListener("click", handleAction));
  normalizePortugueseText(document.body);
}

function handleCompetitionTab(event) {
  const tab = event.currentTarget.dataset.competitionTab;
  document.querySelectorAll("[data-competition-tab]").forEach((button) => {
    button.classList.toggle("active", button.dataset.competitionTab === tab);
  });
  document.querySelectorAll("[data-competition-panel]").forEach((panel) => {
    panel.hidden = panel.dataset.competitionPanel !== tab;
  });
}

function handleChatTab(event) {
  const tab = event.currentTarget.dataset.chatTab;
  document.querySelectorAll("[data-chat-tab]").forEach((button) => {
    button.classList.toggle("active", button.dataset.chatTab === tab);
  });
  document.querySelectorAll("[data-chat-panel]").forEach((panel) => {
    panel.hidden = panel.dataset.chatPanel !== tab;
  });
}

function startHandballHubRotation() {
  if (handballHubTimer) {
    clearInterval(handballHubTimer);
    handballHubTimer = null;
  }
  const cards = [...document.querySelectorAll(".hub-card[data-topic-index]")];
  if (!cards.length) return;
  const topics = getHandballTopics();
  handballHubTimer = setInterval(() => {
    cards.forEach((card) => {
      const topic = topics[Number(card.dataset.topicIndex)];
      if (!topic) return;
      const nextIndex = (Number(card.dataset.currentIndex || 0) + 1) % topic.items.length;
      card.dataset.currentIndex = String(nextIndex);
      const text = card.querySelector("[data-hub-rotating-text]");
      if (!text) return;
      text.classList.add("is-changing");
      setTimeout(() => {
        text.textContent = topic.items[nextIndex].short;
        text.classList.remove("is-changing");
      }, 180);
    });
  }, 6500);
}

function openHubModal(title, eyebrow, content) {
  const modal = document.querySelector("#handballHubModal");
  if (!modal) return;
  modal.hidden = false;
  modal.innerHTML = `
    <div class="hub-modal-backdrop" data-action="close-hub-modal"></div>
    <article class="hub-modal-card">
      <button type="button" data-action="close-hub-modal" aria-label="Fechar">×</button>
      <span class="eyebrow">${eyebrow}</span>
      <h3>${title}</h3>
      ${content}
    </article>
  `;
  modal.querySelectorAll("[data-action]").forEach((button) => button.addEventListener("click", handleAction));
}

function openHubTopic(card) {
  const topic = getHandballTopics()[Number(card.dataset.topicIndex)];
  if (!topic) return;
  const index = Number(card.dataset.currentIndex || 0);
  const selected = topic.items[index] || topic.items[0];
  openHubModal(
    selected.short,
    topic.tag,
    `<p>${selected.detail}</p><ul>${topic.items.map((item) => `<li>${item.short}</li>`).join("")}</ul>`,
  );
}

function openPositionTip(card) {
  const item = getPositionTips()[Number(card.dataset.positionIndex)];
  if (!item) return;
  openHubModal(
    `Plano de evolução: ${item.position}`,
    "Dicas por posição",
    `<ul>${item.tips.map((tip) => `<li>${tip}</li>`).join("")}</ul>`,
  );
}

function bindScoutRangeInputs() {
  document.querySelectorAll("[data-score-output]").forEach((range) => {
    range.addEventListener("input", () => {
      const output = document.querySelector(`#score-${range.dataset.scoreOutput}`);
      if (output) output.textContent = range.value;
      range.closest(".range-line")?.style.setProperty("--score-pct", `${Number(range.value) * 10}%`);
    });
  });
}

async function handleLogin(event) {
  event.preventDefault();
  const role = event.currentTarget.dataset.role;
  const login = onlyDigits(document.querySelector("#loginId").value);
  const password = document.querySelector("#loginPassword").value;
  const remember = document.querySelector("#rememberCpf")?.checked || false;
  if (login.length !== 11) {
    showPortalMessage("Digite um CPF valido com 11 numeros.", "error");
    return;
  }
  if (!remember) clearRememberedLogin(role);
  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ role, cpf: login, password }),
    });
    const payload = await response.json();
    if (!response.ok) throw new Error(payload.error || "Login ou senha invalidos.");
    authDataCache = payload.data;
    const user = authDataCache.users.find((item) => item.id === payload.session.userId);
    setSession(user, payload.token);
    setPendingRemember(role, login, remember && user?.mustChangePassword);
    if (remember && password !== defaultPassword && !user?.mustChangePassword) {
      await saveRememberedLogin(role, login, password);
    }
    renderRoute();
  } catch (error) {
    if (await tryRestoreRememberedLogin(role, login, password, remember)) return;
    showPortalMessage(`${error.message} Se for primeiro acesso, confira se o CPF esta cadastrado e use a senha 1234.`, "error");
  }
}

async function tryRestoreRememberedLogin(role, cpf, password, remember) {
  const remembered = getRememberedLogin(role);
  if (!remembered || remembered.cpf !== cpf || !remembered.passwordHash) return false;
  const typedHash = await hashLoginPassword(password);
  if (typedHash !== remembered.passwordHash) return false;
  try {
    const loginResponse = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ role, cpf, password: defaultPassword }),
    });
    const loginPayload = await loginResponse.json();
    if (!loginResponse.ok) return false;
    authDataCache = loginPayload.data;
    const user = authDataCache.users.find((item) => item.id === loginPayload.session.userId);
    setSession(user, loginPayload.token);
    const changeResponse = await fetch("/api/change-password", {
      method: "POST",
      headers: { "Content-Type": "application/json", ...getAuthHeaders() },
      body: JSON.stringify({ password }),
    });
    const changePayload = await changeResponse.json();
    if (!changeResponse.ok) return false;
    authDataCache = changePayload.data;
    const restoredUser = authDataCache.users.find((item) => item.id === loginPayload.session.userId);
    setSession(restoredUser);
    if (remember) await saveRememberedLogin(role, cpf, password);
    renderRoute();
    setTimeout(() => showPortalMessage("Acesso recuperado neste aparelho. Sua senha pessoal foi preservada.", "ok"), 0);
    return true;
  } catch (error) {
    return false;
  }
}

function handlePositionPreview(event) {
  const preview = document.querySelector("#scoutPreview");
  if (preview) preview.innerHTML = renderScoutTemplatePreview(event.currentTarget.value);
  bindScoutRangeInputs();
}

function handleBirthDateAgeUpdate(event) {
  const form = event.currentTarget.closest("form");
  const ageInput = form?.elements.age;
  if (ageInput) ageInput.value = calculateAgeFromBirthDate(event.currentTarget.value);
}

async function handlePasswordChange(event) {
  event.preventDefault();
  const userId = event.currentTarget.dataset.userId;
  const password = document.querySelector("#newPassword").value;
  const confirmation = document.querySelector("#confirmPassword").value;
  if (password === defaultPassword) {
    showPortalMessage("Escolha uma senha diferente da senha temporaria.", "error");
    return;
  }
  if (password !== confirmation) {
    showPortalMessage("As senhas nao conferem.", "error");
    return;
  }
  try {
    const response = await fetch("/api/change-password", {
      method: "POST",
      headers: { "Content-Type": "application/json", ...getAuthHeaders() },
      body: JSON.stringify({ password }),
    });
    const payload = await response.json();
    if (response.status === 401) {
      handleExpiredSession();
      return;
    }
    if (!response.ok) throw new Error(payload.error || "Nao foi possivel trocar a senha.");
    authDataCache = payload.data;
    const user = authDataCache.users.find((item) => item.id === userId);
    setSession(user);
    const pendingRemember = getPendingRemember();
    if (pendingRemember?.role === user?.role && pendingRemember?.cpf === onlyDigits(user?.cpf)) {
      await saveRememberedLogin(user.role, onlyDigits(user.cpf), password);
      localStorage.removeItem(pendingRememberKey);
    }
    renderRoute();
  } catch (error) {
    showPortalMessage(error.message, "error");
  }
}

function openInterestForm(type) {
  const wrap = document.querySelector("#interestFormWrap");
  if (!wrap) return;
  wrap.hidden = false;
  wrap.innerHTML = renderInterestForm(type);
  bindInteractions();
  wrap.scrollIntoView({ behavior: "smooth", block: "center" });
}

function openTrainingForm(type) {
  const wrap = document.querySelector("#trainingFormWrap");
  if (!wrap) return;
  wrap.hidden = false;
  wrap.innerHTML = renderInterestForm(type);
  bindInteractions();
  wrap.scrollIntoView({ behavior: "smooth", block: "center" });
}

function handleInterestSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const type = form.dataset.interestType;
  const item = {
    id: `interest-${Date.now()}`,
    type,
    name: document.querySelector("#interestName").value.trim(),
    phone: document.querySelector("#interestPhone").value.trim(),
    age: document.querySelector("#interestAge").value.trim(),
    category: document.querySelector("#interestCategory").value,
    position: document.querySelector("#interestPosition")?.value || "",
    lessonLevel: document.querySelector("#lessonLevel")?.value || "",
    lessonObjective: document.querySelector("#lessonObjective")?.value || "",
    lessonPackage: document.querySelector("#lessonPackage")?.value || "",
    lessonDate: document.querySelector("#lessonDate")?.value || "",
    lessonTime: document.querySelector("#lessonTime")?.value || "",
    message: document.querySelector("#interestMessage").value.trim(),
    createdAt: new Date().toISOString(),
  };
  if (type === "aula" && !item.lessonPackage) {
    const feedback = document.querySelector("#interestFeedback");
    if (feedback) feedback.textContent = "Escolha uma duração e valor para a aula particular.";
    return;
  }
  fetch("/api/interests", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  }).catch(() => {
    const data = getAuthData();
    data.interests.push(item);
    saveAuthData(data);
  });

  const typeLabel = type === "seletiva" ? "participar da seletiva" : type === "aula" ? "solicitar aula particular" : "tirar dúvidas";
  const whatsappMessage = [
    `Novo interessado no HeloisaHand Connect: ${item.name}`,
    `Tipo: ${typeLabel}`,
    `WhatsApp: ${item.phone}`,
    item.age ? `Idade: ${item.age}` : "",
    item.category ? `Categoria: ${item.category}` : "",
    item.position ? `Posição: ${item.position}` : "",
    item.lessonLevel ? `Nível atual: ${item.lessonLevel}` : "",
    item.lessonObjective ? `Objetivo: ${item.lessonObjective}` : "",
    item.lessonPackage ? `Duração e valor: ${item.lessonPackage}` : "",
    item.lessonDate ? `Data desejada: ${new Date(`${item.lessonDate}T00:00:00`).toLocaleDateString("pt-BR")}` : "",
    item.lessonTime ? `Horário desejado: ${item.lessonTime}` : "",
    `Mensagem: ${item.message}`,
  ].filter(Boolean).join("\n");

  const feedback = document.querySelector("#interestFeedback");
  if (feedback) feedback.textContent = "Pedido registrado! Vamos abrir o WhatsApp com a mensagem pronta para agilizar seu atendimento.";
  window.open(whatsappLink(whatsappMessage), "_blank");
  form.reset();
}

function handleNewAthlete(event) {
  event.preventDefault();
  const data = getAuthData();
  const cpf = onlyDigits(document.querySelector("#athleteCpf").value);
  if (cpf.length !== 11) {
    showPortalMessage("CPF precisa ter 11 numeros.", "error");
    return;
  }
  if (data.users.some((user) => user.cpf === cpf)) {
    showPortalMessage("Ja existe um atleta cadastrado com este CPF.", "error");
    return;
  }
  const form = event.currentTarget;
  const position = document.querySelector("#athletePosition").value;
  const scout = createDefaultScout(position);
  Object.keys(scout.scores).forEach((key) => {
    scout.scores[key] = Number(form.elements[key]?.value || 5);
  });
  scout.notes = form.elements.notes.value.trim();
  scout.improvements = form.elements.improvements.value.trim();
  scout.updatedAt = new Date().toISOString();
  data.users.push({
    id: `athlete-${Date.now()}`,
    role: "athlete",
    name: document.querySelector("#athleteName").value.trim(),
    cpf,
    age: document.querySelector("#athleteAge").value,
    position,
    scout,
    password: defaultPassword,
    mustChangePassword: true,
  });
  saveAuthData(data);
  app.innerHTML = renderCoachDashboard("athletes");
  bindInteractions();
}

function handleAthleteEdit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = getAuthData();
  const athlete = data.users.find((user) => user.id === form.dataset.athleteId);
  if (!athlete) return;

  const cpf = onlyDigits(form.elements.cpf.value);
  if (cpf && cpf.length !== 11) {
    const message = form.querySelector(".edit-message");
    if (message) {
      message.textContent = "CPF precisa ter 11 numeros ou ficar em branco.";
      message.classList.add("error");
    }
    return;
  }
  if (cpf && data.users.some((user) => user.id !== athlete.id && user.cpf === cpf)) {
    const message = form.querySelector(".edit-message");
    if (message) {
      message.textContent = "Ja existe outro atleta com este CPF.";
      message.classList.add("error");
    }
    return;
  }

  const previousType = getScoutType(athlete.position);
  athlete.name = form.elements.name.value.trim();
  athlete.cpf = cpf;
  athlete.birthDate = form.elements.birthDate.value;
  athlete.age = calculateAgeFromBirthDate(athlete.birthDate) || form.elements.age.value;
  athlete.position = form.elements.position.value;
  athlete.school = form.elements.school.value.trim();

  if (previousType !== getScoutType(athlete.position)) {
    athlete.scout = createDefaultScout(athlete.position);
  }

  saveAuthData(data);
  app.innerHTML = renderCoachDashboard("athletes");
  bindInteractions();
}

function handleNotice(event) {
  event.preventDefault();
  const data = getAuthData();
  data.notices.push({ title: document.querySelector("#noticeTitle").value.trim(), text: document.querySelector("#noticeText").value.trim(), createdAt: new Date().toISOString() });
  saveAuthData(data);
  app.innerHTML = renderCoachDashboard("notices");
  bindInteractions();
}

function handleTeamEvent(event) {
  event.preventDefault();
  const data = getAuthData();
  data.events.push({
    id: `event-${Date.now()}`,
    title: document.querySelector("#eventTitle").value.trim(),
    type: document.querySelector("#eventType").value,
    date: document.querySelector("#eventDate").value,
    time: document.querySelector("#eventTime").value,
    location: document.querySelector("#eventLocation").value.trim(),
    opponent: document.querySelector("#eventOpponent").value.trim(),
    notes: document.querySelector("#eventNotes").value.trim(),
  });
  saveAuthData(data);
  app.innerHTML = renderCoachDashboard("events");
  bindInteractions();
}

function openEventForm(date = "") {
  const wrap = document.querySelector("#eventFormWrap");
  if (!wrap) return;
  wrap.hidden = false;
  const dateInput = document.querySelector("#eventDate");
  const timeInput = document.querySelector("#eventTime");
  if (dateInput && date) dateInput.value = date;
  if (timeInput && !timeInput.value) timeInput.value = "08:00";
  document.querySelector("#eventTitle")?.focus();
  wrap.scrollIntoView({ behavior: "smooth", block: "start" });
}

function handleAttendanceSave(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = getAuthData();
  if (!Array.isArray(data.attendance)) data.attendance = [];
  const athleteId = form.dataset.athleteId;
  const presences = Math.max(0, Number(form.elements.presences.value || 0));
  const absences = Math.max(0, Number(form.elements.absences.value || 0));
  const notes = form.elements.notes.value.trim();
  const existing = data.attendance.find((item) => item.athleteId === athleteId);
  const record = { athleteId, presences, absences, notes, updatedAt: new Date().toISOString() };
  if (existing) {
    Object.assign(existing, record);
  } else {
    data.attendance.push(record);
  }
  saveAuthData(data);
  app.innerHTML = renderCoachDashboard("attendance");
  bindInteractions();
}

function handleMediaTypeChange(event) {
  const isPhoto = event.currentTarget.value === "photo";
  document.querySelector("#photoFields").hidden = !isPhoto;
  document.querySelector("#youtubeFields").hidden = isPhoto;
}

function handleMediaSubmit(event) {
  event.preventDefault();
  const type = document.querySelector("#mediaType").value;
  if (type === "photo") {
    savePhotoMedia();
    return;
  }
  saveYoutubeMedia();
}

async function savePhotoMedia() {
  const file = document.querySelector("#mediaPhoto").files[0];
  if (!file) {
    showPortalMessage("Escolha uma foto do seu computador.", "error");
    return;
  }
  if (!file.type.startsWith("image/")) {
    showPortalMessage("Selecione um arquivo de imagem valido.", "error");
    return;
  }
  if (file.size > 12 * 1024 * 1024) {
    showPortalMessage("Use uma foto com ate 12 MB.", "error");
    return;
  }
  const formData = new FormData();
  formData.append("title", document.querySelector("#mediaTitle").value.trim());
  formData.append("photo", file);
  try {
    const response = await fetch("/api/media/photo", { method: "POST", body: formData });
    const payload = await response.json();
    if (!response.ok) throw new Error(payload.error || "Nao foi possivel salvar a foto.");
    app.innerHTML = renderCoachDashboard("media");
    bindInteractions();
    hydrateMediaViews("/treinador");
  } catch (error) {
    showPortalMessage(error.message, "error");
  }
}

async function saveYoutubeMedia() {
  const url = document.querySelector("#mediaYoutube").value.trim();
  const videoId = getYoutubeVideoId(url);
  if (!videoId) {
    showPortalMessage("Cole um link valido do YouTube.", "error");
    return;
  }
  try {
    const response = await fetch("/api/media/youtube", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: document.querySelector("#mediaTitle").value.trim(),
        description: document.querySelector("#mediaDescription").value.trim(),
        url,
      }),
    });
    const payload = await response.json();
    if (!response.ok) throw new Error(payload.error || "Nao foi possivel salvar o video.");
    app.innerHTML = renderCoachDashboard("media");
    bindInteractions();
    hydrateMediaViews("/treinador");
  } catch (error) {
    showPortalMessage(error.message, "error");
  }
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

function handleCoachMessage(event) {
  event.preventDefault();
  const data = getAuthData();
  const recipientId = document.querySelector("#coachMessageRecipient")?.value || "team";
  const recipientName = document.querySelector("#coachMessageRecipientName")?.value || "Toda a equipe";
  data.messages.push({
    category: "internal",
    from: "Treinador",
    fromId: "coach-main",
    recipientId,
    recipientName,
    text: document.querySelector("#coachMessage").value.trim(),
    createdAt: new Date().toISOString(),
  });
  saveAuthData(data);
  app.innerHTML = renderCoachDashboard("chat");
  bindInteractions();
}

function handleScoutSave(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = getAuthData();
  const athlete = data.users.find((user) => user.id === form.dataset.athleteId);
  if (!athlete) return;
  const scout = createDefaultScout(athlete.position);
  Object.keys(scout.scores).forEach((key) => {
    scout.scores[key] = Number(form.elements[key]?.value || 0);
  });
  scout.notes = form.elements.notes.value.trim();
  scout.improvements = form.elements.improvements.value.trim();
  scout.updatedAt = new Date().toISOString();
  athlete.scout = scout;
  saveAuthData(data);
  const message = form.querySelector(".scout-message");
  if (message) message.textContent = "Scout salvo com sucesso.";
}

async function handleAthleteMessage(event) {
  event.preventDefault();
  try {
    const response = await fetch("/api/athlete-message", {
      method: "POST",
      headers: { "Content-Type": "application/json", ...getAuthHeaders() },
      body: JSON.stringify({ text: document.querySelector("#athleteMessage").value.trim() }),
    });
    const payload = await response.json();
    if (!response.ok) throw new Error(payload.error || "Nao foi possivel enviar a mensagem.");
    authDataCache = payload.data;
    renderRoute();
  } catch (error) {
    showPortalMessage(error.message, "error");
  }
}

function handleAction(event) {
  const action = event.currentTarget.dataset.action;
  if (action === "open-hub-topic") {
    openHubTopic(event.currentTarget);
  }
  if (action === "open-position-tip") {
    openPositionTip(event.currentTarget);
  }
  if (action === "close-hub-modal") {
    const modal = document.querySelector("#handballHubModal");
    if (modal) modal.hidden = true;
  }
  if (action === "logout") {
    clearSession();
    renderRoute();
  }
  if (action === "open-athlete-form") {
    document.querySelector("#athleteFormWrap").hidden = false;
  }
  if (action === "copy-pix") {
    navigator.clipboard?.writeText(pixPayload);
    const feedback = document.querySelector("#pixFeedback");
    if (feedback) feedback.textContent = "Pix copia e cola copiado.";
  }
  if (action === "open-event-form") {
    openEventForm();
  }
  if (action === "select-event-date") {
    openEventForm(event.currentTarget.dataset.eventDate);
  }
  if (action === "edit-attendance") {
    const wrap = document.querySelector(`#attendance-edit-${event.currentTarget.dataset.athleteId}`);
    if (wrap) {
      document.querySelectorAll(".attendance-edit-wrap").forEach((item) => {
        if (item !== wrap) item.hidden = true;
      });
      wrap.hidden = false;
      wrap.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
  if (action === "cancel-attendance-edit") {
    const wrap = document.querySelector(`#attendance-edit-${event.currentTarget.dataset.athleteId}`);
    if (wrap) wrap.hidden = true;
  }
  if (action === "open-interest-form") {
    openInterestForm(event.currentTarget.dataset.interestType || "seletiva");
  }
  if (action === "open-training-form") {
    openTrainingForm(event.currentTarget.dataset.interestType || "seletiva");
  }
  if (action === "select-lesson-package") {
    document.querySelectorAll(".lesson-package-card").forEach((card) => card.classList.remove("selected"));
    event.currentTarget.classList.add("selected");
    const lessonPackage = document.querySelector("#lessonPackage");
    if (lessonPackage) {
      lessonPackage.value = `${event.currentTarget.dataset.packageLabel} - ${event.currentTarget.dataset.packagePrice}`;
    }
    const feedback = document.querySelector("#interestFeedback");
    if (feedback) feedback.textContent = "";
  }
  if (action === "edit-athlete") {
    const wrap = document.querySelector(`#edit-${event.currentTarget.dataset.athleteId}`);
    if (wrap) {
      document.querySelectorAll(".athlete-edit-wrap").forEach((item) => {
        if (item !== wrap) item.hidden = true;
      });
      wrap.hidden = false;
      wrap.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
  if (action === "cancel-athlete-edit") {
    const wrap = document.querySelector(`#edit-${event.currentTarget.dataset.athleteId}`);
    if (wrap) wrap.hidden = true;
  }
  if (action === "select-chat-athlete") {
    document.querySelectorAll(".athlete-chat-button").forEach((button) => button.classList.remove("active"));
    event.currentTarget.classList.add("active");
    const recipient = document.querySelector("#coachMessageRecipient");
    const recipientName = document.querySelector("#coachMessageRecipientName");
    const label = document.querySelector("#chatRecipientLabel");
    if (recipient) recipient.value = event.currentTarget.dataset.athleteId;
    if (recipientName) recipientName.value = event.currentTarget.dataset.athleteName;
    if (label) {
      label.textContent = event.currentTarget.dataset.athleteId === "team"
        ? "Enviando para toda a equipe."
        : `Conversa individual com ${event.currentTarget.dataset.athleteName}.`;
    }
    document.querySelector("#coachMessage")?.focus();
  }
  if (action === "reset-athlete-password") {
    const data = getAuthData();
    const athlete = data.users.find((user) => user.id === event.currentTarget.dataset.athleteId);
    athlete.password = defaultPassword;
    athlete.mustChangePassword = true;
    saveAuthData(data);
    app.innerHTML = renderCoachDashboard("athletes");
    bindInteractions();
  }
  if (action === "delete-athlete") {
    const data = getAuthData();
    data.users = data.users.filter((user) => user.id !== event.currentTarget.dataset.athleteId);
    saveAuthData(data);
    app.innerHTML = renderCoachDashboard("athletes");
    bindInteractions();
  }
  if (action === "delete-media") {
    fetch(`/api/media/${encodeURIComponent(event.currentTarget.dataset.mediaId)}`, { method: "DELETE" }).then(() => {
      app.innerHTML = renderCoachDashboard("media");
      bindInteractions();
      hydrateMediaViews("/treinador");
    });
  }
  if (action === "delete-event") {
    const data = getAuthData();
    data.events = data.events.filter((item) => item.id !== event.currentTarget.dataset.eventId);
    saveAuthData(data);
    app.innerHTML = renderCoachDashboard("events");
    bindInteractions();
  }
  if (action === "delete-interest") {
    const data = getAuthData();
    data.interests = data.interests.filter((item) => item.id !== event.currentTarget.dataset.interestId);
    saveAuthData(data);
    app.innerHTML = renderCoachDashboard("interests");
    bindInteractions();
  }
}
