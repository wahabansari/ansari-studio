# CLAUDE.md — Ansari Studio website (Next.js)

Read `AGENTS.md` first (Next.js 16 has breaking changes; its docs are in `node_modules/next/dist/docs/`).

## Source of truth

1. **The design**: claude.ai design canvas "Ansari Studio — Website Redesign"
   (https://claude.ai/artifact/NtqyC3pRA13cFCHbBuyUqP). Follow it exactly: layout, copy, colours, spacing, type.
2. **The Blueprint** (`../Blueprint/`): page titles, meta descriptions, URLs, SEO rules.
3. **The Brand Playbook** (`../Branding/`): logo rules, tone. Never redraw or recolour the logo files.

If they conflict, ask. Never invent copy, metrics, clients or reviews.

## Stack

Next.js 16 (App Router, Cache Components), React 19.3, TypeScript strict, **Tailwind CSS v4 only** (no CSS-in-JS,
no UI kit). Fonts: Inter Variable via `next/font/local` (`src/fonts/InterVariable.woff2`) with
`font-feature-settings: "cv02", "cv03", "cv04", "cv11"` on `body`; JetBrains Mono via `next/font/google` for small
code-style labels.

## Where things are

| Thing | Location |
| --- | --- |
| Design tokens (colours, fonts, keyframes, view-transition CSS) | `src/app/globals.css` (`@theme`) |
| Header (in the layout, anchored during transitions) | `src/components/SiteHeader.tsx` |
| Page transitions (`<ViewTransition>` keyed by pathname) | `src/components/PageTransition.tsx` |
| Shared design components: `PageHero`, `SiteFooter`, `ProjectThumb`, `CaseStudy` | `src/components/design/` |
| Case-study data (from the design) | `src/data/cases.ts` |
| The five services (names, order, copy, FAQs) — used by menus, Home, hub, footer, chips, JSON-LD | `src/data/services.ts` |
| Shared service-page template (all five `/services/*` pages are thin wrappers) | `src/components/design/ServicePage.tsx` |
| Site constants (name, tagline, contact, booking links) | `src/lib/site.ts` |
| Forms → `/api/contact`, `/api/audit` (Resend when configured) | `src/lib/forms.ts`, `src/lib/handle-form.ts` |

Tokens: use the theme names (`text-ink`, `bg-night`, `text-mist`, `border-line`, `bg-brand`, `text-mint`, …), not raw hex,
in new code. Design breakpoint: `max-[900px]:` (one place uses `max-[860px]:`).

## Rules

- Every page is static. Only `src/app/api/*` runs on the server.
- Each page: one `<h1>`, content in `<main id="main">`, the `SiteFooter` after `</main>`.
- Page hero sections reserve 84px at the top for the absolutely-positioned header.
- Motion: view transitions + small CSS hovers only; everything respects `prefers-reduced-motion`.
- A project thumbnail that should morph into its case-study cover uses `<ProjectThumb morph />`; use it once per slug per page.

## Commands

```sh
npm run dev      # http://localhost:3000
npm run build    # production build (must pass before every commit)
npm run start    # serve the build
npm run lint     # eslint
npx tsc --noEmit # types
npx prettier --write "src/**/*.{ts,tsx,css}"   # format (sorts Tailwind classes)
```

## Environment (forms)

`RESEND_API_KEY`, `CONTACT_TO_EMAIL`, optional `CONTACT_FROM_EMAIL`. Without them, forms log the submission in
development and return a clear "not connected yet, please email" message in production.
