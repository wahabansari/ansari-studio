# Implementation Report — Ansari Product Engineering

**Date:** 31 October 2026
**Baseline commit:** `67574b6` (Hold Sunhub back as a draft case study)
**Status:** Code complete and locally verified. Production configuration and client approvals remain manual.

---

## 1. What this pass set out to do

Turn the existing Next.js site into a credible commercial asset:

- Clear B2B positioning around modernization, automation and custom software.
- A homepage that explains the problem, the offer and the proof.
- Six distinct service pages with enough depth to rank and to qualify.
- A typed content library with honest publication dates.
- Technical SEO that is correct on every route.
- Conversion paths that qualify enquiries and never fake success.
- Consent-gated analytics.
- Accessibility and documentation suitable for handover.

No part of the stack was replaced. The work is an in-place upgrade of the existing App Router application.

---

## 2. What changed

### Information architecture

- Services expanded from five to six by adding **API & System Integrations** at `/services/api-integrations`.
- Service order now leads with modernization, automation and custom software, followed by dashboards, integrations and maintenance.
- Partners added to the main navigation.
- The old standalone article route was replaced by a typed dynamic route at `/insights/[slug]`; the existing lead-follow-up URL still resolves.

### Homepage

Rebuilt in this order:

1. Hero: “Upgrade your software. Automate your operations. Grow faster.”
2. Problems we solve.
3. Six services.
4. Three published case studies.
5. Why Ansari Product Engineering.
6. Who we work with.
7. Four-step process.
8. Technologies and capabilities.
9. Agency partnership.
10. FAQ with matching `FAQPage` JSON-LD.
11. Closing CTA and footer.

### Service pages

The shared `ServicePage` template now renders, per service:

- Hero with audience-specific positioning.
- Who it is for and the outcome being bought.
- Problems addressed.
- Deliverables.
- Expected business outcomes.
- Implementation steps.
- Relevant technologies.
- Case-study proof or a scoped offer.
- Mid-page booking nudge with discovery-call CTA.
- Related articles.
- Four FAQs with `FAQPage` schema.
- Closing CTA.

### Content library

- `src/data/articles.ts` defines six articles as typed blocks with metadata, service mapping, related articles and publication/modification dates.
- Shared `ArticleCard` and `ArticleBody` components render the index and article pages.
- Article pages include author, dates, reading time, table of contents, related service CTA, related articles and `BlogPosting` schema.
- Publication dates reflect when each article was added (October 2026); none were backdated.

### Conversion and forms

- Contact form now captures company, optional website, required service and optional engagement model.
- Audit form captures company and team size.
- Shared server-side validation covers lengths, email, URL, allowed service values, engagement values, team size and minimum message/task length.
- Honeypot field `company_website_check` silently accepts bots without sending anything.
- Best-effort in-memory rate limit: five submissions per IP per ten minutes, returning `429` with `Retry-After`.
- Delivery still redirects `303` only after acceptance, returns `502` on delivery failure and `503` when unconfigured in production.
- All “free audit” wording removed; the audit is described as a scoped engagement priced in writing.
- Primary CTA standardised as **Book a discovery call** → `/contact#book`.
- Secondary CTA standardised as **Discuss your project** → `/contact`.
- Contact hero links directly to the booking card and the message form.
- Contact page rebuilt into a two-column flow: reactive contact form, booking card, direct email, “What happens next” sequence and reassurances.
- Booking card rewritten: “Book a 30-minute discovery call” framing, pre-open trust points (no sales team, no obligation, reply within one business day), “Short on time? Book 15 minutes” shortcut, loading state with `aria-live` announcement and `aria-hidden` until loaded.
- Thank-you page now embeds the booking card — the highest-intent moment after a successful submission — alongside the “While you wait” resource cards.
- Service pages gained a mid-page booking nudge (“Ready when you are”) before related reading.
- Homepage agency banner gained a direct booking CTA alongside the partner-model path.
- Form components carry sending/disabled/aria-busy states and inline error messaging (including server-returned field errors); 429/400/5xx paths are all surfaced in the UI.

### Typography

- **Reverted to Inter Variable**, the design's original text face, per owner request. Self-hosted via `next/font/local` from `src/fonts/InterVariable.woff2` (weight 100–900, `display: swap`, `--font-inter-variable`).
- OpenType feature settings (`cv02`, `cv03`, `cv04`, `cv11`) restored on `body` in `src/app/globals.css`.
- JetBrains Mono removed; the `--font-mono` token now resolves to the Inter stack, so Inter is the only text face on the site.

### SEO

