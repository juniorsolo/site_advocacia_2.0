class ActiveSection {
  private sections: HTMLElement[];
  private navLinks: NodeListOf<HTMLAnchorElement>;
  private drawerLinks: NodeListOf<HTMLAnchorElement>;
  private readonly offset = 90;

  constructor() {
    this.sections    = Array.from(document.querySelectorAll('section[id]'));
    this.navLinks    = document.querySelectorAll('.navbar__link');
    this.drawerLinks = document.querySelectorAll('.navbar__drawer-link');
    window.addEventListener('scroll', this.onScroll.bind(this), { passive: true });
    this.onScroll();
  }

  private onScroll(): void {
    const scrollY = window.scrollY + this.offset;
    let current = '';

    this.sections.forEach(section => {
      if (scrollY >= section.offsetTop && scrollY < section.offsetTop + section.offsetHeight) {
        current = section.id;
      }
    });

    this.highlight(this.navLinks, current);
    this.highlight(this.drawerLinks, current);
  }

  private highlight(links: NodeListOf<HTMLAnchorElement>, current: string): void {
    links.forEach(link => {
      const id = (link.getAttribute('href') ?? '').replace('#', '');
      link.classList.toggle('active', id === current);
    });
  }
}
