/* ══════════════════════════════════════════
   GUÍAS UAEMEX — JS PROFESIONAL
   ══════════════════════════════════════════ */

'use strict';

/* ╔══════════════════════════════════════════════════════════════╗
   ║  📂 ZONA DE CONFIGURACIÓN — AQUÍ AGREGAS TUS PDFs           ║
   ║                                                              ║
   ║  Cómo funciona:                                              ║
   ║  1. Sube tu PDF a la misma carpeta que guias.html            ║
   ║  2. En la guía correspondiente pon el nombre del archivo     ║
   ║     en el campo  pdf: 'nombre-de-tu-archivo.pdf'             ║
   ║  3. Si todavía no tienes PDF, deja  pdf: null                ║
   ║                                                              ║
   ║  Para agregar UNA NUEVA GUÍA solo copia y pega este bloque   ║
   ║  dentro del área que quieras:                                ║
   ║                                                              ║
   ║  { id: X, title: 'Nombre', pages: 'XX págs',                ║
   ║    level: 'Básico',  size: 'X MB', pdf: 'archivo.pdf' },     ║
   ║                                                              ║
   ║  Niveles válidos: 'Básico' | 'Intermedio' | 'Avanzado'       ║
   ╚══════════════════════════════════════════════════════════════╝ */

const GUIDES_DATA = {

  /* ─── PENSAMIENTO MATEMÁTICO ───
     📁 Carpeta: pdfM/
     ➕ Para agregar: copia una línea, cambia id, título y pdf       */
  matematicas: {
    title: 'Pensamiento Matemático',
    icon: '<i class="fas fa-square-root-variable"></i>',
    color: 'linear-gradient(135deg,#0a3d1f,#1a6b35)',
    guides: [
      { id: 1, title: 'Ejercicios 1', level: 'Básico',     pdf: 'algebra.pdf' },
      { id: 2, title: 'Ejercicios 2', level: 'Intermedio', pdf: 'calculo.pdf' },
      { id: 3, title: 'Ejercicios 3', level: 'Intermedio', pdf: 'razones.pdf' },
    ]
  },

  /* ─── COMPRENSIÓN LECTORA ───
     📁 Carpeta: pdfCL/
     ➕ Para agregar: copia una línea, cambia id, título y pdf       */
  lectora: {
    title: 'Comprensión Lectora',
    icon: '<i class="fas fa-book-open-reader"></i>',
    color: 'linear-gradient(135deg,#1e3a8a,#2563eb)',
    guides: [
      { id: 1, title: 'Ejercicios 1', level: 'Básico',     pdf: 'comprension.pdf' },
      { id: 2, title: 'Ejercicios 2', level: 'Básico',     pdf: 'comprension2.pdf' },
      { id: 3, title: 'Ejercicios 3', level: 'Intermedio', pdf: 'comprension3.pdf' },
    ]
  },

}
/* ════ FIN ZONA DE CONFIGURACIÓN ════ */

/* ── LEVEL COLORS ──────────────────────── */
const LEVEL_COLORS = {
  'Básico':     { bg: '#dcfce7', color: '#166534' },
  'Intermedio': { bg: '#fef9c3', color: '#854d0e' },
  'Avanzado':   { bg: '#fee2e2', color: '#991b1b' },
};

