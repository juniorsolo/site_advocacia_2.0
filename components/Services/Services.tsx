'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import styles from './Services.module.css';

const WA_CONSULTA = 'https://wa.me/5511993198275?text=Olá%2C%20gostaria%20de%20uma%20consulta%20sobre%20meu%20caso.';
const WA_TRABALHISTA = 'https://wa.me/5511993198275?text=Olá%2C%20tenho%20uma%20questão%20trabalhista%20e%20preciso%20de%20orientação.';
const WA_FAMILIA = 'https://wa.me/5511993198275?text=Olá%2C%20preciso%20de%20orientação%20sobre%20uma%20questão%20de%20família.';

const PHRASES = [
  'Divórcio, pensão e guarda com segurança jurídica e sensibilidade.',
  'Soluções jurídicas humanas para momentos delicados.',
  'Experiência jurídica para proteger o que é mais importante.',
  'Conflitos familiares resolvidos com estratégia e equilíbrio.',
  'Defendendo seus direitos com estratégia, experiência e compromisso.',
];

const sectionVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' as const },
  }),
};

function RotatingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % PHRASES.length), 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={styles.rotatingWrap} aria-label="Áreas de especialização" aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          className={styles.rotatingItem}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -60 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          {PHRASES[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

export default function Services() {
  return (
    <motion.section
      id="servicos"
      className={styles.services}
      aria-label="Nossos serviços"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
    >
      <div className="container">

        <div className={styles.intro}>
          <div className="section-label">
            <i className="fa-solid fa-gavel" aria-hidden="true" />
            Áreas de Atuação
          </div>

          <h2 className="section-title">Seu caso merece atenção especializada</h2>

          <RotatingText />

          <div className="divider" />

          <div className={styles.introSubtitle}>
            <span>Precisa de ajuda?</span>
            <a
              href={WA_CONSULTA}
              className="btn btn--whatsapp btn--sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-whatsapp" aria-hidden="true" />
              Consulta gratuita
            </a>
          </div>
        </div>

        <div className={styles.grid}>

          <motion.article
            className={styles.card}
            custom={0}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
          >
            <div className={styles.cardIconWrap}>
              <i className="fa-regular fa-building" aria-hidden="true" />
            </div>
            <h3 className={styles.cardTitle}>Direito Trabalhista</h3>
            <p className={styles.cardDesc}>
              Defesa dos direitos dos trabalhadores e empregadores em todas as
              instâncias da Justiça do Trabalho, do processo administrativo ao
              recurso nos tribunais superiores.
            </p>
            <ul className={styles.cardList}>
              <li><i className="fa-solid fa-check" aria-hidden="true" /> Reclamação trabalhista</li>
              <li><i className="fa-solid fa-check" aria-hidden="true" /> Rescisão indireta</li>
              <li><i className="fa-solid fa-check" aria-hidden="true" /> Acidente de trabalho e doenças ocupacionais</li>
              <li><i className="fa-solid fa-check" aria-hidden="true" /> Assédio moral e sexual</li>
              <li><i className="fa-solid fa-check" aria-hidden="true" /> FGTS, verbas rescisórias e horas extras</li>
            </ul>
            <a href={WA_TRABALHISTA} className="btn btn--primary" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-whatsapp" aria-hidden="true" />
              Consultar agora
            </a>
          </motion.article>

          <motion.article
            className={styles.card}
            custom={1}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
          >
            <div className={styles.cardIconWrap}>
              <i className="fa-solid fa-people-roof" aria-hidden="true" />
            </div>
            <h3 className={styles.cardTitle}>Direito de Família</h3>
            <p className={styles.cardDesc}>
              Assessoria completa em questões familiares, com abordagem humanizada
              e foco na preservação dos laços afetivos e na proteção de todos
              os envolvidos, especialmente crianças e adolescentes.
            </p>
            <ul className={styles.cardList}>
              <li><i className="fa-solid fa-check" aria-hidden="true" /> Divórcio consensual e litigioso</li>
              <li><i className="fa-solid fa-check" aria-hidden="true" /> Guarda e regulamentação de visitas</li>
              <li><i className="fa-solid fa-check" aria-hidden="true" /> Pensão alimentícia</li>
              <li><i className="fa-solid fa-check" aria-hidden="true" /> Inventário e partilha de bens</li>
              <li><i className="fa-solid fa-check" aria-hidden="true" /> União estável e reconhecimento de paternidade</li>
            </ul>
            <a href={WA_FAMILIA} className="btn btn--primary" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-whatsapp" aria-hidden="true" />
              Consultar agora
            </a>
          </motion.article>

        </div>
      </div>
    </motion.section>
  );
}
