class SmoothScroll {
  private navbarHeight: number;

  constructor() {
    const raw = getComputedStyle(document.documentElement)
      .getPropertyValue('--navbar-height')
      .trim()
      .replace('px', '');
    this.navbarHeight = parseFloat(raw) || 72;
    this.init();
  }

  private init(): void {
    document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (!href || href === '#') return;
        const target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        const top = (target as HTMLElement).getBoundingClientRect().top + window.scrollY - this.navbarHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      });
    });
  }
}
