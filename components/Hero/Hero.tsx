'use client';

import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const WA_HREF = 'https://wa.me/5511993198275?text=Olá%2C%20gostaria%20de%20agendar%20uma%20consulta.';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' as const },
});

export default function Hero() {
  return (
    <section id="home" className={styles.hero} aria-label="Início">
      <div className="container">
        <div className={styles.content}>

          <motion.i
            className={`fa-solid fa-scale-balanced ${styles.icon}`}
            aria-hidden="true"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />

          <motion.div className={styles.badge} {...fadeUp(0.1)}>
            <i className="fa-solid fa-star" aria-hidden="true" />
            Excelência em Advocacia
          </motion.div>

          <motion.h1 className={styles.title} {...fadeUp(0.2)}>
            Advocacia especializada em<br />
            <span className="text-accent">Direito Trabalhista</span> e de{' '}
            <span className="text-accent">Família</span>
          </motion.h1>

          <motion.p className={styles.subtitle} {...fadeUp(0.35)}>
            Defendemos seus direitos com dedicação, ética e mais de 10 anos
            de experiência. Agende sua consulta e conheça como podemos ajudá-lo.
          </motion.p>

          <motion.div className={styles.actions} {...fadeUp(0.5)}>
            <a href="#servicos" className="btn btn--primary btn--lg">
              <i className="fa-solid fa-briefcase" aria-hidden="true" />
              Conhecer Serviços
            </a>
            <a
              href={WA_HREF}
              className="btn btn--whatsapp btn--lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-whatsapp" aria-hidden="true" />
              Falar no WhatsApp
            </a>
          </motion.div>

        </div>
      </div>

      <div className={styles.scroll} aria-hidden="true">
        <span>Role para baixo</span>
        <div className={styles.scrollArrow}>
          <span />
          <span />
          <span />
        </div>
      </div>
    </section>
  );
}
