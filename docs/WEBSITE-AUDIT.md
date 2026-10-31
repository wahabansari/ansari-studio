# Website Audit — Ansari Product Engineering

**Audit date:** 30 October 2026
**Repository:** `ansari-studio-web`
**Stack verified:** Next.js 16.4.2 (App Router, Cache Components), React 19.3, TypeScript strict, Tailwind CSS v4
**Scope:** Public marketing site, content, SEO, conversion paths, accessibility and maintainability.

This audit separates **verified issues** (observed in the repository) from **potential issues** (need production or third-party verification) and **recommended improvements** (commercial/quality opportunities rather than defects).

---

## 1. Executive summary

The site is a solid, well-engineered foundation. Routing is clean, every indexable page has a unique title/description/canonical, the build is static-first, forms fail safely when email is unconfigured, and the design system is consistent.

The commercial gaps are mostly **positioning, depth and conversion**, not engineering:

1. The homepage does not yet tell the full story required by the brief: no problem framing, industries, technologies, agency pathway or FAQ.
2. The five service pages share one template and do not include target audience, expected outcomes, technologies or related reading. Two commercially important intents (API integrations and business process automation) are not separately addressed.
3. The Insights section contains a single article, so it cannot support organic acquisition or demonstrate expertise.
4. The contact form collects less qualification data than the brief requires and has no spam protection.
5. Trust assets are thin: there is no named founder profile on the site, despite an author badge that says "Founder".
6. There is no analytics/consent layer, so enquiries cannot be measured.
7. The internal rebrand report claims several changes that are not present in the current code (free-audit wording, founder profile, Person author schema, OG image). The code is the source of truth, and those claims should not be trusted.

No production credentials, Search Console data, analytics, or hosting access were available. Anything requiring those is marked as **potential** or **manual task**.

---

## 2. Repository facts verified

| Area | Verified state |
| --- | --- |
| Routes | 20 page routes + 2 form API routes; 8 published case studies; 1 article |
| Rendering | All pages are static; only `/api/contact` and `/api/audit` run at request time |
| Design system | Tailwind v4 `@theme` tokens in `src/app/globals.css`; Inter Variable self-hosted; JetBrains Mono via Google Fonts |
| Shared components | `PageHero`, `SiteFooter`, `ServicePage`, `CaseCard`, `CaseStudy`, `ProjectThumb`, `FaqList`, `WorkGrid` |
| Forms | Native POST → 303 redirect to `/contact/thank-you` only after server-side acceptance; Resend delivery when configured |
| SEO | `metadataBase`, per-page canonical, `sitemap.ts`, `robots.ts`, Organization/Service/Breadcrumb/BlogPosting JSON-LD |
| Accessibility | Skip link, semantic landmarks, labelled inputs, visible `:focus-visible`, reduced-motion handling |
| Assets | 7 project screenshots, 2 brand SVGs, favicons, manifest, no OG image |
| Documentation | No `docs/` directory; `README.md` and `CLAUDE.md` still describe "Ansari Studio"; `REBRAND-REPORT.md` is partially stale |
| Git state | Clean working tree at audit start (commit `67574b6`) |

---

## 3. Verified issues

### 3.1 Content and positioning

