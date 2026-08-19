# Stillwater

A premium landing page for a guided breathing session app, redesigned as if a Product Hunt front page depended on it — built for the Acdyon Technologies frontend challenge (Part 2: The Premium Home Page).

## Tech Stack
- **Framework:** Vite + React
- **Styling:** Tailwind CSS v4 (theme tokens via `@theme`, no config file needed)
- **Animation:** Framer Motion
- **Deployment:** Vercel

## Concept
Stillwater is a 3-minute guided breathing reset — not a full meditation app, deliberately narrower in scope. The page is built around a single signature element (the breathing circle) that demonstrates the actual product action in the hero, rather than using decorative animation.

## Architecture Overview
Single-page static site, no routing or backend — the brief's Part 2 track is a home page, not a full product. Structure is component-per-section:

- `Nav.jsx` — sticky, full-width header with logo, links, and CTA
- `Hero.jsx` — headline, value prop, CTA, and the `BreathingCircle` component
- `BreathingCircle.jsx` — the signature animation: two concentric circles animating scale/opacity on a 6-second loop (Framer Motion `animate` + `repeat: Infinity`), reused at smaller scale inside `SessionPreview`
- `SessionPreview.jsx` — a mock "session in progress" UI card (timer, phase label, progress bar), satisfying the brief's "show the product, not just claims" requirement without fake testimonials or stats
- `HowItWorks.jsx` — three-step breakdown, using Framer Motion's `whileInView` for a scroll-triggered reveal (the one deliberate micro-interaction beyond the hero)
- `CTASection.jsx` / `Footer.jsx` — closing CTA and footer, both full-width to match the nav's edge-anchored layout
- `hooks/useKonami.js` — listens for the Konami code and toggles an overlay; the brief's optional easter egg

## Design Tokens
Defined in `src/index.css` via Tailwind v4's `@theme`:
- `--color-ink` / `--color-paper` — dark navy background, off-white text
- `--color-signal` / `--color-wave` — muted teal-green and deeper blue-teal accents
- `--color-muted` / `--color-line` — secondary text and hairline borders
- Fonts: Fraunces (display), Inter (body), JetBrains Mono (labels/timers)

## Setup Instructions

npm install
npm run dev

Visit `http://localhost:5173`.

## Build & Deploy

npm run build
vercel --prod


## Assumptions / Scope Notes
- No backend or persisted session state — the session card in `SessionPreview.jsx` is a static mock, not a running timer. Noted as a trade-off in `DECISIONS.md`.
- No fabricated testimonials, user counts, or logos anywhere in the copy, per the brief's explicit constraint.
- Dark mode is the only mode — since the brief states half-dark support is worse than none, a single deliberate dark theme was chosen over building a redundant light mode.
- New Group / auth / real product functionality is out of scope — this track is a home page only, not the full app.

## Demo
- Live: https://stillwater-gules-zeta.vercel.app
- Repo: https://github.com/gurnoor-singh23/stillwater