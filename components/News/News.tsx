'use client';

import { motion, type Variants } from 'framer-motion';
import styles from './News.module.css';

const sectionVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

export default function News() {
  return (
    <motion.section
      id="noticias"
      className={styles.news}
      aria-label="Notícias jurídicas"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
    >
      <div className="container">
        <div className="section-header">
          <div className="section-label">
            <i className="fa-solid fa-newspaper" aria-hidden="true" />
            Atualidades Jurídicas
          </div>
          <h2 className="section-title">Notícias do TRT4</h2>
          <div className="divider" />
          <p className="section-subtitle">
            Fique por dentro das últimas decisões e novidades do Tribunal Regional
            do Trabalho da 4ª Região.
          </p>
        </div>

        <div className={styles.cta}>
          <a
            href="https://www.trt4.jus.br/portais/trt4/modulos/noticias"
            className="btn btn--primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
            Acessar notícias no TRT4
          </a>
        </div>
      </div>
    </motion.section>
  );
}
