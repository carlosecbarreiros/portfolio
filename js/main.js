/* ============================================================
   Nav — scroll effect
============================================================ */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ============================================================
   Nav — mobile hamburger
============================================================ */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
  });
});

/* ============================================================
   Scroll-reveal (Intersection Observer)
============================================================ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ============================================================
   Hero role — one-shot typewriter (types once, stays)
============================================================ */
const heroRoleEl = document.getElementById('heroRole');
const roleByLang = {
  br: 'DBA · Engenheiro de Dados',
  en: 'DBA · Data Engineer',
};

let twTimer = null;

function typeRole(lang) {
  if (!heroRoleEl) return;
  clearTimeout(twTimer);
  const text = roleByLang[lang] || roleByLang.br;
  heroRoleEl.textContent = '';
  let i = 0;
  const step = () => {
    heroRoleEl.textContent = text.substring(0, ++i);
    if (i < text.length) twTimer = setTimeout(step, 55);
  };
  step();
}

/* ============================================================
   CRUD thumbnail — freeze video at a visually rich frame
============================================================ */
const crudThumbVid = document.getElementById('crudThumbVid');
if (crudThumbVid) {
  crudThumbVid.addEventListener('loadedmetadata', () => {
    crudThumbVid.currentTime = 3;
  });
}

/* ============================================================
   Video demo modal
============================================================ */
const vidModal         = document.getElementById('vidModal');
const vidModalBackdrop = document.getElementById('vidModalBackdrop');
const vidModalClose    = document.getElementById('vidModalClose');
const modalVideo       = document.getElementById('modalVideo');

function openModal() {
  vidModal.classList.add('open');
  modalVideo.play();
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  vidModal.classList.remove('open');
  modalVideo.pause();
  modalVideo.currentTime = 0;
  document.body.style.overflow = '';
}

