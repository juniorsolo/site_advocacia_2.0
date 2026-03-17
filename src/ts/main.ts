function initLazyReveal(): void {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove('section--hidden');
        entry.target.classList.add('section--visible');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.08 }
  );

  document.querySelectorAll('.section--hidden').forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  new Navbar();
  new RotatingText();
  new Counter();
  new SmoothScroll();
  new ActiveSection();
  initLazyReveal();
});
