# Content Roadmap — Ansari Product Engineering

**Created:** 30 October 2026
**Scope:** Editorial plan for Insights, service pages and case studies.
**Constraint:** Publish only what the practice can support. No invented clients, metrics, survey data, certifications or quotes.

---

## 1. Purpose

Content has two jobs:

1. **Help a buyer decide.** Explain the problem, the options and the trade-offs clearly enough that the reader can tell whether this practice fits.
2. **Earn search visibility.** Answer the questions buyers actually type, with pages specific enough to deserve to rank.

Content is not a volume game here. Six useful articles that match the services are worth more than sixty generic posts.

---

## 2. Editorial principles

1. **Write from delivery experience.** If the practice has not done the work, describe the method without pretending to have a client story.
2. **One idea per piece.** A single problem, a single approach, a clear next step.
3. **Show the trade-offs.** Say when an approach is wrong, when a rewrite is justified and when a spreadsheet is enough.
4. **No borrowed proof.** No invented statistics, survey percentages, client names, logos or testimonials.
5. **Dates are honest.** `datePublished` is the date the article is added to the repository. `dateModified` changes only for a material edit.
6. **Every article has a job.** Each one maps to a service and an action.
7. **Plain language wins.** Short sentences, concrete examples, no framework name-dropping without a reason.

---

## 3. Audience and funnel

| Stage | Reader question | Content type | Primary CTA |
| --- | --- | --- | --- |
| Problem-aware | “Why is this happening to us?” | Diagnostic article, checklist | Read the related service |
| Solution-aware | “What are our options?” | Comparison, method, trade-offs | Book a discovery call |
| Decision-ready | “Can this team do it, and how does it work?” | Case study, process, FAQ | Discuss your project |
| Existing client | “How do we keep improving?” | Maintenance and roadmap content | Monthly development |

---

## 4. Current inventory

Six articles are live, all dated October 2026:

| Article | Service | Intent |
| --- | --- | --- |
| How to automate lead follow-up between your website, CRM and inbox | Automation | Implementation guide |
| Signs your business needs software modernization | Modernization | Diagnosis |
| How to upgrade an existing SaaS product without a rewrite | Modernization | Method and trade-offs |
| Custom dashboard vs spreadsheet reporting | Dashboards | Comparison |
| When to upgrade a Next.js application | Modernization | Technical decision |
| How to reduce manual work in business operations | Automation | Diagnosis and method |

Supporting commercial content:

- Six service pages with audience, problems, deliverables, outcomes, process, technologies, proof, related reading and FAQ.
- Six FAQs on the homepage.
- Three published case studies (Verdira, Aussie Motor, VapePlanet) with qualitative outcomes.
- Process, about/founder, partners, automation audit and contact pages.

### Gaps

- No article dedicated to API integrations.
- No article on choosing between custom software and off-the-shelf tools.
- No content for agencies evaluating a white-label partner.
- No maintenance-focused article on what happens after launch.
- No healthcare-specific content, despite relevant work.
- Case-study library is small; Sunhub is drafted but unpublished pending approval.

---

## 5. Quarterly roadmap

Dates are planning windows, not publication promises. Publish when the piece is accurate and approved.

### Q4 2026 — Complete the core clusters

| Priority | Working title | Service | Format | Notes |
| --- | --- | --- | --- | --- |
| 1 | How to connect the tools your business already uses | API integrations | Guide | Fill the only service with no dedicated article. Cover field mapping, failure handling, idempotency and ownership. |
| 2 | Custom software or off-the-shelf: how to choose | Custom software | Comparison | Honest guidance, including when a SaaS tool is the better answer. |
| 3 | What “done” means after launch | Maintenance | Guide | Handover, monitoring, ownership, backlog and how monthly development works. |

### Q1 2027 — Deepen the strongest clusters

| Priority | Working title | Service | Format | Notes |
| --- | --- | --- | --- | --- |
| 1 | A practical modernization plan for a live product | Modernization | Playbook | Sequenced assessment, quick wins, migrations and rollback. |
| 2 | Where AI helps in operations — and where it does not | Automation | Opinion/guide | Human review, failure modes, data quality and cost control. |
| 3 | What agencies should ask a white-label development partner | Partners | Checklist | Scope, communication, ownership, confidentiality and handover. |

### Q2 2027 — Industry and decision content

| Priority | Working title | Service | Format | Notes |
| --- | --- | --- | --- | --- |
| 1 | Building a patient-facing site for a clinic without adding admin work | Custom software / portals | Industry guide | Only if the healthcare work can be described accurately and approved. |
| 2 | Reporting your team can trust: from spreadsheets to a dashboard | Dashboards | Guide | Data ownership, definitions, refresh cadence and access. |
| 3 | Integrations that fail silently — and how to prevent them | API integrations | Guide | Retries, alerts, logs and reconciliation. |

### Q3 2027 — Proof and refresh

- Publish any case studies approved by clients.
- Refresh the six original articles for accuracy, links and dates.
- Consolidate or redirect articles that overlap.
- Review which pages earn impressions but not clicks; rewrite titles and openings.
- Decide whether a glossary is justified by real search demand.

---

## 6. Article briefs

### Brief: How to connect the tools your business already uses