document.querySelectorAll('.js-open-demo').forEach(el => {
  el.addEventListener('click', openModal);
});
if (vidModalBackdrop) vidModalBackdrop.addEventListener('click', closeModal);
if (vidModalClose)    vidModalClose.addEventListener('click', closeModal);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ============================================================
   i18n — translations inline (no fetch, works em file:// e GitHub Pages)
============================================================ */
const translations = {
  br: {
    nav_about: 'Sobre mim', nav_skills: 'Habilidades',
    nav_projects: 'Projetos', nav_contact: 'Contato',
    hero_tagline: 'Construindo soluções de dados confiáveis, performáticas e orientadas a impacto.',
    hero_btn_projects: 'Ver Projetos', hero_btn_contact: 'Entrar em Contato',
    about_tag: 'Sobre mim', about_title: 'Quem sou eu',
    about_p1: 'Olá! Meu nome é Carlos Eduardo Cardoso Barreiros, tenho 20 anos e sou estudante de Ciência da Computação na Universidade Anhembi Morumbi (conclusão prevista para dez/2026). Atualmente, atuo como Administrador de Banco de Dados Júnior na Sintel Brasil, trabalhando com ambientes produtivos em SQL Server e PostgreSQL (on-premise &amp; AWS Aurora).',
    about_p2: 'No dia a dia, atuo com análise e otimização de performance, automação de rotinas, gestão de backups e restore e monitoramento de sistemas de missão crítica. Também participo da modelagem de dados e do desenvolvimento de soluções em banco, sempre buscando eficiência, confiabilidade e escalabilidade.',
    about_p3: 'Antes da tecnologia, vivi uma experiência como jogador de futebol profissional na Alemanha, onde desenvolvi disciplina, resiliência, trabalho em equipe e adaptação a ambientes desafiadores, além de consolidar meu inglês.',
    about_p4: 'Tenho grande interesse em Engenharia de Dados e Inteligência Artificial aplicada a dados — áreas onde busco evoluir continuamente, construindo soluções escaláveis com tecnologias modernas e boas práticas de engenharia.',
    about_stat1: 'Anos de experiência', about_stat2: 'Projetos realizados',
    about_stat3: 'Tecnologias', about_stat4: 'Ex-atleta profissional',
    skills_tag: 'Habilidades', skills_title: 'Stack técnica',
    skill_db: 'Bancos de Dados', skill_dev: 'Desenvolvimento',
    skill_cloud: 'Cloud', skill_data: 'Dados &amp; Engenharia',
    skill_os: 'Sistemas Operacionais',
    projects_tag: 'Projetos', projects_title: 'O que construí',
    proj_academic: 'Projeto Acadêmico', proj_personal: 'Projeto Pessoal',
    proj_see_docs: 'Ver Documentação', proj_see_repo: 'Ver Repositório',
    proj_watch_demo: 'Assistir Demo',
    proj1_title: 'Melhoria para OneFootball',
    proj1_desc: 'Modelagem de uma melhoria para o aplicativo OneFootball, especificamente a criação de uma área de comunidade onde os usuários poderiam interagir com o conteúdo de notícias. O foco foi o desenvolvimento de diagramas UML e Engenharia de Requisitos para análise e implementação.',
    proj_link_docs: 'Ver documentação →',
    proj2_title: 'Aplicação CRUD',
    proj2_desc: 'Aplicação web completa que simula um sistema de cadastro e gerenciamento de usuários, desenvolvida como desafio full-stack. O sistema permite cadastro, login, visualização de perfil e exclusão de conta. Para moderadores, há um painel de controle completo sobre os usuários.',
    proj_link_repo: 'Ver repositório →',
    contact_tag: 'Contato', contact_title: 'Vamos conversar',
    contact_sub: 'Estou disponível para oportunidades, colaborações e conversas sobre dados e tecnologia.',
    contact_phone_label: 'Telefone', contact_loc_label: 'Localização',
    form_name: 'Nome', form_email: 'E-Mail', form_msg: 'Mensagem',
    form_msg_placeholder: 'Sua mensagem...', form_send: 'Enviar Mensagem',
    footer: 'Desenvolvido por <strong>Carlos Barreiros</strong> &copy; 2025 Todos os Direitos Reservados.',
  },
  en: {
    nav_about: 'About me', nav_skills: 'Skills',
    nav_projects: 'Projects', nav_contact: 'Contact',
    hero_tagline: 'Building reliable, high-performance data solutions oriented to impact.',
    hero_btn_projects: 'See Projects', hero_btn_contact: 'Get in Touch',
    about_tag: 'About me', about_title: 'Who I am',
    about_p1: "Hi! My name is Carlos Eduardo Cardoso Barreiros, I'm 20 years old and studying Computer Science at Universidade Anhembi Morumbi (expected graduation Dec/2026). Currently I work as a Junior Database Administrator at Sintel Brasil, managing production environments in SQL Server and PostgreSQL (on-premise &amp; AWS Aurora).",
    about_p2: 'Day-to-day I handle performance analysis and optimization, routine automation, backup &amp; restore management, and monitoring of mission-critical systems. I also participate in data modeling and the development of database solutions, always aiming for efficiency, reliability, and scalability.',
    about_p3: 'Before tech, I had an experience as a professional football player in Germany, where I developed discipline, resilience, teamwork and adaptability — and consolidated my English along the way.',
    about_p4: 'I have a strong interest in Data Engineering and AI applied to data — areas where I continuously strive to grow, building scalable solutions with modern technologies and solid engineering practices.',
    about_stat1: 'Years of experience', about_stat2: 'Projects completed',
    about_stat3: 'Technologies', about_stat4: 'Ex-professional athlete',
    skills_tag: 'Skills', skills_title: 'Tech stack',
    skill_db: 'Databases', skill_dev: 'Development',
    skill_cloud: 'Cloud', skill_data: 'Data &amp; Engineering',
    skill_os: 'Operating Systems',
    projects_tag: 'Projects', projects_title: "What I've built",
    proj_academic: 'Academic Project', proj_personal: 'Personal Project',
    proj_see_docs: 'View Documentation', proj_see_repo: 'View Repository',
    proj_watch_demo: 'Watch Demo',
    proj1_title: 'OneFootball Improvement',
    proj1_desc: 'Modeling of an improvement for the OneFootball app, specifically the creation of a community area where users could interact with news content. The focus was on developing UML diagrams and Requirements Engineering for analysis and implementation.',
    proj_link_docs: 'View documentation →',
    proj2_title: 'CRUD Application',
    proj2_desc: 'A complete web application simulating a full user registration and management system, built as a full-stack personal challenge. Users can sign up, log in, view their profile, and delete their account. Moderators have a full control panel to manage all users.',
    proj_link_repo: 'View repository →',
    contact_tag: 'Contact', contact_title: "Let's talk",
    contact_sub: "I'm available for opportunities, collaborations, and conversations about data and technology.",
    contact_phone_label: 'Phone', contact_loc_label: 'Location',
    form_name: 'Name', form_email: 'E-Mail', form_msg: 'Message',
    form_msg_placeholder: 'Your message...', form_send: 'Send Message',
    footer: 'Developed by <strong>Carlos Barreiros</strong> &copy; 2025 All Rights Reserved.',
  },
};

function applyLang(lang) {
  const t = translations[lang] || translations.br;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] != null) el.innerHTML = t[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key] != null) el.placeholder = t[key];
  });

  document.documentElement.lang = lang === 'br' ? 'pt-BR' : 'en';
  typeRole(lang);
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang;
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    localStorage.setItem('portfolio-lang', lang);
    applyLang(lang);
  });
});

/* Boot */
const initLang = localStorage.getItem('portfolio-lang') || 'br';
const initBtn  = document.querySelector(`.lang-btn[data-lang="${initLang}"]`);
if (initBtn) {
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  initBtn.classList.add('active');
}
applyLang(initLang);
