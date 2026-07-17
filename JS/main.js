// Scroll Reveal Animation
(function() {
  const elements = document.querySelectorAll('.feature-card, .step-item, .testimonial-card, .pricing-card, .section-header, .metric-item, .product-screenshot-wrapper, .final-cta-card');
  if (!('IntersectionObserver' in window)) return;
  
  elements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(22px)';
    el.style.transition = 'opacity .7s cubic-bezier(.16,1,.3,1), transform .7s cubic-bezier(.16,1,.3,1)';
  });

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'none';
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  elements.forEach(el => observer.observe(el));
})();

// Pricing Toggle
(function() {
  const toggleBtns = document.querySelectorAll('.billing-toggle .toggle-btn');
  if (toggleBtns.length === 0) return;

  const prices = {
    monthly: ['0 €', '599 €', 'sur devis'],
    yearly: ['0 €', '479 €', 'sur devis'] // -20%
  };

  const priceElements = document.querySelectorAll('.pricing-card .price-val');
  
  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update buttons
      toggleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update prices
      const period = btn.getAttribute('data-period');
      priceElements.forEach((el, index) => {
        if (prices[period] && prices[period][index] !== undefined) {
          el.textContent = prices[period][index];
        }
      });
    });
  });
})();

// FAQ Accordion
(function() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-btn');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all
      faqItems.forEach(fi => {
        fi.classList.remove('active');
        const fBtn = fi.querySelector('.faq-btn');
        if (fBtn) fBtn.setAttribute('aria-expanded', 'false');
      });

      // Toggle current
      if (!isActive) {
        item.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
})();