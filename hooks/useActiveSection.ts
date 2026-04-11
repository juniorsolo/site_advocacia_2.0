'use client';

import { useState, useEffect } from 'react';

const SECTIONS = ['home', 'sobre', 'servicos', 'noticias', 'contato'];

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const OFFSET = 90;

    const handleScroll = () => {
      const scrollY = window.scrollY + OFFSET;

      let current = SECTIONS[0];
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) current = id;
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return activeSection;
}
