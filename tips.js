/* ══════════════════════════════════════════
   TIPS UAEMEX — JS PROFESIONAL
   ══════════════════════════════════════════ */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  initAOS();
  initNavbar();
  initBurger();
  initMarquee();
  animateWhaMessages();
  disableRightClick();
});

/* ── AOS ── */
function initAOS() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
    });
  }
}

/* ── NAVBAR SCROLL ── */
function initNavbar() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  const update = () => nav.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', update, { passive: true });
  update();
}

/* ── BURGER ── */
function initBurger() {
  const burger = document.getElementById('burger');
  const menu   = document.getElementById('mobileMenu');
  if (!burger || !menu) return;

  burger.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    burger.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menu.classList.remove('open');
      burger.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  document.addEventListener('click', (e) => {
    if (!burger.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove('open');
      burger.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

/* ── MARQUEE pause on hover ── */
function initMarquee() {
  const track = document.querySelector('.marquee-track');
  if (!track) return;
  const wrap = track.parentElement;
  wrap.addEventListener('mouseenter', () => track.style.animationPlayState = 'paused');
  wrap.addEventListener('mouseleave', () => track.style.animationPlayState = 'running');
}

/* ── PARALLAX hero blobs ── */
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  document.querySelectorAll('.hero-blob').forEach((b, i) => {
    b.style.transform = `translateY(${scrollY * (0.06 + i * 0.03)}px)`;
  });
}, { passive: true });

/* ── WHA messages stagger ── */
function animateWhaMessages() {
  const msgs = document.querySelectorAll('.wp-msg');
  if (!msgs.length) return;

  msgs.forEach(m => {
    m.style.opacity = '0';
    m.style.transform = 'translateY(8px) scale(.92)';
    m.style.transition = 'opacity .4s ease, transform .4s cubic-bezier(.34,1.56,.64,1)';
  });

  const section = document.querySelector('.wha-section');
  if (!section) return;

  const obs = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      msgs.forEach((m, i) => {
        setTimeout(() => {
          m.style.opacity = '1';
          m.style.transform = 'translateY(0) scale(1)';
        }, i * 160);
      });
      obs.disconnect();
    }
  }, { threshold: 0.3 });

  obs.observe(section);
}

/* ── TIP CARDS hover glow ── */
document.querySelectorAll('.tip-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--mx', `${x}%`);
    card.style.setProperty('--my', `${y}%`);
  });
});

/* ── SMOOTH SCROLL ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    const y = target.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: 'smooth' });
  });
});

/* ── FLAG CARDS — reveal animación secuencial ── */
const flagObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const cards = entry.target.querySelectorAll('.flag-card');
      cards.forEach((c, i) => {
        setTimeout(() => {
          c.style.opacity = '1';
          c.style.transform = 'translateX(0)';
        }, i * 80);
      });
      flagObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

const flagsGrid = document.querySelector('.flags-grid');
if (flagsGrid) {
  flagsGrid.querySelectorAll('.flag-card').forEach(c => {
    c.style.opacity = '0';
    c.style.transform = 'translateX(-20px)';
    c.style.transition = 'opacity .45s ease, transform .45s cubic-bezier(.34,1.56,.64,1)';
  });
  flagObs.observe(flagsGrid);
}

/* ── TIMELINE items counter ── */
const tlObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.tl-item').forEach((item, i) => {
  item.style.opacity = '0';
  item.style.transform = 'translateY(24px)';
  item.style.transition = `opacity .5s ease ${i * 120}ms, transform .5s cubic-bezier(.34,1.56,.64,1) ${i * 120}ms`;
  tlObs.observe(item);
});

/* ── DISABLE RIGHT CLICK ── */
function disableRightClick() {
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    showToast('⚠️ Contenido protegido — © 2026 UAEMEX');
  });
  document.addEventListener('keydown', (e) => {
    if (
      e.key === 'F12' ||
      (e.ctrlKey && ['u','U','s','S'].includes(e.key)) ||
      (e.ctrlKey && e.shiftKey && ['i','I','j','J'].includes(e.key))
    ) {
      e.preventDefault();
      showToast('⚠️ Acción bloqueada — Derechos Reservados 2026');
    }
  });
}

/* ── TOAST ── */
let _toastTimer;
function showToast(msg) {
  let t = document.getElementById('tips-toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'tips-toast';
    t.style.cssText = `
      position:fixed; bottom:28px; left:50%; transform:translateX(-50%) translateY(80px);
      background:#1a2430; color:#fff; font-family:'Nunito',sans-serif;
      font-size:.84rem; font-weight:700; padding:11px 22px; border-radius:50px;
      border:1.5px solid rgba(255,255,255,.12); box-shadow:0 8px 32px rgba(0,0,0,.4);
      z-index:9999; transition:transform .35s cubic-bezier(.34,1.56,.64,1), opacity .3s;
      opacity:0; white-space:nowrap; pointer-events:none;
    `;
    document.body.appendChild(t);
  }
  t.textContent = msg;
  clearTimeout(_toastTimer);
  requestAnimationFrame(() => {
    t.style.opacity = '1';
    t.style.transform = 'translateX(-50%) translateY(0)';
  });
  _toastTimer = setTimeout(() => {
    t.style.opacity = '0';
    t.style.transform = 'translateX(-50%) translateY(80px)';
  }, 3000);
}

document.addEventListener("keydown", function(e) {
    if (e.ctrlKey && e.key.toLowerCase() === "u") {
        e.preventDefault();
    }
});

// Bloquear clic derecho
document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});

// Bloquear arrastrar imágenes
document.addEventListener("dragstart", function(e) {
    e.preventDefault();
});

// Bloquear selección de texto
document.addEventListener("selectstart", function(e) {
    e.preventDefault();
});

// Bloquear teclas
document.addEventListener("keydown", function(e) {

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