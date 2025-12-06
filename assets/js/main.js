// main.js — minimal JS for common UI interactions
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('.nav');

  function closeNav() {
    nav.classList.remove('open');
    if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
  }

  function openNav() {
    nav.classList.add('open');
    if (navToggle) navToggle.setAttribute('aria-expanded', 'true');
  }

  if (navToggle && nav) {
    navToggle.addEventListener('click', function (e) {
      const isOpen = nav.classList.contains('open');
      if (isOpen) closeNav(); else openNav();
    });

    // close when clicking outside
    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target) && e.target !== navToggle && nav.classList.contains('open')) {
        closeNav();
      }
    });

    // close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        closeNav();
        navToggle.focus();
      }
    });

    // close when a nav link is clicked (mobile)
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        if (window.matchMedia('(max-width: 699px)').matches) closeNav();
      });
    });
  }
});
