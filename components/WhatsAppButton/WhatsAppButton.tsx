'use client';

import { motion } from 'framer-motion';
import styles from './WhatsAppButton.module.css';

const WA_HREF = 'https://wa.me/5511993198275?text=Olá%2C%20gostaria%20de%20falar%20com%20um%20advogado.';

export default function WhatsAppButton() {
  return (
    <div className={styles.float}>
      <span className={styles.tooltip}>Fale conosco agora!</span>
      <a
        href={WA_HREF}
        className={styles.btn}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir conversa no WhatsApp"
      >
        {/* Pulse ring via Framer Motion */}
        <motion.span
          className={styles.pulseRing}
          aria-hidden="true"
          animate={{ scale: [1, 1.4, 1.4], opacity: [0.6, 0, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
        />
        <i className="fa-brands fa-whatsapp" aria-hidden="true" />
      </a>
    </div>
  );
}
