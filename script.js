/* ================================================================
   script.js  ·  Vida Universitaria UAMEX
   ================================================================ */

document.addEventListener('DOMContentLoaded', () => {

    /* ── 1. Navbar scroll ── */
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });


    /* ── 2. Menú burger ── */
    const burgerBtn = document.getElementById('burgerBtn');
    const mobMenu   = document.getElementById('mobMenu');

    const closeBurger = () => {
        mobMenu.classList.remove('open');
        burgerBtn.classList.remove('open');
        burgerBtn.setAttribute('aria-label', 'Abrir menú');
        document.body.style.overflow = '';
    };

    burgerBtn.addEventListener('click', () => {
        const open = mobMenu.classList.toggle('open');
        burgerBtn.classList.toggle('open', open);
        burgerBtn.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
        document.body.style.overflow = open ? 'hidden' : '';
    });

    document.querySelectorAll('.mob-link').forEach(link => {
        link.addEventListener('click', closeBurger);
    });

    document.addEventListener('click', e => {
        if (
            mobMenu.classList.contains('open') &&
            !mobMenu.contains(e.target) &&
            !burgerBtn.contains(e.target)
        ) closeBurger();
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) closeBurger();
    });


    /* ── 3. Reveal al scroll (Intersection Observer nativo) ── */
    const style = document.createElement('style');
    style.textContent = '.revealed { opacity:1 !important; transform:translateX(0) translateY(0) !important; }';
    document.head.appendChild(style);

    // Sección simuladores
    const revealSim = document.querySelectorAll('.tc, .sim-header, .nota-card, .sim-label-pill');
    revealSim.forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(24px)';
        el.style.transition = `opacity .5s ease ${i * 0.07}s, transform .5s ease ${i * 0.07}s`;
    });

    // Secciones split: izquierda entra desde la izquierda, derecha desde la derecha
    document.querySelectorAll('.reveal-left').forEach(el => {
        el.style.transform = 'translateX(-36px)';
        el.style.transition = 'opacity .65s ease, transform .65s ease';
    });
    document.querySelectorAll('.reveal-right').forEach(el => {
        el.style.transform = 'translateX(36px)';
        el.style.transition = 'opacity .65s ease, transform .65s ease';
    });

    const allReveal = document.querySelectorAll(
        '.tc, .sim-header, .nota-card, .sim-label-pill, .reveal-left, .reveal-right'
    );

    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.10 });

    allReveal.forEach(el => io.observe(el));


    /* ── 4. Stats fade-in al entrar en viewport ── */
    const statsRow = document.querySelector('.hero-stats-row');
    if (statsRow) {
        const statsIO = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                document.querySelectorAll('.hsr-num').forEach((el, i) => {
                    el.style.opacity = '0';
                    el.style.transform = 'translateY(10px)';
                    setTimeout(() => {
                        el.style.transition = 'opacity .4s ease, transform .4s ease';
                        el.style.opacity = '1';
                        el.style.transform = 'translateY(0)';
                    }, i * 110);
                });
                statsIO.unobserve(statsRow);
            }
        }, { threshold: 0.5 });
        statsIO.observe(statsRow);
    }


    /* ── 5. Parallax muy ligero en el panel de fondo del hero ── */
    const hbgPanel = document.querySelector('.hbg-panel');
    if (hbgPanel) {
        window.addEventListener('scroll', () => {
            hbgPanel.style.transform = `translateY(${window.scrollY * 0.12}px)`;
        }, { passive: true });
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