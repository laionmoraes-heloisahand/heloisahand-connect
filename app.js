const phone = "5527999377026";
const authStoreKey = "heloisahand_auth_v2";
const sessionStoreKey = "heloisahand_session_v2";
const rememberedLoginKey = "heloisahand_remembered_login_v1";
const passwordProofKey = "heloisahand_password_proofs_v1";
const pendingRememberKey = "heloisahand_pending_remember_v1";
const defaultPassword = "1234";
const coachCpf = "";
const pixKey = "lalves.unimed@gmail.com";
const pixPayload = "00020126450014br.gov.bcb.pix0123lalves.unimed@gmail.com5204000053039865802BR5914LAIONEL MORAES6007VITORIA62130509HHCONNECT6304EAA6";
let quizState = null;

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

const sponsorSeeds = [
  { name: "Espaço disponível", tier: "Patrocinador Ouro", text: "Sua empresa pode apoiar transporte, uniformes e competições.", cta: "Quero patrocinar" },
  { name: "Apoiador local", tier: "Cota Prata", text: "Ajude o instituto a manter materiais e treinos semanais.", cta: "Falar com o instituto" },
  { name: "Parceiro social", tier: "Cota Bronze", text: "Apoie campanhas pontuais e apareça no mural de parceiros.", cta: "Conhecer cotas" },
];

const campaignSeeds = [
  { title: "Bolas novas para os treinos", goal: 1200, raised: 360, text: "Meta para comprar bolas e materiais de treino para todas as categorias." },
  { title: "Transporte para competições", goal: 2500, raised: 740, text: "Ajude a levar nossos atletas aos jogos fora da comunidade." },
];

const productSeeds = [
  { id: "product-camisa-oficial", name: "Camisa oficial HeloisaHand", category: "Uniforme", price: 79.9, emoji: "👕", description: "Camisa para atletas, famílias e apoiadores vestirem o projeto.", active: true },
  { id: "product-shorts-treino", name: "Shorts de treino", category: "Uniforme", price: 49.9, emoji: "🩳", description: "Shorts confortável para treinos e jogos internos.", active: true },
  { id: "product-bone", name: "Boné HeloisaHand", category: "Acessório", price: 39.9, emoji: "🧢", description: "Boné do instituto para apoiar dentro e fora da quadra.", active: true },
  { id: "product-meiao", name: "Meião esportivo", category: "Treino", price: 24.9, emoji: "🧦", description: "Meião para treinos, jogos e uniforme da equipe.", active: true },
];

const productCatalogOptions = [
  { label: "Camisa feminina", category: "Uniforme", emoji: "👕" },
  { label: "Camisa masculina", category: "Uniforme", emoji: "👕" },
  { label: "Short feminino", category: "Uniforme", emoji: "🩳" },
  { label: "Short masculino", category: "Uniforme", emoji: "🩳" },
  { label: "Boné", category: "Acessório", emoji: "🧢" },
  { label: "Meião esportivo", category: "Treino", emoji: "🧦" },
  { label: "Agasalho esportivo", category: "Uniforme", emoji: "🧥" },
  { label: "Munhequeira", category: "Acessório", emoji: "🎽" },
  { label: "Produto livre", category: "Livre", emoji: "🛒" },
];

const quizQuestionSeeds = [
  { id: "quiz-handball-1", scope: "handball", level: "facil", question: "Quantos jogadores de cada equipe ficam em quadra no handebol?", options: ["5", "6", "7", "8"], answerIndex: 2, explanation: "Uma equipe joga com 7 atletas em quadra: 6 jogadores de linha e 1 goleiro.", active: true },
  { id: "quiz-handball-2", scope: "handball", level: "facil", question: "Qual e o tempo oficial de uma partida adulta de handebol?", options: ["2 tempos de 20 minutos", "2 tempos de 25 minutos", "2 tempos de 30 minutos", "4 tempos de 10 minutos"], answerIndex: 2, explanation: "No adulto, o jogo tem dois tempos de 30 minutos.", active: true },
  { id: "quiz-handball-3", scope: "handball", level: "facil", question: "Qual jogador pode defender dentro da area do gol?", options: ["Pivo", "Armador central", "Goleiro", "Ponta"], answerIndex: 2, explanation: "O goleiro e o unico que atua dentro da area do gol para defender.", active: true },
  { id: "quiz-handball-4", scope: "handball", level: "medio", question: "Depois de receber a bola parado, quantos passos o atleta pode dar sem quicar?", options: ["1 passo", "2 passos", "3 passos", "4 passos"], answerIndex: 2, explanation: "A regra permite ate 3 passos com a bola sem driblar.", active: true },
  { id: "quiz-handball-5", scope: "handball", level: "medio", question: "Qual posicao costuma jogar infiltrado perto da area adversaria?", options: ["Pivo", "Goleiro", "Ponta", "Armador direito"], answerIndex: 0, explanation: "O pivo atua entre a defesa adversaria, abrindo espacos e finalizando perto da area.", active: true },
  { id: "quiz-handball-6", scope: "handball", level: "medio", question: "O que e um tiro de 7 metros?", options: ["Cobranca lateral", "Penalidade cobrada da marca de 7 metros", "Reposicao do goleiro", "Inicio de jogo"], answerIndex: 1, explanation: "O tiro de 7 metros e uma penalidade parecida com o penalti no futebol.", active: true },
  { id: "quiz-handball-7", scope: "handball", level: "dificil", question: "Qual sistema defensivo usa uma linha com seis jogadores proxima a area?", options: ["3:3", "5:1", "6:0", "4:2"], answerIndex: 2, explanation: "No 6:0, os seis defensores formam uma linha proxima a area.", active: true },
  { id: "quiz-handball-8", scope: "handball", level: "dificil", question: "Em uma exclusao temporaria, por quanto tempo o atleta fica fora?", options: ["30 segundos", "1 minuto", "2 minutos", "5 minutos"], answerIndex: 2, explanation: "A punicao de exclusao temporaria dura 2 minutos.", active: true },
  { id: "quiz-handball-9", scope: "handball", level: "dificil", question: "O que significa jogo passivo?", options: ["Ataque sem tentativa clara de finalizar", "Defesa muito agressiva", "Goleiro fora da area", "Troca obrigatoria"], answerIndex: 0, explanation: "Jogo passivo acontece quando o ataque demora sem demonstrar intencao real de finalizar.", active: true },
  { id: "quiz-team-1", scope: "team", level: "facil", question: "Qual e a sigla usada pela nossa equipe nas competicoes?", options: ["HH", "HAJM", "IHH", "HLC"], answerIndex: 1, explanation: "Nas tabelas, nossa equipe aparece como HAJM.", active: true },
  { id: "quiz-team-2", scope: "team", level: "facil", question: "Qual esporte move o Instituto HeloisaHand?", options: ["Volei", "Basquete", "Handebol", "Futsal"], answerIndex: 2, explanation: "O instituto usa o handebol como ferramenta de educacao, disciplina e oportunidade.", active: true },
  { id: "quiz-team-3", scope: "team", level: "medio", question: "Qual faixa etaria principal o projeto atende?", options: ["7 a 10 anos", "11 a 17 anos", "18 a 25 anos", "Todas as idades"], answerIndex: 1, explanation: "O projeto e voltado principalmente para adolescentes de 11 a 17 anos.", active: true },
];

quizQuestionSeeds.push(
  { id: "quiz-handball-facil-4", scope: "handball", level: "facil", question: "Qual objeto e usado para marcar gols no handebol?", options: ["Raquete", "Bola", "Taco", "Disco"], answerIndex: 1, explanation: "O handebol e jogado com bola, usando passes, dribles e arremessos.", active: true },
  { id: "quiz-handball-facil-5", scope: "handball", level: "facil", question: "Qual e o principal objetivo de uma equipe no handebol?", options: ["Fazer gols", "Manter posse para sempre", "Derrubar o adversario", "Chutar para fora"], answerIndex: 0, explanation: "O objetivo e marcar mais gols que o adversario.", active: true },
  { id: "quiz-handball-facil-6", scope: "handball", level: "facil", question: "Onde o goleiro costuma atuar?", options: ["No banco", "Na area do gol", "Na lateral", "No meio da torcida"], answerIndex: 1, explanation: "O goleiro atua principalmente dentro da area do gol.", active: true },
  { id: "quiz-handball-facil-7", scope: "handball", level: "facil", question: "Qual fundamento ajuda a levar a bola pelo chao?", options: ["Drible", "Bloqueio", "Saida de bola", "Defesa baixa"], answerIndex: 0, explanation: "O drible e o quique da bola usado para progredir em quadra.", active: true },
  { id: "quiz-handball-facil-8", scope: "handball", level: "facil", question: "Qual posicao joga nas laterais da quadra e costuma finalizar de angulos fechados?", options: ["Ponta", "Goleiro", "Tecnico", "Arbitro"], answerIndex: 0, explanation: "Os pontas jogam abertos e precisam finalizar mesmo com pouco angulo.", active: true },
  { id: "quiz-handball-facil-9", scope: "handball", level: "facil", question: "O handebol e um esporte coletivo ou individual?", options: ["Individual", "Coletivo", "Somente de dupla", "Sem equipe"], answerIndex: 1, explanation: "Handebol e coletivo: depende de cooperacao, passes, defesa e estrategia.", active: true },
  { id: "quiz-handball-facil-10", scope: "handball", level: "facil", question: "Curiosidade: o handebol moderno ficou famoso principalmente em qual tipo de quadra?", options: ["Quadra coberta", "Campo de areia apenas", "Piscina", "Pista de corrida"], answerIndex: 0, explanation: "O handebol moderno se consolidou como esporte de quadra coberta.", active: true },
  { id: "quiz-handball-medio-7", scope: "handball", level: "medio", question: "Qual linha marca a area onde jogadores de linha nao podem pisar para atacar?", options: ["Linha dos 6 metros", "Linha central", "Linha lateral", "Linha de 9 metros"], answerIndex: 0, explanation: "A area do goleiro e delimitada pela linha dos 6 metros.", active: true },
  { id: "quiz-handball-medio-8", scope: "handball", level: "medio", question: "Em qual continente o handebol moderno se desenvolveu com mais forca?", options: ["Europa", "Oceania", "Antartida", "America do Norte"], answerIndex: 0, explanation: "O handebol moderno ganhou estrutura e popularidade na Europa.", active: true },
  { id: "quiz-handball-medio-9", scope: "handball", level: "medio", question: "Qual pais e muito conhecido por sua forca historica no handebol masculino e feminino?", options: ["Dinamarca", "Canada", "Japao no beisebol", "India no crquete"], answerIndex: 0, explanation: "A Dinamarca e uma das grandes potencias atuais e historicas do handebol.", active: true },
  { id: "quiz-handball-medio-10", scope: "handball", level: "medio", question: "O que um armador central costuma fazer?", options: ["Organizar jogadas", "Ficar so no gol", "Apitar o jogo", "Nao tocar na bola"], answerIndex: 0, explanation: "O armador central e um dos principais organizadores do ataque.", active: true },
  { id: "quiz-handball-medio-11", scope: "handball", level: "medio", question: "Curiosidade: o handebol tambem tem uma versao praticada na areia. Como ela e chamada?", options: ["Beach handball", "Handebol aquatico", "Handebol de gelo", "Mini handebol"], answerIndex: 0, explanation: "Beach handball e a versao de areia, com regras e pontuacoes proprias.", active: true },
  { id: "quiz-handball-medio-12", scope: "handball", level: "medio", question: "Qual fundamento e essencial para criar oportunidade para o companheiro finalizar?", options: ["Passe", "Reclamacao", "Falta tecnica", "Chute sem olhar"], answerIndex: 0, explanation: "O passe bem feito acelera o jogo e cria boas chances de arremesso.", active: true },
  { id: "quiz-handball-medio-13", scope: "handball", level: "medio", question: "O que significa contra-ataque?", options: ["Ataque rapido apos recuperar a bola", "Pedido de tempo", "Troca de uniforme", "Punicao do goleiro"], answerIndex: 0, explanation: "Contra-ataque e a transicao rapida para surpreender a defesa adversaria.", active: true },
  { id: "quiz-handball-dificil-10", scope: "handball", level: "dificil", question: "Qual entidade internacional organiza grandes competicoes mundiais de handebol?", options: ["IHF", "FIFA", "NBA", "ATP"], answerIndex: 0, explanation: "A IHF e a Federacao Internacional de Handebol.", active: true },
  { id: "quiz-handball-dificil-11", scope: "handball", level: "dificil", question: "No ataque, qual linha costuma ser referencia para cobranca de tiro livre?", options: ["9 metros", "3 metros", "Meio metro", "Linha de fundo apenas"], answerIndex: 0, explanation: "A linha tracejada dos 9 metros e referencia para muitas cobrancas de tiro livre.", active: true },
  { id: "quiz-handball-dificil-12", scope: "handball", level: "dificil", question: "Qual acao defensiva busca impedir o arremesso levantando bracos e fechando espaco?", options: ["Bloqueio", "Drible duplo", "Saida lateral", "Passe picado"], answerIndex: 0, explanation: "O bloqueio dificulta o arremesso e protege o goleiro.", active: true },
  { id: "quiz-handball-dificil-13", scope: "handball", level: "dificil", question: "Curiosidade: antes do formato de quadra atual, o handebol ja foi praticado com mais jogadores em campo aberto?", options: ["Sim", "Nao, sempre foi igual", "Apenas no gelo", "So em piscina"], answerIndex: 0, explanation: "Versoes antigas do handebol eram praticadas em campo aberto com mais jogadores.", active: true },
  { id: "quiz-handball-dificil-14", scope: "handball", level: "dificil", question: "Qual sistema defensivo deixa um jogador mais avancado pressionando a primeira linha?", options: ["5:1", "6:0", "0:6", "Todos no ataque"], answerIndex: 0, explanation: "No 5:1, cinco ficam mais recuados e um defensor atua mais avancado.", active: true },
  { id: "quiz-handball-dificil-15", scope: "handball", level: "dificil", question: "O que caracteriza uma boa leitura de jogo?", options: ["Antecipar espacos e decisoes", "Olhar so para a torcida", "Nao passar a bola", "Correr sem objetivo"], answerIndex: 0, explanation: "Ler o jogo e perceber espacos, tempo certo e melhor decisao.", active: true },
  { id: "quiz-handball-dificil-16", scope: "handball", level: "dificil", question: "Em alto nivel, por que o jogo sem bola e importante?", options: ["Cria espacos e opcoes de passe", "Nao tem importancia", "Serve para sair da quadra", "Substitui o goleiro"], answerIndex: 0, explanation: "Movimentacao sem bola abre espacos e melhora a organizacao ofensiva.", active: true },
  { id: "quiz-team-4", scope: "team", level: "facil", question: "Qual valor o instituto busca desenvolver junto com o esporte?", options: ["Disciplina", "Desinteresse", "Individualismo", "Bagunca"], answerIndex: 0, explanation: "Disciplina e um dos pilares do projeto.", active: true },
  { id: "quiz-team-5", scope: "team", level: "facil", question: "O que aparece na agenda do site para os atletas acompanharem?", options: ["Treinos e jogos", "Receitas de bolo", "Boletos de luz", "Previsao da bolsa"], answerIndex: 0, explanation: "A agenda comunica treinos, amistosos, competicoes e avisos da equipe.", active: true },
  { id: "quiz-team-6", scope: "team", level: "medio", question: "Qual e uma missao do Instituto HeloisaHand?", options: ["Abrir oportunidades de vida", "Formar apenas campeoes profissionais", "Impedir estudos", "Treinar sem valores"], answerIndex: 0, explanation: "O projeto usa o esporte para criar oportunidades, cidadania e desenvolvimento.", active: true },
  { id: "quiz-team-7", scope: "team", level: "medio", question: "No site, onde o atleta acompanha scout, frequencia e avisos?", options: ["Area do Atleta", "Loja", "Pix", "Rodape"], answerIndex: 0, explanation: "A Area do Atleta centraliza a jornada individual.", active: true },
  { id: "quiz-team-8", scope: "team", level: "dificil", question: "Qual atitude combina mais com a cultura da equipe?", options: ["Compromisso com o grupo", "Faltar sem avisar", "Nao ouvir o treinador", "Desistir no primeiro erro"], answerIndex: 0, explanation: "Compromisso, respeito e evolucao diaria fortalecem a equipe.", active: true },
  { id: "quiz-team-9", scope: "team", level: "dificil", question: "Por que conhecer a historia do projeto importa?", options: ["Cria identidade e pertencimento", "Nao muda nada", "Serve so para decorar", "Impede treinos"], answerIndex: 0, explanation: "Quanto mais o atleta entende a historia, mais se sente parte da equipe.", active: true },
  { id: "quiz-team-10", scope: "team", level: "facil", question: "Qual canal do site ajuda a aproximar treinador e atletas?", options: ["Chat e avisos", "Carrinho abandonado", "Tela sem botao", "Pagina vazia"], answerIndex: 0, explanation: "Chat, avisos e notificacoes fortalecem a comunicacao da equipe.", active: true },
  { id: "quiz-team-joees-2025-sub15-feminino", scope: "team", level: "facil", question: "Qual foi o adversario que o time sub 15 feminino venceu no JOEES 2025?", options: ["America", "Tancredo Neves", "Teofilo", "Marista"], answerIndex: 2, explanation: "Certa a resposta, o jogo que vencemos foi exatamente contra a escola Teofilo da regiao de Domingos Martins.", active: true },
);