/* ── INIT ──────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initAOS();
  initNavbar();
  initBurger();
  initScrollStats();
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
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── BURGER MENU ── */
function initBurger() {
  const burger = document.getElementById('burger');
  const menu   = document.getElementById('mobileMenu');
  if (!burger || !menu) return;

  burger.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    burger.classList.toggle('open', isOpen);
    burger.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close on link click
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menu.classList.remove('open');
      burger.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!burger.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove('open');
      burger.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

/* ── COUNTER ANIMATION ── */
function initScrollStats() {
  const nums = document.querySelectorAll('.stat-num[data-target]');
  if (!nums.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  nums.forEach(n => observer.observe(n));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  if (target === 0) { el.textContent = '0'; return; }
  const duration = 1800;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

/* ── DISABLE RIGHT CLICK ── */
function disableRightClick() {
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    showToast('⚠️ Contenido protegido — Derechos reservados UAEMEX');
    return false;
  });

  // Also block F12, Ctrl+U, Ctrl+S, Ctrl+Shift+I
  document.addEventListener('keydown', (e) => {
    if (
      e.key === 'F12' ||
      (e.ctrlKey && ['u', 'U', 's', 'S'].includes(e.key)) ||
      (e.ctrlKey && e.shiftKey && ['i', 'I', 'j', 'J'].includes(e.key))
    ) {
      e.preventDefault();
      showToast('⚠️ Acción bloqueada — Contenido protegido');
    }
  });
}

/* ── TOAST NOTIFICATION ── */
let toastTimeout;
function showToast(msg) {
  let toast = document.getElementById('uaemex-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'uaemex-toast';
    toast.style.cssText = `
      position:fixed; bottom:28px; left:50%; transform:translateX(-50%) translateY(80px);
      background:#1a2430; color:#fff; font-family:'Nunito',sans-serif;
      font-size:.85rem; font-weight:700;
      padding:12px 24px; border-radius:50px;
      border:1.5px solid rgba(255,255,255,.12);
      box-shadow:0 8px 32px rgba(0,0,0,.4);
      z-index:9999; transition:transform .35s cubic-bezier(.34,1.56,.64,1), opacity .3s;
      opacity:0; white-space:nowrap; pointer-events:none;
    `;
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  clearTimeout(toastTimeout);
  // Show
  requestAnimationFrame(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';
  });
  toastTimeout = setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(80px)';
  }, 3000);
}

/* ── CATALOG MODAL ── */
let _currentArea = null;
let _currentGuides = [];

function openCatalog(area) {
  const data = GUIDES_DATA[area];
  if (!data) return;

  _currentArea  = area;
  _currentGuides = data.guides;

  const modal    = document.getElementById('catalogModal');
  const cmBanner = document.getElementById('cmBanner');
  const cmIcon   = document.getElementById('cmIcon');
  const cmTitle  = document.getElementById('cmTitle');
  const cmCount  = document.getElementById('cmCount');
  const cmGrid   = document.getElementById('cmGrid');
  const cmSearch = document.getElementById('cmSearch');
  const cmSortBtns = document.querySelectorAll('.cm-sort-btn');

  if (!modal) return;

  // Set banner color
  cmBanner.style.background = data.color;
  cmIcon.innerHTML = data.icon;
  cmTitle.textContent = data.title;
  cmCount.innerHTML = `<i class="fas fa-file-pdf"></i> ${data.guides.length} guías disponibles`;

  // Reset search & filter
  if (cmSearch) cmSearch.value = '';
  document.getElementById('cmSearchClear').style.display = 'none';
  cmSortBtns.forEach(b => b.classList.toggle('active', b.dataset.sort === 'default'));

  // Render cards
  renderGuideCards(data.guides, data.color, data.icon);

  // Show modal
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  document._catalogEscape = (e) => { if (e.key === 'Escape') closeCatalog(); };
  document.addEventListener('keydown', document._catalogEscape);
}

