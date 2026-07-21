/* =========================================================================
   Vanguard Business Solutions — marketing site interactions
   Motion here communicates state (open menu, scrolled header, in-view) and
   adds a gentle parallax to the hero scene. All effects respect
   prefers-reduced-motion.
   ========================================================================= */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* --- Current year in footer --------------------------------------- */
  var yearEl = document.getElementById('year');
  if (yearEl) { yearEl.textContent = String(new Date().getFullYear()); }

  /* --- Sticky header shadow on scroll -------------------------------- */
  var header = document.getElementById('site-header');
  function onScroll() {
    if (!header) { return; }
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* --- Mobile nav toggle --------------------------------------------- */
  var nav = document.getElementById('nav');
  var toggle = document.getElementById('nav-toggle');
  if (nav && toggle) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // Close the menu after tapping a link
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* --- Hero entrance -------------------------------------------------- */
  var hero = document.getElementById('hero');
  if (hero) {
    // Next frame so the initial state paints before animating in
    requestAnimationFrame(function () { hero.classList.add('is-ready'); });
  }

  /* --- Scroll reveal for sections ------------------------------------ */
  var revealables = document.querySelectorAll('.will-reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealables.forEach(function (el) { el.classList.add('in-view'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });
    revealables.forEach(function (el) { io.observe(el); });
  }

  /* --- Hero scene mouse parallax ------------------------------------- */
  var scene = document.getElementById('scene');
  if (scene && !reduceMotion && window.matchMedia('(pointer: fine)').matches) {
    var raf = null;
    var targetX = 0, targetY = 0;

    scene.addEventListener('mousemove', function (e) {
      var rect = scene.getBoundingClientRect();
      // -1 .. 1 range from the scene centre
      targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      if (!raf) { raf = requestAnimationFrame(applyParallax); }
    });

    scene.addEventListener('mouseleave', function () {
      targetX = 0; targetY = 0;
      if (!raf) { raf = requestAnimationFrame(applyParallax); }
    });

    function applyParallax() {
      raf = null;
      // The multiplier controls overall parallax intensity; per-layer depth
      // (`--d`) is set in the SVG markup so nearer layers move more.
      scene.style.setProperty('--px', (targetX * 1.4).toFixed(3));
      scene.style.setProperty('--py', (targetY * 1.4).toFixed(3));
    }
  }

  /* --- Contact form (front-end only; wire to a backend later) -------- */
  var form = document.getElementById('contact-form');
  var note = document.getElementById('form-note');
  if (form && note) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        note.textContent = 'Please fill in your name, company, and a valid work email.';
        note.style.color = '#f0c674';
        form.reportValidity();
        return;
      }
      var name = (form.querySelector('#f-name') || {}).value || 'there';
      note.textContent = 'Thanks, ' + name.split(' ')[0] + '. Your request is ready — connect this form to email to send it.';
      note.style.color = '';
      form.reset();
    });
  }
})();
