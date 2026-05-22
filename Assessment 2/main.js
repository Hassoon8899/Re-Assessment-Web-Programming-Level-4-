/* ===========================
   NEXUS UNIVERSITY — main.js
   Navigation, scroll effects,
   and shared interactions
   =========================== */

document.addEventListener('DOMContentLoaded', () => {

  /* --- Active nav link --- */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

  /* --- Mobile nav toggle --- */
  const toggle = document.getElementById('navToggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const open = navLinks.classList.contains('open');
      toggle.setAttribute('aria-expanded', open);
      // animate hamburger into X
      const spans = toggle.querySelectorAll('span');
      if (open) {
        spans[0].style.transform = 'translateY(6.5px) rotate(45deg)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'translateY(-6.5px) rotate(-45deg)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    });
  }

  /* --- Scroll-reveal via IntersectionObserver --- */
  const revealEls = document.querySelectorAll('[data-reveal]');
  if (revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => observer.observe(el));
  }

  /* --- Nav shadow on scroll --- */
  const nav = document.querySelector('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        nav.style.boxShadow = '0 2px 24px rgba(0,0,0,0.06)';
      } else {
        nav.style.boxShadow = 'none';
      }
    }, { passive: true });
  }

  /* --- Counter animation for stats --- */
  function animateCounter(el) {
    const target = parseInt(el.dataset.count, 10);
    const duration = 1400;
    const start = performance.now();
    const update = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target).toLocaleString() + (el.dataset.suffix || '');
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }

  const counterEls = document.querySelectorAll('[data-count]');
  if (counterEls.length) {
    const cObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          cObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counterEls.forEach(el => cObserver.observe(el));
  }

});
