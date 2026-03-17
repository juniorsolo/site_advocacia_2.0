# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Compile TypeScript → assets/js/main.js
npm run build

# Watch mode (recompile on save)
npm run watch

```

There is no linter or test suite configured.

## Architecture

Single-page HTML site (`index.html`) with vanilla TypeScript compiled via `tsc` into a single bundle (`assets/js/main.js`). No bundler or framework.

**TypeScript compilation** (`tsconfig.json`):
- Input: `src/ts/**/*.ts` — all files are concatenated in alphabetical order into one output file
- Output: `assets/js/main.js` (`"module": "None"`, `"outFile"`)
- Because there is no module system, **all classes must be defined before `main.ts` runs**. File load order is alphabetical, and `main.ts` is last, which is what instantiates everything

**CSS architecture** — each section has its own file loaded in `<head>` in this order:
`variables.css` → `reset.css` → `typography.css` → `layout.css` → `animations.css` → `loading.css` → `navbar.css` → `hero.css` → `about.css` → `services.css` → `news.css` → `location.css` → `whatsapp.css` → `responsive.css`

Design tokens live exclusively in `variables.css` (`--color-*`, `--space-*`, `--text-*`, `--radius-*`, `--shadow-*`, `--transition-*`). Always use these tokens rather than hardcoded values.

**TypeScript classes** (one class per file):
| File | Class | Responsibility |
|------|-------|----------------|
| `navbar.ts` | `Navbar` | Scroll shadow, hamburger/drawer toggle, click-outside and Escape to close |
| `rotatingText.ts` | `RotatingText` | Accessibility live region for the CSS-animated rotating phrases |
| `counter.ts` | `Counter` | Animated number count-up on `[data-counter]` elements |
| `news.ts` | `NewsController` | Lazy-loads news via local JSON cache → rss2json API fallback |
| `smoothScroll.ts` | `SmoothScroll` | Offset smooth scroll accounting for navbar height (`--navbar-height`) |
| `activeSection.ts` | `ActiveSection` | Highlights active nav link based on scroll position |
| `main.ts` | — | Bootstraps all classes on `DOMContentLoaded`, initialises `IntersectionObserver` for `.section--hidden` reveal |

**News data flow:**
`NewsController` calls `api.rss2json.com` directly and shows the loading modal while fetching.

**Section reveal:** Sections use `class="section--hidden"` in HTML. `initLazyReveal()` in `main.ts` uses an `IntersectionObserver` (threshold 0.08) to swap it to `section--visible` once in view.

**Rotating text timing:** The `.rotating-text-wrapper` in `#servicos` contains 5 `.rotating-text-item` elements. The CSS animation in `animations.css` runs a 15s cycle with `animation-delay` set per `nth-child(1–5)` at 0s, 3s, 6s, 9s, 12s. If you add or remove items, update both the HTML count and the corresponding `nth-child` delays + cycle duration (`15s = 5 items × 3s`).
