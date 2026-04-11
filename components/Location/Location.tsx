'use client';

import { motion, type Variants } from 'framer-motion';
import styles from './Location.module.css';

const WA_HREF = 'https://wa.me/5511993198275?text=Olá%2C%20gostaria%20de%20agendar%20uma%20visita%20ao%20escritório.';

const sectionVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

const INFO_BLOCKS = [
  {
    icon: 'fa-solid fa-location-dot',
    iconAnim: styles.iconBounce,
    title: 'Endereço',
    content: (
      <address>
        Rua avaré, 26 - Sala 4<br />
        Jardim Santo Eduardo - Embu das Artes<br />
        CEP 06824-270
      </address>
    ),
  },
  {
    icon: 'fa-regular fa-clock',
    iconAnim: styles.iconTick,
    title: 'Horário de Atendimento',
    content: (
      <p>
        Segunda a Sexta: 09h às 18h<br />
        Sábado: 09h às 12h (com agendamento)
      </p>
    ),
  },
  {
    icon: 'fa-solid fa-phone',
    iconAnim: styles.iconRing,
    title: 'Telefone & WhatsApp',
    content: <p>(11) 99319-8275</p>,
  },
  {
    icon: 'fa-solid fa-envelope',
    iconAnim: styles.iconFloat,
    title: 'E-mail',
    content: <p>goncalves.adv@.adv.br</p>,
  },
];

export default function Location() {
  return (
    <motion.section
      id="contato"
      className={styles.location}
      aria-label="Localização do escritório"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
    >
      <div className="container">

        <div className="section-header">
          <div className="section-label">
            <i className="fa-solid fa-location-dot" aria-hidden="true" />
            Localização
          </div>
          <h2 className="section-title">Onde Estamos</h2>
          <div className="divider" />
          <p className="section-subtitle">
            Venha nos visitar ou agende uma consulta via whatsapp. Estamos prontos
            para atendê-lo com toda a atenção que seu caso merece.
          </p>
        </div>

        <div className={styles.grid}>

          <div className={styles.info}>
            {INFO_BLOCKS.map(({ icon, iconAnim, title, content }) => (
              <div key={title} className={styles.infoBlock}>
                <div className={`${styles.infoIcon} ${styles.iconGlow}`}>
                  <i className={`${icon} ${iconAnim}`} aria-hidden="true" />
                </div>
                <div className={styles.infoContent}>
                  <h4>{title}</h4>
                  {content}
                </div>
              </div>
            ))}

            <div className={styles.cta}>
              <a href={WA_HREF} className="btn btn--whatsapp" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-whatsapp" aria-hidden="true" />
                Agendar visita pelo WhatsApp
              </a>
            </div>
          </div>

          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d456.75695368186837!2d-46.804333024902114!3d-23.67396852285498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce53e6fe6b72fd%3A0xc1ff0e991a3b8da0!2sGON%C3%87ALVES%20-%20Consultoria%20e%20Assessoria%20Juridica!5e0!3m2!1sen!2sbr!4v1711758446796!5m2!1sen!2sbr"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do escritório de advocacia no Google Maps"
              aria-label="Mapa com a localização do escritório"
            />
          </div>

        </div>
      </div>
    </motion.section>
  );
}