[
  ["facil", "regra", "Qual parte do corpo e mais usada para passar e arremessar no handebol?", "Maos", "Pes", "Cabeca", "Joelho", "O handebol e jogado principalmente com as maos."],
  ["facil", "regra", "Quando a bola sai pela lateral, como ela volta ao jogo?", "Tiro lateral", "Tiro de 7 metros", "Escanteio do futebol", "Bola ao alto", "A reposicao lateral reinicia o jogo quando a bola sai pela lateral."],
  ["facil", "curiosidade", "Qual qualidade ajuda muito um ponta no handebol?", "Agilidade", "Ficar parado", "Nao saltar", "Olhar para baixo", "Pontas precisam de velocidade, impulso e boa finalizacao em pouco angulo."],
  ["facil", "historia", "O handebol e especialmente popular em qual continente?", "Europa", "Oceania", "Antartida", "Africa apenas", "A Europa tem ligas e selecoes muito fortes no handebol."],
  ["facil", "curiosidade", "Em qual lugar o handebol escolar costuma ser aprendido?", "Quadra", "Piscina", "Pista de gelo", "Tatame", "A quadra e o ambiente mais comum para aprender handebol."],
  ["facil", "regra", "Quem orienta a equipe durante o jogo?", "Treinador", "Narrador", "Torcedor adversario", "Fotografo", "O treinador orienta estrategia, substituicoes e ajustes da equipe."],
  ["facil", "curiosidade", "O que ajuda a equipe a atacar melhor?", "Passar e se movimentar", "Todos ficarem parados", "Esconder a bola", "Nao olhar para o jogo", "Movimentacao e passe abrem espacos."],
  ["facil", "regra", "O que acontece quando uma equipe marca gol?", "O jogo reinicia pelo centro", "Acaba sempre a partida", "Todos saem da quadra", "Vira tiro lateral", "A equipe que sofreu o gol reinicia pelo centro."],
  ["facil", "historia", "Handebol tambem e modalidade olimpica?", "Sim", "Nao", "So em treino", "So escolar", "O handebol faz parte dos Jogos Olimpicos."],
  ["facil", "curiosidade", "Qual atitude combina com esporte coletivo?", "Ajudar companheiros", "Jogar sozinho sempre", "Ignorar a equipe", "Desistir rapido", "Handebol depende de cooperacao."],
  ["medio", "regra", "Qual linha fica mais distante que a linha dos 6 metros e aparece tracejada?", "9 metros", "Linha lateral", "Linha do meio", "Linha de fundo", "A linha de 9 metros e usada como referencia para tiros livres."],
  ["medio", "regra", "O que e drible duplo?", "Driblar, segurar e voltar a driblar", "Passar para o goleiro", "Arremessar no gol", "Bloquear com o corpo", "Depois de controlar a bola, o jogador nao pode voltar a driblar."],
  ["medio", "historia", "Qual pais europeu e referencia recente no handebol mundial?", "Dinamarca", "Nepal", "Nova Zelandia", "Mexico apenas", "A Dinamarca e referencia mundial no handebol atual."],
  ["medio", "curiosidade", "Por que o pivo costuma sofrer muita marcacao?", "Porque joga perto da defesa", "Porque fica no banco", "Porque nao participa", "Porque e arbitro", "O pivo atua em zona de contato perto da area adversaria."],
  ["medio", "regra", "O que e exclusao de 2 minutos?", "Punicao temporaria", "Tempo tecnico", "Troca de bola", "Inicio do jogo", "O atleta punido fica 2 minutos fora."],
  ["medio", "curiosidade", "O que ajuda um goleiro a defender melhor?", "Leitura do arremesso", "Virar de costas", "Sair sempre correndo", "Nao falar com a defesa", "Goleiro precisa ler o corpo e a direcao do arremesso."],
  ["medio", "historia", "O beach handball e jogado em qual superficie?", "Areia", "Gelo", "Madeira apenas", "Asfalto molhado", "Beach handball e a versao de praia/areia."],
  ["medio", "regra", "Qual acao e usada para impedir arremesso sem agarrar?", "Bloqueio", "Empurrao", "Puxao", "Segurar camisa", "Bloquear com bracos e posicionamento e fundamento defensivo."],
  ["medio", "curiosidade", "Por que a comunicacao defensiva importa?", "Evita espacos livres", "Serve para distrair torcida", "Substitui treino", "Nao tem funcao", "Defesa organizada conversa e ajusta marcacoes."],
  ["medio", "historia", "O handebol brasileiro tem tradicao forte principalmente em qual selecao?", "Feminina", "Criquete", "Beisebol", "Hockey no gelo", "A selecao feminina brasileira ja conquistou grande destaque mundial."],
  ["dificil", "regra", "O que o arbitro indica ao levantar o braco por jogo passivo?", "Ataque deve finalizar logo", "Gol automatico", "Fim da partida", "Substituicao obrigatoria", "O gesto alerta que a equipe precisa buscar finalizacao."],
  ["dificil", "tatico", "Qual vantagem do sistema 5:1?", "Pressionar a primeira linha", "Deixar o gol vazio", "Atacar com goleiro sempre", "Nao defender pontas", "O defensor avancado pressiona armadores e linhas de passe."],
  ["dificil", "historia", "Qual sigla representa a federacao internacional de handebol?", "IHF", "FIBA", "FIFA", "COI apenas", "IHF significa International Handball Federation."],
  ["dificil", "curiosidade", "Por que o handebol exige tomada de decisao rapida?", "O jogo tem pouco espaco e muita pressao", "Porque nao ha adversarios", "Porque a bola para sempre", "Porque nao existe defesa", "Ataque e defesa mudam em segundos."],
  ["dificil", "regra", "O que e falta de ataque comum?", "Contato ofensivo ilegal", "Gol bonito", "Defesa baixa", "Passe certo", "O atacante nao pode empurrar ou passar por cima ilegalmente do defensor."],
  ["dificil", "tatico", "Qual movimento cria espaco sem receber a bola?", "Desmarque", "Ficar parado", "Olhar torcida", "Soltar a bola fora", "Desmarque sem bola abre linha de passe e finalizacao."],
  ["dificil", "curiosidade", "Em alto rendimento, por que ponta precisa de impulsao?", "Para finalizar com mais angulo", "Para dormir melhor", "Para sair da quadra", "Para apitar", "O salto amplia o angulo de arremesso."],
  ["dificil", "historia", "O handebol de campo antigo tinha mais jogadores que o atual?", "Sim", "Nao, sempre sete", "Nunca existiu", "Era individual", "Versoes antigas eram praticadas em campo com mais atletas."],
  ["dificil", "tatico", "O que e superioridade numerica?", "Ter mais atletas atacando que defendendo", "Jogar sem bola", "Perder jogador punido", "Ter menos opcoes", "Superioridade numerica gera vantagem ofensiva momentanea."],
  ["dificil", "regra", "Quando pode ocorrer tiro de 7 metros?", "Ao impedir chance clara de gol ilegalmente", "Ao errar passe simples", "Ao pedir agua", "Ao trocar de camisa", "A penalidade pune falta que tira oportunidade clara de gol."],
  ["desafio40", "desafio", "Desafio 40: qual e a melhor resposta contra defesa muito fechada?", "Circular bola e atacar espacos", "Arremessar sem olhar", "Parar o ataque", "Fugir da quadra", "Contra defesa fechada, paciencia, circulacao e ataque aos espacos ajudam."],
  ["desafio40", "desafio", "Desafio 40: o que define um bom lider em quadra?", "Comunicar e ajudar a equipe", "Gritar sem orientar", "Reclamar sempre", "Jogar sozinho", "Lideranca aparece em atitude, comunicacao e exemplo."],
  ["desafio40", "desafio", "Desafio 40: qual acao melhora contra-ataque?", "Passe rapido apos recuperar a bola", "Andar devagar", "Esperar defesa voltar", "Olhar para baixo", "Transicao rapida pega defesa desorganizada."],
  ["desafio40", "desafio", "Desafio 40: por que estudar jogo importa?", "Ajuda a decidir melhor", "Nao muda nada", "Serve so para teoria", "Atrasa treino", "Quem entende o jogo decide melhor sob pressao."],
  ["desafio40", "desafio", "Desafio 40: qual fundamento conecta defesa e ataque?", "Transicao", "Uniforme", "Foto", "Arquibancada", "Transicao transforma recuperacao de bola em ataque rapido."],
  ["desafio80", "elite", "Desafio 80: qual leitura ajuda o armador antes do passe?", "Posicao da defesa e dos companheiros", "Cor da parede", "Barulho da torcida apenas", "Numero do banco", "Armador precisa ler defesa e movimentacao ofensiva."],
  ["desafio80", "elite", "Desafio 80: qual escolha e melhor sob pressao?", "Passe seguro ou arremesso claro", "Forcar sempre", "Fechar os olhos", "Parar sem motivo", "Boa decisao considera risco, espaco e companheiros."],
  ["desafio80", "elite", "Desafio 80: em defesa, o que evita buracos?", "Cobertura e comunicacao", "Cada um por si", "Silencio total", "Ficar parado", "Cobertura fecha espacos quando alguem sai na marcacao."],
  ["desafio80", "elite", "Desafio 80: qual detalhe ajuda finalizacao de ponta?", "Angulo, impulsao e escolha do canto", "Chutar de qualquer jeito", "Nao saltar", "Virar de costas", "Ponta precisa escolher canto e usar angulo no salto."],
  ["desafio80", "elite", "Desafio 80: o que diferencia atleta completo?", "Tecnica, tatica, disciplina e atitude", "So forca", "So altura", "So velocidade", "Atleta completo combina varias dimensoes do jogo."],
].forEach(([level, category, question, correct, wrong1, wrong2, wrong3, explanation], index) => {
  quizQuestionSeeds.push({
    id: `quiz-handball-extra-${level}-${index}`,
    scope: "handball",
    level,
    category,
    question,
    options: [correct, wrong1, wrong2, wrong3],
    answerIndex: 0,
    explanation,
    active: true,
  });
});

["facil", "medio", "dificil"].forEach((level) => {
  const themes = [
    ["regra", "posse de bola", "controlar a bola com seguranca"],
    ["historia", "evolucao do handebol", "entender de onde veio o esporte"],
    ["curiosidade", "jogo em velocidade", "pensar e agir rapido"],
    ["fundamento", "passe e recepcao", "manter a equipe conectada"],
    ["tatico", "ocupacao de espacos", "abrir caminhos na defesa"],
    ["defesa", "comunicacao defensiva", "proteger melhor o gol"],
    ["ataque", "movimentacao sem bola", "criar opcoes para o passe"],
    ["goleiro", "leitura do arremesso", "antecipar a finalizacao"],
    ["ponta", "finalizacao de angulo", "usar salto e direcao"],
    ["pivo", "contato e giro", "ganhar posicao perto da area"],
  ];
  themes.forEach(([category, topic, answer], index) => {
    quizQuestionSeeds.push({
      id: `quiz-handball-bank-${level}-${index}`,
      scope: "handball",
      level,
      category,
      question: `${quizLevelLabel(level)}: qual ideia combina mais com ${topic}?`,
      options: [answer, "jogar sem observar", "evitar trabalho em equipe", "desistir da jogada"],
      answerIndex: 0,
      explanation: `${topic} ajuda o atleta a evoluir porque envolve ${answer}.`,
      active: true,
    });
  });
});

Array.from({ length: 24 }, (_, index) => {
  const level = index < 8 ? "facil" : index < 16 ? "medio" : "dificil";
  const themes = ["historia do time", "disciplina", "treino", "competicao", "familia", "respeito", "superacao", "identidade"];
  const topic = themes[index % themes.length];
  quizQuestionSeeds.push({
    id: `quiz-team-bank-${index}`,
    scope: "team",
    level,
    category: "equipe",
    question: `Quiz da equipe: qual atitude combina mais com ${topic} no Instituto HeloisaHand?`,
    options: ["Compromisso com a evolucao", "Faltar sem avisar", "Desrespeitar colegas", "Desistir no primeiro erro"],
    answerIndex: 0,
    explanation: "A cultura da equipe valoriza compromisso, respeito, pertencimento e evolucao constante.",
    active: true,
  });
});

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
let coachCalendarReference = new Date();
let quizPublicRefreshInFlight = false;
let quizPublicRefreshAt = 0;

const routes = {
  "/": renderHome,
  "/projeto": renderProject,
  "/treinar": renderTraining,
  "/apoiar": renderSupport,
  "/loja": renderStore,
  "/quiz": renderQuiz,
  "/explorar": renderExplore,
  "/atleta": renderAthlete,
  "/notificacoes": renderAthleteNotificationsPage,
  "/treinador": renderCoach,
  "/categorias": renderCategories,
  "/competicoes": renderCompetitions,
  "/inclusao": renderInclusion,
  "/atletas-em-acao": renderAthletesAction,
};

document.querySelector("#menuButton").addEventListener("click", () => nav.classList.toggle("open"));
window.addEventListener("hashchange", renderRoute);
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js").catch(() => {});
  });
}
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
  return fetch("/api/auth", {
    method: "POST",
    headers: { "Content-Type": "application/json", ...getAuthHeaders() },
    body: JSON.stringify(data),
  });
}

