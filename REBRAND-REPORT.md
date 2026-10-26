# Rebrand & Content Update — Internal Implementation Report

**Date:** 26 October 2026
**Scope:** Full public rebrand from "Ansari Studio" to **Ansari Product Engineering**, plus content/SEO corrections across the Next.js site.
**Status:** All work complete and verified (`npm run lint`, `npx tsc --noEmit`, `npm run build` all pass). Unresolved items requiring owner input are listed in section 6.

---

## 1. Brand identity applied

| Item | Value |
| --- | --- |
| Brand name | **Ansari Product Engineering** (everywhere the old "Ansari Studio" appeared) |
| Slogan | **Build. Modernize. Integrate.** — used in the homepage intro paragraph, the footer signature line, and the default meta title. Never repeated mechanically. |
| Founder | Muhammad Wahab Ansari — no team size, no other names claimed |
| Contact email | `wahabansari.dev@gmail.com` (unchanged, verified) |
| Cal.com | `https://cal.com/wahabansari/30min` + `15min` (unchanged) |
| LinkedIn | `https://www.linkedin.com/in/wahabansari/` (new constant `LINKEDIN_URL`) |
| Logo | Both SVGs regenerated as icon-mark + `<text>` wordmark lockup ("Ansari" bold 30px + "Product Engineering" 20px `#8FA3FF`, viewBox `0 0 410 64`, font stack Poppins → Segoe UI → Arial). Header image 166×26, footer 154×24. Favicon untouched. |
| Font | **Inter Variable** (reverted to the design's original face, per owner request) — self-hosted via `next/font/local` (`src/fonts/InterVariable.woff2`, weight 100–900, `display: swap`, `--font-inter-variable`). The original OpenType feature settings are untouched: `font-feature-settings: "cv02", "cv03", "cv04", "cv11"` in `globals.css`. JetBrains Mono kept for mono labels. |

**Never referenced:** `ansaristudio.com` (belongs to an unrelated Persian photography business). The only occurrence in the codebase is an explanatory comment in `src/lib/site.ts`.

**Canonical origin resolution** (`src/lib/site.ts`):
1. `NEXT_PUBLIC_SITE_URL` (explicit, wins)
2. `VERCEL_PROJECT_PRODUCTION_URL`
3. `VERCEL_URL`
4. `http://localhost:3000` (dev only — emits a loud build-log warning if used in production)

Preview deployments (`VERCEL_ENV !== production`) and local dev emit `noindex, nofollow` root robots metadata. Sitemap/robots/JSON-LD/canonicals all derive from the same `SITE_URL` / `absoluteUrl()` helpers.

---

## 2. Page-by-page: title, H1, intent, canonical

All titles are unique; descriptions unique and accurate; H1s match on-page headings.

| Page | Title | H1 / hero | Intent | Canonical |
| --- | --- | --- | --- | --- |
| `/` | Ansari Product Engineering \| Web Products, Modernization & Automation | "Build better products. / Run smarter businesses." (kept) | Homepage / brand + audit entry | `/` |
| `/services` | Software Development & Automation Services | "Services that build, modernize and integrate your software." | Services hub; 5 equal services | `/services` |
| `/services/automation-ai` | n8n Automation & AI Workflow Integration | hero "Automation & AI" | Service | `/services/automation-ai` |
| `/services/product-engineering` | MVP, SaaS & Web App Development | "MVP and SaaS development with a senior product engineer." | Service | `/services/product-engineering` |
| `/services/dashboards-portals` | Custom Dashboard & Client Portal Development | "Dashboards, client portals and internal tools your team will actually use." | Service | `/services/dashboards-portals` |
| `/services/modernization` | Legacy App Modernization & Performance | "Modernize legacy software without stopping the business." | Service | `/services/modernization` |
| `/services/maintenance-retainer` | Website Maintenance & Development Retainer | "A development retainer with one engineer who knows your code." | Service | `/services/maintenance-retainer` |
| `/automation-audit` | Automation Audit — Find What to Automate First | "Find the hours your team loses to manual work — before spending a cent." | Lead/assessment route (not a 6th service) | `/automation-audit` |
| `/work` | Selected Project Experience | "Real projects, explained by the problem, the approach and the result." | Positioning: selected project experience | `/work` |
| `/work/[slug]` | `<Project> case study` | Case headline | Case study | `/work/<slug>` |
| `/about` | About Muhammad Wahab Ansari, Founder | "A founder-led practice, with a senior engineer on every project." | Founder/about | `/about` |
| `/process` | How We Work: Scope, Build, Hand Over | "How a project runs, from first call to handover." | Process | `/process` |
| `/partners` | White-Label Development Partner for Agencies | Partners hero | Separate agency pathway | `/partners` |
| `/insights` | Automation & Next.js Insights | "Practical notes on automation, engineering and modernization." | Blog index (real article only) | `/insights` |
| `/insights/automate-lead-follow-up` | How to Automate Lead Follow-Up | Article hero | Article | `/insights/automate-lead-follow-up` |
| `/contact` | Contact Ansari Product Engineering — Discuss Your Project | "Tell us what you need to build, improve or connect." | Contact + booking | `/contact` |
| `/contact/thank-you` | Thanks — Your Message Was Received | "Thanks — your message has been received." | Receipt only; noindex | `/contact/thank-you` |
| `/privacy` | Privacy Policy: How We Handle Your Data | "Privacy policy" | Legal | `/privacy` |
| `/terms` | Website Terms of Service: Using This Site | "Terms of service" | Legal | `/terms` |
| 404 | (brand-neutral) | "This page is not connected to anything." | 404 | — |

---

## 3. Structured data (JSON-LD)

Only four types sitewide — Organization (root layout), Service + BreadcrumbList (each service page), BreadcrumbList (case pages, services hub), BlogPosting (article). No FAQPage, no ratings/reviews.

- **Organization** — name, url, email, founder Person (name, jobTitle, LinkedIn), `sameAs`.
- **Service** — name, description (mirrors meta description), url, `serviceType`, provider Organization.
- **BreadcrumbList** — Home → Services → <Service> (and Home → Work → <Project> on case pages).
- **BlogPosting** — headline, description, `datePublished` **2026-10-20** (matches the on-page "Published 20 October 2026" byline — *see owner question 6.4*), author Person, publisher Organization.

## 4. Case-study attribution (9 cases, corrected)

Work page is positioned as **Selected Project Experience**. Every case line describes only work actually done:

| Project (URL) | Corrected facts |
| --- | --- |
| Sunhub (`/work/sunhub`) | Contribution **within the product team** (not solo). Performance work described **non-numerically** ("faster — without a rewrite", "measured before vs after"). Live link kept. |
| Verdira (`/work/verdira`) | **Framer → Next.js migration**, password-protected client areas, deployed on Vercel and **handed over**. |
| AussieMotor (`/work/aussiemotor`) | **End-to-end frontend development + maintenance** in collaboration with the project's designer. |
| VapePlanet (`/work/vapestore` — slug preserved for URL) | Renamed from "Vapestore". **Complete frontend + API integration**. **No external link, no screenshot** — absence is styled as intentional (see §5). |
| SilcoLabs (`/work/silcolabs`) | **Laboratory testing/operations software** — no clinical claims anywhere. |
| Cennetsol (`/work/cennetsol`) | Website **build + SEO + ongoing management**. |
| Talha Estate (`/work/talhaestate`) | **WordPress** website + social media setup + documented handover. |
| Digestive Care (`/work/digestivecare`) | **WordPress website + integrated patient-portal solution**. No "Healow" mention. |
| Select & Health (`/work/selecthealth`) | **Landing-page and design-system design only**, handed to developers. Not a build. |

## 5. Removed / withheld content

- **Sunhub "+30%"** — the figure could not be verified, so it was replaced with non-numeric wording everywhere (homepage tile, services hub panel, modernization page, About, WorkGrid, case page). No speed numbers are printed anywhere.
- **"9 shipped projects" / "9 projects" stat** → About page tiles now read "Owned" (you keep the code) and "Direct" (you work with the founder).
- **"Free automation audit" / "free audit" / "30-minute call" / "exactly 3 automations" / "effort and payback estimate"** — removed everywhere. The audit is consistently described as **"a structured review"** ending in **"a prioritized shortlist"**, with **"No obligation to build"**. Contact-page contexts and existing SiteFooter CTAs keep only the factual "reply within one business day".
- **"Most requested"** → "Common starting point". "Five workflows that pay back first" → "Five workflows that take work off your team".
- **Client AI-deployment claims** (homepage FAQ) — rewritten to describe capability, not client deployments.
- **"Protected against spam"** (contact + audit forms) — removed; now "We use your details only to reply to you."
- **Thank-you page** — no longer promises a reply within one business day or a confirmation email; receipt wording only (accurate because `/api/contact` 303-redirects there only after server-side acceptance).
- **Insights fake article cards and decorative topic filter chips** — removed; only the real featured article plus a full-width "suggest a topic" row remain.
- **Article "Keep reading" self-link card** — the card linked to the article's own URL; removed. The second card ("Have us build this for you" → `/services/automation-ai`) kept, full-width.
- **VapePlanet screenshot** — `public/work/vapestore.webp` deleted; `ProjectThumb` now renders an intentional branded fallback panel (project wordmark + "Case study" mono label + grid overlay on the project's backdrop) when `thumb.image` is absent. This also makes every other thumb's data-driven (`image?: string`).
- **Homepage hand-rolled footer** → shared `<SiteFooter>`; automation-ai custom CTA + slim footer → `<SiteFooter>` pointing to `/automation-audit`.
- **Services hub** — five services now render as **equal col-span-2 cards**; the dark automation card became a light `bg-subtle` card with teal accents and a compact checklist panel replacing the workflow visual.
- **Privacy policy** — invented specifics removed: the "12-month deletion" retention rule, the "respond within one month" SLA, the ICO/UK-jurisdiction claim, and the "cookie-free page-visit statistics" bullet (no analytics tool exists). Now conservative: what the forms actually collect (name, work email, company website, message — verified against form fields), where things are delivered (email inbox, hosting provider, Cal.com), and generic rights language.
- **Terms** — rebranded only; wording was already conservative (no incorporation/jurisdiction claims).

## 6. Owner questions / unresolved items

1. **Canonical hostname.** Production canonicals currently resolve through the env chain; nothing is hardcoded. Set `NEXT_PUBLIC_SITE_URL` (or rely on `VERCEL_PROJECT_PRODUCTION_URL` on Vercel) to the real production domain. A build-log warning (`[site] No site URL configured…`) fires when none is set, so a misconfigured deploy is visible in the deploy logs. **Never** `ansaristudio.com`.
2. **Email delivery.** Forms deliver via Resend only when `RESEND_API_KEY` + `CONTACT_TO_EMAIL` are set; sender fallback is now `"Ansari Product Engineering <onboarding@resend.dev>"`. For production deliverability, set `CONTACT_FROM_EMAIL` to a verified domain address (e.g. `hello@<your-domain>`). Without the env vars, dev logs the payload locally and production returns a 503 pointing at `wahabansari.dev@gmail.com` — it never pretends a message was sent.
3. **No OG/social image asset exists.** No `opengraph-image`/social card asset is in the repo, so none is referenced (I did not fabricate a path). If you want social cards, supply a branded image and I can wire `openGraph.images` + an `opengraph-image` file.
4. **Article date.** `datePublished` 2026-10-20 mirrors the visible byline. If the real publication date differs, both need updating together.
5. **Case relationships / legal identity.** I used the safest accurate wording (e.g. "practice", "run by", "contributed to the product team", "practice partner"). Confirm: (a) how each client relationship should be described (direct client vs agency/partner engagement), and (b) the legal identity the brand should trade under (sole practice vs registered entity) — the site currently claims neither more nor less than "run by Muhammad Wahab Ansari in Lahore, Pakistan".
6. **Booking-hours claim** ("Times overlap UK and US working hours" on the contact card) is pre-existing design copy I left in place — confirm it matches the actual Cal.com availability, especially now that About also mentions Australia.

## 7. Required environment variables

| Variable | Purpose | Required? |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical/OG/sitemap origin | Strongly recommended in production (else Vercel vars are used; localhost fallback warns) |
| `RESEND_API_KEY` | Form delivery | Required for form emails |
| `CONTACT_TO_EMAIL` | Form recipient | Required for form emails |
| `CONTACT_FROM_EMAIL` | Verified sender address | Recommended in production |

## 8. Changed files

**Foundation**
- `src/lib/site.ts` — brand/slogan/founder/LinkedIn constants; env-resolved `SITE_URL`; `isPreviewDeployment()`; `absoluteUrl()`
- `src/lib/seo.tsx` — new: `JsonLd`, `organizationJsonLd`, `serviceJsonLd`, `breadcrumbJsonLd`, `articleJsonLd` (`.tsx` — contains a JSX component)

**App shell**
- `src/app/layout.tsx` — Inter Variable setup (self-hosted `next/font/local`, `src/fonts/InterVariable.woff2`; JetBrains Mono kept), rebranded metadata/template, preview noindex, Organization JSON-LD, icons block
- `src/app/globals.css` — `--font-sans` stack on `--font-inter-variable` (feature settings `"cv02", "cv03", "cv04", "cv11"` untouched)
- `src/app/page.tsx` — full homepage rebrand (metadata, badge, intro + slogan, CTAs, +30% tile, teaser, audit section, founder alt, FAQs, shared footer)
- `src/app/not-found.tsx` — no change needed (brand-neutral)

**Services**
- `src/app/services/page.tsx`, `automation-ai`, `product-engineering`, `dashboards-portals`, `modernization`, `maintenance-retainer` — metadata rebrands, Service+Breadcrumb JSON-LD, equal-card hub, non-numeric claims, proof-link labels, footer swap

**Other pages**
- `src/app/work/page.tsx`, `src/components/work/WorkGrid.tsx`, `src/components/design/CaseStudy.tsx`, `src/components/design/ProjectThumb.tsx`, `src/data/cases.ts`
- `src/app/about/page.tsx`, `process/page.tsx`, `partners/page.tsx`, `automation-audit/page.tsx`
- `src/app/insights/page.tsx`, `insights/automate-lead-follow-up/page.tsx`
- `src/app/contact/page.tsx`, `contact/thank-you/page.tsx`, `src/components/contact/ServiceChips.tsx`, `BookingCard.tsx`
- `src/app/privacy/page.tsx`, `terms/page.tsx`
- `src/lib/forms.ts`, `src/lib/handle-form.ts` (sender fallback rebrand; error-path promise removed; delivery config preserved)

**Follow-up UI pass (post-rebrand requests)**
- Sitewide hover system — every button/card/link got a theme-consistent hover (`transition-colors duration-150`): brand buttons → `#2643c9`, dark-outline → border/fill brighten, white-on-dark → `bg-brand-50`, ink → `#121a33`, white-outline-on-light → `border-brand hover:text-brand` (incl. homepage "All services" + "Selected project experience" pills), brand text links → `hover:underline underline-offset-4`, card grids → thumb-lift or `hover:border-brand-200`. Motion-reduce respected.
- Card backgrounds — `bg-subtle` (`#f6f8fb`) cards switched to `bg-white` only where a grid holds 3+ cards (homepage ×1 group, services hub ×5, about ×4, partners ×3, automation-ai ×4, dashboards ×4, maintenance ×4, audit ×3, process ×3). 1–2-card groups keep grey for contrast; small controls (filter pill, legal toggle, marquee chips) untouched.
- `src/components/SiteHeader.tsx` — disabled light-theme (Sun) button **removed** (no light theme is designed; enabling would need a full theme system). Added sticky center menu: fixed copy of the pill nav (`bg-panel/90` + blur + border-edge + shadow) at `top-[12px]`, slides/fades in after 240px scroll (`window.scrollY`, passive listener), desktop only (`max-[900px]:hidden`), z-40 under the skip link (z-50), `invisible` when hidden (not focusable/off a11y tree), motion-reduce respected. `[view-transition-name:site-header]` kept.

**Assets**
- `public/brand/logo-white.svg`, `public/brand/logo-dark.svg` (regenerated lockups)
- `public/work/vapestore.webp` (deleted — no screenshot exists for VapePlanet)

## 9. Verification

- `npm run lint` — clean
- `npx tsc --noEmit` — clean
- `npm run build` — success, 34 routes prerendered; expected `[site]` origin warning printed locally (unset env), documented in §6.1
- Greps for `Ansari Studio`, `Build. Improve.`, `ansaristudio.com`, `Healow`, `Vapestore`, `free audit`, `Most requested`, `30%` (as a claim), `9 shipped`, `font-inter-variable` — all zero or intentional-only matches