- **Reader:** operations or technical lead with two systems that should share data.
- **Promise:** a repeatable way to plan and test an integration without creating a new silent failure.
- **Outline:**
  1. What “integrated” actually means.
  2. Map the data before choosing a tool.
  3. Decide the source of truth.
  4. Handle duplicates, retries and failures.
  5. Test with real records.
  6. Document ownership and monitoring.
- **CTA:** API & system integrations service; discovery call.
- **Do not:** claim a specific tool is always best or quote integration pricing.

### Brief: Custom software or off-the-shelf

- **Reader:** founder or operations lead deciding whether to build.
- **Promise:** a decision framework that includes choosing not to build.
- **Outline:**
  1. Start with the process, not the software.
  2. Total cost of ownership.
  3. Fit, control and speed.
  4. When configuration is enough.
  5. When a small custom tool wins.
  6. How to scope the first version.
- **CTA:** Custom software development; discuss the project.
- **Do not:** pretend custom software is always cheaper or faster.

### Brief: What “done” means after launch

- **Reader:** buyer who has been burned by a launch that was abandoned.
- **Promise:** a clear post-launch checklist and a realistic ongoing model.
- **Outline:**
  1. Handover is part of delivery.
  2. Accounts, code, documentation and access.
  3. Monitoring and ownership.
  4. How a backlog is prioritised.
  5. Fixed-scope vs monthly development.
  6. Questions to ask before signing off.
- **CTA:** Maintenance & ongoing development.
- **Do not:** promise uptime percentages or response SLAs that are not contracted.

### Brief: Where AI helps in operations — and where it does not

- **Reader:** operations lead under pressure to “use AI”.
- **Promise:** a sober map of suitable and unsuitable tasks.
- **Outline:**
  1. Separate repetition from judgment.
  2. Good candidates: routing, drafting, extraction, summarisation.
  3. Poor candidates: ambiguous, high-stakes or undocumented decisions.
  4. Human-in-the-loop design.
  5. Data quality and failure handling.
  6. A small pilot that proves value.
- **CTA:** Automation audit; automation service.
- **Do not:** invent accuracy rates, savings or vendor comparisons.

---

## 7. Case-study roadmap

Case studies are the strongest proof, but only with client approval.

### Ready now

- Verdira — product engineering and modernization.
- Aussie Motor — marketplace and web application.
- VapePlanet — e-commerce and integrations.

### Pending

- Sunhub — drafted, deliberately unpublished. Publish only when the screenshot and every claim are approved. Do not add it to `CASE_ORDER` before then.

### Future case studies to request

- An automation engagement with a clear before/after process map.
- A dashboard or portal project with a defined user group.
- A maintenance retainer with a documented handover.
- An agency partnership described from the agency's perspective, with permission.

### Case-study standard

Each published study should answer:

1. What was the business problem?
2. What was in scope, and what was excluded?
3. What was built or changed?
4. What can the client confirm about the outcome?
5. What technology is safe to name?
6. What happens next / what would we do differently?

If the client cannot approve a claim, describe the work without the claim.

---

## 8. Distribution

- **Owned:** link every new article from its service page and two related articles; include it in the sitemap automatically.
- **Search:** submit the URL in Search Console after deploy; monitor impressions and queries.
- **LinkedIn:** the founder's profile is the only verified social channel. Share the idea, not a fabricated result.
- **Email:** mention new articles to past enquirers only where consent allows.
- **Partners:** send relevant pieces to agencies as useful material, not as a newsletter blast.
- **No paid amplification** until the landing page and tracking are proven.

---

## 9. Production workflow

1. **Choose the brief.** Confirm the service, reader and action.
2. **Check what is true.** Gather delivery notes, approved case details and real constraints.
3. **Draft in the block model.** Use `p`, `h2`, `ul`, `ol`, `callout` and `code` only.
4. **Add the metadata.** Title, description, category, read time, dates, service and related articles.
5. **Edit for claims.** Remove anything that implies a client, metric or certification that cannot be supported.
6. **Add links.** Service page, two related articles, relevant case study.
7. **Review on mobile.** Check heading order, code blocks and table-free layout.
8. **Run the build.** Lint, type-check and build before publishing.
9. **Deploy and inspect.** Confirm the route, canonical, schema and sitemap entry.

### Definition of done

- [ ] One clear intent and one primary phrase.
- [ ] Description matches the article.
- [ ] Dates are accurate.
- [ ] Author is the founder Person.
- [ ] Service and related links work.
- [ ] Sitemap includes the article.
- [ ] No unsupported claims.
- [ ] Readable at 360 px.
- [ ] One `<h1>` and logical headings.

---

## 10. Measures

Track monthly:

- Organic impressions and clicks by page (Search Console).
- Which articles lead to service-page views.
- Discovery-call bookings and form submissions attributed to content.
- Scroll or engagement only if consent-based analytics is available.
- Content refresh backlog and stale-date count.

Do not optimise for pageviews alone. A small number of qualified enquiries is the goal.

---

## 11. Content debt

| Item | Action | Owner decision |
| --- | --- | --- |
| Six articles share an October 2026 publication window | Keep dates honest; stagger future publishing | No |
| No API integration article | Write the brief above | No |
| No agency-partner article | Write the checklist brief | No |
| Sunhub unpublished | Wait for screenshot and claim approval | Yes |
| Case studies use minimal technology labels | Expand only with client approval | Yes |
| No newsletter or gated assets | Decide whether either supports the sales process | Yes |
| No video or visual process explainers | Consider only if sales calls repeatedly need them | Yes |