function renderGuideCards(guides, color, icon) {
  const cmGrid = document.getElementById('cmGrid');
  if (!cmGrid) return;

  if (!guides.length) {
    cmGrid.innerHTML = `
      <div class="cm-empty">
        <i class="fas fa-folder-open"></i>
        <p>No se encontraron guías con ese filtro.</p>
      </div>`;
    return;
  }

  cmGrid.innerHTML = guides.map((g, i) => {
    const lc = LEVEL_COLORS[g.level] || LEVEL_COLORS['Básico'];
    const hasPdf = !!g.pdf;
    const btnLabel = hasPdf
      ? '<i class="fas fa-download"></i> Descargar PDF — GRATIS'
      : '<i class="fas fa-clock"></i> Próximamente';
    const btnStyle = hasPdf ? '' : 'style="background:linear-gradient(135deg,#64748b,#94a3b8);cursor:default;opacity:.7;"';
    const btnDisabled = hasPdf ? '' : 'disabled';
    const availBadge = hasPdf
      ? '<span class="gc-avail gc-avail-yes"><i class="fas fa-circle-check"></i> Disponible</span>'
      : '<span class="gc-avail gc-avail-no"><i class="fas fa-clock"></i> Pronto</span>';

    return `
      <div class="guide-card" style="animation-delay:${i * 55}ms">
        <div class="gc-cover" style="background:${color}">
          <span class="gc-num">${String(i+1).padStart(2,'0')}</span>
          <div class="gc-icon">${icon}</div>
          <div class="gc-level-dot" style="background:${lc.bg};color:${lc.color}">
            ${g.level}
          </div>
        </div>
        <div class="gc-body">
          <h4 class="gc-title">${g.title}</h4>
          <div class="gc-meta-row">
            ${availBadge}
          </div>
          <button class="gc-download" ${btnStyle} ${btnDisabled}
            onclick="${hasPdf ? `handleDownload(event,'${_currentArea}',${g.id},'${g.title.replace(/'/g,"\\'")}','${g.pdf}')` : 'void(0)'}">
            ${btnLabel}
          </button>
        </div>
      </div>`;
  }).join('');
}

function filterGuides(query) {
  const data  = GUIDES_DATA[_currentArea];
  if (!data) return;
  const clear = document.getElementById('cmSearchClear');
  if (clear) clear.style.display = query ? 'block' : 'none';

  const q = query.toLowerCase().trim();
  const filtered = q ? data.guides.filter(g => g.title.toLowerCase().includes(q) || g.level.toLowerCase().includes(q)) : data.guides;
  renderGuideCards(filtered, data.color, data.icon);
}

function clearSearch() {
  const input = document.getElementById('cmSearch');
  if (input) { input.value = ''; input.focus(); }
  document.getElementById('cmSearchClear').style.display = 'none';
  const data = GUIDES_DATA[_currentArea];
  if (data) renderGuideCards(data.guides, data.color, data.icon);
}

function sortGuides(level, btn) {
  document.querySelectorAll('.cm-sort-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const data = GUIDES_DATA[_currentArea];
  if (!data) return;

  const filtered = level === 'default'
    ? data.guides
    : data.guides.filter(g => g.level.toLowerCase() === level);

  // Clear search when filtering
  const input = document.getElementById('cmSearch');
  if (input) input.value = '';
  document.getElementById('cmSearchClear').style.display = 'none';

  renderGuideCards(filtered, data.color, data.icon);
}

function closeCatalog() {
  const modal = document.getElementById('catalogModal');
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
  if (document._catalogEscape) {
    document.removeEventListener('keydown', document._catalogEscape);
    delete document._catalogEscape;
  }
}

function handleDownload(e, area, id, title, pdfFile) {
  e.preventDefault();
  const btn = e.currentTarget;

  // Loading
  btn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Preparando…';
  btn.classList.add('loading');

  setTimeout(() => {
    btn.innerHTML = '<i class="fas fa-check-circle"></i> ¡Descargando!';
    btn.classList.remove('loading');
    btn.classList.add('success');
    showToast(`📥 "${title}" — Descarga iniciada`);

    // ✅ Descarga real del PDF — el archivo debe estar en la misma carpeta
    if (pdfFile) {
      const link = document.createElement('a');
      link.href = pdfFile;
      link.download = pdfFile;
      link.click();
    }

    setTimeout(() => {
      btn.innerHTML = '<i class="fas fa-download"></i> Descargar PDF — GRATIS';
      btn.classList.remove('success');
    }, 2500);
  }, 800);
}

/* ── SMOOTH SCROLL for anchor links ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    const offset = 80;
    const y = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  });
});

/* ── PARALLAX blobs on hero ── */
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const blobs = document.querySelectorAll('.hero-blob');
  blobs.forEach((blob, i) => {
    const speed = 0.08 + i * 0.04;
    blob.style.transform = `translateY(${scrollY * speed}px)`;
  });
}, { passive: true });

/* ── WHA messages stagger animation ── */
function initWhaMessages() {
  const msgs = document.querySelectorAll('.wha-msg');
  if (!msgs.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        msgs.forEach((msg, i) => {
          setTimeout(() => {
            msg.style.opacity = '1';
            msg.style.transform = 'translateY(0) scale(1)';
          }, i * 180);
        });
        observer.disconnect();
      }
    });
  }, { threshold: 0.3 });

  msgs.forEach(msg => {
    msg.style.opacity = '0';
    msg.style.transform = 'translateY(10px) scale(.9)';
    msg.style.transition = 'opacity .4s ease, transform .4s cubic-bezier(.34,1.56,.64,1)';
  });

  const section = document.querySelector('.wha-section');
  if (section) observer.observe(section);
}

document.addEventListener('DOMContentLoaded', initWhaMessages);


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