'use client';

import { useEffect, useState } from 'react';
import styles from './Footer.module.css';

const NAV_LINKS = [
  { href: '#home',     label: 'Home' },
  { href: '#sobre',    label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#noticias', label: 'Notícias' },
  { href: '#contato',  label: 'Contato' },
];

export default function Footer() {
  const [year, setYear] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setYear(String(new Date().getFullYear()));
  }, []);

  return (
    <>
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.inner}>
            <div className={styles.brand}>
              <div className={styles.brandName}>Dr. Eduardo Gonçalves</div>
              <div className={styles.brandTagline}>Advocacia Trabalhista &amp; Família · OAB/RS 00.000</div>
            </div>
            <nav className={styles.links} aria-label="Links do rodapé">
              {NAV_LINKS.map(({ href, label }) => (
                <a key={href} href={href}>{label}</a>
              ))}
            </nav>
          </div>
          <div className={styles.bottom}>
            <p>&copy; {year} Dr. Eduardo Gonçalves Advocacia. Todos os direitos reservados.</p>
            <p className={styles.devCredit}>
              Site desenvolvido por{' '}
              <button onClick={() => setModalOpen(true)} aria-haspopup="dialog">
                Junior Dev
              </button>
            </p>
          </div>
        </div>
      </footer>

      {/* Dev Modal */}
      {modalOpen && (
        <div
          className={styles.modalBackdrop}
          role="dialog"
          aria-modal="true"
          aria-labelledby="dev-modal-title"
          onClick={(e) => { if (e.target === e.currentTarget) setModalOpen(false); }}
          onKeyDown={(e) => { if (e.key === 'Escape') setModalOpen(false); }}
        >
          <div className={styles.modal}>
            <button className={styles.modalClose} onClick={() => setModalOpen(false)} aria-label="Fechar">
              <i className="fa-solid fa-xmark" aria-hidden="true" />
            </button>

            <div className={styles.modalIcon}>
              <i className="fa-solid fa-code" aria-hidden="true" />
            </div>

            <h2 className={styles.modalTitle} id="dev-modal-title">Quer um site assim?</h2>

            <p className={styles.modalText}>
              Este site foi desenvolvido com foco em <strong>performance, design moderno</strong>
              e experiência do usuário.<br /><br />
              Se você precisa de um site profissional para o seu negócio, entre em contato — será um prazer ajudar!
            </p>

            <div className={styles.modalActions}>
              <a
                href="https://wa.me/5511982301893?text=Gostaria%20de%20um%20orçamento."
                className="btn btn--whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-whatsapp" aria-hidden="true" />
                Falar com criador do site.
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
