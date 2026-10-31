# SEO Strategy — Ansari Product Engineering

**Created:** 30 October 2026
**Scope:** Organic search strategy for the current Next.js site.
**Constraint:** No search-volume, ranking, traffic or backlink figures are claimed. None were collected or supplied. Targets below are intent-based, not volume-based.

---

## 1. Objective

Win qualified enquiries from companies that already know they have a software or operations problem. The site does not need to rank for every web-development term; it needs to be the clearest answer for modernization, automation and custom-product searches from growing businesses.

### Primary outcomes

1. Rank for service-intent queries where the buyer is close to a decision.
2. Build topical authority through practical articles tied to each service.
3. Convert organic traffic into discovery calls and scoped enquiries.
4. Keep technical SEO clean enough that content quality is the limiting factor, not crawlability.

### Non-goals

- Competing on price-led “cheap website” queries.
- Publishing invented statistics to attract links.
- Mass-produced location pages with no real presence.
- Chasing search volume that does not match the offer.

---

## 2. Site architecture

```
/                                  positioning, services, proof, FAQ
├── /services                      hub and comparison
│   ├── /services/modernization
│   ├── /services/automation-ai
│   ├── /services/product-engineering
│   ├── /services/dashboards-portals
│   ├── /services/api-integrations
│   └── /services/maintenance-retainer
├── /work                          proof index
│   └── /work/[slug]               published case studies only
├── /insights                      content hub
│   └── /insights/[slug]           six articles
├── /automation-audit              scoped offer + form
├── /process                       how engagements run
├── /about                         company and founder
├── /partners                      agency pathway
├── /contact                       booking + qualified form
├── /privacy, /terms               legal
└── /contact/thank-you             noindex confirmation
```

The hierarchy is deliberately shallow. Every commercial page is at most two clicks from the homepage, and every article links to the service it supports.

---

## 3. Search intent map

No keyword tool data is used. Each cluster is defined by what the searcher is trying to do.

| Cluster | Example intent (paraphrased) | Landing page | Content support |
| --- | --- | --- | --- |
| Software modernization | “Our web app is slow and hard to change; how do we upgrade it without a rewrite?” | `/services/modernization` | Signs you need modernization; upgrading SaaS without a rewrite; when to upgrade Next.js |
| SaaS and app upgrades | “React/Next.js version upgrade, performance, technical debt” | `/services/modernization` | Next.js upgrade article |
| Workflow automation | “Automate lead follow-up, reporting, onboarding, documents” | `/services/automation-ai` | Lead follow-up workflow; reducing manual work |
| AI in operations | “Where can AI actually help without replacing people?” | `/services/automation-ai` | Manual-work article; audit offer |
| Custom software | “Build an internal tool, portal, SaaS MVP” | `/services/product-engineering` | Service page + case studies |
| Dashboards and portals | “Replace spreadsheet reporting; client self-service portal” | `/services/dashboards-portals` | Dashboard vs spreadsheet article |
| API integrations | “Connect CRM, payments, storefront and internal systems” | `/services/api-integrations` | Lead follow-up article (integration example) |
| Maintenance | “Who can maintain and improve our live product?” | `/services/maintenance-retainer` | Process page |
| Agency partner | “White-label development partner for our agency” | `/partners` | — |
| Process and trust | “How does this company work? Who owns the code?” | `/process`, `/about` | Founder profile, FAQ |

### Priority order

1. Modernization and automation — strongest commercial fit and deepest content.
2. Custom software and dashboards — broad but well supported by case studies.
3. API integrations and maintenance — supporting services; rank as part of the cluster.
4. Agency partnerships — narrow, high-value, low competition for the right query.

---

## 4. On-page conventions

### Titles

- Use the page's job, not a slogan.
- Keep the primary phrase near the front.
- The root layout appends `| Ansari Product Engineering`, except where a page sets an absolute title.
- Homepage and legal pages use absolute titles; everything else uses the template.

Examples currently shipped:

- `Software Modernization & SaaS Product Upgrades | Ansari Product Engineering`
- `AI & Workflow Automation for Business Operations | Ansari Product Engineering`
- `Software and Web Development Case Studies | Ansari Product Engineering`
- `How We Work: Scope, Build and Handover | Ansari Product Engineering`

### Meta descriptions

- One sentence of outcome plus one sentence of scope.
- Mention the audience or region only when true.
- No “best”, “#1”, “guaranteed” or invented numbers.
- Target roughly 140–160 characters; review in the rendered page, not by assumption.

### Headings

- Exactly one `<h1>` per page.
- `<h2>` for major sections, `<h3>` for cards and subsections.
- Questions are allowed as headings when the page answers them.
- No heading is used only for visual size; styling stays in classes.

### Internal links

- Every service page links to relevant case studies and articles.
- Every article links back to its service and to two related articles.
- The homepage links to all six services, work, process, partners and insights.
- Footer exposes all services and company pages on every route.
- Anchor text describes the destination; “learn more” is used only inside an already-labelled card.

### Images and social cards

- A generated 1200×630 Open Graph and Twitter image is served site-wide.
- Case-study thumbnails carry descriptive alt text.
- Decorative gradients and grids are `aria-hidden`.

---

## 5. Structured data

JSON-LD is generated in `src/lib/seo.tsx` and rendered server-side.

