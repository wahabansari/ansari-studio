# Ansari Product Engineering — Website

The marketing site for **Ansari Product Engineering**, a product engineering practice that modernizes existing software, automates business workflows and builds custom web products.

Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS v4.

---

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npx tsc --noEmit` | Type-check the project |
| `npx prettier --write "src/**/*.{ts,tsx,css}"` | Format source files |

---

## Typography

- **Inter** is the primary (and currently only) text face, loaded via `next/font/google` (`Inter`, weights 100–900, `--font-inter`, `display: swap`).
- OpenType feature settings (`cv02`, `cv03`, `cv04`, `cv11`) are applied on `body` via `font-feature-settings`.
- Label styles reuse the Inter stack via the `font-mono` utility token; no webfont other than Inter is loaded.

---

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Positioning, problems, six services, work, process, FAQ |
| `/services` | Service hub and comparison |
| `/services/modernization` | Software & product modernization |
| `/services/automation-ai` | AI & workflow automation |
| `/services/product-engineering` | Custom software development |
| `/services/dashboards-portals` | Dashboards & client portals |
| `/services/api-integrations` | API & system integrations |
| `/services/maintenance-retainer` | Maintenance & ongoing development |
| `/automation-audit` | Scoped automation audit offer and form |
| `/work` | Published case-study index |
| `/work/[slug]` | Case study (published slugs only) |
| `/insights` | Article index |
| `/insights/[slug]` | Article |
| `/process` | How an engagement runs |
| `/about` | Company, founder and principles |
| `/partners` | White-label partner pathway for agencies |
| `/contact` | Contact form and Cal.com booking |
| `/contact/thank-you` | Post-submission confirmation (`noindex`) |
| `/privacy`, `/terms` | Legal pages |
| `/api/contact`, `/api/audit` | Form POST handlers |
| `/sitemap.xml`, `/robots.txt` | Generated SEO files |
| `/opengraph-image`, `/twitter-image` | Generated 1200×630 social cards |

Draft case studies are not in `CASE_ORDER`, so they receive no page, sitemap entry or navigation link. **Sunhub is intentionally unpublished.**

---

## Environment variables

### Site URL

| Variable | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Recommended in production | Canonical origin, e.g. `https://example.com`. Falls back to Vercel's production/deployment URL, then `http://localhost:3000`. |

Canonical URLs, Open Graph URLs, JSON-LD IDs, `sitemap.xml` and `robots.txt` all use this origin. Set it in production so they never point at localhost.

### Forms (Resend)

| Variable | Required | Description |
| --- | --- | --- |
| `RESEND_API_KEY` | For live email delivery | Resend API key |
| `CONTACT_TO_EMAIL` | For live email delivery | Recipient inbox |
| `CONTACT_FROM_EMAIL` | No | Verified sender; defaults to Resend's onboarding address |

Without both `RESEND_API_KEY` and `CONTACT_TO_EMAIL`:

- Development logs the submission payload to the server console.
- Production returns **503** with a direct email address. It never fakes success.

Delivery failures return **502**. Validation failures return **400**. Honeypot submissions are accepted silently without sending. A best-effort in-memory limit allows a handful of submissions per IP per 10 minutes and returns **429** with `Retry-After`; use a shared store if hard guarantees are needed.

### Analytics (consent-gated)

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | GA4 measurement ID (`G-…`) |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager container ID (`GTM-…`); takes precedence over direct GA4 |
| `NEXT_PUBLIC_CLARITY_ID` | Microsoft Clarity project ID |

No analytics script renders when these are unset. When set, scripts load only after the visitor accepts analytics. Do Not Track always wins. The choice is stored under `ape-analytics-consent` in `localStorage`.

Tracked events: `booking_click`, `contact_intent`, `audit_intent`, `case_study_open`, `contact_submit`, `audit_submit`, `lead_confirmation`.

### Search Console

| Variable | Description |
| --- | --- |
| `GOOGLE_SITE_VERIFICATION` | Optional Google Search Console verification token |

