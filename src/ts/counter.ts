class Counter {
  private counters: NodeListOf<HTMLElement>;
  private observer: IntersectionObserver;

  constructor() {
    this.counters = document.querySelectorAll('[data-counter]');
    this.observer = new IntersectionObserver(this.handleIntersection.bind(this), {
      threshold: 0.5,
    });
    this.counters.forEach(el => this.observer.observe(el));
  }

  private handleIntersection(entries: IntersectionObserverEntry[]): void {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target as HTMLElement;
      this.observer.unobserve(el);
      this.animateCounter(el);
    });
  }

  private animateCounter(el: HTMLElement): void {
    const target   = parseInt(el.getAttribute('data-counter') ?? '0', 10);
    const duration = 1600;
    const start    = performance.now();

    const step = (now: number): void => {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased    = this.easeOutCubic(progress);
      el.textContent = Math.round(eased * target).toString();
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target.toString();
    };

    requestAnimationFrame(step);
  }

  private easeOutCubic(t: number): number {
    return 1 - Math.pow(1 - t, 3);
  }
}
