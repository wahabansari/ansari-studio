# Implementation Roadmap — Ansari Product Engineering

**Created:** 30 October 2026
**Source:** `docs/WEBSITE-AUDIT.md`
**Principle:** improve the existing application in place. No rebuild, no removed working features, no invented clients or metrics.

Each phase ends with a verification step. A phase is only complete when `npm run lint`, `npx tsc --noEmit` and `npm run build` pass (where the phase touches code).

---

## Phase 0 — Baseline verification

- Confirm the working tree is clean before changes.
- Record the current build result and route count.
- Confirm no production environment variables are present locally.
- **Verification:** `npm run lint`, `npx tsc --noEmit`, `npm run build`.

## Phase 1 — Audit and documentation

- Publish `docs/WEBSITE-AUDIT.md` with verified / potential / recommended / working categories.
- Publish this roadmap.
- Publish positioning, SEO, content and implementation reports.
- **Verification:** every claim in the audit points to a file or an explicit "needs production verification" note.

## Phase 2 — Information architecture and business positioning

- Reorder the service pillars so modernization leads, followed by automation, custom software, dashboards/portals, API integrations and maintenance.
- Add `/services/api-integrations`.
- Rewrite service names, summaries and hero copy around business outcomes.
- Define one primary CTA sitewide: **Book a discovery call** (opens the calendar on the contact page).
- Define one secondary CTA: **Discuss your project** (contact form).
- Add an agency pathway on the homepage linking to `/partners`.
- **Verification:** no duplicated or competing service pages; every service has a distinct intent; no unsupported claims.

## Phase 3 — Homepage

Rebuild the homepage content in this order, reusing existing tokens and components:

1. Hero with the approved positioning and two CTAs.
2. Problems we solve.
3. Primary services (six cards, links to each page).
4. Proof (three case studies).
5. Why Ansari Product Engineering.
6. Who we work with (industries/customer types).
7. Engineering process.
8. Technologies and capabilities.
9. Agency partnership.
10. FAQ.
11. Closing CTA and footer.

- Add FAQPage JSON-LD that matches visible content.
- Keep the existing dark hero aesthetic; no new design language.
- **Verification:** responsive at 360 / 768 / 1024 / 1440 px; one `<h1>`; keyboard reachable; no horizontal overflow.

## Phase 4 — Service pages

Extend the service data model and the shared `ServicePage` template so every page includes:

1. Specific H1 and service description.
2. Who it is for.
3. Problems addressed.
4. Deliverables.
5. Expected outcomes.
6. Implementation process.
7. Technologies where relevant.
8. Relevant case studies.
9. Related reading.
10. FAQs.
11. Strong CTA.

Populate:

- Software & Product Modernization (including SaaS upgrades, React/Next.js, performance, Core Web Vitals, admin panels, no-rewrite guidance).
- AI & Workflow Automation (including business process automation, CRM, lead follow-up, documents, reporting, n8n/Make/Zapier, human-in-the-loop).
- Custom Software Development (web apps, SaaS MVP, internal tools).
- Dashboards & Client Portals.
- API & System Integrations (new).
- Maintenance & Ongoing Development.

- **Verification:** unique metadata and canonical per page; Service + Breadcrumb + FAQ schema; no thin duplicated paragraphs.

## Phase 5 — Content library

- Introduce a typed article model (`src/data/articles.ts`) and one shared article renderer.
- Migrate the existing lead follow-up article without losing its URL or content.
- Add five substantive articles:
  1. Signs your business needs software modernization.
  2. How to upgrade an existing SaaS product without a rewrite.
  3. Custom dashboard vs spreadsheet reporting.
  4. When to upgrade a Next.js application.
  5. How to reduce manual work in business operations.
- Add real publication/modification dates, author Person, related service CTA, related articles and table of contents.
- Rebuild the Insights index from the article data.
- **Verification:** every article renders, has one H1, valid BlogPosting schema, internal links, and appears in the sitemap.