- Site-wide generated Open Graph and Twitter images (1200×630).
- `ProfessionalService` schema with `@id`, logo, founder, `sameAs`, service area and six-service offer catalogue.
- `WebSite` schema site-wide.
- `Person` schema on About for the verified founder identity.
- `Service`, `BreadcrumbList` and `FAQPage` schema on service pages.
- `BlogPosting` author changed to Person with `dateModified`.
- Data-driven sitemap from services, published cases and articles.
- Optional Search Console verification from `GOOGLE_SITE_VERIFICATION`.
- Generic titles and descriptions strengthened for work, process, about, contact and legal pages.
- Geographic expansion: service-area copy and `ProfessionalService` `areaServed` extended beyond the US, UK and Europe to explicitly include the Middle East.
- Preview/local deployments remain `noindex, nofollow`; thank-you page is `noindex, follow`.

### Trust and proof

- Named founder profile on About using only the identity verified in `REBRAND-REPORT.md`: Muhammad Wahab Ansari, Founder, LinkedIn.
- Process, ownership and response-time commitments kept consistent with existing copy.
- Case-study technology labels remain limited to what the repository already documents.
- Sunhub remains unpublished and was verified to return 404 with `noindex`.

### Analytics and privacy

- Consent-gated GA4, GTM and Microsoft Clarity, configured only through public environment variables.
- No analytics script renders when IDs are unset.
- GTM takes precedence over direct GA4 to avoid double counting.
- Do Not Track is respected; consent choice stored under `ape-analytics-consent`.
- Privacy policy updated with an analytics and consent section, dated 30 October 2026.
- Events: `booking_click`, `contact_intent`, `audit_intent`, `case_study_open`, `contact_submit`, `audit_submit`, `lead_confirmation`.

### Accessibility and UX

- Fixed nested `<main>` in `not-found.tsx`.
- Mobile menu: focus moves into the panel on open, Tab is trapped, Escape closes and returns focus to the trigger, outside click closes.
- Header breakpoints updated for the longer navigation.
- External new-tab links carry `rel="noopener noreferrer"` and an accessible new-tab cue.
- Skip link, labels, focus outlines and reduced-motion behaviour retained.
- Consent banner reads browser state through `useSyncExternalStore`, avoiding a setState-in-effect waterfall.

---

## 3. Verification results

All commands were re-run on 31 October 2026 after the final conversion-pass and typography changes.

| Check | Command | Result |
| --- | --- | --- |
| Lint | `npm run lint` | Pass — 0 errors, 0 warnings |
| Types | `npx tsc --noEmit` | Pass |
| Production build | `npm run build` | Pass — compiled, type-checked and generated 42 static pages |

### Production server smoke crawl (port 3104)

Started with `npx next start -p 3104` and crawled all key routes plus generated files:

- Every published route returned `200`, including `/`, `/contact`, `/contact/thank-you`, `/automation-audit`, `/partners`, `/services`, `/work`, `/insights` and all six service routes.
- `/sitemap.xml`, `/robots.txt`, `/opengraph-image` and `/twitter-image` returned `200`.
- Negative checks previously verified: `/does-not-exist` → `404`; `/work/sunhub` → `404` with `noindex`.

### Typography verification

- Reverted to **Inter Variable** per owner request: self-hosted via `next/font/local` (`src/fonts/InterVariable.woff2`, weight 100–900, `--font-inter-variable`, `display: swap`).
- `src/app/globals.css` uses `var(--font-inter-variable)` in the `--font-sans` stack with OpenType feature settings `"cv02", "cv03", "cv04", "cv11"` and `font-optical-sizing: auto`.
- JetBrains Mono removed; the `--font-mono` token now resolves to the Inter stack, so Inter is the only text face on the site.
- Smoke crawl confirmed rendered pages reference the Inter variable and contain no Poppins or JetBrains Mono references.

### SEO checks

- Homepage title, description, canonical and OG image render correctly.
- Service page renders one canonical, one `<title>`, and `Service`, `BreadcrumbList`, `FAQPage`, `ProfessionalService` and `WebSite` JSON-LD.
- Article renders one canonical, `BlogPosting`, `datePublished: 2026-10-20` and `dateModified: 2026-10-30`.
- `sitemap.xml` contains 31 URLs: 11 static pages, 6 services, 8 published cases and 6 articles. It excludes `/contact/thank-you`, `/api/*` and Sunhub.
- `robots.txt` allows crawling, disallows `/api/` and points to the sitemap.
- Generated OG image is a valid `1200 × 630` PNG.

### Form checks

