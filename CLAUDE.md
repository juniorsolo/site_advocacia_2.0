# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start
```

There is no linter or test suite configured.

## Architecture

**Next.js 16 (App Router) + React + Framer Motion + TypeScript.**
One-page site with static generation (`○`). All components are Client Components (`'use client'`) since they use hooks and animations.

### Directory structure

```
app/
  layout.tsx       — root layout: html, head (fonts, FA CDN), Navbar, WhatsAppButton
  page.tsx         — assembles all sections
  globals.css      — design tokens (--color-*, --space-*, etc.), reset, typography, buttons, global keyframes

components/
  Navbar/          — Navbar.tsx + Navbar.module.css  (useNavbar, useActiveSection, useSmoothScroll)
  Hero/            — Hero.tsx + Hero.module.css       (Framer Motion entrance animations)
  About/           — About.tsx + About.module.css    (animated counters via useInView + animate())
  Services/        — Services.tsx + Services.module.css (AnimatePresence rotating text)
  News/            — News.tsx + News.module.css       (link to TRT4)
  Location/        — Location.tsx + Location.module.css (Google Maps iframe, CSS icon animations)
  Footer/          — Footer.tsx + Footer.module.css   (year, dev modal state)
  WhatsAppButton/  — WhatsAppButton.tsx + WhatsAppButton.module.css (Framer Motion pulse ring)

hooks/
  useNavbar.ts       — scroll shadow, hamburger/drawer toggle, Escape/click-outside
  useActiveSection.ts — scroll tracking → active nav link (90px offset)
  useSmoothScroll.ts  — intercepts a[href^="#"], reads --navbar-height CSS var
```

### CSS

Design tokens live in `app/globals.css` under `:root` (`--color-*`, `--space-*`, `--text-*`, `--radius-*`, `--shadow-*`, `--transition-*`). Always use these tokens rather than hardcoded values.

Each component has a collocated `.module.css` with component-scoped styles. Responsive `@media` rules are also in each component's module CSS. Global keyframes that are still CSS-based (icon animations: `iconBounce`, `iconTick`, `iconRing`, `iconFloat`, `iconGlow`; hero animations: `floatIcon`, `fadePulse`, `arrowBounce`) live in `globals.css`.

### Framer Motion usage

| Animation | Where |
|-----------|-------|
| Section reveal (`whileInView`) | `About`, `Services`, `News`, `Location` |
| Hero entrance (staggered `initial`/`animate`) | `Hero` |
| Counter count-up (`useInView` + `animate()`) | `About` → `CounterCard` |
| Rotating text (`AnimatePresence` + mode="wait") | `Services` → `RotatingText` |
| Card hover (`whileHover`) | `Services` cards, `About` stat cards |
| WhatsApp pulse ring (`animate` loop) | `WhatsAppButton` |
| Hero icon float (`animate` loop) | `Hero` |

### Rotating text

`RotatingText` in `Services` uses `useState` + `setInterval(3000)` to cycle through 5 phrases. `AnimatePresence mode="wait"` handles the slide-in/out transition. To add/remove phrases, update the `PHRASES` array in `Services.tsx` — no CSS timing changes needed.

### Counters

`CounterCard` in `About` uses Framer Motion's `useInView` (once, -80px margin) + `animate(0, value, { duration: 1.6 })` to count up when the section enters the viewport.