| Type | Where | What it describes |
| --- | --- | --- |
| `ProfessionalService` | Every page (layout) | Name, URL, email, logo, founder, service area, six-service offer catalogue |
| `WebSite` | Every page (layout) | Site name, URL, language, publisher |
| `Person` | `/about` | Founder name, role, LinkedIn, employer |
| `Service` | Each service page | Service name, description, URL, provider |
| `BreadcrumbList` | Service and case pages | Visible breadcrumb trail |
| `FAQPage` | Homepage and service pages | The exact questions and answers shown on the page |
| `BlogPosting` | Each article | Headline, description, dates, author Person, publisher, image |

Rules:

- Markup must match visible content.
- No `Review`, `AggregateRating` or `Offer` price markup without real, approved data.
- `datePublished` is the date the article was added to the repository, not a backdated date.
- `dateModified` changes only when the content materially changes.

---

## 6. Technical SEO

### Canonicals and indexing

- `metadataBase` resolves from `NEXT_PUBLIC_SITE_URL`, then Vercel production/deployment URLs, then localhost.
- Every indexable page sets a root-relative canonical.
- Preview deployments and local development are `noindex, nofollow`.
- `/contact/thank-you` is `noindex, follow`.
- `robots.ts` allows crawling and points to the sitemap.
- `sitemap.ts` is data-driven from services, published cases and articles. Noindex and API routes are excluded.

### Rendering and performance

- Pages are server-rendered/static where possible.
- Fonts are self-hosted or loaded through `next/font`.
- The hero uses CSS gradients and a grid, not a large image.
- Case-study thumbnails use `next/image` with explicit sizes.
- Motion respects `prefers-reduced-motion`.
- No third-party script loads before analytics consent.

### Internationalisation

The business serves clients worldwide, mainly in the US, UK and Europe, but the site is English-only for now. There are no `hreflang` alternates and no country-specific URLs. Adding them without local content or operations would create thin duplicates.

### Security and trust

- Forms validate server-side and never claim success when delivery fails.
- Legal pages describe analytics accurately.
- External links to LinkedIn and Cal.com use `rel="noopener noreferrer"` where they open a new tab.

---

## 7. Measurement

### Search Console

- Verify the production domain with the `GOOGLE_SITE_VERIFICATION` environment variable.
- Submit `https://<domain>/sitemap.xml`.
- Review queries, pages and Core Web Vitals monthly.
- Use URL Inspection after deploying new routes.

### Analytics

Consent-gated events (see `src/lib/analytics.ts`):

| Event | Trigger |
| --- | --- |
| `booking_click` | Any link containing `#book` |
| `contact_intent` | Click to `/contact` |
| `audit_intent` | Click into `/automation-audit` |
| `case_study_open` | Click into `/work/[slug]` |
| `contact_submit` | Submit of the contact form |
| `audit_submit` | Submit of the audit form |
| `lead_confirmation` | Thank-you page view after acceptance |

No personal data is sent in event parameters. Form fields are never pushed to analytics.

### Reporting cadence

- **Weekly:** enquiries, bookings, form failures, 404s.
- **Monthly:** indexed pages, query themes, top landing pages, Core Web Vitals.
- **Quarterly:** content refresh, internal-link audit, title/description review, positioning alignment.

---

## 8. First 90 days

### Days 1–30 — Foundations

- Deploy with the production domain and verify Search Console.
- Confirm `sitemap.xml`, `robots.txt`, canonicals and OG image on the live domain.
- Submit the sitemap; inspect the homepage, six service pages and three case studies.
- Fix any crawl or rendering errors reported.
- Confirm analytics consent behaviour and event delivery.

### Days 31–60 — Depth

- Publish two articles from the content roadmap, one modernization and one automation.
- Add internal links from the new articles to the relevant service pages.
- Refresh the two oldest articles for accuracy and internal links.
- Review title/description click-through in Search Console and adjust weak pages.

### Days 61–90 — Expansion

- Publish one dashboard/article and one integration-focused piece.
- Add one approved case study if client permission exists.
- Review which service pages attract impressions but few clicks; rewrite the title and opening.
- Decide whether a glossary or comparison page is justified by real queries.

---

## 9. Risks and guardrails

| Risk | Guardrail |
| --- | --- |
| Thin service pages competing with each other | Each service keeps a distinct audience, problem set and deliverables; no near-duplicate paragraphs. |
| AI hype attracting poor-fit traffic | Automation copy focuses on workflows, reliability and human review, not novelty. |
| Case studies blocked by client approval | Publish method and process content instead; never invent proof. |
| Analytics blind spot from consent decline | Use Search Console and enquiry counts as primary signals; do not add non-consensual tracking. |
| Preview builds indexed | Preview/local are noindex by environment; verify after each deploy. |
| Dates misleading readers | Publication dates reflect when content was added; no backdating. |
| Sitemap listing unpublished work | Sitemap is generated from `CASE_ORDER`; draft Sunhub stays out. |

---

## 10. Definition of done for a new page

- [ ] One clear search intent and one primary phrase.
- [ ] Unique title and meta description.
- [ ] Canonical set.
- [ ] One `<h1>`; logical `<h2>`/`<h3>` order.
- [ ] At least three internal links to related pages.
- [ ] Linked from the sitemap (if indexable).
- [ ] Structured data only where it matches visible content.
- [ ] Mobile, keyboard and reduced-motion checks.
- [ ] No unsupported claims, prices or metrics.
- [ ] Analytics event only if it measures a real action.
