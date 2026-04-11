'use client';

import { useNavbar } from '@/hooks/useNavbar';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { href: '#home',     label: 'Home' },
  { href: '#sobre',    label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#noticias', label: 'Notícias' },
  { href: '#contato',  label: 'Onde Estamos' },
];

const WA_HREF = 'https://wa.me/5511993198275?text=Olá%2C%20gostaria%20de%20agendar%20uma%20consulta.';

export default function Navbar() {
  useSmoothScroll();
  const { isScrolled, isDrawerOpen, toggleDrawer, closeDrawer } = useNavbar();
  const activeSection = useActiveSection();

  return (
    <header>
      <nav
        className={`navbar ${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
        role="navigation"
        aria-label="Navegação principal"
      >
        <div className={styles.inner}>
          <a href="#home" className={styles.brand} aria-label="Dr. Eduardo Gonçalves Advocacia – início">
            <i className="fa-solid fa-scale-balanced" style={{ color: 'var(--color-accent)', fontSize: 'var(--text-xl)' }} aria-hidden="true" />
            <span className={styles.brandText}>
              <span className={styles.brandName}>Dr. Eduardo Gonçalves</span>
              <span className={styles.brandOab}>OAB/RS 00.000</span>
            </span>
          </a>

          <ul className={styles.nav} role="list">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`${styles.link} ${activeSection === href.slice(1) ? styles.active : ''}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={WA_HREF}
            className={`btn btn--whatsapp btn--sm ${styles.cta}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contato via WhatsApp"
          >
            <i className="fa-brands fa-whatsapp" aria-hidden="true" />
            WhatsApp
          </a>

          <button
            className={`${styles.hamburger} ${isDrawerOpen ? styles.open : ''}`}
            aria-label="Abrir menu de navegação"
            aria-expanded={isDrawerOpen}
            aria-controls="mobile-drawer"
            onClick={toggleDrawer}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-drawer"
        className={`${styles.drawer} ${isDrawerOpen ? styles.drawerOpen : ''}`}
        aria-hidden={!isDrawerOpen}
      >
        <nav className={styles.drawerNav} aria-label="Menu mobile">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`${styles.drawerLink} ${activeSection === href.slice(1) ? styles.active : ''}`}
              onClick={closeDrawer}
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href={WA_HREF}
          className="btn btn--whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeDrawer}
        >
          <i className="fa-brands fa-whatsapp" aria-hidden="true" />
          Fale pelo WhatsApp
        </a>
      </div>
    </header>
  );
}