async function saveAuthDataConfirmed(data) {
  const response = await persistBackendAuthData(data);
  if (!response.ok) {
    let payload = {};
    try {
      payload = await response.json();
    } catch (error) {
      payload = {};
    }
    if (response.status === 401 || response.status === 403) {
      throw new Error("Sua sessao expirou. Entre novamente para salvar no servidor.");
    }
    const details = payload.details ? ` Detalhe: ${payload.details}` : "";
    throw new Error(`${payload.error || "Nao foi possivel salvar no servidor."}${details}`);
  }
  authDataCache = data;
  localStorage.setItem(authStoreKey, JSON.stringify(data));
  return true;
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
    ["Destaques do mes", "Destaques do mês"],
    ["Atleta do mes", "Atleta do mês"],
    ["atleta do mes", "atleta do mês"],
    ["Top 5 atletas do mes", "Top 5 atletas do mês"],
    ["Ranking do mes", "Ranking do mês"],
    ["Destaque do mes", "Destaque do mês"],
    ["atletas do mes", "atletas do mês"],
    ["do mes", "do mês"],
    ["conteudos", "conteúdos"],
    ["Conteudos", "Conteúdos"],
    ["pagina", "página"],
    ["Pagina", "Página"],
    ["area", "área"],
    ["Area", "Área"],
    ["areas", "áreas"],
    ["Areas", "Áreas"],
    ["historia", "história"],
    ["Historia", "História"],
    ["informacoes", "informações"],
    ["Informacoes", "Informações"],
    ["Doacao", "Doação"],
    ["doacao", "doação"],
    ["solidaria", "solidária"],
    ["Solidaria", "Solidária"],
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
  if (path === "/quiz" && !quizState) refreshQuizPublicData();
  if (path === "/notificacoes") markAthleteNotificationsRead();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

async function refreshQuizPublicData() {
  const now = Date.now();
  if (quizPublicRefreshInFlight || now - quizPublicRefreshAt < 8000) return;
  quizPublicRefreshInFlight = true;
  try {
    const fresh = await fetchBackendAuthData("/api/public-data");
    quizPublicRefreshAt = Date.now();
    if (!fresh) return;
    const current = getAuthData();
    authDataCache = {
      ...current,
      events: fresh.events || current.events || [],
      rankings: fresh.rankings || current.rankings || [],
      quizQuestions: fresh.quizQuestions || current.quizQuestions || [],
      quizScores: fresh.quizScores || current.quizScores || [],
    };
    localStorage.setItem(authStoreKey, JSON.stringify(authDataCache));
    if ((location.hash.replace("#", "") || "/") === "/quiz" && !quizState) {
      app.innerHTML = renderQuiz();
      bindInteractions();
    }
  } finally {
    quizPublicRefreshInFlight = false;
  }
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

function featureCard(title, text, href, icon, yellow = false, visual = "") {
  return `
    <a class="card feature-card ${yellow ? "yellow" : ""} ${visual}" href="${href}" data-card-href="${href}">
      <span class="feature-bg-mark" aria-hidden="true"></span>
      <span class="icon-pill"><b>${icon}</b><i aria-hidden="true"></i></span>
      <span class="feature-spark" aria-hidden="true"></span>
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
  return renderHomeVitrine();
}

function renderHomeVitrine() {
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
          <p>Uma plataforma para conectar atletas, familias, treinador e apoiadores em uma jornada de esporte, disciplina e oportunidade.</p>
          <div class="hero-actions">
            ${cta("Quero Treinar", "#/treinar", "yellow")}
            ${cta("Sou Atleta", "#/atleta", "ghost")}
            ${cta("Explorar Handebol", "#/explorar", "ghost")}
          </div>
          <div class="impact-links" aria-label="Acessos rapidos do instituto">
            <a class="impact-link" href="#/atletas-em-acao"><strong>50+</strong><span>Atletas atendidos</span><small>Ver trajetorias</small></a>
            <a class="impact-link" href="#/categorias"><strong>3</strong><span>Categorias de base</span><small>Conhecer fases</small></a>
            <a class="impact-link" href="#/competicoes"><strong>+</strong><span>Treinos e competicoes</span><small>Acompanhar agenda</small></a>
            <a class="impact-link" href="#/apoiar"><strong>Pix</strong><span>Apoio ao projeto</span><small>Doar ou patrocinar</small></a>
          </div>
        </div>
      </div>
    </section>
    ${renderPublicMonthlyRanking()}
    <section class="section home-access-section">
      <div class="section-head center">
        <span class="eyebrow">Acessos principais</span>
        <h2>Escolha por onde quer comecar</h2>
        <p>Organizamos a home para mostrar os caminhos principais sem apagar nada do que ja criamos.</p>
      </div>
      <div class="home-card-carousel feature-grid" data-drag-scroll>
        ${featureCard("Conhecer o Projeto", "Quem somos, nossa missao e por que o handebol transforma.", "#/projeto", "CP", false, "project-card")}
        ${featureCard("Quero Treinar", "Seletivas, aulas particulares e informacoes para novos atletas.", "#/treinar", "TR", false, "training-card")}
        ${featureCard("Competições e Jogos", "Calendario, proximos jogos, fotos e videos da equipe.", "#/competicoes", "CJ", false, "quiz-card")}
        ${featureCard("Explorar Handebol", "Curiosidades, regras, historia, dicas e quiz para evoluir.", "#/explorar", "EX", false, "explore-card")}
        ${featureCard("Apoie o Projeto", "Doacao, campanhas, patrocinadores e loja solidaria.", "#/apoiar", "AP", true, "support-card")}
      </div>
    </section>
    ${renderHomeEventsPreview()}
    ${renderHomeSupportPreview()}
    <section class="section home-final-cta">
      <div>
        <span class="eyebrow">HeloisaHand Connect</span>
        <h2>Menos rolagem, mais caminho claro.</h2>
        <p>As areas completas continuam no menu. A pagina inicial agora funciona como uma entrada rapida para tudo que importa.</p>
      </div>
      <div class="actions">
        ${cta("Area do Atleta", "#/atleta", "yellow")}
        ${cta("Conhecer o Projeto", "#/projeto")}
      </div>
    </section>
  `;
}

function renderHomeEventsPreview(data = getAuthData()) {
  const events = getTeamEvents(data).slice(0, 4);
  if (!events.length) return "";
  return `
    <section class="section home-preview-section">
      <div class="section-head split">
        <div>
          <span class="eyebrow">Agenda da equipe</span>
          <h2>Proximos compromissos</h2>
          <p>Treinos, amistosos e jogos aparecem completos na area de competicoes.</p>
        </div>
        ${cta("Ver agenda completa", "#/competicoes")}
      </div>
      <div class="home-card-carousel compact" data-drag-scroll>
        ${events.map(renderPublicEventItem).join("")}
      </div>
    </section>
  `;
}

function renderHomeSupportPreview(data = getAuthData()) {
  const campaigns = (data.campaigns || campaignSeeds).filter((item) => item.active !== false).slice(0, 3);
  return `
    <section class="section home-preview-section soft">
      <div class="section-head split">
        <div>
          <span class="eyebrow">Apoio que vira oportunidade</span>
          <h2>Campanhas em destaque</h2>
          <p>As campanhas completas e o Pix ficam organizados na area Apoie o Projeto.</p>
        </div>
        ${cta("Apoiar agora", "#/apoiar", "yellow")}
      </div>
      <div class="home-card-carousel compact" data-drag-scroll>
        ${campaigns.map(renderCampaignCard).join("")}
        ${featureCard("Loja HeloisaHand", "Produtos do instituto para vestir o projeto e fortalecer a equipe.", "#/loja", "LJ", false, "support-card")}
      </div>
    </section>
  `;
}

function renderHomeCompact() {
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
    ${renderPublicMonthlyRanking()}
    <section class="section">
      <div class="section-head center">
        <span class="eyebrow">Caminhos do instituto</span>
        <h2>Treinar, evoluir, competir e transformar</h2>
        <p>Por aqui nós organizamos a formação esportiva dos atletas, damos suporte e apoio social, reunimos informações de competições e histórias incríveis de transformação, além de acessos exclusivos na plataforma para atletas e apoiadores.</p>
      </div>
      <div class="grid three feature-grid">
        ${featureCard("Quiz HeloisaHand", "Teste seus conhecimentos sobre handebol e sobre nossa equipe.", "#/quiz", "QZ", false, "quiz-card")}
        ${featureCard("Quero Treinar", "Seletivas, aulas particulares e informacoes para novos atletas.", "#/treinar", "TR", false, "training-card")}
        ${featureCard("Conhecer o Projeto", "Quem somos, nossa missao e por que o handebol transforma.", "#/projeto", "CP", false, "project-card")}
        ${featureCard("Apoie o Projeto", "Apoio financeiro, materiais, voluntariado e parcerias.", "#/apoiar", "AP", true, "support-card")}
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
        ${optionCard("Jogar Quiz", "Regras, historia, curiosidades e perguntas do time", "#/quiz", "?")}
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
    ${renderSponsorAndCampaigns()}
    ${renderHandballHub()}
  `;
}

function renderPublicMonthlyRanking(data = getAuthData()) {
  const ranking = getActiveRanking(data);
  if (!ranking?.items?.length) return "";
  return `
    <section class="home-ranking-strip">
      <div>
        <span class="eyebrow">Destaques do mes</span>
        <h2>${escapeHtml(ranking.title || "Top 5 atletas do mes")}</h2>
        <p>${escapeHtml(ranking.description || "Reconhecimento por evolucao, presenca, compromisso e atitude.")}</p>
      </div>
      ${renderRankingCarousel(ranking, data, "", "public")}
    </section>
  `;
}

function getQuizQuestions(data = getAuthData(), scope = "", level = "") {
  const byId = new Map();
  quizQuestionSeeds.forEach((item) => byId.set(item.id, item));
  (Array.isArray(data.quizQuestions) ? data.quizQuestions : []).forEach((item) => byId.set(item.id, item));
  const questions = [...byId.values()];
  return questions
    .filter((item) => item.active !== false)
    .filter((item) => !scope || item.scope === scope)
    .filter((item) => !level || item.level === level);
}

function renderQuiz() {
  if (quizState) return renderQuizPlay();
  const data = getAuthData();
  const identity = getQuizPlayerIdentity(getCurrentQuizPlayerName());
  const stats = getQuizPlayerStats(data, identity.playerKey, "handball");
  const handballCount = getQuizQuestions(data, "handball").length;
  const teamCount = getQuizQuestions(data, "team").length;
  const allHandball = getQuizQuestions(data, "handball").length;
  const completedAll = allHandball > 0 && stats.seenCount >= allHandball;
  return `
    <section class="section quiz-hero">
      <div class="section-head center">
        <span class="eyebrow">Fique por dentro do handebol</span>
        <h2>Quiz HeloisaHand</h2>
        <p>Aprenda regras, historia, jogadas e curiosidades competindo com voce mesmo. Tambem tem quiz da equipe para fortalecer a nossa identidade.</p>
      </div>
      <div class="quiz-player-card">
        <label>Seu nome ou apelido para o ranking
          <input id="quizPlayerName" value="${escapeAttribute(getCurrentQuizPlayerName())}" placeholder="Ex.: Alexander, Bia, Kayllan..." />
        </label>
        <span>Ao finalizar, sua pontuacao pode aparecer no Top 7.</span>
      </div>
      <div class="quiz-status-card">
        <strong>${stats.score} pontos acumulados</strong>
        <span>${stats.seenCount} perguntas diferentes vistas de ${allHandball}. ${completedAll ? "Medalha especial do time desbloqueada." : "Continue jogando para liberar novos desafios."}</span>
      </div>
      <div class="quiz-choice-grid">
        ${renderQuizChoice("handball", "Quiz do Handebol", "Regras, historia, fundamentos, curiosidades e leitura de jogo. Cada rodada traz ate 10 perguntas.", handballCount, "facil")}
        ${renderQuizChoice("team", "Quiz da Equipe", "Perguntas sobre o Instituto HeloisaHand, nossa rotina, competicoes e historia. Cada rodada traz ate 10 perguntas.", teamCount, "facil")}
      </div>
      <div class="quiz-level-board">
        <h3>Escolha seu nivel</h3>
        <div>
          ${["facil", "medio", "dificil", "desafio40", "desafio80"].map((level) => renderQuizLevelCard(data, level, stats)).join("")}
        </div>
      </div>
      ${renderQuizLeaderboard(data)}
    </section>
  `;
}

function getQuizPlayerStats(data, playerKey, scope = "handball") {
  const score = mergeQuizScores(data.quizScores || []).find((item) => item.scope === scope && item.playerKey === playerKey);
  const seen = new Set(score?.seenQuestionIds || []);
  return {
    score: Number(score?.score || 0),
    attempts: Number(score?.attempts || 0),
    seenQuestionIds: seen,
    seenCount: seen.size,
  };
}

function isQuizLevelUnlocked(level, stats) {
  if (level === "facil") return true;
  if (level === "medio" || level === "dificil") return stats.score >= 6;
  if (level === "desafio40") return stats.score >= 40;
  if (level === "desafio80") return stats.score >= 80;
  return true;
}

function renderQuizLevelCard(data, level, stats) {
  const count = getQuizQuestions(data, "handball", level).length;
  const unlocked = isQuizLevelUnlocked(level, stats);
  const unlockText = level === "medio" || level === "dificil"
    ? "Libera com 6 pontos"
    : level === "desafio40"
      ? "Libera com 40 pontos"
      : level === "desafio80"
        ? "Libera com 80 pontos"
        : "Liberado";
  return `
    <button class="quiz-level-card ${unlocked ? "" : "locked"}" type="button" data-action="start-quiz" data-quiz-scope="handball" data-quiz-level="${level}" ${unlocked ? "" : `aria-disabled="true"`}>
      <strong>${quizLevelLabel(level)}</strong>
      <span>${count} perguntas</span>
      <small>${unlocked ? "Jogar agora" : `🔒 ${unlockText}`}</small>
    </button>
  `;
}

function getCurrentQuizPlayerName() {
  const athlete = getCurrentUser("athlete");
  if (athlete) return athlete.profile?.nickname || athlete.name || "";
  return localStorage.getItem("heloisahand_quiz_player_name") || "";
}

function renderQuizLeaderboard(data = getAuthData()) {
  const scores = mergeQuizScores(data.quizScores || []);
  return `
    <div class="quiz-leaderboard-grid">
      ${["handball", "team"].map((scope) => {
        const top = scores
          .filter((item) => item.scope === scope)
          .sort((a, b) => Number(b.score || 0) - Number(a.score || 0) || Number(b.attempts || 0) - Number(a.attempts || 0))
          .slice(0, 7);
        return `
          <article class="quiz-leaderboard">
            <span class="eyebrow">${scope === "team" ? "Quiz da equipe" : "Quiz do handebol"}</span>
            <h3>Top 7 melhores</h3>
            ${top.length ? top.map((item, index) => `
              <div class="quiz-rank-row">
                <strong>${index + 1}</strong>
                <span>${escapeHtml(item.playerName || "Atleta")}</span>
                <b>${Number(item.score || 0)} pts</b>
              </div>
            `).join("") : `<p class="helper-text">Nenhuma pontuacao registrada ainda. Seja o primeiro.</p>`}
          </article>
        `;
      }).join("")}
    </div>
  `;
}

function getQuizPlayerIdentity(playerName = "") {
  const athlete = getCurrentUser("athlete");
  if (athlete) {
    return {
      playerName: athlete.profile?.nickname || athlete.name || playerName || "Atleta",
      playerKey: `athlete:${athlete.id}`,
    };
  }
  const cleanName = (playerName || "Visitante").trim().replace(/\s+/g, " ").slice(0, 40) || "Visitante";
  return {
    playerName: cleanName,
    playerKey: `visitor:${slugify(cleanName.toLowerCase())}`,
  };
}

function mergeQuizScores(scores = []) {
  const map = new Map();
  scores.forEach((item) => {
    const playerName = item.playerName || "Visitante";
    const key = `${item.scope || "handball"}:${item.playerKey || `visitor:${slugify(playerName.toLowerCase())}`}`;
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
        playerName,
        playerKey: item.playerKey || `visitor:${slugify(playerName.toLowerCase())}`,
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

function renderQuizChoice(scope, title, text, count, level) {
  return `
    <article class="quiz-choice-card ${scope}">
      <span>${scope === "team" ? "Nossa historia" : "Handebol"}</span>
      <h3>${title}</h3>
      <p>${text}</p>
      <small>Banco com ${count} perguntas</small>
      <button class="button pulse-action" type="button" data-action="start-quiz" data-quiz-scope="${scope}" data-quiz-level="${level}">Comecar agora</button>
    </article>
  `;
}

function quizLevelLabel(level) {
  return ({ facil: "Nivel facil", medio: "Nivel medio", dificil: "Nivel dificil", desafio40: "Desafio 40", desafio80: "Desafio 80" })[level] || "Nivel livre";
}

function renderQuizPlay() {
  const current = quizState.questions[quizState.index];
  const selected = quizState.answers[quizState.index];
  const answered = typeof selected === "number";
  if (!current) return renderQuizResult();
  return `
    <section class="section quiz-play-section">
      <div class="quiz-play-card">
        <div class="quiz-progress-row">
          <span>${quizState.scope === "team" ? "Quiz da equipe" : "Quiz do handebol"}</span>
          <strong>${quizState.index + 1}/${quizState.questions.length}</strong>
        </div>
        <div class="quiz-progress"><i style="width:${((quizState.index + 1) / quizState.questions.length) * 100}%"></i></div>
        <h2>${escapeHtml(current.question)}</h2>
        <div class="quiz-options">
          ${current.options.map((option, index) => {
            const isCorrect = answered && index === Number(current.answerIndex);
            const isWrong = answered && selected === index && selected !== Number(current.answerIndex);
            return `<button class="${isCorrect ? "correct" : ""} ${isWrong ? "wrong" : ""}" type="button" data-action="answer-quiz" data-answer-index="${index}" ${answered ? "disabled" : ""}>${escapeHtml(option)}</button>`;
          }).join("")}
        </div>
        ${answered ? `<div class="quiz-explanation"><strong>${selected === Number(current.answerIndex) ? "Resposta certa!" : "Boa tentativa."}</strong><p>${escapeHtml(current.explanation || "")}</p></div>` : ""}
        <div class="quiz-actions">
          <button class="button ghost-dark" type="button" data-action="cancel-quiz">Sair do quiz</button>
          ${answered ? `<button class="button" type="button" data-action="next-quiz">${quizState.index + 1 >= quizState.questions.length ? "Ver resultado" : "Proxima pergunta"}</button>` : ""}
        </div>
      </div>
    </section>
  `;
}

function renderQuizResult() {
  const total = quizState.questions.length;
  const score = quizState.answers.reduce((sum, answer, index) => sum + (Number(answer) === Number(quizState.questions[index].answerIndex) ? 1 : 0), 0);
  const percent = Math.round((score / Math.max(1, total)) * 100);
  if (!quizState.saved) {
    quizState.saved = true;
    submitQuizScore({ scope: quizState.scope, level: quizState.level, playerName: quizState.playerName, playerKey: quizState.playerKey, score, total, percent, seenQuestionIds: quizState.questions.map((item) => item.id) });
  }
  return `
    <section class="section quiz-play-section">
      <div class="quiz-result-card">
        <span class="eyebrow">Resultado do quiz</span>
        <h2>${score} de ${total}</h2>
        <p>${percent >= 80 ? "Mandou muito bem. Esses pontos foram somados ao seu ranking acumulado." : percent >= 50 ? "Bom resultado. Seus acertos entraram na sua pontuacao geral." : "Comecou a jornada. Cada acerto soma ponto para voce tentar subir no ranking."}</p>
        <div class="quiz-score-ring"><strong>${percent}%</strong></div>
        <div class="quiz-actions">
          <button class="button" type="button" data-action="restart-quiz">Jogar de novo</button>
          <button class="button ghost-dark" type="button" data-action="cancel-quiz">Voltar aos quizzes</button>
        </div>
      </div>
    </section>
  `;
}

async function submitQuizScore(score) {
  const entry = {
    id: `quiz-score-${Date.now()}`,
    ...score,
    createdAt: new Date().toISOString(),
  };
  const data = getAuthData();
  data.quizScores = upsertQuizScore(data.quizScores || [], entry);
  authDataCache = data;
  localStorage.setItem(authStoreKey, JSON.stringify(data));
  try {
    const response = await fetch("/api/quiz-score", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(entry),
    });
    if (!response.ok) throw new Error("Nao foi possivel salvar no servidor.");
    const payload = await response.json();
    if (payload?.data?.quizScores) {
      authDataCache = { ...getAuthData(), quizScores: payload.data.quizScores };
      localStorage.setItem(authStoreKey, JSON.stringify(authDataCache));
    }
  } catch (error) {
    showToast("Pontuacao salva neste aparelho. Para ranking global, confira a conexao do servidor.", "error");
  }
}

function startQuizSession(scope = "handball", level = "facil") {
  const data = getAuthData();
  const nameInput = document.querySelector("#quizPlayerName");
  const identity = getQuizPlayerIdentity(nameInput?.value || getCurrentQuizPlayerName() || "Visitante");
  localStorage.setItem("heloisahand_quiz_player_name", identity.playerName);
  const stats = getQuizPlayerStats(data, identity.playerKey, scope);
  if (scope === "handball" && !isQuizLevelUnlocked(level, stats)) {
    showToast("Esse desafio ainda esta bloqueado. Some mais pontos para liberar.", "error");
    return;
  }
  let questions = getQuizQuestions(data, scope, level);
  if (!questions.length && scope === "team") questions = getQuizQuestions(data, scope);
  if (!questions.length) {
    showToast("Ainda nao existem perguntas nesse quiz.", "error");
    return;
  }
  const unseen = questions.filter((item) => !stats.seenQuestionIds.has(item.id));
  const pool = unseen.length >= Math.min(10, questions.length) ? unseen : [...unseen, ...questions.filter((item) => stats.seenQuestionIds.has(item.id))];
  quizState = {
    scope,
    level,
    playerName: identity.playerName,
    playerKey: identity.playerKey,
    questions: pool.sort(() => Math.random() - 0.5).slice(0, Math.min(10, pool.length)),
    answers: [],
    index: 0,
    saved: false,
  };
  app.innerHTML = renderQuizPlay();
  bindInteractions();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function answerQuizQuestion(answerIndex) {
  if (!quizState) return;
  quizState.answers[quizState.index] = answerIndex;
  app.innerHTML = renderQuizPlay();
  bindInteractions();
}

function renderSponsorAndCampaigns(data = getAuthData()) {
  const sponsors = (data.sponsors || sponsorSeeds).filter((item) => item.active !== false);
  const campaigns = (data.campaigns || campaignSeeds).filter((item) => item.active !== false);
  return `
    <section class="section sponsor-campaigns">
      <div class="section-head center">
        <span class="eyebrow">Apoio que vira oportunidade</span>
        <h2>Patrocinadores e campanhas do instituto</h2>
        <p>Empresas, parceiros e pessoas podem acompanhar onde o apoio gera impacto direto para os atletas.</p>
      </div>
      <div class="campaign-grid">
        ${campaigns.map(renderCampaignCard).join("")}
      </div>
      <div class="sponsor-wall">
        ${sponsors.map(renderSponsorCard).join("")}
      </div>
    </section>
  `;
}

function renderCampaignCard(campaign) {
  const pct = Math.min(100, Math.round((Number(campaign.raised || 0) / Number(campaign.goal || 1)) * 100));
  return `
    <article class="campaign-card">
      <span>Campanha ativa</span>
      <h3>${escapeHtml(campaign.title)}</h3>
      <p>${escapeHtml(campaign.text)}</p>
      <div class="campaign-progress"><i style="width:${pct}%"></i></div>
      <strong>R$ ${Number(campaign.raised || 0).toLocaleString("pt-BR")} de R$ ${Number(campaign.goal || 0).toLocaleString("pt-BR")}</strong>
      ${cta("Apoiar agora", "#/apoiar", "yellow")}
    </article>
  `;
}

function renderSponsorCard(sponsor) {
  return `
    <article class="sponsor-card">
      <span>${escapeHtml(sponsor.tier)}</span>
      <h3>${escapeHtml(sponsor.name)}</h3>
      <p>${escapeHtml(sponsor.text)}</p>
      ${cta(sponsor.cta || "Falar sobre apoio", "#/apoiar")}
    </article>
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

function renderExplore() {
  return `
    <section class="section explore-page">
      <div class="section-head center">
        <span class="eyebrow">Explorar Handebol</span>
        <h2>Conteúdo para aprender, jogar melhor e se conectar com o esporte</h2>
        <p>Reunimos curiosidades, regras, história, dicas por posição, seleções, atletas e o Quiz HeloisaHand em uma área própria.</p>
      </div>
      <div class="home-card-carousel compact explore-actions" data-drag-scroll>
        ${featureCard("Jogar Quiz", "Teste seus conhecimentos e suba no ranking.", "#/quiz", "QZ", false, "quiz-card")}
        ${featureCard("Categorias de Base", "Entenda Mirim, Infantil e Cadete.", "#/categorias", "CB", false, "project-card")}
        ${featureCard("Atletas em Ação", "Fotos, vídeos e momentos do instituto.", "#/atletas-em-acao", "FT", false, "training-card")}
        ${featureCard("Inclusão e Desenvolvimento", "Histórias reais de transformação.", "#/inclusao", "ID", true, "support-card")}
      </div>
    </section>
    ${renderHandballHub()}
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
      ${renderSponsorAndCampaigns()}
    </section>
  `;
}

function renderStore() {
  const data = getAuthData();
  const products = (data.products || productSeeds).filter((item) => item.active !== false);
  return `
    <section class="section store-page">
      <div class="section-head center">
        <span class="eyebrow">Loja HeloisaHand</span>
        <h2>Vista o projeto e ajude a manter essa história viva</h2>
        <p>Produtos oficiais e itens solidários. Cada compra ajuda treinos, transporte, materiais e oportunidades para os atletas.</p>
      </div>
      <div class="store-grid">
        ${products.map(renderProductCard).join("")}
      </div>
    </section>
  `;
}

function renderProductCard(product, editable = false) {
  const price = Number(product.price || 0).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  const buyMessage = `Olá! Quero comprar: ${product.name} (${price}). Pode me passar os detalhes?`;
  return `
    <article class="product-card">
      <div class="product-visual">${product.image ? `<img src="${escapeAttribute(product.image)}" alt="${escapeAttribute(product.name)}" />` : `<span>${product.emoji || "🛒"}</span>`}</div>
      <div class="product-body">
        <small>${escapeHtml(product.category || "Produto")}</small>
        <h3>${escapeHtml(product.name)}</h3>
        ${product.promo ? `<span class="product-promo">${escapeHtml(product.promo)}</span>` : ""}
        <p>${escapeHtml(product.description || "")}</p>
        <strong>${price}</strong>
        ${editable ? "" : `<a class="button" href="${whatsappLink(buyMessage)}" target="_blank" rel="noreferrer">Comprar pelo WhatsApp</a>`}
      </div>
    </article>
  `;
}

function renderProductTypeOptions(selected = "") {
  return productCatalogOptions
    .map((item) => `<option value="${escapeAttribute(item.label)}" ${item.label === selected ? "selected" : ""}>${escapeHtml(item.label)}</option>`)
    .join("");
}

function renderProductEmojiOptions(selected = "") {
  const options = productCatalogOptions.reduce((acc, item) => {
    if (!acc.some((option) => option.emoji === item.emoji)) acc.push(item);
    return acc;
  }, []);
  return options
    .map((item) => `<option value="${escapeAttribute(item.emoji)}" ${item.emoji === selected ? "selected" : ""}>${item.emoji} ${escapeHtml(item.label)}</option>`)
    .join("");
}

function getProductCatalogOption(label) {
  return productCatalogOptions.find((item) => item.label === label) || productCatalogOptions[productCatalogOptions.length - 1];
}

function renderProductAdminCard(product) {
  const catalogMatch = productCatalogOptions.find((item) => item.label.toLowerCase() === String(product.name || "").toLowerCase());
  const selectedType = product.type || catalogMatch?.label || "Produto livre";
  return `
    <article class="product-admin-card">
      ${renderProductCard(product, true)}
      <details class="product-edit-details">
        <summary>Editar produto</summary>
        <form class="form-grid product-edit-form" data-product-id="${escapeAttribute(product.id)}">
          <label>Tipo do produto
            <select name="type" data-product-type-select>${renderProductTypeOptions(selectedType)}</select>
          </label>
          <label>Nome do produto<input name="name" required value="${escapeAttribute(product.name || "")}" /></label>
          <div class="form-grid two">
            <label>Categoria<input name="category" required value="${escapeAttribute(product.category || "")}" /></label>
            <label>Preço<input name="price" type="number" min="0" step="0.01" required value="${escapeAttribute(product.price || 0)}" /></label>
          </div>
          <label>Emoji ou símbolo
            <select name="emoji">${renderProductEmojiOptions(product.emoji || "")}</select>
          </label>
          <label>Chamada promocional<input name="promo" value="${escapeAttribute(product.promo || "")}" placeholder="Ex.: promoção de lançamento, pronta entrega..." /></label>
          <label>Descrição<textarea name="description" required>${escapeHtml(product.description || "")}</textarea></label>
          <div class="edit-actions">
            <button class="button" type="submit">Salvar alterações</button>
            <button type="button" data-action="delete-product" data-product-id="${escapeAttribute(product.id)}">Remover</button>
          </div>
          <div class="portal-message"></div>
        </form>
      </details>
    </article>
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

function renderCalendarMonth(events, interactive = false, referenceDate = null) {
  const reference = referenceDate ? new Date(referenceDate) : events[0] ? getEventDate(events[0]) : new Date();
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
    const cellAttrs = interactive ? `button type="button" data-action="select-event-date" data-event-date="${key}" title="Adicionar evento em ${day.toLocaleDateString("pt-BR")}"` : "div";
    const closingTag = interactive ? "button" : "div";
    return `
      <${cellAttrs} class="calendar-cell ${day.getMonth() !== month ? "muted" : ""} ${key === todayKey ? "today" : ""} ${interactive ? "clickable" : ""}">
        <strong>${day.getDate()}</strong>
        <div class="calendar-event-stack">
          ${dayEvents.map((event) => `<span class="calendar-chip ${event.type}">${event.time} ${escapeHtml(event.title)}</span>`).join("")}
        </div>
      </${closingTag}>
    `;
  }).join("");

  return `
    <div class="calendar-board">
      <div class="calendar-month-head">
        <button type="button" data-action="calendar-prev-month" aria-label="Mês anterior">‹</button>
        <h3>${getMonthLabel(reference)}</h3>
        <button type="button" data-action="calendar-next-month" aria-label="Próximo mês">›</button>
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
    sponsors: sponsorSeeds,
    campaigns: campaignSeeds,
    products: productSeeds,
    rankings: [],
    quizQuestions: quizQuestionSeeds,
    quizScores: [],
    passwordResets: [],
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
  if (!Array.isArray(normalized.sponsors)) {
    normalized.sponsors = sponsorSeeds;
    changed = true;
  }
  if (!Array.isArray(normalized.campaigns)) {
    normalized.campaigns = campaignSeeds;
    changed = true;
  }
  normalized.campaigns.forEach((campaign, index) => {
    if (!campaign.id) {
      campaign.id = `campaign-${index}-${slugify(campaign.title || "campanha")}`;
      changed = true;
    }
    if (typeof campaign.active !== "boolean") {
      campaign.active = true;
      changed = true;
    }
  });
  normalized.sponsors.forEach((sponsor, index) => {
    if (!sponsor.id) {
      sponsor.id = `sponsor-${index}-${slugify(sponsor.name || "apoiador")}`;
      changed = true;
    }
    if (typeof sponsor.active !== "boolean") {
      sponsor.active = true;
      changed = true;
    }
  });
  if (!Array.isArray(normalized.products)) {
    normalized.products = productSeeds;
    changed = true;
  }
  if (!Array.isArray(normalized.rankings)) {
    normalized.rankings = [];
    changed = true;
  }
  if (!Array.isArray(normalized.quizQuestions)) {
    normalized.quizQuestions = quizQuestionSeeds;
    changed = true;
  } else {
    const existingQuizIds = new Set(normalized.quizQuestions.map((item) => item.id));
    quizQuestionSeeds.forEach((item) => {
      if (!existingQuizIds.has(item.id)) {
        normalized.quizQuestions.push(item);
        changed = true;
      }
    });
  }
  if (!Array.isArray(normalized.quizScores)) {
    normalized.quizScores = [];
    changed = true;
  } else {
    const mergedScores = mergeQuizScores(normalized.quizScores);
    if (mergedScores.length !== normalized.quizScores.length) {
      normalized.quizScores = mergedScores;
      changed = true;
    }
  }
  if (!Array.isArray(normalized.passwordResets)) {
    normalized.passwordResets = [];
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
      if (!Array.isArray(athlete.notifications)) {
        athlete.notifications = [];
        changed = true;
      }
      if (!Array.isArray(athlete.badges)) {
        athlete.badges = [];
        changed = true;
      }
      if (!athlete.profile) {
        athlete.profile = { phone: "", email: "", address: "", nickname: "", avatar: "" };
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

function getPasswordProofs() {
  try {
    return JSON.parse(localStorage.getItem(passwordProofKey) || "{}");
  } catch (error) {
    return {};
  }
}

async function savePasswordProof(role, cpf, password) {
  if (!cpf || !password || password === defaultPassword) return;
  const passwordHash = await hashLoginPassword(password);
  if (!passwordHash) return;
  const proofs = getPasswordProofs();
  proofs[`${role}:${onlyDigits(cpf)}`] = { passwordHash, savedAt: new Date().toISOString() };
  localStorage.setItem(passwordProofKey, JSON.stringify(proofs));
}

async function hasPasswordProof(role, cpf, password) {
  const proof = getPasswordProofs()[`${role}:${onlyDigits(cpf)}`];
  if (!proof?.passwordHash) return false;
  return proof.passwordHash === await hashLoginPassword(password);
}

async function saveRememberedLogin(role, cpf, password) {
  const remembered = getRememberedLogins();
  remembered[role] = { cpf, passwordHash: await hashLoginPassword(password), savedAt: new Date().toISOString() };
  localStorage.setItem(rememberedLoginKey, JSON.stringify(remembered));
  await savePasswordProof(role, cpf, password);
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

function slugify(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 48) || "item";
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
  showToast(message, type);
  if (!target) return;
  target.textContent = message;
  target.className = `portal-message ${type}`;
}

function showToast(message, type = "ok") {
  if (!message) return;
  let toast = document.querySelector("#appToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "appToast";
    toast.className = "app-toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.className = `app-toast ${type} show`;
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2800);
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
          ${passwordField("Senha", "loginPassword", "Digite sua senha", "current-password")}
          <label class="remember-login"><input id="rememberCpf" type="checkbox" ${rememberedCpf ? "checked" : ""} /> Lembrar CPF neste aparelho</label>
          <button class="button" type="submit">Entrar</button>
          <div id="portalMessage" class="portal-message"></div>
        </form>
        <button class="auth-link-button" type="button" data-action="toggle-password-reset">Esqueci minha senha</button>
        <div id="passwordResetWrap" class="password-reset-wrap" hidden>
          <form id="passwordResetForm" class="form-grid" data-role="${role}">
            <label>CPF<input id="resetCpf" inputmode="numeric" placeholder="000.000.000-00" value="${escapeAttribute(rememberedCpf)}" required /></label>
            <label>E-mail cadastrado<input id="resetEmail" type="email" placeholder="seuemail@exemplo.com" required /></label>
            <button class="button ghost-dark" type="submit">Enviar codigo por e-mail</button>
            <div id="resetMessage" class="portal-message"></div>
          </form>
          <form id="passwordResetCompleteForm" class="form-grid reset-complete-form" data-role="${role}">
            <p class="microcopy">Recebeu o codigo? Digite abaixo para criar uma nova senha.</p>
            <label>Codigo recebido<input id="resetCode" inputmode="numeric" placeholder="000000" required /></label>
            ${passwordField("Nova senha", "resetNewPassword", "Digite a nova senha", "new-password")}
            ${passwordField("Confirmar nova senha", "resetConfirmPassword", "Repita a nova senha", "new-password")}
            <button class="button" type="submit">Redefinir senha</button>
            <div id="resetCompleteMessage" class="portal-message"></div>
          </form>
        </div>
      </div>
    </section>
  `;
}

function passwordField(label, id, placeholder, autocomplete = "current-password") {
  return `
    <label>${label}
      <span class="password-field">
        <input id="${id}" type="password" minlength="4" autocomplete="${autocomplete}" placeholder="${placeholder}" required />
        <button type="button" data-action="toggle-password-visibility" data-password-target="${id}" aria-label="Mostrar senha">Mostrar</button>
      </span>
    </label>
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
          ${passwordField("Nova senha", "newPassword", "Digite uma nova senha", "new-password")}
          ${passwordField("Confirmar nova senha", "confirmPassword", "Repita a nova senha", "new-password")}
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
  const data = getAuthData();
  const realNotifications = getUnreadAthleteNotifications(user).length;
  const notifications = getAthleteNotifications(user);
  const latestEvolution = notifications.find((item) => item.type === "evolution");
  return `
    <section class="section portal-section">
      <div class="portal-header">
        <div>
          <span class="eyebrow">Area do Atleta</span>
          <h2>Bem-vindo, ${user.profile?.nickname || user.name}</h2>
          <p>${latestEvolution ? `Parabens pela evolucao: ${escapeHtml(latestEvolution.title)}.` : "Consulte sua jornada, metas, presencas e mensagens da comissao tecnica."}</p>
        </div>
        <button class="notification-bell" type="button" data-action="open-athlete-notifications" aria-label="Abrir notificacoes">??${realNotifications ? `<span>${realNotifications}</span>` : ""}</button>
        <button class="button ghost-dark" data-action="logout">Sair</button>
      </div>
      ${renderAthleteJourney(user, data)}
      ${renderAthleteMonthlyRanking(data, user.id)}
      <div class="athlete-dashboard">
        <article class="portal-card athlete-profile-card">${renderAthleteProfileCard(user)}</article>
        <article class="portal-card"><h3>Meu scout</h3>${renderAthleteScoutSummary(user)}</article>
        <article class="portal-card"><h3>Minha frequencia</h3>${renderAthleteAttendanceSummary(user, data)}</article>
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

function renderAthleteNotificationsPage() {
  const user = getCurrentUser("athlete");
  if (!user) {
    return renderAuthGate("athlete", "Notificacoes do atleta", "Entre com seu CPF e senha para ver seus avisos, evolucoes e comunicados.");
  }
  if (user.mustChangePassword) {
    return renderPasswordChange(user, "Troque sua senha temporaria para liberar suas notificacoes.");
  }
  const notifications = getAthleteNotifications(user);
  const unreadCount = getUnreadAthleteNotifications(user).length;
  const pushActive = Boolean(user.pushSubscription);
  return `
    <section class="section portal-section notification-center">
      <div class="portal-header">
        <div>
          <span class="eyebrow">Central do atleta</span>
          <h2>Notificacoes</h2>
          <p>Todos os avisos da sua jornada no Instituto HeloisaHand ficam reunidos aqui.</p>
        </div>
        <button class="button ghost-dark" type="button" data-action="back-athlete-dashboard">Voltar ao painel</button>
      </div>
      <div class="notification-center-grid">
        <article class="notification-summary-card">
          <strong>${unreadCount}</strong>
          <span>avisos recentes</span>
          <p>${unreadCount ? "As notificacoes abertas aqui serao marcadas como lidas." : "Voce ja visualizou as notificacoes recentes."}</p>
          ${
            pushActive
              ? `<button class="button ghost-dark" type="button" data-action="disable-push">Notificações ativadas - desativar</button>`
              : `<button class="button pulse-action" type="button" data-action="enable-push">Ativar notificações no celular</button>`
          }
        </article>
        <div class="notification-list">
          ${notifications.length ? notifications.map(renderAthleteNotification).join("") : `<article class="athlete-notification"><strong>Tudo certo por enquanto</strong><span>Nenhuma notificacao nova foi publicada.</span></article>`}
        </div>
      </div>
    </section>
  `;
}

function getActiveRanking(data = getAuthData()) {
  const monthKey = new Date().toISOString().slice(0, 7);
  const rankings = data.rankings || [];
  return rankings.find((item) => item.monthKey === monthKey) || rankings[0] || createAutoRanking(data);
}

function getAthleteScoutAverage(athlete) {
  const scores = athlete?.scout?.scores || {};
  const values = Object.values(scores).map(Number).filter((value) => Number.isFinite(value));
  if (!values.length) return 0;
  return Math.round((values.reduce((sum, value) => sum + value, 0) / values.length) * 10) / 10;
}

function createAutoRanking(data = getAuthData()) {
  const athletes = (data.users || [])
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

function renderAthleteMonthlyRanking(data, athleteId = "") {
  const ranking = getActiveRanking(data);
  if (!ranking || !Array.isArray(ranking.items) || !ranking.items.length) return "";
  return `
    <section class="athlete-ranking-card">
      <div>
        <span class="eyebrow">Ranking do mes</span>
        <h3>${escapeHtml(ranking.title || "Top 5 atletas do mes")}</h3>
        <p>${escapeHtml(ranking.description || "Reconhecimento por evolucao, presenca, compromisso e atitude dentro do projeto.")}</p>
      </div>
      ${renderRankingCarousel(ranking, data, athleteId, "athlete")}
    </section>
  `;
}

function renderRankingCarousel(ranking, data, currentAthleteId = "", variant = "athlete") {
  const usersById = new Map((data.users || []).map((user) => [user.id, user]));
  const items = (ranking.items || []).slice(0, 5);
  if (!items.length) return "";
  return `
    <div class="ranking-carousel ${variant === "public" ? "public" : ""}" data-ranking-carousel data-current-index="0">
      <div class="ranking-deck" data-ranking-deck>
        ${items.map((item, index) => {
          const athlete = usersById.get(item.athleteId);
          const displayName = athlete?.profile?.nickname || athlete?.name || item.name || "Atleta";
          const fullName = athlete?.name || item.name || "Atleta";
          const avatar = athlete?.profile?.avatar
            ? `<img src="${escapeAttribute(athlete.profile.avatar)}" alt="${escapeAttribute(fullName)}" />`
            : `<b>${displayName.slice(0, 1).toUpperCase()}</b>`;
          const isCurrent = item.athleteId === currentAthleteId;
          return `
            <article class="ranking-card-slide ${index === 0 ? "active" : ""} ${isCurrent ? "current" : ""}" data-ranking-card data-index="${index}">
              <div class="ranking-card-top">
                <strong>${index + 1}</strong>
                <div class="ranking-avatar">${avatar}</div>
                ${isCurrent ? `<span class="ranking-current-badge">Voce</span>` : ""}
              </div>
              <h4>${escapeHtml(displayName)}</h4>
              <small>${escapeHtml(athlete?.position || "Atleta do instituto")}</small>
              <p>${escapeHtml(item.reason || "Destaque do mes")}</p>
            </article>
          `;
        }).join("")}
      </div>
      <div class="ranking-carousel-controls">
        <button type="button" data-action="ranking-prev" aria-label="Atleta anterior">‹</button>
        <div class="ranking-dots">
          ${items.map((_, index) => `<button type="button" class="${index === 0 ? "active" : ""}" data-action="ranking-dot" data-ranking-index="${index}" aria-label="Ver colocado ${index + 1}"></button>`).join("")}
        </div>
        <button type="button" data-action="ranking-next" aria-label="Proximo atleta">›</button>
      </div>
    </div>
  `;
}

function renderAthleteProfileCard(user) {
  const profile = user.profile || {};
  return `
    <div class="athlete-profile-head">
      <div class="profile-avatar">${profile.avatar ? `<img src="${escapeAttribute(profile.avatar)}" alt="Foto de ${escapeAttribute(user.name)}" />` : `<span>${(profile.nickname || user.name || "A").slice(0, 1).toUpperCase()}</span>`}</div>
      <div>
        <h3>Meu perfil</h3>
        <p>${escapeHtml(profile.nickname || user.name)}</p>
      </div>
    </div>
    <p><strong>CPF:</strong> ${user.cpf ? formatCpf(user.cpf) : "Pendente"}</p>
    ${user.birthDate ? `<p><strong>Nascimento:</strong> ${formatBirthDate(user.birthDate)}</p>` : ""}
    <p><strong>Posicao:</strong> ${user.position || "A definir"}</p>
    <p><strong>Telefone:</strong> ${escapeHtml(profile.phone || "Nao informado")}</p>
    <p><strong>E-mail:</strong> ${escapeHtml(profile.email || "Nao informado")}</p>
    <button class="button ghost-dark" type="button" data-action="toggle-athlete-profile">Editar meu perfil</button>
    <div id="athleteProfileFormWrap" class="athlete-profile-form-wrap" hidden>
      <form id="athleteProfileForm" class="form-grid">
        <label>Foto de perfil<input id="profileAvatar" type="file" accept="image/*" /></label>
        <div id="avatarPreview" class="avatar-preview" hidden></div>
        <label>Nickname<input id="profileNickname" value="${escapeAttribute(profile.nickname || "")}" placeholder="Como quer ser chamado na plataforma?" /></label>
        <label>Telefone<input id="profilePhone" value="${escapeAttribute(profile.phone || "")}" placeholder="(27) 99999-9999" /></label>
        <label>E-mail<input id="profileEmail" type="email" value="${escapeAttribute(profile.email || "")}" placeholder="seuemail@exemplo.com" /></label>
        <label>Endereco<textarea id="profileAddress" placeholder="Rua, numero, bairro e cidade">${escapeHtml(profile.address || "")}</textarea></label>
        <button class="button" type="submit">Salvar perfil</button>
        <div id="portalMessage" class="portal-message"></div>
      </form>
    </div>
  `;
}

function getAthleteNotifications(user) {
  const notifications = [...(user.notifications || [])].sort((a, b) => String(b.createdAt || "").localeCompare(String(a.createdAt || ""))).slice(0, 8);
  if (notifications.length) return notifications;
  return [
    {
      id: "empty-notification",
      type: "info",
      title: "Tudo certo por enquanto",
      text: "Quando o treinador publicar avisos, mensagens, medalhas ou evolucoes do seu scout, elas aparecem aqui.",
      createdAt: "",
    },
  ];
}

function getUnreadAthleteNotifications(user) {
  return [...(user.notifications || [])].filter((item) => !item.readAt);
}

async function markAthleteNotificationsRead() {
  const user = getCurrentUser("athlete");
  if (!user) return;
  const unread = getUnreadAthleteNotifications(user);
  if (!unread.length) return;
  user.notifications = (user.notifications || []).map((item) => (item.readAt ? item : { ...item, readAt: new Date().toISOString() }));
  const data = getAuthData();
  const savedUser = data.users.find((item) => item.id === user.id);
  if (savedUser) savedUser.notifications = user.notifications;
  try {
    await fetch("/api/athlete-notifications-read", {
      method: "POST",
      headers: { "Content-Type": "application/json", ...getAuthHeaders() },
      body: JSON.stringify({}),
    });
    authDataCache = data;
    localStorage.setItem(authStoreKey, JSON.stringify(data));
  } catch (error) {
    authDataCache = data;
    localStorage.setItem(authStoreKey, JSON.stringify(data));
  }
}

function renderAthleteNotification(item) {
  return `
    <article class="athlete-notification ${item.type || ""} ${item.readAt ? "read" : "unread"}">
      <strong>${escapeHtml(item.title)}</strong>
      <span>${escapeHtml(item.text || "")}</span>
      <small>${item.createdAt ? new Date(item.createdAt).toLocaleDateString("pt-BR") : ""}</small>
    </article>
  `;
}

function renderAthleteJourney(user, data) {
  const attendance = getAttendanceRecord(data, user.id);
  const rate = getAttendanceRate(attendance);
  const scout = getAthleteScout(user);
  const items = getScoutItems(user.position);
  const average = items.length ? Math.round((items.reduce((sum, [key]) => sum + Number(scout.scores[key] || 0), 0) / items.length) * 10) / 10 : 0;
  const badges = user.badges || [];
  return `
    <section class="athlete-journey">
      <div class="journey-hero-card">
        <span class="eyebrow">Jornada do Atleta</span>
        <h3>Sua evolucao no Instituto HeloisaHand</h3>
        <p>Acompanhe frequencia, scout, conquistas e mensagens importantes para crescer dentro e fora da quadra.</p>
      </div>
      <div class="journey-metrics">
        <article><strong>${rate === null ? "--" : `${rate}%`}</strong><span>Frequencia</span><div class="mini-progress"><i style="width:${rate || 0}%"></i></div></article>
        <article><strong>${average}</strong><span>Media do scout</span><div class="mini-progress"><i style="width:${average * 10}%"></i></div></article>
        <article><strong>${badges.length}</strong><span>Medalhas</span><div class="mini-progress"><i style="width:${Math.min(100, badges.length * 20)}%"></i></div></article>
      </div>
      <div class="badge-board">
        <h3>Medalhas e conquistas</h3>
        <div>
          ${badges.length ? badges.map(renderAthleteBadge).join("") : `<span class="empty-badge">Continue treinando. Sua primeira medalha esta chegando.</span>`}
        </div>
      </div>
    </section>
  `;
}

function renderAthleteBadge(badge) {
  return `<span class="athlete-badge ${badge.type || ""}"><b>${badge.icon || "★"}</b>${escapeHtml(badge.title)}</span>`;
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
  const hasScores = items.some(([key]) => Number.isFinite(Number(scout.scores[key])));
  return `
    <p class="score-highlight">${average}</p>
    <p>Media geral da ultima avaliacao.</p>
    ${scout.updatedAt ? `<p><strong>Atualizado:</strong> ${new Date(scout.updatedAt).toLocaleDateString("pt-BR")}</p>` : "<p>Aguardando primeira avaliacao do treinador.</p>"}
    ${hasScores ? renderScoutReadOnly(athlete) : ""}
    ${scout.notes ? `<p><strong>Pontos positivos:</strong> ${scout.notes}</p>` : ""}
    ${scout.improvements ? `<p><strong>Pontos a melhorar:</strong> ${scout.improvements}</p>` : ""}
  `;
}

function renderAthleteAttendanceSummary(athlete, data) {
  const record = getAttendanceRecord(data, athlete.id);
  const rate = getAttendanceRate(record);
  const rateClass = rate === null ? "empty" : rate >= 75 ? "good" : rate >= 50 ? "warn" : "danger";
  return `
    <div class="athlete-frequency-card ${rateClass}">
      <strong>${rate === null ? "--" : `${rate}%`}</strong>
      <span>${rate === null ? "Sem dados de frequencia ainda." : "Frequencia nos treinos."}</span>
      <div class="frequency-bar"><i style="width:${rate || 0}%"></i></div>
      <div class="attendance-mini-counts">
        <span><b>${Number(record.presences || 0)}</b> presencas</span>
        <span><b>${Number(record.absences || 0)}</b> faltas</span>
      </div>
      ${record.notes ? `<p><strong>Observacao:</strong> ${escapeHtml(record.notes)}</p>` : ""}
    </div>
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
    ["ranking", "Ranking"],
    ["quiz", "Quiz"],
    ["store", "Loja"],
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
    supporters: () => renderSupportManager(data),
    ranking: () => renderRankingManager(data),
    quiz: () => renderQuizManager(data),
    store: () => renderStoreManager(data),
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
    ${renderCalendarMonth(events, true, coachCalendarReference)}
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
          <div class="portal-message attendance-save-message"></div>
        </form>
      </div>
    </div>
  `;
}

function renderSupportManager(data) {
  const campaigns = data.campaigns || [];
  const sponsors = data.sponsors || [];
  return `
    <div class="coach-panel-head">
      <h3>Apoiadores e campanhas</h3>
      <p class="panel-subtitle">Configure metas reais, valores arrecadados e campanhas pontuais do instituto. Tudo que ficar ativo aparece na area publica de apoio.</p>
    </div>
    <div class="grid two media-manager">
      <div class="portal-card">
        <h3>Nova campanha</h3>
        <form id="campaignForm" class="form-grid">
          <label>Titulo<input id="campaignTitle" required placeholder="Ex.: Tenis para atletas da base" /></label>
          <label>Descricao<textarea id="campaignText" required placeholder="Explique a necessidade e o impacto dessa campanha."></textarea></label>
          <div class="form-grid two">
            <label>Meta em R$<input id="campaignGoal" type="number" min="0" step="0.01" required placeholder="1200" /></label>
            <label>Arrecadado em R$<input id="campaignRaised" type="number" min="0" step="0.01" value="0" /></label>
          </div>
          <button class="button" type="submit">Publicar campanha</button>
          <div id="supportMessage" class="portal-message"></div>
        </form>
      </div>
      <div class="portal-card">
        <h3>Novo apoiador</h3>
        <form id="sponsorForm" class="form-grid">
          <label>Nome<input id="sponsorName" required placeholder="Nome da empresa, parceiro ou familia" /></label>
          <label>Cota ou tipo de apoio<input id="sponsorTier" required placeholder="Ex.: Patrocinador Ouro, Apoiador social" /></label>
          <label>Texto<textarea id="sponsorText" required placeholder="Descreva como esse apoiador contribui."></textarea></label>
          <label>Chamada do botao<input id="sponsorCta" placeholder="Quero patrocinar" /></label>
          <button class="button" type="submit">Adicionar apoiador</button>
        </form>
      </div>
    </div>
    <div class="portal-card support-admin-card">
      <h3>Campanhas publicadas</h3>
      <div class="support-admin-list">
        ${campaigns.length ? campaigns.map(renderCampaignEditCard).join("") : "<p>Nenhuma campanha cadastrada.</p>"}
      </div>
    </div>
    <div class="portal-card support-admin-card">
      <h3>Mural de apoiadores</h3>
      <div class="support-admin-list">
        ${sponsors.length ? sponsors.map(renderSponsorEditCard).join("") : "<p>Nenhum apoiador cadastrado.</p>"}
      </div>
    </div>
  `;
}

function renderRankingManager(data) {
  const athletes = data.users.filter((user) => user.role === "athlete").sort((a, b) => a.name.localeCompare(b.name));
  const ranking = getActiveRanking(data) || {
    id: `ranking-${new Date().toISOString().slice(0, 7)}`,
    monthKey: new Date().toISOString().slice(0, 7),
    title: "Top 5 atletas do mes",
    description: "Reconhecimento por evolucao, presenca, compromisso e atitude.",
    items: [],
  };
  return `
    <div class="coach-panel-head">
      <div>
        <h3>Ranking do mes</h3>
        <p class="panel-subtitle">Escolha os cinco destaques do mes. Esse ranking aparece na Area do Atleta com foto, nome e motivo do reconhecimento.</p>
      </div>
    </div>
    <div class="ranking-manager-grid">
      <form id="rankingForm" class="portal-card ranking-form">
        <div class="form-grid two">
          <label>Mes de referencia<input id="rankingMonth" type="month" value="${escapeAttribute(ranking.monthKey)}" required /></label>
          <label>Titulo<input id="rankingTitle" value="${escapeAttribute(ranking.title || "Top 5 atletas do mes")}" required /></label>
        </div>
        <label>Descricao<textarea id="rankingDescription" required>${escapeHtml(ranking.description || "")}</textarea></label>
        <div class="ranking-slots">
          ${[0, 1, 2, 3, 4].map((index) => renderRankingSlot(index, ranking.items?.[index], athletes)).join("")}
        </div>
        <button class="button pulse-action" type="submit">Salvar ranking do mes</button>
        <div id="rankingMessage" class="portal-message"></div>
      </form>
      <div class="portal-card ranking-preview-card">
        <h3>Previa do ranking</h3>
        ${renderRankingPreview(ranking, data)}
      </div>
    </div>
  `;
}

function renderRankingSlot(index, item = {}, athletes = []) {
  return `
    <div class="ranking-slot">
      <strong>${index + 1}</strong>
      <label>Atleta
        <select name="athleteId-${index}" required>
          <option value="">Selecione</option>
          ${athletes.map((athlete) => `<option value="${escapeAttribute(athlete.id)}" ${item.athleteId === athlete.id ? "selected" : ""}>${escapeHtml(athlete.name)}</option>`).join("")}
        </select>
      </label>
      <label>Motivo do destaque<input name="reason-${index}" value="${escapeAttribute(item.reason || "")}" placeholder="Ex.: evolucao no passe, presenca e compromisso" /></label>
    </div>
  `;
}

function renderRankingPreview(ranking, data) {
  if (!ranking.items?.length) return `<div class="empty-state compact"><strong>Nenhum ranking salvo ainda.</strong><p>Preencha os atletas e salve para publicar.</p></div>`;
  const usersById = new Map((data.users || []).map((user) => [user.id, user]));
  return `
    <div class="ranking-preview-list">
      ${ranking.items.slice(0, 5).map((item, index) => {
        const athlete = usersById.get(item.athleteId);
        return `
          <article>
            <span>${index + 1}</span>
            <div class="ranking-avatar">${athlete?.profile?.avatar ? `<img src="${escapeAttribute(athlete.profile.avatar)}" alt="${escapeAttribute(athlete.name)}" />` : `<b>${(athlete?.name || "A").slice(0, 1).toUpperCase()}</b>`}</div>
            <div>
              <strong>${escapeHtml(athlete?.name || item.name || "Atleta")}</strong>
              <small>${escapeHtml(item.reason || "Destaque do mes")}</small>
            </div>
          </article>
        `;
      }).join("")}
    </div>
  `;
}

function renderQuizManager(data) {
  const questions = data.quizQuestions || quizQuestionSeeds;
  const scores = data.quizScores || [];
  return `
    <div class="coach-panel-head">
      <div>
        <h3>Quiz da plataforma</h3>
        <p class="panel-subtitle">Crie perguntas para o quiz geral de handebol e para o quiz exclusivo da equipe.</p>
      </div>
    </div>
    <div class="quiz-manager-grid">
      <form id="quizQuestionForm" class="portal-card quiz-question-form">
        <div class="form-grid two">
          <label>Tipo de quiz
            <select id="quizQuestionScope">
              <option value="team">Quiz da equipe</option>
              <option value="handball">Quiz geral do handebol</option>
            </select>
          </label>
          <label>Nivel
            <select id="quizQuestionLevel">
              <option value="facil">Facil</option>
              <option value="medio">Medio</option>
              <option value="dificil">Dificil</option>
            </select>
          </label>
        </div>
        <label>Pergunta<textarea id="quizQuestionText" required placeholder="Ex.: Qual foi nossa primeira competicao?"></textarea></label>
        <div class="form-grid two">
          <label>Opcao A<input id="quizOption0" required /></label>
          <label>Opcao B<input id="quizOption1" required /></label>
          <label>Opcao C<input id="quizOption2" required /></label>
          <label>Opcao D<input id="quizOption3" required /></label>
        </div>
        <label>Resposta correta
          <select id="quizAnswerIndex">
            <option value="0">Opcao A</option>
            <option value="1">Opcao B</option>
            <option value="2">Opcao C</option>
            <option value="3">Opcao D</option>
          </select>
        </label>
        <label>Explicacao da resposta<textarea id="quizExplanation" placeholder="Explique rapidamente por que essa e a resposta correta."></textarea></label>
        <button class="button pulse-action" type="submit">Publicar pergunta</button>
        <div class="portal-message"></div>
      </form>
      <div class="portal-card">
        <h3>Ranking dos quizzes</h3>
        ${renderQuizLeaderboard({ quizScores: scores })}
      </div>
    </div>
    <div class="quiz-question-list">
      ${questions.map((item) => `
        <article>
          <div>
            <span>${item.scope === "team" ? "Equipe" : "Handebol"} - ${quizLevelLabel(item.level).replace("Nivel ", "")}</span>
            <strong>${escapeHtml(item.question)}</strong>
            <small>Correta: ${escapeHtml(item.options?.[item.answerIndex] || "")}</small>
          </div>
          <button type="button" data-action="delete-quiz-question" data-question-id="${escapeAttribute(item.id)}">Remover</button>
        </article>
      `).join("")}
    </div>
  `;
}

function renderCampaignEditCard(campaign) {
  return `
    <form class="support-edit-card campaign-edit-form" data-campaign-id="${escapeAttribute(campaign.id)}">
      <div class="support-edit-title">
        <strong>${escapeHtml(campaign.title)}</strong>
        <label><input type="checkbox" name="active" ${campaign.active !== false ? "checked" : ""} /> Ativa</label>
      </div>
      <label>Titulo<input name="title" value="${escapeAttribute(campaign.title || "")}" required /></label>
      <label>Descricao<textarea name="text" required>${escapeHtml(campaign.text || "")}</textarea></label>
      <div class="form-grid two">
        <label>Meta em R$<input name="goal" type="number" min="0" step="0.01" value="${Number(campaign.goal || 0)}" required /></label>
        <label>Arrecadado em R$<input name="raised" type="number" min="0" step="0.01" value="${Number(campaign.raised || 0)}" /></label>
      </div>
      <div class="edit-actions">
        <button class="button" type="submit">Salvar campanha</button>
        <button type="button" data-action="delete-campaign" data-campaign-id="${escapeAttribute(campaign.id)}">Remover</button>
      </div>
      <div class="portal-message support-save-message"></div>
    </form>
  `;
}

function renderSponsorEditCard(sponsor) {
  return `
    <form class="support-edit-card sponsor-edit-form" data-sponsor-id="${escapeAttribute(sponsor.id)}">
      <div class="support-edit-title">
        <strong>${escapeHtml(sponsor.name)}</strong>
        <label><input type="checkbox" name="active" ${sponsor.active !== false ? "checked" : ""} /> Ativo</label>
      </div>
      <label>Nome<input name="name" value="${escapeAttribute(sponsor.name || "")}" required /></label>
      <label>Cota ou tipo de apoio<input name="tier" value="${escapeAttribute(sponsor.tier || "")}" required /></label>
      <label>Texto<textarea name="text" required>${escapeHtml(sponsor.text || "")}</textarea></label>
      <label>Chamada do botao<input name="cta" value="${escapeAttribute(sponsor.cta || "")}" /></label>
      <div class="edit-actions">
        <button class="button" type="submit">Salvar apoiador</button>
        <button type="button" data-action="delete-sponsor" data-sponsor-id="${escapeAttribute(sponsor.id)}">Remover</button>
      </div>
      <div class="portal-message support-save-message"></div>
    </form>
  `;
}

function renderStoreManager(data) {
  const products = data.products || [];
  return `
    <div class="coach-panel-head">
      <h3>Loja do instituto</h3>
      <p class="panel-subtitle">Adicione produtos, valores e itens solidários que serão exibidos na loja pública.</p>
    </div>
    <div class="grid two media-manager">
      <div class="portal-card">
        <h3>Novo produto</h3>
        <form id="productForm" class="form-grid">
          <label>Tipo do produto
            <select id="productType" data-product-type-select>
              ${renderProductTypeOptions("Camisa feminina")}
            </select>
          </label>
          <label>Nome do produto<input id="productName" required placeholder="Ex.: Camisa oficial HeloisaHand" /></label>
          <div class="form-grid two">
            <label>Categoria<input id="productCategory" required placeholder="Uniforme, acessório..." value="Uniforme" /></label>
            <label>Preço<input id="productPrice" type="number" min="0" step="0.01" required placeholder="79.90" /></label>
          </div>
          <label>Emoji ou símbolo
            <select id="productEmoji">${renderProductEmojiOptions("👕")}</select>
          </label>
          <label>Chamada promocional<input id="productPromo" placeholder="Ex.: promoção de lançamento, pronta entrega..." /></label>
          <label>Descrição<textarea id="productDescription" required placeholder="Explique o produto e como ele ajuda o projeto"></textarea></label>
          <button class="button" type="submit">Publicar produto</button>
          <div id="portalMessage" class="portal-message"></div>
        </form>
      </div>
      <div class="portal-card">
        <h3>Produtos publicados</h3>
        <div class="store-grid compact">
          ${products.length ? products.map(renderProductAdminCard).join("") : "<p>Nenhum produto cadastrado ainda.</p>"}
        </div>
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
        <p class="panel-subtitle">Veja tudo que esta na galeria publica e remova rapidamente fotos ou videos quebrados.</p>
        <div id="coachMediaList" class="media-list admin-media-list">
          ${renderMediaLoadingState()}
        </div>
      </div>
    </div>
  `;
}

function renderMediaLoadingState() {
  return `<div class="empty-state compact media-loading-state"><strong>Carregando midias...</strong><p>Aguarde um instante.</p></div>`;
}

function renderMediaErrorState(message = "Nao foi possivel carregar as midias agora.") {
  return `
    <div class="empty-state compact media-error-state">
      <strong>Midias indisponiveis agora.</strong>
      <p>${escapeHtml(message)}</p>
      <button class="button ghost" type="button" data-action="reload-media">Tentar carregar novamente</button>
    </div>
  `;
}

function renderMediaCard(item, editable = false) {
  const isVideo = item.type === "youtube";
  const thumb = isVideo ? item.thumbnail : item.src;
  const title = escapeHtml(item.title || "Midia do instituto");
  const description = escapeHtml(item.description || (isVideo ? "Video do canal do instituto" : "Foto publicada pelo treinador"));
  const dateLabel = item.createdAt ? new Date(item.createdAt).toLocaleString("pt-BR") : "";
  const content = isVideo
    ? `<a class="media-thumb video" href="${escapeAttribute(item.url)}" target="_blank" rel="noreferrer" aria-label="Abrir video ${title} no YouTube"><img src="${escapeAttribute(thumb)}" alt="${title}" /><span>Assistir no YouTube</span></a>`
    : `<a class="media-thumb photo" href="${escapeAttribute(thumb)}" target="_blank" rel="noreferrer" aria-label="Ver foto ${title}"><img src="${escapeAttribute(thumb)}" alt="${title}" onerror="this.closest('.media-thumb').classList.add('broken')" /></a>`;
  return `
    <article class="media-card ${editable ? "admin-media-card" : ""}">
      ${content}
      <div class="media-card-body">
        <small>${isVideo ? "Video" : "Foto"}${dateLabel ? ` - ${escapeHtml(dateLabel)}` : ""}</small>
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
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 9000);
  try {
    const response = await fetch(`/api/media?ts=${Date.now()}`, { cache: "no-store", signal: controller.signal });
    if (!response.ok) throw new Error("Nao foi possivel carregar as midias.");
    const payload = await response.json();
    if (Array.isArray(payload)) return payload;
    if (Array.isArray(payload.media)) return payload.media;
    return [];
  } finally {
    clearTimeout(timeout);
  }
}

async function hydrateMediaViews(path) {
  const needsMedia = path === "/competicoes" || path === "/atletas-em-acao" || document.querySelector("#coachMediaList");
  if (!needsMedia) return;
  document.querySelectorAll("#coachMediaList, #publicMediaGallery, .media-preview-list").forEach((target) => {
    if (!target.dataset.keepMediaLoading) target.innerHTML = renderMediaLoadingState();
  });
  try {
    const media = await fetchServerMedia();
    renderCoachMediaList(media);
    renderPublicMediaGallery(media);
    renderCompetitionMedia(media);
    bindInteractions();
  } catch (error) {
    const message = error?.name === "AbortError" ? "O servidor demorou para responder. Tente novamente." : error?.message || "Verifique se o servidor esta respondendo.";
    document.querySelectorAll("#coachMediaList, #publicMediaGallery, .media-preview-list").forEach((target) => {
      target.innerHTML = renderMediaErrorState(message);
    });
    bindInteractions();
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
  document.querySelector("#passwordResetForm")?.addEventListener("submit", handlePasswordResetRequest);
  document.querySelector("#passwordResetCompleteForm")?.addEventListener("submit", handlePasswordResetComplete);
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
  document.querySelector("#athleteProfileForm")?.addEventListener("submit", handleAthleteProfileSave);
  document.querySelector("#productForm")?.addEventListener("submit", handleProductSave);
  document.querySelectorAll("[data-product-type-select]").forEach((select) => select.addEventListener("change", handleProductTypeChange));
  document.querySelectorAll(".product-edit-form").forEach((form) => form.addEventListener("submit", handleProductEdit));
  document.querySelector("#campaignForm")?.addEventListener("submit", handleCampaignSave);
  document.querySelector("#sponsorForm")?.addEventListener("submit", handleSponsorSave);
  document.querySelector("#rankingForm")?.addEventListener("submit", handleRankingSave);
  document.querySelector("#quizQuestionForm")?.addEventListener("submit", handleQuizQuestionSave);
  document.querySelector("#profileAvatar")?.addEventListener("change", handleAvatarPreview);
  document.querySelectorAll(".campaign-edit-form").forEach((form) => form.addEventListener("submit", handleCampaignEdit));
  document.querySelectorAll(".sponsor-edit-form").forEach((form) => form.addEventListener("submit", handleSponsorEdit));
  document.querySelectorAll(".scout-form").forEach((form) => form.addEventListener("submit", handleScoutSave));
  document.querySelectorAll("[data-competition-tab]").forEach((button) => button.addEventListener("click", handleCompetitionTab));
  document.querySelectorAll("[data-chat-tab]").forEach((button) => button.addEventListener("click", handleChatTab));
  startHandballHubRotation();
  bindScoutRangeInputs();
  bindRankingCarousels();
  bindDragScrollCarousels();
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

function bindDragScrollCarousels() {
  document.querySelectorAll("[data-drag-scroll]").forEach((track) => {
    if (track.dataset.dragBound === "true") return;
    track.dataset.dragBound = "true";
    let startX = 0;
    let scrollLeft = 0;
    let dragging = false;
    let moved = false;
    let pendingHref = "";
    let suppressNextClick = false;
    track.addEventListener("pointerdown", (event) => {
      dragging = true;
      moved = false;
      suppressNextClick = false;
      const card = event.target.closest("[data-card-href], a[href]");
      pendingHref = card?.dataset.cardHref || card?.getAttribute("href") || "";
      startX = event.clientX;
      scrollLeft = track.scrollLeft;
      track.classList.add("dragging");
      track.setPointerCapture?.(event.pointerId);
    });
    track.addEventListener("pointermove", (event) => {
      if (!dragging) return;
      if (Math.abs(event.clientX - startX) > 6) moved = true;
      track.scrollLeft = scrollLeft - (event.clientX - startX);
    });
    track.addEventListener("click", (event) => {
      const link = event.target.closest("a[href]");
      if (suppressNextClick) {
        event.preventDefault();
        event.stopPropagation();
        suppressNextClick = false;
        return;
      }
      if (moved) {
        event.preventDefault();
        event.stopPropagation();
        moved = false;
        return;
      }
      if (link?.getAttribute("href")?.startsWith("#")) {
        event.preventDefault();
        location.hash = link.getAttribute("href");
      }
    });
    ["pointerup", "pointercancel", "pointerleave"].forEach((type) => {
      track.addEventListener(type, () => {
        if (type === "pointerup" && pendingHref && !moved) {
          suppressNextClick = true;
          if (pendingHref.startsWith("#")) {
            location.hash = pendingHref;
          } else {
            location.href = pendingHref;
          }
        }
        dragging = false;
        pendingHref = "";
        track.classList.remove("dragging");
      });
    });
  });
}

function bindRankingCarousels() {
  document.querySelectorAll("[data-ranking-carousel]").forEach((carousel) => {
    if (carousel.dataset.bound === "true") return;
    carousel.dataset.bound = "true";
    setRankingCarouselIndex(carousel, Number(carousel.dataset.currentIndex || 0));
    let startX = 0;
    let startY = 0;
    let dragging = false;
    const deck = carousel.querySelector("[data-ranking-deck]");
    deck?.addEventListener("pointerdown", (event) => {
      dragging = true;
      startX = event.clientX;
      startY = event.clientY;
      deck.setPointerCapture?.(event.pointerId);
      carousel.classList.add("dragging");
    });
    deck?.addEventListener("pointerup", (event) => {
      if (!dragging) return;
      dragging = false;
      carousel.classList.remove("dragging");
      const dx = event.clientX - startX;
      const dy = event.clientY - startY;
      if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) {
        moveRankingCarousel(carousel, dx < 0 ? 1 : -1);
      }
    });
    deck?.addEventListener("pointercancel", () => {
      dragging = false;
      carousel.classList.remove("dragging");
    });
  });
}

function moveRankingCarousel(carousel, delta) {
  const cards = [...carousel.querySelectorAll("[data-ranking-card]")];
  if (!cards.length) return;
  const current = Number(carousel.dataset.currentIndex || 0);
  const next = (current + delta + cards.length) % cards.length;
  setRankingCarouselIndex(carousel, next);
}

function setRankingCarouselIndex(carousel, index) {
  const cards = [...carousel.querySelectorAll("[data-ranking-card]")];
  if (!cards.length) return;
  const total = cards.length;
  const current = ((index % total) + total) % total;
  carousel.dataset.currentIndex = String(current);
  cards.forEach((card, cardIndex) => {
    const distance = (cardIndex - current + total) % total;
    card.classList.toggle("active", distance === 0);
    card.classList.toggle("next", distance === 1);
    card.classList.toggle("after-next", distance === 2);
    card.classList.toggle("previous", distance === total - 1);
    card.style.setProperty("--deck-offset", String(Math.min(distance, 3)));
  });
  carousel.querySelectorAll(".ranking-dots button").forEach((dot, dotIndex) => {
    dot.classList.toggle("active", dotIndex === current);
  });
}

function handleCompetitionTab(event) {
  const tab = event.currentTarget.dataset.competitionTab;
  document.querySelectorAll("[data-competition-tab]").forEach((button) => {
    button.classList.toggle("active", button.dataset.competitionTab === tab);
  });
  let activePanel = null;
  document.querySelectorAll("[data-competition-panel]").forEach((panel) => {
    const isActive = panel.dataset.competitionPanel === tab;
    panel.hidden = !isActive;
    panel.classList.toggle("is-active", isActive);
    if (isActive) activePanel = panel;
  });
  if (activePanel) {
    activePanel.classList.remove("panel-focus-pulse");
    requestAnimationFrame(() => {
      activePanel.classList.add("panel-focus-pulse");
      activePanel.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
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
    if (await tryRestorePersonalLogin(role, login, password, remember)) return;
    showPortalMessage(`${error.message} Se for primeiro acesso, confira se o CPF esta cadastrado e use a senha 1234.`, "error");
  }
}

async function handlePasswordResetRequest(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const role = form.dataset.role;
  const cpf = onlyDigits(document.querySelector("#resetCpf").value);
  const email = document.querySelector("#resetEmail").value.trim();
  const message = document.querySelector("#resetMessage");
  if (cpf.length !== 11) {
    if (message) {
      message.textContent = "Informe um CPF com 11 numeros.";
      message.className = "portal-message error";
    }
    return;
  }

  try {
    const response = await fetch("/api/password-reset-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ role, cpf, email }),
    });
    const payload = await response.json();
    if (!response.ok) throw new Error(payload.error || "Nao foi possivel solicitar recuperacao.");
    if (message) {
      message.textContent = "Se o CPF e o e-mail estiverem cadastrados, um codigo sera enviado para esse e-mail.";
      message.className = "portal-message ok";
    }
  } catch (error) {
    if (message) {
      message.textContent = error.message;
      message.className = "portal-message error";
    }
  }
}

async function handlePasswordResetComplete(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const role = form.dataset.role;
  const cpf = onlyDigits(document.querySelector("#resetCpf").value);
  const email = document.querySelector("#resetEmail").value.trim();
  const code = document.querySelector("#resetCode").value.trim();
  const password = document.querySelector("#resetNewPassword").value;
  const confirmation = document.querySelector("#resetConfirmPassword").value;
  const message = document.querySelector("#resetCompleteMessage");
  if (password !== confirmation) {
    if (message) {
      message.textContent = "As senhas nao conferem.";
      message.className = "portal-message error";
    }
    return;
  }
  if (password === defaultPassword) {
    if (message) {
      message.textContent = "Escolha uma senha diferente da senha temporaria.";
      message.className = "portal-message error";
    }
    return;
  }

  try {
    const response = await fetch("/api/password-reset-complete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ role, cpf, email, code, password }),
    });
    const payload = await response.json();
    if (!response.ok) throw new Error(payload.error || "Nao foi possivel redefinir a senha.");
    if (message) {
      message.textContent = "Senha redefinida. Agora voce ja pode entrar com CPF e a nova senha.";
      message.className = "portal-message ok";
    }
    await savePasswordProof(role, cpf, password);
    form.reset();
  } catch (error) {
    if (message) {
      message.textContent = error.message;
      message.className = "portal-message error";
    }
  }
}

async function tryRestorePersonalLogin(role, cpf, password, remember) {
  if (!await hasPasswordProof(role, cpf, password)) return false;
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
    await savePasswordProof(role, cpf, password);
    if (remember) await saveRememberedLogin(role, cpf, password);
    renderRoute();
    setTimeout(() => showPortalMessage("Acesso recuperado. Sua senha pessoal foi restaurada no servidor.", "ok"), 0);
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
    await savePasswordProof(user.role, onlyDigits(user.cpf), password);
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

async function handleNotice(event) {
  event.preventDefault();
  const data = getAuthData();
  const notice = { title: document.querySelector("#noticeTitle").value.trim(), text: document.querySelector("#noticeText").value.trim(), createdAt: new Date().toISOString() };
  data.notices.push(notice);
  try {
    await saveAuthDataConfirmed(data);
    sendPushBroadcast(notice.title || "Novo aviso", notice.text || "Voce tem um novo aviso do Instituto HeloisaHand.");
    app.innerHTML = renderCoachDashboard("notices");
    bindInteractions();
    showToast("Aviso publicado.", "ok");
  } catch (error) {
    showPortalMessage(error.message || "Nao foi possivel salvar o aviso.", "error");
  }
}

async function handleTeamEvent(event) {
  event.preventDefault();
  const data = getAuthData();
  data.events = data.events || [];
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
  try {
    coachCalendarReference = new Date(`${document.querySelector("#eventDate").value}T00:00:00`);
    await saveAuthDataConfirmed(data);
    sendPushBroadcast("Novo evento na agenda", `${document.querySelector("#eventTitle").value.trim()} em ${new Date(`${document.querySelector("#eventDate").value}T00:00:00`).toLocaleDateString("pt-BR")} às ${document.querySelector("#eventTime").value || "--:--"}.`, "/#/competicoes");
    app.innerHTML = renderCoachDashboard("events");
    bindInteractions();
    showToast("Evento publicado na agenda.", "ok");
  } catch (error) {
    showPortalMessage(error.message || "Não foi possível salvar o evento.", "error");
  }
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

function moveCoachCalendar(delta) {
  const next = new Date(coachCalendarReference);
  next.setDate(1);
  next.setMonth(next.getMonth() + delta);
  coachCalendarReference = next;
  app.innerHTML = renderCoachDashboard("events");
  bindInteractions();
}

async function handleAttendanceSave(event) {
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
  try {
    await saveAuthDataConfirmed(data);
    app.innerHTML = renderCoachDashboard("attendance");
    bindInteractions();
    setTimeout(() => showToast("Frequencia salva no servidor.", "ok"), 0);
  } catch (error) {
    const message = form.querySelector(".attendance-save-message");
    if (message) {
      message.textContent = error.message;
      message.classList.add("error");
    } else {
      showPortalMessage(error.message, "error");
    }
  }
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

async function handleScoutSave(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = getAuthData();
  const athlete = data.users.find((user) => user.id === form.dataset.athleteId);
  if (!athlete) return;
  const previousScout = athlete.scout ? JSON.parse(JSON.stringify(athlete.scout)) : null;
  const scout = createDefaultScout(athlete.position);
  Object.keys(scout.scores).forEach((key) => {
    scout.scores[key] = Number(form.elements[key]?.value || 0);
  });
  scout.notes = form.elements.notes.value.trim();
  scout.improvements = form.elements.improvements.value.trim();
  scout.updatedAt = new Date().toISOString();
  athlete.scout = scout;
  registerScoutEvolution(athlete, previousScout, scout);
  try {
    await saveAuthDataConfirmed(data);
    sendPushToAthlete(athlete.id, "Seu scout foi atualizado", "Entre na sua area do atleta para acompanhar sua evolucao.");
    const message = form.querySelector(".scout-message");
    if (message) message.textContent = "Scout salvo com sucesso.";
    showToast("Scout salvo com sucesso.", "ok");
  } catch (error) {
    showToast(error.message, "error");
  }
}

function registerScoutEvolution(athlete, previousScout, nextScout) {
  if (!previousScout?.scores) return;
  athlete.notifications = Array.isArray(athlete.notifications) ? athlete.notifications : [];
  athlete.badges = Array.isArray(athlete.badges) ? athlete.badges : [];
  const improved = Object.entries(nextScout.scores)
    .filter(([key, value]) => Number(value) > Number(previousScout.scores[key] || 0))
    .map(([key, value]) => ({ key, value, previous: previousScout.scores[key] || 0 }));
  if (!improved.length) return;
  const labels = Object.fromEntries(getScoutItems(athlete.position).map(([key, label]) => [key, label]));
  athlete.notifications.unshift({
    id: `note-${Date.now()}`,
    type: "evolution",
    title: `Voce evoluiu em ${improved.length} aspecto${improved.length > 1 ? "s" : ""}`,
    text: `Destaques: ${improved.slice(0, 3).map((item) => labels[item.key] || item.key).join(", ")}.`,
    createdAt: new Date().toISOString(),
  });
  if (improved.length >= 5) {
    addAthleteBadge(athlete, "destaque", "Atleta destaque", "🏅");
  }
  if (Number(nextScout.scores.commitment || 0) >= 9 && Number(nextScout.scores.communication || 0) >= 8) {
    addAthleteBadge(athlete, "companheiro", "Melhor companheiro de equipe", "🤝");
  }
}

function addAthleteBadge(athlete, type, title, icon) {
  const monthKey = new Date().toISOString().slice(0, 7);
  const exists = athlete.badges.some((badge) => badge.type === type && badge.monthKey === monthKey);
  if (exists) return;
  athlete.badges.unshift({ id: `badge-${type}-${Date.now()}`, type, title, icon, monthKey, createdAt: new Date().toISOString() });
  athlete.notifications.unshift({
    id: `note-badge-${Date.now()}`,
    type: "badge",
    title: `Nova medalha: ${title}`,
    text: "Seu empenho foi reconhecido na jornada do atleta.",
    createdAt: new Date().toISOString(),
  });
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

async function handleAthleteProfileSave(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const profile = {
    nickname: document.querySelector("#profileNickname").value.trim(),
    phone: document.querySelector("#profilePhone").value.trim(),
    email: document.querySelector("#profileEmail").value.trim(),
    address: document.querySelector("#profileAddress").value.trim(),
  };
  try {
    const response = await fetch("/api/athlete-profile", {
      method: "POST",
      headers: { "Content-Type": "application/json", ...getAuthHeaders() },
      body: JSON.stringify(profile),
    });
    const payload = await response.json();
    if (!response.ok) throw new Error(payload.error || "Nao foi possivel salvar o perfil.");
    authDataCache = payload.data;
    const file = document.querySelector("#profileAvatar").files[0];
    if (file) await uploadAthleteAvatar(file);
    showToast(file ? "Perfil e foto salvos com sucesso." : "Perfil salvo com sucesso.", "ok");
    renderRoute();
  } catch (error) {
    const msg = form.querySelector("#portalMessage");
    if (msg) {
      msg.textContent = error.message;
      msg.className = "portal-message error";
    }
    showToast(error.message, "error");
  }
}

async function uploadAthleteAvatar(file) {
  if (!file.type.startsWith("image/")) throw new Error("Escolha um arquivo de imagem valido.");
  if (file.size > 12 * 1024 * 1024) throw new Error("Use uma foto com ate 12 MB.");
  const optimized = await compressAvatarFile(file);
  const formData = new FormData();
  formData.append("avatar", optimized, "avatar.jpg");
  const response = await fetch("/api/athlete-avatar", { method: "POST", headers: getAuthHeaders(), body: formData });
  const payload = await response.json();
  if (!response.ok) throw new Error(payload.error || "Nao foi possivel salvar a foto.");
  authDataCache = payload.data;
}

function compressAvatarFile(file) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(url);
      const maxSize = 520;
      const scale = Math.min(1, maxSize / Math.max(img.width, img.height));
      const canvas = document.createElement("canvas");
      canvas.width = Math.max(1, Math.round(img.width * scale));
      canvas.height = Math.max(1, Math.round(img.height * scale));
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      canvas.toBlob((blob) => {
        if (!blob) reject(new Error("Nao foi possivel preparar a foto."));
        else resolve(blob);
      }, "image/jpeg", 0.82);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Nao foi possivel ler a imagem."));
    };
    img.src = url;
  });
}

function handleAvatarPreview(event) {
  const file = event.currentTarget.files?.[0];
  const preview = document.querySelector("#avatarPreview");
  if (!preview) return;
  if (!file) {
    preview.hidden = true;
    preview.innerHTML = "";
    return;
  }
  if (!file.type.startsWith("image/")) {
    preview.hidden = false;
    preview.innerHTML = `<span>Escolha uma imagem valida.</span>`;
    return;
  }
  const src = URL.createObjectURL(file);
  preview.hidden = false;
  preview.innerHTML = `<img src="${src}" alt="Previa da foto de perfil" /><span>Foto selecionada. Clique em salvar perfil para enviar.</span>`;
}

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = atob(base64);
  return Uint8Array.from([...rawData].map((char) => char.charCodeAt(0)));
}

async function enablePushNotifications() {
  if (!("serviceWorker" in navigator) || !("PushManager" in window) || !("Notification" in window)) {
    showToast("Este navegador nao oferece suporte a notificacoes push.", "error");
    return;
  }
  const permission = await Notification.requestPermission();
  if (permission !== "granted") {
    showToast("Permissao de notificacao nao autorizada.", "error");
    return;
  }
  const keyResponse = await fetch("/api/push-public-key", { cache: "no-store" });
  const keyPayload = await keyResponse.json();
  if (!keyPayload.enabled || !keyPayload.publicKey) {
    showToast("Notificacoes push ainda precisam das chaves VAPID no Render.", "error");
    return;
  }
  const registration = await navigator.serviceWorker.ready;
  const subscription = await registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(keyPayload.publicKey),
  });
  const response = await fetch("/api/push-subscribe", {
    method: "POST",
    headers: { "Content-Type": "application/json", ...getAuthHeaders() },
    body: JSON.stringify({ subscription }),
  });
  const payload = await response.json();
  if (!response.ok) throw new Error(payload.error || "Nao foi possivel ativar notificacoes.");
  authDataCache = payload.data;
  showToast("Notificacoes ativadas neste aparelho.", "ok");
  renderRoute();
}

async function disablePushNotifications() {
  const registration = "serviceWorker" in navigator ? await navigator.serviceWorker.ready.catch(() => null) : null;
  const subscription = await registration?.pushManager?.getSubscription?.();
  await subscription?.unsubscribe?.();
  const response = await fetch("/api/push-unsubscribe", {
    method: "POST",
    headers: { "Content-Type": "application/json", ...getAuthHeaders() },
    body: JSON.stringify({}),
  });
  const payload = await response.json();
  if (!response.ok) throw new Error(payload.error || "Nao foi possivel desativar notificacoes.");
  authDataCache = payload.data;
  showToast("Notificacoes desativadas neste aparelho.", "ok");
  renderRoute();
}

function sendPushBroadcast(title, body, url = "/#/notificacoes") {
  fetch("/api/push-broadcast", {
    method: "POST",
    headers: { "Content-Type": "application/json", ...getAuthHeaders() },
    body: JSON.stringify({ title, body, url }),
  }).catch(() => {});
}

function sendPushToAthlete(athleteId, title, body, url = "/#/notificacoes") {
  fetch("/api/push-athlete", {
    method: "POST",
    headers: { "Content-Type": "application/json", ...getAuthHeaders() },
    body: JSON.stringify({ athleteId, title, body, url }),
  }).catch(() => {});
}

function handleProductTypeChange(event) {
  const option = getProductCatalogOption(event.currentTarget.value);
  const form = event.currentTarget.closest("form");
  if (!option || !form) return;
  const name = form.querySelector("#productName, [name='name']");
  const category = form.querySelector("#productCategory, [name='category']");
  const emoji = form.querySelector("#productEmoji, [name='emoji']");
  if (name && (!name.value.trim() || name.dataset.autofilled === "true")) {
    name.value = option.label === "Produto livre" ? "" : option.label;
    name.dataset.autofilled = option.label === "Produto livre" ? "false" : "true";
  }
  if (category) category.value = option.category || "Livre";
  if (emoji) emoji.value = option.emoji || "🛒";
}

async function handleProductSave(event) {
  event.preventDefault();
  const data = getAuthData();
  data.products = data.products || [];
  const type = document.querySelector("#productType")?.value || "Produto livre";
  data.products.unshift({
    id: `product-${Date.now()}`,
    type,
    name: document.querySelector("#productName").value.trim(),
    category: document.querySelector("#productCategory").value.trim(),
    price: Number(document.querySelector("#productPrice").value || 0),
    emoji: document.querySelector("#productEmoji").value || "🛒",
    promo: document.querySelector("#productPromo")?.value.trim() || "",
    description: document.querySelector("#productDescription").value.trim(),
    active: true,
    createdAt: new Date().toISOString(),
  });
  try {
    await saveAuthDataConfirmed(data);
    app.innerHTML = renderCoachDashboard("store");
    bindInteractions();
    showToast("Produto publicado na loja.", "ok");
  } catch (error) {
    showToast(error.message || "Não foi possível publicar o produto.", "error");
  }
}

async function handleProductEdit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const productId = form.dataset.productId;
  const data = getAuthData();
  const product = (data.products || []).find((item) => item.id === productId);
  if (!product) return;
  product.type = form.elements.type?.value || "Produto livre";
  product.name = form.elements.name.value.trim();
  product.category = form.elements.category.value.trim();
  product.price = Number(form.elements.price.value || 0);
  product.emoji = form.elements.emoji.value || "🛒";
  product.promo = form.elements.promo?.value.trim() || "";
  product.description = form.elements.description.value.trim();
  product.updatedAt = new Date().toISOString();
  try {
    await saveAuthDataConfirmed(data);
    app.innerHTML = renderCoachDashboard("store");
    bindInteractions();
    showToast("Produto atualizado.", "ok");
  } catch (error) {
    const message = form.querySelector(".portal-message");
    if (message) {
      message.textContent = error.message || "Não foi possível salvar o produto.";
      message.className = "portal-message error";
    }
  }
}

async function handleCampaignSave(event) {
  event.preventDefault();
  const data = getAuthData();
  data.campaigns = data.campaigns || [];
  data.campaigns.unshift({
    id: `campaign-${Date.now()}-${slugify(document.querySelector("#campaignTitle").value)}`,
    title: document.querySelector("#campaignTitle").value.trim(),
    text: document.querySelector("#campaignText").value.trim(),
    goal: Number(document.querySelector("#campaignGoal").value || 0),
    raised: Number(document.querySelector("#campaignRaised").value || 0),
    active: true,
    createdAt: new Date().toISOString(),
  });
  try {
    await saveAuthDataConfirmed(data);
    app.innerHTML = renderCoachDashboard("supporters");
    bindInteractions();
    showToast("Campanha publicada no site.", "ok");
  } catch (error) {
    showSupportFormMessage(error.message, "error");
  }
}

async function handleRankingSave(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = getAuthData();
  data.rankings = data.rankings || [];
  const monthKey = document.querySelector("#rankingMonth").value;
  const athletesById = new Map((data.users || []).map((user) => [user.id, user]));
  const items = [0, 1, 2, 3, 4]
    .map((index) => {
      const athleteId = form.elements[`athleteId-${index}`]?.value || "";
      const athlete = athletesById.get(athleteId);
      return {
        athleteId,
        name: athlete?.name || "",
        reason: form.elements[`reason-${index}`]?.value.trim() || "Destaque do mes",
      };
    })
    .filter((item) => item.athleteId);
  const ranking = {
    id: `ranking-${monthKey}`,
    monthKey,
    title: document.querySelector("#rankingTitle").value.trim(),
    description: document.querySelector("#rankingDescription").value.trim(),
    items: items.slice(0, 5),
    updatedAt: new Date().toISOString(),
  };
  const existing = data.rankings.find((item) => item.monthKey === monthKey);
  if (existing) Object.assign(existing, ranking);
  else data.rankings.unshift(ranking);
  try {
    await saveAuthDataConfirmed(data);
    app.innerHTML = renderCoachDashboard("ranking");
    bindInteractions();
    showToast("Ranking do mes salvo e publicado para os atletas.", "ok");
  } catch (error) {
    const msg = document.querySelector("#rankingMessage");
    if (msg) {
      msg.textContent = error.message;
      msg.className = "portal-message error";
    }
    showToast(error.message, "error");
  }
}

async function handleQuizQuestionSave(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const button = form.querySelector("button[type='submit']");
  try {
    const data = getAuthData();
    data.quizQuestions = Array.isArray(data.quizQuestions) ? data.quizQuestions : [];
    const questionText = form.querySelector("#quizQuestionText")?.value.trim() || "";
    const options = [0, 1, 2, 3].map((index) => form.querySelector(`#quizOption${index}`)?.value.trim() || "");
    if (!questionText || options.some((option) => !option)) {
      throw new Error("Preencha a pergunta e as quatro opcoes antes de publicar.");
    }
    const question = {
      id: `quiz-${Date.now()}`,
      scope: form.querySelector("#quizQuestionScope")?.value || "team",
      level: form.querySelector("#quizQuestionLevel")?.value || "facil",
      question: questionText,
      options,
      answerIndex: Number(form.querySelector("#quizAnswerIndex")?.value || 0),
      explanation: form.querySelector("#quizExplanation")?.value.trim() || "",
      active: true,
      createdAt: new Date().toISOString(),
    };
    data.quizQuestions.unshift(question);
    if (button) {
      button.disabled = true;
      button.textContent = "Publicando...";
    }
    await saveAuthDataConfirmed(data);
    app.innerHTML = renderCoachDashboard("quiz");
    bindInteractions();
    showToast("Pergunta publicada no quiz.", "ok");
  } catch (error) {
    if (button) {
      button.disabled = false;
      button.textContent = "Publicar pergunta";
    }
    showInlineFormMessage(form, error.message, "error");
    showToast(error.message, "error");
  }
}

async function handleCampaignEdit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = getAuthData();
  const campaign = (data.campaigns || []).find((item) => item.id === form.dataset.campaignId);
  if (!campaign) return;
  campaign.title = form.elements.title.value.trim();
  campaign.text = form.elements.text.value.trim();
  campaign.goal = Number(form.elements.goal.value || 0);
  campaign.raised = Number(form.elements.raised.value || 0);
  campaign.active = form.elements.active.checked;
  campaign.updatedAt = new Date().toISOString();
  try {
    await saveAuthDataConfirmed(data);
    app.innerHTML = renderCoachDashboard("supporters");
    bindInteractions();
    showToast("Campanha atualizada.", "ok");
  } catch (error) {
    showInlineFormMessage(form, error.message, "error");
  }
}

async function handleSponsorSave(event) {
  event.preventDefault();
  const data = getAuthData();
  data.sponsors = data.sponsors || [];
  data.sponsors.unshift({
    id: `sponsor-${Date.now()}-${slugify(document.querySelector("#sponsorName").value)}`,
    name: document.querySelector("#sponsorName").value.trim(),
    tier: document.querySelector("#sponsorTier").value.trim(),
    text: document.querySelector("#sponsorText").value.trim(),
    cta: document.querySelector("#sponsorCta").value.trim() || "Falar sobre apoio",
    active: true,
    createdAt: new Date().toISOString(),
  });
  try {
    await saveAuthDataConfirmed(data);
    app.innerHTML = renderCoachDashboard("supporters");
    bindInteractions();
    showToast("Apoiador adicionado ao mural.", "ok");
  } catch (error) {
    showSupportFormMessage(error.message, "error");
  }
}

async function handleSponsorEdit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = getAuthData();
  const sponsor = (data.sponsors || []).find((item) => item.id === form.dataset.sponsorId);
  if (!sponsor) return;
  sponsor.name = form.elements.name.value.trim();
  sponsor.tier = form.elements.tier.value.trim();
  sponsor.text = form.elements.text.value.trim();
  sponsor.cta = form.elements.cta.value.trim() || "Falar sobre apoio";
  sponsor.active = form.elements.active.checked;
  sponsor.updatedAt = new Date().toISOString();
  try {
    await saveAuthDataConfirmed(data);
    app.innerHTML = renderCoachDashboard("supporters");
    bindInteractions();
    showToast("Apoiador atualizado.", "ok");
  } catch (error) {
    showInlineFormMessage(form, error.message, "error");
  }
}