| # | Issue | Evidence |
| --- | --- | --- |
| C1 | "Free automation audit" claims remain in three places, contradicting the internal report that says the offer was changed to a structured review. | `src/app/automation-audit/page.tsx:7-25`, `src/app/services/page.tsx:124`, `src/data/services.ts:345` |
| C2 | The homepage hero says "Build better products. Run smarter businesses." It does not name modernization, automation or integration, and does not match the approved direction. | `src/app/page.tsx:66-75` |
| C3 | Homepage is missing required sections: problems we solve, industries/customer types, why-choose detail, technologies, agency partnership, FAQ. | `src/app/page.tsx` (entire file) |
| C4 | The About page has no founder profile, name, role or LinkedIn link; the only "Founder" label is an author badge with no identity. | `src/app/about/page.tsx`, `src/components/design/AuthorBadge.tsx:22` |
| C5 | Service pages have no "who it's for", expected outcomes, technology/capability list or related reading. All five pages use the same six-section template. | `src/components/design/ServicePage.tsx:10-13`, `src/data/services.ts` |
| C6 | Modernization is framed as "Website & Web App Modernization" and does not cover SaaS product upgrades, React/Next.js upgrades, Core Web Vitals, admin panels or the "targeted improvement instead of rewrite" argument. | `src/data/services.ts:118-184` |
| C7 | Automation copy does not cover business process automation, n8n, Make, Zapier, document processing, reporting automation or human-in-the-loop approvals in any depth. | `src/data/services.ts:297-370` |
| C8 | No service page addresses the distinct "API integration services" search intent. | `src/data/services.ts`, `src/app/services/*` |
| C9 | The Insights index and the article are bespoke pages; there is no article data model or shared template, so adding content means duplicating layout code. | `src/app/insights/page.tsx`, `src/app/insights/automate-lead-follow-up/page.tsx` |
| C10 | Only one article exists. The index advertises "guides" in the plural. | `src/app/insights/page.tsx:24`, `src/data` |
| C11 | The services hub still says "Five services" and renders a 3 + 2 card layout. | `src/app/services/page.tsx:11,41,50-57` |
| C12 | `README.md` and `CLAUDE.md` describe "Ansari Studio", not Ansari Product Engineering. `CLAUDE.md` references `../Blueprint/` and `../Branding/` folders that are not in the repository. | `README.md:1-5`, `CLAUDE.md:9-14` |

### 3.2 SEO

| # | Issue | Evidence |
| --- | --- | --- |
| S1 | No Open Graph or Twitter image exists, yet the layout declares `twitter.card = summary_large_image`. Social shares render without a preview image. | `src/app/layout.tsx:47-48`; no `opengraph-image*` file |
| S2 | `BlogPosting` author is the Organization, not a Person; the function has no `dateModified` input and reuses `datePublished`. | `src/lib/seo.tsx:104-126` |
| S3 | Organization schema has no `logo`, `founder`, `sameAs`, `@id` or service list descriptions beyond names. It is typed `ProfessionalService` but is not linked to a `WebSite` entity. | `src/lib/seo.tsx:20-44` |
| S4 | Sitemap is a hardcoded array, so new services/articles can be forgotten. It has no `lastModified`. | `src/app/sitemap.ts:5-31` |
| S5 | Several page titles are generic and do not match search intent: "Contact Us", "Our Work", "About Us", "Insights", "Our Process". | `src/app/contact/page.tsx:11`, `work/page.tsx:7`, `about/page.tsx:7`, `insights/page.tsx:8`, `process/page.tsx:7` |
| S6 | The services hub lacks Service/Breadcrumb links beyond a BreadcrumbList; there is no `ItemList`/`OfferCatalog` for the hub (not required, but useful). | `src/app/services/page.tsx:27-32` |
| S7 | FAQPage markup is emitted on service pages. It is valid, but Google no longer shows FAQ rich results for most commercial sites, so it should not be treated as a visibility tactic. | `src/components/design/ServicePage.tsx:35` |

### 3.3 Conversion and forms

| # | Issue | Evidence |
| --- | --- | --- |
| F1 | Contact form captures only name, email, engagement type and message. Missing company name, website URL and an explicit service selection separate from engagement type. | `src/app/contact/page.tsx:47-99` |
| F2 | No spam protection on either form: no honeypot, no rate limiting, no CAPTCHA. | `src/app/api/contact/route.ts`, `src/app/api/audit/route.ts`, `src/lib/forms.ts` |
| F3 | Validation only checks name presence and email shape. Company, website, message length and allowed option values are not validated server-side. | `src/lib/forms.ts:11-22` |
| F4 | Validation/configuration failures return unstyled plain text, outside the site shell. Usable, but a dead end for a prospect. | `src/lib/handle-form.ts:5-35` |
| F5 | The audit page collects "Company website" but no company name. | `src/app/automation-audit/page.tsx:187-198` |
| F6 | The audit offer is described as free in some places and as a structured, written review in others. The commercial model is ambiguous. | `automation-audit/page.tsx:7-25`, `data/services.ts:341-346` |
| F7 | No conversion measurement exists (no GA4/GTM/Clarity), so form and booking performance cannot be evaluated. | Repository-wide search |
| F8 | Primary CTA wording is inconsistent: "Discuss your project", "Book a 30-minute call", "Request your audit", "Request your free audit". | Multiple files |
| F9 | `AUTHOR_LABEL` is "Founder, Ansari Product Engineering" with no name, which weakens rather than builds credibility. | `src/components/design/AuthorBadge.tsx:22` |

