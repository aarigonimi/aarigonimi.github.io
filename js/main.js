(function () {
  'use strict';

  // Theme toggle
  var themeToggle = document.getElementById('theme-toggle');
  var html = document.documentElement;
  var stored = localStorage.getItem('theme');
  if (stored) html.setAttribute('data-theme', stored);
  else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) html.setAttribute('data-theme', 'light');

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var current = html.getAttribute('data-theme');
      var next = current === 'light' ? 'dark' : 'light';
      html.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  }

  // Mobile nav toggle
  var navToggle = document.getElementById('nav-toggle');
  var navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('is-open');
    });
    document.querySelectorAll('.nav-links a').forEach(function (a) {
      a.addEventListener('click', function () { navLinks.classList.remove('is-open'); });
    });
  }

  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
