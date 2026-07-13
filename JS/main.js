// Header scroll effect
(function() {
  const h = document.querySelector('[data-header]');
  if (!h) return;
  function onScroll() {
    const s = window.scrollY > 16;
    h.style.background        = s ? 'rgba(12,11,15,0.82)' : 'transparent';
    h.style.borderBottomColor = s ? 'rgba(255,255,255,0.09)' : 'transparent';
    h.style.backdropFilter    = s ? 'saturate(140%) blur(14px)' : 'none';
    h.style.webkitBackdropFilter = s ? 'saturate(140%) blur(14px)' : 'none';
    h.style.paddingTop        = s ? '12px' : '20px';
    h.style.paddingBottom     = s ? '12px' : '20px';
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