### 3.4 Accessibility and UX

| # | Issue | Evidence |
| --- | --- | --- |
| A1 | `not-found.tsx` nests a `<main>` inside another `<main>`, producing two main landmarks and invalid HTML. | `src/app/not-found.tsx:6,16` |
| A2 | The mobile menu does not move focus into the panel when opened, trap Tab, or restore focus predictably beyond Escape. | `src/components/SiteHeader.tsx:38-56,119-147` |
| A3 | External case-study links open a new tab without warning screen-reader users. | `src/components/design/PageHero.tsx:153-157` |
| A4 | `WorkGrid` filter state changes the grid but focus stays on the pressed button; the result count is announced via `role="status"`, which is good, but there is no live confirmation of the filter change itself. | `src/components/work/WorkGrid.tsx:109-133` |
| A5 | The Work page and case-study pages do not declare a visible "external link" cue. | `CaseStudy.tsx:35-36` |
| A6 | The privacy policy claims no tracking cookies. This is accurate today but must change if analytics is added. | `src/app/privacy/page.tsx:99-102` |

### 3.5 Technical / maintainability

| # | Issue | Evidence |
| --- | --- | --- |
| T1 | `BOOKING_HREF` is exported but unused; `BOOKING_URL` is used directly. | `src/lib/site.ts:74` |
| T2 | The sitemap and the insights index duplicate knowledge of article URLs; adding an article requires edits in several files. | `src/app/sitemap.ts`, `src/app/insights/page.tsx` |
| T3 | `REBRAND-REPORT.md` claims work that is not in the code (free-audit removal, founder profile, Person author schema, OG image). It should be treated as historical, not current truth. | `REBRAND-REPORT.md` §2, §3, §5, §6.3 |
| T4 | `manifest.webmanifest` has no `start_url` or `scope`. Low impact for a marketing site. | `public/site.webmanifest` |
| T5 | `next.config.ts` enables `cacheComponents` and `partialPrefetching`; the build passed at the last commit, but this must be re-verified after changes because Cache Components can reject request-time APIs in pages. | `next.config.ts:5-6`, `REBRAND-REPORT.md` §9 |

---

## 4. Potential issues requiring production verification

These cannot be confirmed from the repository alone.

| # | Potential issue | Why it needs verification |
| --- | --- | --- |
| P1 | Canonical hostname may be wrong or unset in production. `SITE_URL` falls back to localhost and only warns in the build log. | Check `NEXT_PUBLIC_SITE_URL` / Vercel production URL and the rendered `<link rel="canonical">` on production. |
| P2 | Email delivery may be unconfigured or landing in spam. | Send a real test through both forms in production; confirm Resend domain verification, SPF/DKIM and inbox placement. |
| P3 | `wahabansari.dev@gmail.com` may not be the desired public business address. | Owner confirmation. |
| P4 | Booking availability and time-zone claims may not match Cal.com. | Check `cal.com/wahabansari/30min` and `15min`; confirm working-hours copy. |
| P5 | No Google Search Console / Bing verification is present. | Add verification token via environment variable once available. |
| P6 | No consent tool or privacy policy coverage for analytics because no analytics exists yet. | Resolve together with the analytics implementation. |
| P7 | Case-study client relationships and permissions to name clients may need legal confirmation. | Owner confirmation; especially "practice partner" and "contributed to the product team". |
| P8 | The free/paid status and scope of the automation audit is a business decision not documented in the repository. | Owner confirmation before publishing a price or a "free" promise. |
| P9 | Lighthouse/Core Web Vitals on production may differ from local build. | Run PageSpeed Insights against the deployed URL. |
| P10 | The site may be indexed on a preview domain if `robots` metadata is overridden by hosting. | Check `site:domain` and response headers. |