function showSupportFormMessage(message, type = "ok") {
  const target = document.querySelector("#supportMessage");
  if (target) {
    target.textContent = message;
    target.className = `portal-message ${type}`;
  }
}

function showInlineFormMessage(form, message, type = "ok") {
  const target = form.querySelector(".portal-message");
  if (target) {
    target.textContent = message;
    target.className = `portal-message ${type}`;
  }
}

async function handleAction(event) {
  const action = event.currentTarget.dataset.action;
  if (action === "start-quiz") {
    startQuizSession(event.currentTarget.dataset.quizScope, event.currentTarget.dataset.quizLevel);
  }
  if (action === "answer-quiz") {
    answerQuizQuestion(Number(event.currentTarget.dataset.answerIndex));
  }
  if (action === "next-quiz") {
    quizState.index += 1;
    app.innerHTML = renderQuizPlay();
    bindInteractions();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  if (action === "cancel-quiz") {
    quizState = null;
    app.innerHTML = renderQuiz();
    bindInteractions();
  }
  if (action === "restart-quiz") {
    const scope = quizState?.scope || "handball";
    const level = quizState?.level || "facil";
    quizState = null;
    startQuizSession(scope, level);
  }
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
  if (action === "open-athlete-notifications") {
    location.hash = "#/notificacoes";
  }
  if (action === "enable-push") {
    try {
      await enablePushNotifications();
    } catch (error) {
      showToast(error.message || "Nao foi possivel ativar notificacoes.", "error");
    }
  }
  if (action === "disable-push") {
    try {
      await disablePushNotifications();
    } catch (error) {
      showToast(error.message || "Nao foi possivel desativar notificacoes.", "error");
    }
  }
  if (action === "back-athlete-dashboard") {
    location.hash = "#/atleta";
  }
  if (action === "ranking-prev" || action === "ranking-next") {
    const carousel = event.currentTarget.closest("[data-ranking-carousel]");
    if (carousel) {
      moveRankingCarousel(carousel, action === "ranking-next" ? 1 : -1);
    }
  }
  if (action === "ranking-dot") {
    const carousel = event.currentTarget.closest("[data-ranking-carousel]");
    if (carousel) {
      setRankingCarouselIndex(carousel, Number(event.currentTarget.dataset.rankingIndex || 0));
    }
  }
  if (action === "toggle-athlete-profile") {
    const wrap = document.querySelector("#athleteProfileFormWrap");
    if (wrap) wrap.hidden = !wrap.hidden;
  }
  if (action === "toggle-password-reset") {
    const wrap = document.querySelector("#passwordResetWrap");
    if (wrap) wrap.hidden = !wrap.hidden;
  }
  if (action === "toggle-password-visibility") {
    const input = document.querySelector(`#${event.currentTarget.dataset.passwordTarget}`);
    if (input) {
      const shouldShow = input.type === "password";
      input.type = shouldShow ? "text" : "password";
      event.currentTarget.textContent = shouldShow ? "Ocultar" : "Mostrar";
      event.currentTarget.setAttribute("aria-label", shouldShow ? "Ocultar senha" : "Mostrar senha");
    }
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
  if (action === "calendar-prev-month") {
    moveCoachCalendar(-1);
  }
  if (action === "calendar-next-month") {
    moveCoachCalendar(1);
  }
  if (action === "select-event-date") {
    coachCalendarReference = new Date(`${event.currentTarget.dataset.eventDate}T00:00:00`);
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
  if (action === "reload-media") {
    hydrateMediaViews(location.hash.replace("#", "") || "/treinador");
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
  if (action === "delete-product") {
    const data = getAuthData();
    data.products = (data.products || []).filter((item) => item.id !== event.currentTarget.dataset.productId);
    try {
      await saveAuthDataConfirmed(data);
      app.innerHTML = renderCoachDashboard("store");
      bindInteractions();
      showToast("Produto removido da loja.", "ok");
    } catch (error) {
      showToast(error.message || "Não foi possível remover o produto.", "error");
    }
  }
  if (action === "delete-quiz-question") {
    const data = getAuthData();
    data.quizQuestions = (data.quizQuestions || []).filter((item) => item.id !== event.currentTarget.dataset.questionId);
    await saveAuthDataConfirmed(data);
    app.innerHTML = renderCoachDashboard("quiz");
    bindInteractions();
    showToast("Pergunta removida do quiz.", "ok");
  }
  if (action === "delete-campaign") {
    const data = getAuthData();
    data.campaigns = (data.campaigns || []).filter((item) => item.id !== event.currentTarget.dataset.campaignId);
    await saveAuthDataConfirmed(data);
    app.innerHTML = renderCoachDashboard("supporters");
    bindInteractions();
  }
  if (action === "delete-sponsor") {
    const data = getAuthData();
    data.sponsors = (data.sponsors || []).filter((item) => item.id !== event.currentTarget.dataset.sponsorId);
    await saveAuthDataConfirmed(data);
    app.innerHTML = renderCoachDashboard("supporters");
    bindInteractions();
  }
}
