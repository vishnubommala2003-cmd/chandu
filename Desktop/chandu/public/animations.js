/**
 * Viseshta Group - Advanced Animations & Micro-Interactions
 * Handles scroll reveals, top scroll indicator, number count-ups, back-to-top, and button pulses.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inject Top Scroll Progress Bar if not present
  if (!document.getElementById('scroll-progress-bar')) {
    const progressBar = document.createElement('div');
    progressBar.id = 'scroll-progress-bar';
    document.body.appendChild(progressBar);
  }

  // 2. Inject Back to Top Button if not present
  if (!document.getElementById('back-to-top')) {
    const backToTop = document.createElement('button');
    backToTop.id = 'back-to-top';
    backToTop.setAttribute('aria-label', 'Back to top');
    backToTop.innerHTML = `
      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
        <path d="M5 15l7-7 7 7"/>
      </svg>
    `;
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    document.body.appendChild(backToTop);
  }

  // 3. Scroll Listener for Progress Bar & Back to Top
  const progressBar = document.getElementById('scroll-progress-bar');
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
    
    if (progressBar) {
      progressBar.style.width = scrolled + '%';
    }

    if (backToTopBtn) {
      if (winScroll > 350) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  }, { passive: true });

  // 4. Intersection Observer for Scroll Reveals
  const revealElements = document.querySelectorAll(
    '.reveal-up, .reveal-fade, .reveal-scale, .reveal-left, .reveal-right, .card-hover'
  );

  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback if IntersectionObserver is unsupported
    revealElements.forEach(el => el.classList.add('is-revealed'));
  }

  // 5. Animated Number Counter on Scroll
  const counterElements = document.querySelectorAll('[data-counter-target]');
  if ('IntersectionObserver' in window && counterElements.length > 0) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          animateCounter(el);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.25 });

    counterElements.forEach(el => counterObserver.observe(el));
  }

  function animateCounter(el) {
    const target = parseFloat(el.getAttribute('data-counter-target')) || 0;
    const prefix = el.getAttribute('data-counter-prefix') || '';
    const suffix = el.getAttribute('data-counter-suffix') || '';
    const duration = parseInt(el.getAttribute('data-counter-duration')) || 1600;
    const isCurrency = el.getAttribute('data-counter-comma') === 'true';

    let startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out expo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentVal = Math.floor(easeProgress * target);

      let formatted = currentVal.toString();
      if (isCurrency) {
        formatted = currentVal.toLocaleString('en-IN');
      }

      el.innerHTML = `${prefix}${formatted}${suffix}`;

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        let finalFormatted = target.toString();
        if (isCurrency) {
          finalFormatted = target.toLocaleString('en-IN');
        }
        el.innerHTML = `${prefix}${finalFormatted}${suffix}`;
      }
    }

    window.requestAnimationFrame(step);
  }

  // 6. Add radar pulse classes to floating WhatsApp & phone buttons
  const floatingWhatsapp = document.querySelector('.floating-btn.bg-emerald-500, a[title="WhatsApp"]');
  if (floatingWhatsapp) {
    floatingWhatsapp.classList.add('pulse-radar-green');
  }

  const floatingPhone = document.querySelector('.floating-btn.bg-blue-600, a[title="Call"]');
  if (floatingPhone) {
    floatingPhone.classList.add('pulse-radar-blue');
  }
});
