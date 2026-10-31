# CLAUDE.md — Ansari Product Engineering website

Read `AGENTS.md` first (Next.js 16 has breaking changes; its docs are in `node_modules/next/dist/docs/`).

## Source of truth

1. **This repository**: `src/`, `docs/` and `README.md`. The code and the published pages are the current truth.
2. **Positioning and copy**: `docs/BUSINESS-POSITIONING.md`, `docs/SEO-STRATEGY.md`, `docs/CONTENT-ROADMAP.md`.
3. **Brand files**: `public/brand/`. Never redraw or recolour the logo.

Older design canvases, external Blueprint/Branding folders and `REBRAND-REPORT.md` are historical references only. If they conflict with the code or the docs above, follow the repository.

Never invent copy, metrics, clients, testimonials, certifications or reviews.

## Stack

Next.js 16 (App Router, Cache Components), React 19.3, TypeScript strict, **Tailwind CSS v4 only** (no CSS-in-JS, no UI kit). Fonts: Inter Variable via `next/font/local` (`src/fonts/InterVariable.woff2`) with `font-feature-settings: "cv02", "cv03", "cv04", "cv11"` on `body`; Inter is the only text face (the `font-mono` token resolves to the Inter stack).

## Where things are

| Thing | Location |
| --- | --- |
| Design tokens (colours, fonts, keyframes, view-transition CSS) | `src/app/globals.css` (`@theme`) |
| Header (in the layout, anchored during transitions) | `src/components/SiteHeader.tsx` |
| Page transitions (`<ViewTransition>` keyed by pathname) | `src/components/PageTransition.tsx` |
| Shared design components: `PageHero`, `SiteFooter`, `ProjectThumb`, `CaseStudy`, `ArticleCard`, `ArticleBody` | `src/components/design/` |
| Case-study data and published order (`CASE_ORDER`) | `src/data/cases.ts` |
| The six services (names, order, copy, FAQs) — used by menus, Home, hub, footer, chips, JSON-LD | `src/data/services.ts` |
| Article content and helpers | `src/data/articles.ts` |
| Shared service-page template (all six `/services/*` pages are thin wrappers) | `src/components/design/ServicePage.tsx` |
| Site constants (name, tagline, contact, booking links, nav) | `src/lib/site.ts` |
| SEO helpers and JSON-LD | `src/lib/seo.tsx` |
| Forms → `/api/contact`, `/api/audit` (Resend when configured) | `src/lib/forms.ts`, `src/lib/handle-form.ts` |
| Consent-gated analytics | `src/lib/analytics.ts`, `src/components/Analytics.tsx`, `ConsentBanner.tsx` |

Tokens: use the theme names (`text-ink`, `bg-night`, `text-mist`, `border-line`, `bg-brand`, `text-mint`, …), not raw hex, in new code. Content breakpoint: `max-[900px]:` (one place uses `max-[860px]:`); the header collapses at `max-[1024px]:`.

## Rules

- Marketing routes are prerendered where possible. Only `src/app/api/*` runs on demand.
- Each page: one `<h1>`, content in `<main id="main">`, the `SiteFooter` after `</main>`.
- Page hero sections reserve 84px at the top for the fixed header.
- Primary CTA: **Book a discovery call** → `/contact#book`. Secondary: **Discuss your project** → `/contact`.
- Only publish case studies in `CASE_ORDER`. Sunhub is a draft and must stay out until approved.
- Do not publish prices, “free audit” wording, invented proof or unverified technology claims.
- Article dates are the dates content was added; do not backdate.
- Motion: view transitions + small CSS hovers only; everything respects `prefers-reduced-motion`.
- A project thumbnail that should morph into its case-study cover uses `<ProjectThumb morph />`; use it once per slug per page.
- Preview/local deployments must stay `noindex`; the thank-you page is `noindex, follow`.

## Commands

```sh
npm run dev      # http://localhost:3000
npm run build    # production build (must pass before every commit)
npm run start    # serve the build
npm run lint     # eslint
npx tsc --noEmit # types (after a build has generated .next/types)
npx prettier --write "src/**/*.{ts,tsx,css}"   # format (sorts Tailwind classes)
```

## Environment

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin for metadata, sitemap and JSON-LD |
| `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, optional `CONTACT_FROM_EMAIL` | Live form delivery |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID`, `NEXT_PUBLIC_GTM_ID`, `NEXT_PUBLIC_CLARITY_ID` | Optional consent-gated analytics |
| `GOOGLE_SITE_VERIFICATION` | Optional Search Console verification |

Without both `RESEND_API_KEY` and `CONTACT_TO_EMAIL`, forms log the submission in development and return a clear “not connected yet” message in production. They never fake success. No analytics script renders without an ID or without consent.
