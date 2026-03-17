class Navbar {
  private nav: HTMLElement;
  private hamburger: HTMLButtonElement;
  private drawer: HTMLElement;
  private isOpen = false;

  constructor() {
    this.nav       = document.querySelector('.navbar')!;
    this.hamburger = document.querySelector('.navbar__hamburger')!;
    this.drawer    = document.querySelector('.navbar__drawer')!;

    this.initScroll();
    this.initHamburger();
    this.initDrawerLinks();
  }

  private initScroll(): void {
    const onScroll = (): void => {
      this.nav.classList.toggle('navbar--scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  private initHamburger(): void {
    this.hamburger.addEventListener('click', () => this.toggleDrawer());

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) this.closeDrawer();
    });

    document.addEventListener('click', (e) => {
      const target = e.target as Node;
      if (this.isOpen && !this.nav.contains(target) && !this.drawer.contains(target)) {
        this.closeDrawer();
      }
    });
  }

  private initDrawerLinks(): void {
    this.drawer.querySelectorAll('.navbar__drawer-link').forEach(link => {
      link.addEventListener('click', () => this.closeDrawer());
    });
  }

  private toggleDrawer(): void {
    this.isOpen ? this.closeDrawer() : this.openDrawer();
  }

  private openDrawer(): void {
    this.isOpen = true;
    this.hamburger.classList.add('open');
    this.hamburger.setAttribute('aria-expanded', 'true');
    this.drawer.classList.add('open');
    this.drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  private closeDrawer(): void {
    this.isOpen = false;
    this.hamburger.classList.remove('open');
    this.hamburger.setAttribute('aria-expanded', 'false');
    this.drawer.classList.remove('open');
    this.drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}
