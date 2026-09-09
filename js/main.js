(function () {
  'use strict';

  var nav = document.getElementById('mainNav');
  var toggle = document.getElementById('navToggle');
  var yearEl = document.getElementById('year');

  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  function onScroll() {
    if (!nav) return;
    if (window.scrollY > 40) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('.nav-links a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Reveal on scroll
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
    );
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  // Prefill contact track from ?track=
  var trackSelect = document.getElementById('track');
  if (trackSelect) {
    try {
      var params = new URLSearchParams(window.location.search);
      var t = params.get('track');
      if (t) {
        var opt = trackSelect.querySelector('option[value="' + t + '"]');
        if (opt) trackSelect.value = t;
      }
    } catch (e) { /* ignore */ }
  }

  // Active nav highlight by section (homepage)
  var sectionIds = ['system', 'performance', 'kit', 'about', 'commons', 'contact', 'densities', 'pillars', 'pathway'];
  var sections = sectionIds
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);
  if (sections.length && 'IntersectionObserver' in window) {
    var linkMap = {};
    nav && nav.querySelectorAll('.nav-links a[href^="#"]').forEach(function (a) {
      var hash = a.getAttribute('href').slice(1);
      if (hash) linkMap[hash] = a;
    });
    var sio = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          var id = e.target.id;
          Object.keys(linkMap).forEach(function (k) {
            linkMap[k].classList.toggle('active', k === id);
          });
        });
      },
      { rootMargin: '-40% 0px -45% 0px', threshold: 0 }
    );
    sections.forEach(function (s) { sio.observe(s); });
  }
})();
