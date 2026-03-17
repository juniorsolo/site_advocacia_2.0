class RotatingText {
  private wrapper: HTMLElement | null;
  private items: NodeListOf<HTMLElement>;

  constructor() {
    this.wrapper = document.querySelector('.rotating-text-wrapper');
    this.items   = document.querySelectorAll('.rotating-text-item');
    this.init();
  }

  private init(): void {
    if (!this.wrapper || this.items.length === 0) return;

    const liveRegion = document.createElement('span');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    this.wrapper.appendChild(liveRegion);

    liveRegion.textContent = this.items[0].textContent;

    this.items.forEach(item => item.setAttribute('aria-hidden', 'true'));

    let index = 1;
    setInterval(() => {
      liveRegion.textContent = this.items[index % this.items.length].textContent;
      index++;
    }, 3000);
  }
}
