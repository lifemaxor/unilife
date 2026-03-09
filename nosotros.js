'use strict';
/* ══════════════════════════════════════════
   NOSOTROS UAEMEX — JS
══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  initAOS();
  initNavbar();
  initBurger();
  initCursor();
  initCounters();
  initCardTilt();
  disableRightClick();
});

/* ── AOS ── */
function initAOS() {
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 750, easing: 'ease-out-cubic', once: true, offset: 50 });
  }
}

/* ── NAVBAR ── */
function initNavbar() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  const upd = () => nav.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', upd, { passive: true });
  upd();
}

/* ── BURGER ── */
function initBurger() {
  const burger = document.getElementById('burger');
  const menu = document.getElementById('mobileMenu');
  if (!burger || !menu) return;
  burger.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    burger.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    menu.classList.remove('open');
    burger.classList.remove('open');
    document.body.style.overflow = '';
  }));
  document.addEventListener('click', e => {
    if (!burger.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove('open');
      burger.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

/* ── CURSOR PERSONALIZADO ── */
function initCursor() {
  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  if (!dot || !ring) return;

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top = my + 'px';
  });

  // Ring sigue con lag suave
  function animRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(animRing);
  }
  animRing();
}

/* ── CONTADORES HERO ── */
function initCounters() {
  const nums = document.querySelectorAll('.hs-num[data-target]');
  if (!nums.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target);
      const dur = target > 100 ? 1400 : 700;
      animCount(el, target, dur);
      obs.unobserve(el);
    });
  }, { threshold: 0.6 });

  nums.forEach(n => obs.observe(n));
}

function animCount(el, target, dur) {
  let start = 0;
  const step = target / (dur / 16);
  const tick = () => {
    start += step;
    if (start >= target) { el.textContent = target.toLocaleString('es-MX'); return; }
    el.textContent = Math.floor(start).toLocaleString('es-MX');
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/* ── PARALLAX hero blobs ── */
window.addEventListener('scroll', () => {
  const sy = window.scrollY;
  document.querySelectorAll('.hero-blob').forEach((b, i) => {
    b.style.transform = `translateY(${sy * (.05 + i * .025)}px)`;
  });
}, { passive: true });

/* ── CARD TILT efecto 3D en team-card ── */
function initCardTilt() {
  document.querySelectorAll('.team-card, .team-founder').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      card.style.transform = `perspective(800px) rotateX(${-dy * 4}deg) rotateY(${dx * 4}deg) translateY(-6px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform .6s cubic-bezier(.4,0,.2,1)';
      setTimeout(() => card.style.transition = '', 600);
    });
  });
}

/* ── SMOOTH SCROLL ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  });
});

/* ── ANIMACIÓN CARD STACK al scroll ── */
const stackObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const cards = entry.target.querySelectorAll('.msc');
    cards.forEach((c, i) => {
      setTimeout(() => {
        c.style.opacity = '1';
        c.style.transform = c.style.transform.replace('translateY(30px)', '');
      }, i * 120);
    });
    stackObs.unobserve(entry.target);
  });
}, { threshold: 0.2 });

const stack = document.querySelector('.ms-card-stack');
if (stack) {
  stack.querySelectorAll('.msc').forEach(c => {
    c.style.opacity = '0';
    c.style.transition = 'opacity .5s ease, transform .5s cubic-bezier(.34,1.56,.64,1)';
  });
  stackObs.observe(stack);
}

/* ── VALORES ITEMS stagger ── */
const valObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const items = entry.target.querySelectorAll('.vs-item');
    items.forEach((it, i) => {
      setTimeout(() => {
        it.style.opacity = '1';
        it.style.transform = 'translateY(0)';
      }, i * 100);
    });
    valObs.unobserve(entry.target);
  });
}, { threshold: 0.2 });

const valGrid = document.querySelector('.vs-grid');
if (valGrid) {
  valGrid.querySelectorAll('.vs-item').forEach(it => {
    it.style.opacity = '0';
    it.style.transform = 'translateY(24px)';
    it.style.transition = 'opacity .5s ease, transform .5s cubic-bezier(.34,1.56,.64,1)';
  });
  valObs.observe(valGrid);
}

/* ── SECURITY ── */
function disableRightClick() {
  document.addEventListener('contextmenu', e => e.preventDefault());
  document.addEventListener('dragstart', e => e.preventDefault());
  document.addEventListener('keydown', e => {
    const k = e.key.toLowerCase();
    if (e.ctrlKey && (k === 'u' || k === 's' || k === 'a')) e.preventDefault();
    if (e.ctrlKey && e.shiftKey && (k === 'i' || k === 'j')) e.preventDefault();
    if (e.key === 'F12') e.preventDefault();
  });
}

// Bloquear clic derecho
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

// Bloquear arrastrar imágenes
document.addEventListener("dragstart", function (e) {
  e.preventDefault();
});

// Bloquear selección de texto
document.addEventListener("selectstart", function (e) {
  e.preventDefault();
});

// Bloquear teclas
document.addEventListener("keydown", function (e) {

  // Ctrl + teclas comunes
  if (e.ctrlKey && (
    e.key === "u" || // ver código
    e.key === "c" || // copiar
    e.key === "x" || // cortar
    e.key === "s" || // guardar
    e.key === "a" || // seleccionar todo
    e.key === "p" || // imprimir
    e.key === "i" || // devtools
    e.key === "j"    // devtools
  )) {
    e.preventDefault();
  }

  // F12
  if (e.key === "F12") {
    e.preventDefault();
  }

});