| Case | Result |
| --- | --- |
| Invalid contact payload | `400` with field-specific errors |
| Honeypot filled | `303` to thank-you, nothing delivered |
| Valid contact payload, delivery unconfigured | `503` with direct email address |
| Valid audit payload, delivery unconfigured | `503` with direct email address |
| Repeated submissions | `429` after the limit, with `Retry-After` |

No false success was observed. Local testing used no `RESEND_*` variables, so `503` is the correct production behaviour for an unconfigured deployment.

### Analytics checks

- With no analytics IDs configured, the rendered homepage contains zero references to `googletagmanager`, `clarity.ms` or `gtag`.
- Consent state is read only in the browser; the server renders no banner and no analytics scripts.

### Environment note

The build logs `[site] No site URL configured` because no production URL is set locally. Canonicals and sitemap URLs therefore resolve to `http://localhost:3000`. This is expected in local verification and must be fixed by setting `NEXT_PUBLIC_SITE_URL` in production.

---

## 4. Files of note

| Area | Files |
| --- | --- |
| Positioning and homepage | `src/app/page.tsx` |
| Service model and copy | `src/data/services.ts`, `src/components/design/ServicePage.tsx` |
| Articles | `src/data/articles.ts`, `src/app/insights/[slug]/page.tsx`, `ArticleCard.tsx`, `ArticleBody.tsx` |
| SEO | `src/lib/seo.tsx`, `src/app/sitemap.ts`, `src/app/robots.ts`, `opengraph-image.tsx`, `twitter-image.tsx` |
| Forms | `src/lib/forms.ts`, `src/lib/handle-form.ts`, `src/app/api/contact/route.ts`, `src/app/api/audit/route.ts` |
| Analytics | `src/lib/analytics.ts`, `src/components/Analytics.tsx`, `ConsentBanner.tsx` |
| Navigation and footer | `src/components/SiteHeader.tsx`, `src/components/design/SiteFooter.tsx`, `src/lib/site.ts` |
| Documentation | `docs/*.md`, `README.md` |

---

## 5. Manual and production tasks

These could not be completed from the repository alone.

### Required before launch

1. **Set the production site URL.** `NEXT_PUBLIC_SITE_URL=https://<domain>` so canonicals, OG URLs, JSON-LD IDs and the sitemap are correct.
2. **Configure form delivery.** Set `RESEND_API_KEY`, `CONTACT_TO_EMAIL` and a verified `CONTACT_FROM_EMAIL`.
3. **Send a real test enquiry and audit request** through the deployed forms and confirm the email arrives with `reply_to` set to the submitter.
4. **Verify the production domain in Google Search Console** and submit `/sitemap.xml`.
5. **Check the rendered OG image** in a social preview tool after the domain is live.
6. **Decide whether to enable analytics.** If yes, set the IDs and verify that no request fires before consent.

### Owner decisions

1. Approve or reject publication of Sunhub; until approved it must stay out of `CASE_ORDER`.
2. Approve any additional case-study claims, client names, metrics or technology labels.
3. Decide whether pricing will ever be published. The site currently explains why it is not.
4. Confirm that the audit offer wording and scope match what will actually be sold.
5. Review the privacy policy and terms with a qualified adviser for the operating jurisdiction.
6. Decide whether a newsletter, gated asset or paid landing pages are in scope.

### Recommended follow-ups

- Run a screen-reader pass (NVDA/VoiceOver) on the header menu, contact form and booking card.
- Test the site on a real iOS and Android device, not only responsive emulation.
- Replace the in-memory rate limit with a shared store if form abuse becomes a problem.
- Validate JSON-LD with a structured-data testing tool after the production domain is set.
- Add a privacy-friendly analytics fallback only if consent decline leaves too little measurement.
- Review title/description click-through in Search Console after 30 days and adjust weak pages.
- Publish the API-integrations article first; it is the only service without dedicated content.

---

## 6. Constraints honoured

- No clients, testimonials, metrics, certifications, addresses, search volumes or rankings were invented.
- No prices were published.
- Sunhub was not published.
- Article dates reflect when content was added.
- The audit is not described as free.
- Existing working routes and features were preserved.
- Analytics is off until consent, and off entirely without configuration.

---

## 7. Suggested next steps

1. Configure production environment variables and deploy.
2. Run the post-deploy checklist in `README.md`.
3. Watch the first ten enquiries for qualification quality and adjust the form options if needed.
4. Publish the API-integrations article and one automation piece.
5. Request approval for one new case study, ideally an automation or dashboard engagement.
6. Review `docs/BUSINESS-POSITIONING.md` after those ten conversations and update the ideal customer profile if reality differs.
