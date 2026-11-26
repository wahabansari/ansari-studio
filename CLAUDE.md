# CLAUDE.md — Ansari Product Engineering website

Read `AGENTS.md` first (Next.js 16 has breaking changes; its docs are in `node_modules/next/dist/docs/`).

Full project instructions: [`docs/INSTRUCTIONS.md`](docs/INSTRUCTIONS.md). Brand colours, type, logo and motion: [`docs/branding/BRANDING.md`](docs/branding/BRANDING.md) (tokens in `docs/branding/brand-tokens.json`).

## Source of truth

1. This repository: `src/`, `docs/`, `README.md`. The code is the current truth.
2. Design: `src/app/site.css` (from the approved design) and `src/app/extras.css`.
3. Brand files: `docs/branding/logo-pack/`, `public/brand/`. Never redraw or recolour the logo.

`REBRAND-REPORT.md` and the older docs in `docs/` (positioning, SEO, roadmap) are historical; they may mention six services or the old blue palette.

Never invent copy, metrics, clients, testimonials, certifications or reviews.

## Stack

Next.js 16 (App Router, Cache Components), React 19.3, TypeScript strict, plain CSS, **Framer Motion** for all animation, Inter via `next/font/google`. No Tailwind, no UI kit.

## Rules

- Keep the design as drawn: reuse the tokens and classes in `site.css`; no new colours or sizes.
- Animation uses Framer Motion (`src/components/motion.tsx`: `Reveal`, `Up`, `ScrollProgress`, shared `EASE`); respect reduced motion.
- Each page: one `<h1>`, content in `<main id="main">`; header/footer come from the layout.
- Five services live in `src/data/services.ts`; Work cards in `src/data/projects.ts`; case studies in `src/data/cases.ts`; articles in `src/data/articles.ts`.
- Forms post to `/api/contact` and `/api/audit` and never fake success without delivery configured.
- Analytics only with an ID and consent. Preview/local deployments stay `noindex`.

## Commands

```sh
npm run dev      # http://localhost:3000
npm run build    # must pass before every commit
npm run lint
npx tsc --noEmit
```
