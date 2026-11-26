# Project instructions

How this site is built and how to change it safely. Branding values live in [`branding/BRANDING.md`](./branding/BRANDING.md).

## Stack

Next.js 16 (App Router, Cache Components) · React 19 · TypeScript strict · plain CSS (no Tailwind, no UI kit) · **Framer Motion** for all animation · Inter via `next/font/google`.

## Commands

```sh
npm run dev      # http://localhost:3000
npm run build    # production build (must pass before every commit)
npm run start    # serve the build
npm run lint
npx tsc --noEmit
```

## Folder map

| Path | What it is |
| --- | --- |
| `src/app/` | Routes. Each `page.tsx` is a thin wrapper: metadata + `<main id="main">` + a content component |
| `src/app/site.css` | The design system, taken from the approved design (tokens, components, hero, bento, header, footer) |
| `src/app/extras.css` | Additions the design did not draw: mobile menu, form states, case study / article prose, consent banner |
| `src/app/layout.tsx` | Shell: scroll progress, header, `{children}`, footer, consent banner, analytics |
| `src/app/template.tsx` | Page enter animation (Framer Motion), re-runs on every navigation |
| `src/content/*.tsx` | The page bodies (home, services, work, …), one file per designed page |
| `src/content/art/*.tsx` | Large SVG illustrations, split out so page files stay readable |
| `src/components/motion.tsx` | `Reveal`, `RevealLink`, `Up`, `ScrollProgress`, `MotionProvider`, `EASE` |
| `src/components/SiteHeader.tsx`, `SiteFooter.tsx`, `PageHero.tsx`, `CtaBand.tsx`, `brand.tsx` | Shared UI |
| `src/components/forms/` | Contact and audit forms → `/api/contact`, `/api/audit` |
| `src/components/work/`, `insights/` | Work grid, case study, article rendering |
| `src/data/services.ts` | The five services (names, order, summaries, SEO titles) used by menus, footer, forms, sitemap, JSON-LD |
| `src/data/projects.ts` | Cards in the Work grid and their filters |
| `src/data/cases.ts` | Case-study write-ups (`CASE_ORDER` is the published order) |
| `src/data/articles.ts` | Insights articles |
| `src/lib/` | Site constants, SEO helpers, form validation/delivery, analytics |
| `public/` | Favicons, brand SVGs, `work/` screenshots |
| `docs/branding/` | Brand guide, tokens, logo pack, original PDF guideline |

## Routes

`/`, `/services`, `/services/{product-engineering, modernization, dashboards-portals, maintenance-retainer, automation-ai}`, `/work`, `/work/[slug]`, `/process`, `/about`, `/partners`, `/insights`, `/insights/[slug]`, `/contact`, `/contact/thank-you`, `/automation-audit`, `/terms` (includes `#privacy`). Redirects: `/privacy → /terms#privacy`, `/services/api-integrations → /services/automation-ai`.

## Working rules

1. **Design stays as drawn.** Change copy, data and structure freely; don't invent new colours, radii or type sizes. Reuse tokens (`--ink`, `--ind`, …) and existing classes (`.cell`, `.mb`, `.btn-p`, `.eyebrow`, …).
2. **All motion is Framer Motion.** Wrap a block in `<Reveal>` for scroll-in, use `<Up k={n}>` for hero entrances, `AnimatePresence`/`layout` for state changes. Use the shared `EASE`. Never add motion that ignores reduced-motion (the `MotionProvider` in the layout covers Framer Motion).
3. Decorative loops inside SVG illustrations (SMIL `<animate>`, CSS keyframes in `site.css`) are part of the artwork; leave them.
4. Each page: one `<h1>`, content inside `<main id="main">`; header, footer and progress bar come from the layout.
5. Don't invent proof: no fake metrics, clients, testimonials or certifications. Case studies publish only what is in `src/data/cases.ts`.
6. Primary CTA is **Discuss your project** (`/contact`); secondary is **Book a 30-minute call** (`/contact#book`; the Cal.com link is `BOOKING_URL` in `src/lib/site.ts`).
7. Forms never fake success: without `RESEND_API_KEY` and `CONTACT_TO_EMAIL` they log in development and return a clear "not connected" message in production. Honeypot field is `company_website_check`.
8. Analytics only load with an ID **and** consent (`src/lib/analytics.ts`, `ConsentBanner.tsx`). Do Not Track is respected.
9. Preview and local deployments are `noindex` (`isPreviewDeployment()` in `site.ts`); the thank-you page is `noindex, follow`.
10. Keep files focused (aim under ~400 lines; generated SVG art files are the exception).

## Adding or changing things

- **New page**: add `src/content/<name>.tsx`, a `src/app/<route>/page.tsx` wrapper with `pageMetadata({...})`, a nav/footer link if needed, and a sitemap entry.
- **New service**: add it to `src/data/services.ts` (menus, footer, form choices, sitemap and JSON-LD update automatically), then add its page.
- **New project in Work**: add to `src/data/projects.ts`; if it has a write-up, add the case to `src/data/cases.ts` and `CASE_ORDER`.
- **New article**: add to `src/data/articles.ts` (`service` must be one of the five slugs).
- **Colour or type change**: edit the token in `src/app/site.css` `:root` and update `docs/branding/`.

## Environment

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin for metadata, sitemap and JSON-LD |
| `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, optional `CONTACT_FROM_EMAIL` | Live form delivery |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID`, `NEXT_PUBLIC_GTM_ID`, `NEXT_PUBLIC_CLARITY_ID` | Optional consent-gated analytics |
| `GOOGLE_SITE_VERIFICATION` | Optional Search Console verification |

## Known follow-ups

- `public/brand/*` and the logo pack use the older blue crossbar (`#2E4FE3`); the site draws the mark with the indigo crossbar. Regenerate the pack if they should match.
- Next.js 16.4.2 reports a known security advisory during `npm run build`; upgrade when convenient (`next upgrade`).