## Phase 6 — Technical SEO

- Add a generated 1200×630 Open Graph image (and Twitter image) using the brand palette.
- Strengthen Organization/ProfessionalService schema: `@id`, logo, founder Person, `sameAs`, service catalog.
- Add `WebSite` schema and Person schema on About.
- Change BlogPosting author to Person and add `dateModified`.
- Make the sitemap data-driven from services, cases and articles; add `lastModified` for articles.
- Strengthen generic page titles and descriptions.
- Add optional Search Console verification from an environment variable.
- Review canonical consistency and internal links.
- **Verification:** inspect rendered `<head>` for home, one service, one case, one article and one legal page; validate JSON-LD; check `sitemap.xml` and `robots.txt`.

## Phase 7 — Conversion paths and forms

- Add company name, optional website, required service and optional engagement model to the contact form.
- Add company name to the audit form.
- Add a honeypot to both forms and a best-effort in-memory rate limit per IP.
- Add strict server-side validation: lengths, email, URL, allowed service values, message length.
- Keep the 303-only-after-acceptance behaviour and the honest 502/503 responses.
- Remove "free" from the audit offer; describe the audit as a scoped review with no obligation to build.
- Add "what happens next", confidentiality, ownership and response-time clarity on the contact page.
- Standardise CTA wording.
- **Verification:** submit valid and invalid payloads against both API routes; confirm no false success; confirm honeypot path sends nothing.

## Phase 8 — Trust and case studies

- Add a named founder profile to About (name, role, LinkedIn) using the only verified identity in the repository.
- Add ownership/handover and communication commitments that are already reflected in the process copy.
- Add optional, evidence-based technology labels to case studies where the repository already documents them.
- Keep Sunhub unpublished until its screenshot and claims are approved.
- **Verification:** no invented testimonials, logos, metrics or client names.

## Phase 9 — Accessibility and UX

- Fix the nested `<main>` in `not-found.tsx`.
- Add focus management and a focus trap to the mobile menu; restore focus on close.
- Add external-link cues for new-tab links.
- Keep skip link, labels, focus states and reduced-motion behaviour.
- Add an accessible consent banner only when analytics is configured.
- **Verification:** keyboard-only walkthrough of header, forms, FAQ, filters and footer; axe/HTML validation if available.

## Phase 10 — Analytics and measurement

- Add consent-gated GA4, GTM (optional) and Microsoft Clarity, configured only through environment variables.
- Track: contact submit, audit submit, booking click, contact intent, audit intent, case-study open, lead confirmation on the thank-you page.
- Do not load any analytics script before consent. Respect Do Not Track.
- Update the privacy policy to describe analytics cookies accurately.
- **Verification:** no script tags render when IDs are unset; scripts load after consent; events appear in the data layer/console.

## Phase 11 — Documentation and final verification

- Update `README.md` for the current brand, routes, environment variables and scripts.
- Publish `docs/BUSINESS-POSITIONING.md`, `docs/SEO-STRATEGY.md`, `docs/CONTENT-ROADMAP.md`, `docs/IMPLEMENTATION-REPORT.md`.
- Run `npm run lint`, `npx tsc --noEmit`, `npm run build`.
- Serve the production build and request every route, `sitemap.xml`, `robots.txt` and the OG image.
- Record manual tasks that need production access or owner decisions.

---

## Priority order if time is constrained

1. Homepage positioning and service clarity (commercial impact).
2. Contact form qualification and spam protection (lead quality).
3. Modernization + automation + API service depth (SEO and credibility).
4. Insights model and articles (organic acquisition).
5. Technical SEO (OG image, schema, sitemap).
6. Analytics/consent (measurement).
7. Accessibility and documentation.

## Out of scope for this pass

- CMS integration (the repository is file-driven; adding a CMS would be a separate architectural decision).
- Paid advertising landing pages.
- A pricing calculator or published price list (no approved pricing exists).
- Testimonials, logos or metrics that cannot be verified.
- Language localisation.