---

## 5. Recommended improvements (commercial priority)

1. **Reposition the homepage around the three pillars** — modernization, automation, custom software — with problems, audiences, proof, process, capabilities, agency pathway and FAQ.
2. **Make product modernization the lead service** and explain targeted upgrades versus rewrites.
3. **Add an API integrations service page** to capture a distinct, high-intent search need already evidenced by client work.
4. **Deepen every service page** with audience, outcomes, deliverables, process, technologies and proof.
5. **Build a real Insights library** (6 substantive articles) on a shared, typed template with dates, author, service links and CTAs.
6. **Strengthen trust**: named founder profile, ownership/handover language, delivery model, and explicit "what happens next".
7. **Qualify enquiries better**: company, website, required service, description, optional engagement model; honeypot and server-side validation.
8. **Measure**: consent-gated GA4/Clarity, conversion events for form submits, booking clicks, contact intent and case-study visits.
9. **Complete technical SEO**: OG image, Person author schema, founder/logo/sameAs in Organization, data-driven sitemap, stronger titles.
10. **Fix accessibility defects**: nested main landmark, mobile menu focus management, external-link cues.

---

## 6. Features already implemented correctly (do not regress)

- Static-first rendering with a clean route map and no dead internal links observed.
- Unique title, description and canonical on every indexable page.
- `robots.ts` disallows `/api/` and points to the sitemap.
- Preview deployments and local development are `noindex, nofollow`.
- Forms never claim success when delivery is not configured: production returns 503 with an email fallback; dev logs the payload.
- 303 redirect to the thank-you page only after server-side acceptance.
- Server-side validation of name and email shape; form values are trimmed and length-capped.
- Shared service data drives menus, footer, cards, contact chips and JSON-LD, so names stay consistent.
- Shared `PageHero`, `SiteFooter`, `ServicePage`, `CaseStudy` and `ProjectThumb` components avoid duplicated layout.
- Design tokens are centralised; no raw hex in component code except documented hover states.
- Skip link, `:focus-visible` outline, labelled form fields, semantic `<main>` on normal pages, `aria-current` navigation.
- `prefers-reduced-motion` is respected for view transitions and hover lifts.
- `next/image` is used for screenshots and logos with meaningful alt text; images are local WebP.
- Case studies avoid unverified metrics; Sunhub is deliberately held back until its screenshot and claims are ready.
- Privacy and terms pages are conservative and avoid invented legal claims.

---

## 7. Assumptions recorded (not invented as facts)

1. The founder name and LinkedIn URL come from `REBRAND-REPORT.md` §1, which records them as verified owner input. They are used only in the founder profile and Person schema.
2. The automation audit is treated as a **scoped, quoted engagement**, not a free deliverable, because the internal report says free-audit claims were removed. No price is published.
3. Technologies listed on service pages are limited to those already named in the repository, case studies or the brief (React, Next.js, TypeScript, Tailwind CSS, WordPress, REST APIs, n8n, Make, Zapier). No proficiency ranking or certification is claimed.
4. No client logos, testimonials, metrics, addresses or awards are added.
5. New article publication dates are the dates the content is added to this repository. They are not backdated to imply history.
6. Analytics remains off until the visitor consents and until an ID is configured through environment variables.

---

## 8. Manual decisions still required

- Production domain (`NEXT_PUBLIC_SITE_URL`).
- Public business email address.
- Resend sender domain and recipients.
- Whether the automation audit is free, paid, or credited against implementation.
- Permission to name each client and describe the relationship publicly.
- Legal entity name, address and jurisdiction for the footer/privacy policy, if required.
- Social profiles for `sameAs` (LinkedIn is available; X/GitHub are not).
- Analytics IDs and consent-banner wording review.
