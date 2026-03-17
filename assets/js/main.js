"use strict";
class ActiveSection {
    constructor() {
        this.offset = 90;
        this.sections = Array.from(document.querySelectorAll('section[id]'));
        this.navLinks = document.querySelectorAll('.navbar__link');
        this.drawerLinks = document.querySelectorAll('.navbar__drawer-link');
        window.addEventListener('scroll', this.onScroll.bind(this), { passive: true });
        this.onScroll();
    }
    onScroll() {
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
    highlight(links, current) {
        links.forEach(link => {
            const id = (link.getAttribute('href') ?? '').replace('#', '');
            link.classList.toggle('active', id === current);
        });
    }
}
class Counter {
    constructor() {
        this.counters = document.querySelectorAll('[data-counter]');
        this.observer = new IntersectionObserver(this.handleIntersection.bind(this), {
            threshold: 0.5,
        });
        this.counters.forEach(el => this.observer.observe(el));
    }
    handleIntersection(entries) {
        entries.forEach(entry => {
            if (!entry.isIntersecting)
                return;
            const el = entry.target;
            this.observer.unobserve(el);
            this.animateCounter(el);
        });
    }
    animateCounter(el) {
        const target = parseInt(el.getAttribute('data-counter') ?? '0', 10);
        const duration = 1600;
        const start = performance.now();
        const step = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = this.easeOutCubic(progress);
            el.textContent = Math.round(eased * target).toString();
            if (progress < 1)
                requestAnimationFrame(step);
            else
                el.textContent = target.toString();
        };
        requestAnimationFrame(step);
    }
    easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3);
    }
}
function initLazyReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting)
                return;
            entry.target.classList.remove('section--hidden');
            entry.target.classList.add('section--visible');
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.08 });
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
class Navbar {
    constructor() {
        this.isOpen = false;
        this.nav = document.querySelector('.navbar');
        this.hamburger = document.querySelector('.navbar__hamburger');
        this.drawer = document.querySelector('.navbar__drawer');
        this.initScroll();
        this.initHamburger();
        this.initDrawerLinks();
    }
    initScroll() {
        const onScroll = () => {
            this.nav.classList.toggle('navbar--scrolled', window.scrollY > 40);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }
    initHamburger() {
        this.hamburger.addEventListener('click', () => this.toggleDrawer());
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen)
                this.closeDrawer();
        });
        document.addEventListener('click', (e) => {
            const target = e.target;
            if (this.isOpen && !this.nav.contains(target) && !this.drawer.contains(target)) {
                this.closeDrawer();
            }
        });
    }
    initDrawerLinks() {
        this.drawer.querySelectorAll('.navbar__drawer-link').forEach(link => {
            link.addEventListener('click', () => this.closeDrawer());
        });
    }
    toggleDrawer() {
        this.isOpen ? this.closeDrawer() : this.openDrawer();
    }
    openDrawer() {
        this.isOpen = true;
        this.hamburger.classList.add('open');
        this.hamburger.setAttribute('aria-expanded', 'true');
        this.drawer.classList.add('open');
        this.drawer.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }
    closeDrawer() {
        this.isOpen = false;
        this.hamburger.classList.remove('open');
        this.hamburger.setAttribute('aria-expanded', 'false');
        this.drawer.classList.remove('open');
        this.drawer.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }
}
class RotatingText {
    constructor() {
        this.wrapper = document.querySelector('.rotating-text-wrapper');
        this.items = document.querySelectorAll('.rotating-text-item');
        this.init();
    }
    init() {
        if (!this.wrapper || this.items.length === 0)
            return;
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
class SmoothScroll {
    constructor() {
        const raw = getComputedStyle(document.documentElement)
            .getPropertyValue('--navbar-height')
            .trim()
            .replace('px', '');
        this.navbarHeight = parseFloat(raw) || 72;
        this.init();
    }
    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (!href || href === '#')
                    return;
                const target = document.querySelector(href);
                if (!target)
                    return;
                e.preventDefault();
                const top = target.getBoundingClientRect().top + window.scrollY - this.navbarHeight;
                window.scrollTo({ top, behavior: 'smooth' });
            });
        });
    }
}