---

## Project structure

```
src/
├── app/                 # Routes, metadata, sitemap, robots, social images
│   ├── api/             # Form POST handlers
│   ├── insights/        # Article index and dynamic article route
│   ├── services/        # Six service pages
│   └── work/            # Case-study index and dynamic case route
├── components/
│   ├── contact/         # Booking card and service chips
│   ├── design/          # Page templates and shared design components
│   └── work/            # Filterable work grid
├── data/                # Services, articles and case studies
├── fonts/               # Local font files
└── lib/                 # Site config, forms, SEO and analytics helpers
```

### Content is file-driven

- `src/data/services.ts` — the six services and all service-page copy.
- `src/data/articles.ts` — typed article blocks and helpers.
- `src/data/cases.ts` — case-study content and the published `CASE_ORDER`.

Editing these files updates navigation, hub cards, service pages, sitemap, contact chips and structured data together.

---

## SEO

- Per-page titles, descriptions and canonicals.
- Generated `ProfessionalService`, `WebSite`, `Person`, `Service`, `BreadcrumbList`, `FAQPage` and `BlogPosting` JSON-LD.
- Data-driven `sitemap.xml` and `robots.txt`.
- Generated Open Graph and Twitter images.
- Preview deployments and local development are `noindex, nofollow`.
- `/contact/thank-you` is `noindex, follow`.

See `docs/SEO-STRATEGY.md` for the full strategy.

---

## Accessibility

- Skip link to `#main`.
- One `<h1>` per page and logical heading order.
- Visible focus states and keyboard-operable menus.
- Mobile menu closes on Escape, traps focus and returns focus to its trigger.
- Form fields have labels; required fields are marked.
- Decorative icons and backgrounds are hidden from assistive technology.
- Motion respects `prefers-reduced-motion`.
- External new-tab links are labelled.

---

## Documentation

| Document | Purpose |
| --- | --- |
| `docs/WEBSITE-AUDIT.md` | What was found before the rewrite |
| `docs/IMPLEMENTATION-ROADMAP.md` | Phased plan used to deliver the work |
| `docs/BUSINESS-POSITIONING.md` | Audience, offer, messaging and sales narrative |
| `docs/SEO-STRATEGY.md` | Architecture, intent map, schema and measurement |
| `docs/CONTENT-ROADMAP.md` | Editorial plan, briefs and case-study policy |
| `docs/IMPLEMENTATION-REPORT.md` | What shipped, verification results and manual tasks |

---

## Deployment checklist

1. Set `NEXT_PUBLIC_SITE_URL` to the production domain.
2. Configure form delivery (`RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`).
3. Optionally add analytics IDs and Search Console verification.
4. Deploy, then confirm:
   - `/sitemap.xml` and `/robots.txt` use the production domain.
   - Canonical and Open Graph URLs are correct.
   - The OG image returns a 1200×630 PNG.
   - Both forms return 503 (not false success) when delivery is unconfigured.
   - No analytics request fires before consent.
   - Unknown work and article slugs return 404.
5. Submit the sitemap in Search Console.

### Vercel deployment (recommended host)

- Import the repository into Vercel; framework preset **Next.js**, build command `npm run build`.
- Vercel sets `VERCEL_PROJECT_PRODUCTION_URL` and `VERCEL_ENV=production` automatically; the app prefers `NEXT_PUBLIC_SITE_URL` when set, then Vercel values, then localhost.
- Set `NEXT_PUBLIC_SITE_URL` to the production domain (e.g. `https://www.yourdomain.com`) — canonicals, OG URLs, JSON-LD IDs and sitemap all resolve from it.
- Set the Resend variables for live form delivery; without them production returns 503 (never fake success).
- Preview deployments are automatically `noindex, nofollow` via `isPreviewDeployment()`; production stays indexable.
- After first deploy: verify production canonicals/OG, sitemap submission, OG image, and analytics consent behavior on the production domain.

---

## License

Private — all rights reserved.
