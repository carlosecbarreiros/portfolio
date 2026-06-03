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
   i18n — language switching
============================================================ */
const cache = {};

async function loadLang(lang) {
  if (cache[lang]) return cache[lang];
  const res   = await fetch(`locales/${lang}.json`);
  cache[lang] = await res.json();
  return cache[lang];
}

async function applyLang(lang) {
  const t = await loadLang(lang);

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
