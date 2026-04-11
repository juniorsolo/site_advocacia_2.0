'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView, animate, type Variants } from 'framer-motion';
import styles from './About.module.css';

const sectionVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

const CREDENTIALS = [
  { icon: 'fa-solid fa-id-card', text: 'OAB/RS 00.000 — Ativo' },
  { icon: 'fa-solid fa-graduation-cap', text: 'Pós-graduação em Direito do Trabalho — UFRGS' },
  { icon: 'fa-solid fa-graduation-cap', text: 'Especialização em Direito de Família — ESA/RS' },
  { icon: 'fa-solid fa-award', text: 'Membro da Comissão de Direito do Trabalho — OAB/RS' },
];

const STATS = [
  { icon: 'fa-solid fa-briefcase', value: 500, suffix: '+', label: 'Casos concluídos' },
  { icon: 'fa-solid fa-users',     value: 380, suffix: '+', label: 'Clientes atendidos' },
  { icon: 'fa-solid fa-trophy',    value: 92,  suffix: '%', label: 'Taxa de êxito' },
  { icon: 'fa-solid fa-calendar-check', value: 10, suffix: '+', label: 'Anos de atuação' },
];

function CounterCard({ icon, value, suffix, label }: typeof STATS[0]) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      className={styles.statCard}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div className={styles.statIcon}>
        <i className={icon} aria-hidden="true" />
      </div>
      <div className={styles.statNumber}>
        {display}<span className={styles.statSuffix}>{suffix}</span>
      </div>
      <div className={styles.statLabel}>{label}</div>
    </motion.div>
  );
}

export default function About() {
  return (
    <motion.section
      id="sobre"
      className={styles.about}
      aria-label="Sobre o advogado"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
    >
      <div className="container">
        <div className={styles.grid}>

          {/* Bio */}
          <div className={styles.bio}>
            <div className="section-label">
              <i className="fa-solid fa-user-tie" aria-hidden="true" />
              Sobre Mim
            </div>

            <h2 className="section-title">
              Comprometido com a <span className="text-accent">Justiça</span>
            </h2>

            <div className="divider divider--left" />

            <p>
              Com mais de <strong>10 anos de experiência</strong> na advocacia trabalhista
              e de família, Dr. Eduardo construiu uma trajetória sólida na defesa
              dos direitos de trabalhadores e famílias paulista.
            </p>
            <p>
              Formado pela Universidade Federal do Rio Grande do Sul (UFRGS), com pós-graduação
              em Direito do Trabalho e Processo do Trabalho, atua com foco total na
              satisfação e no resultado dos seus clientes.
            </p>

            <div className={styles.credentials}>
              {CREDENTIALS.map(({ icon, text }) => (
                <div key={text} className={styles.credentialItem}>
                  <i className={icon} aria-hidden="true" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className={styles.stats}>
            {STATS.map((stat) => (
              <CounterCard key={stat.label} {...stat} />
            ))}
          </div>

        </div>
      </div>
    </motion.section>
  );
}
