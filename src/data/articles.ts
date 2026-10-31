import type { ServiceSlug } from "./services";

/**
 * Insights articles.
 *
 * Every article is written in plain, practical language and describes work the practice actually
 * does. There are no invented statistics, survey results, client names or guaranteed outcomes.
 * Dates are the dates the article was added to this repository.
 */
export type ArticleSlug =
  | "automate-lead-follow-up"
  | "signs-your-business-needs-software-modernization"
  | "upgrade-existing-saas-product-without-rewrite"
  | "custom-dashboard-vs-spreadsheet-reporting"
  | "when-to-upgrade-nextjs-application"
  | "reduce-manual-work-in-business-operations";

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; title: string; text: string }
  | { type: "code"; text: string; caption?: string };

export interface Article {
  slug: ArticleSlug;
  /** Card and browser title. */
  title: string;
  /** H1 first half. */
  headline: string;
  /** H1 accent half. */
  accent: string;
  /** Meta description and card excerpt. */
  description: string;
  category: string;
  readMinutes: number;
  datePublished: string;
  dateModified: string;
  /** The service this article supports. */
  service: ServiceSlug;
  related: ArticleSlug[];
  blocks: ArticleBlock[];
}

export const ARTICLES: Article[] = [
  {
    slug: "automate-lead-follow-up",
    title: "How to automate lead follow-up between your website, CRM and inbox",
    headline: "How to automate lead follow-up",
    accent: "between your website, CRM and inbox.",
    description:
      "A step-by-step workflow that replies to every new enquiry, creates the contact in your CRM and tells the right person, so no lead waits in an inbox.",
    category: "Automation",
    readMinutes: 8,
    datePublished: "2026-10-20",
    dateModified: "2026-10-30",
    service: "automation-ai",
    related: ["reduce-manual-work-in-business-operations", "custom-dashboard-vs-spreadsheet-reporting"],
    blocks: [
      {
        type: "p",
        text: "If enquiries reach your inbox but follow-up depends on someone remembering, a small automated workflow can handle the first steps. The goal is not to remove people from sales. It is to make sure a new enquiry is recorded, acknowledged and owned before anyone has to remember to do it.",
      },
      { type: "h2", text: "What the workflow should do", id: "what-it-does" },
      {
        type: "p",
        text: "A useful lead workflow has three jobs: capture the enquiry, create or update the contact in your CRM, and tell the right person. Anything beyond that should be added only when the first three are reliable.",
      },
      {
        type: "ul",
        items: [
          "Capture every enquiry from the website form, including the page it came from.",
          "Create or update one CRM contact without duplicating an existing record.",
          "Send a short acknowledgement that sets an honest expectation.",
          "Notify the owner in the place they already check, such as email or team chat.",
          "Record failures somewhere a person will see them.",
        ],
      },
      { type: "h2", text: "What you need before you start", id: "need" },
      {
        type: "ul",
        items: [
          "A workflow platform such as n8n, Make or Zapier.",
          "A CRM with a way to create contacts through its API or a supported integration.",
          "A form that can send its entries to another system, or a developer who can add that.",
          "One person who owns the workflow after launch.",
        ],
      },
      {
        type: "callout",
        title: "Start with one form",
        text: "Do not connect every lead source at once. One form, one CRM and one notification path is enough to prove the workflow. Add sources only after it has run cleanly for a week.",
      },
      { type: "h2", text: "Step 1: catch the enquiry", id: "step1" },
      {
        type: "p",
        text: "Create a webhook trigger in your workflow platform and paste its address into the form settings. Submit a real test entry so the workflow can see every field the form sends. Save the payload as a reference: field names are where most integrations break.",
      },
      { type: "h2", text: "Step 2: create or update the contact", id: "step2" },
      {
        type: "p",
        text: "Use a create-or-update step keyed on email address, not on name. People reuse names and change phone numbers; email is the most stable identifier you have. Map only the fields you will actually use, and set a lead owner so the record does not sit unassigned.",
      },
      {
        type: "code",
        text: "CRM email        ← form: email\nCRM first name   ← form: name\nCRM company      ← form: company\nCRM source       ← form: page path\nCRM note         ← form: message\nCRM owner        ← assigned by territory or round-robin",
        caption: "A minimal field map. Add fields only when someone will act on them.",
      },
      { type: "h2", text: "Step 3: reply and notify", id: "step3" },
      {
        type: "p",
        text: "Send an acknowledgement that says what happens next and when. Avoid promising a specific outcome or a response time the team cannot keep. Then post a message to the owner with the contact link, the enquiry summary and the source page.",
      },
      { type: "h2", text: "Handle failures before launch", id: "failures" },
      {
        type: "p",
        text: "Assume the CRM will be unavailable at some point. Decide what should happen: retry a few times, then alert a person. A workflow that silently drops an enquiry is worse than no workflow, because the team believes every lead has been captured.",
      },
      {
        type: "ul",
        items: [
          "Log every failed run with the payload and the error.",
          "Retry safe operations such as creating a contact; do not retry a payment or a duplicate email blindly.",
          "Send failures to a shared inbox or channel, not to one person's private messages.",
          "Keep a way to replay a failed enquiry after the problem is fixed.",
        ],
      },
      { type: "h2", text: "Test with realistic data", id: "test" },
      {
        type: "p",
        text: "Run at least three submissions: a complete enquiry, one with a missing optional field, and one with an email address that already exists in the CRM. Check the contact, the acknowledgement and the notification for each. Then ask someone outside the project to submit the form without telling you, and confirm it appears.",
      },
      {
        type: "callout",
        title: "Keep a person in the loop",
        text: "Automate the recording and the acknowledgement, not the judgement. A person should still decide whether the lead is a fit, what to say and when to follow up.",
      },
      { type: "h2", text: "What to measure after launch", id: "measure" },
      {
        type: "p",
        text: "Track four things: enquiries received, contacts created, notifications delivered and failed runs. If the numbers diverge, something is being dropped. Review the workflow monthly for the first few months, then quarterly, and update it when your form or CRM changes.",
      },
    ],
  },
  {
    slug: "signs-your-business-needs-software-modernization",
    title: "Seven signs your business has outgrown its software",
    headline: "Seven signs your business",
    accent: "has outgrown its software.",
    description:
      "Slow pages, fragile releases and tools nobody wants to touch are symptoms. Here is how to tell whether you need modernization, targeted fixes or a rewrite.",
    category: "Modernization",
    readMinutes: 9,
    datePublished: "2026-10-24",
    dateModified: "2026-10-24",
    service: "modernization",
    related: ["upgrade-existing-saas-product-without-rewrite", "when-to-upgrade-nextjs-application"],
    blocks: [
      {
        type: "p",
        text: "Software rarely fails all at once. It gets slower, harder to change and more expensive to maintain, while the business keeps working around it. By the time the problem is obvious, the team has usually built several manual processes to compensate.",
      },
      {
        type: "p",
        text: "Modernization is not the same as a rewrite. The useful question is not \"is our software old?\" but \"which parts are costing us money or opportunity, and what is the smallest change that fixes them?\"",
      },
      { type: "h2", text: "1. Small changes take weeks", id: "small-changes" },
      {
        type: "p",
        text: "A text change, a new field or a simple page should not require a release train. When every change needs a specialist, a full regression test and a quiet weekend, the codebase is telling you something. The cost is not only engineering time; it is the features you stop asking for because the process is exhausting.",
      },
      { type: "h2", text: "2. Releases are frightening", id: "releases" },
      {
        type: "p",
        text: "If deploying means hoping nothing breaks, the problem is usually missing tests, manual steps or tightly coupled code. Modernization can start with the release process: automated checks, smaller releases and a way to roll back. That work pays for itself before any visual redesign.",
      },
      { type: "h2", text: "3. Performance is visibly hurting", id: "performance" },
      {
        type: "p",
        text: "Slow pages affect customers directly. Before changing the framework, measure what is actually slow: server response, images, JavaScript, third-party scripts or database queries. A performance audit often finds that the biggest gains come from a handful of fixes, not a rebuild.",
      },
      {
        type: "callout",
        title: "Measure before you decide",
        text: "Record the current load time, Core Web Vitals and the slowest user journeys. Without a baseline, nobody can tell whether the modernization worked.",
      },
      { type: "h2", text: "4. Only one person understands it", id: "bus-factor" },
      {
        type: "p",
        text: "When one developer or agency holds all the knowledge, you are exposed to their availability and their pricing. Documentation, readable code and a proper handover are part of modernization, not an optional extra at the end.",
      },
      { type: "h2", text: "5. The admin panel has become the business", id: "admin" },
      {
        type: "p",
        text: "Internal tools often grow from a quick screen into the place where orders, approvals and customer records live. If staff work around the tool with spreadsheets, or avoid it because it is slow, the internal interface deserves the same care as the customer-facing product.",
      },
      { type: "h2", text: "6. Security updates keep slipping", id: "security" },
      {
        type: "p",
        text: "Unsupported frameworks and unpatched dependencies are a business risk, not just a technical one. You do not need to upgrade everything at once, but you do need a plan for the parts that no longer receive security fixes.",
      },
      { type: "h2", text: "7. The roadmap is blocked by the platform", id: "roadmap" },
      {
        type: "p",
        text: "If every new idea turns into a platform project, the software is setting the strategy instead of supporting it. This is the strongest signal that targeted modernization should move up the list.",
      },
      { type: "h2", text: "What to do first", id: "first" },
      {
        type: "ol",
        items: [
          "Write down the three business problems the software causes, in plain language.",
          "Measure performance and release frequency before changing anything.",
          "Identify the smallest area that causes the most pain, such as checkout, onboarding or the admin panel.",
          "Decide whether that area can be improved in place or needs to be replaced behind a stable interface.",
          "Set a baseline and a review date so the improvement can be checked.",
        ],
      },
      { type: "h2", text: "When a rewrite is the right answer", id: "rewrite" },
      {
        type: "p",
        text: "A rewrite can be justified when the current platform is unsupported, the data model cannot represent the business, or the cost of incremental change genuinely exceeds replacement. Even then, the safest approach is usually to replace one slice at a time while the old system keeps running, not to freeze the business for a year.",
      },
      {
        type: "p",
        text: "If a supplier recommends a full rewrite before measuring anything, ask what evidence supports that decision. A good modernization plan starts with the business problem, not with a preferred framework.",
      },
    ],
  },
  {
    slug: "upgrade-existing-saas-product-without-rewrite",
    title: "How to upgrade an existing SaaS product without a rewrite",
    headline: "How to upgrade an existing SaaS product",
    accent: "without a rewrite.",
    description:
      "A practical sequence for improving a live SaaS product: measure, isolate the worst parts, upgrade in slices and keep shipping while you do it.",
    category: "Product",
    readMinutes: 9,
    datePublished: "2026-10-26",
    dateModified: "2026-10-26",
    service: "modernization",
    related: [
      "signs-your-business-needs-software-modernization",
      "when-to-upgrade-nextjs-application",
    ],
    blocks: [
      {
        type: "p",
        text: "A live SaaS product is a business with customers on it. A rewrite promises a clean future but stops the product from improving while it happens. For most growing companies, a sequence of small upgrades delivers more value with less risk.",
      },
      {
        type: "p",
        text: "This is not an argument against ever rewriting. It is an argument for knowing which parts actually need replacing, and for keeping the product live while you find out.",
      },
      { type: "h2", text: "Start with the cost of doing nothing", id: "cost" },
      {
        type: "p",
        text: "List what the current product prevents: features you cannot ship, customers you cannot onboard, support tickets you keep answering, and engineering time spent on workarounds. Put a rough cost or delay against each. This list becomes the justification for the work and the measure of whether it succeeded.",
      },
      { type: "h2", text: "Separate the product from the platform", id: "separate" },
      {
        type: "p",
        text: "Customers care about the experience and the data. They do not care which framework renders a settings page. That distinction lets you replace platform pieces behind a stable interface without changing what customers see.",
      },
      {
        type: "ul",
        items: [
          "Keep URLs, authentication and data contracts stable where possible.",
          "Replace one surface at a time: marketing pages, then onboarding, then a dashboard area.",
          "Put a boundary around old code so new code does not keep depending on it.",
          "Measure each slice before and after instead of waiting for a big-bang result.",
        ],
      },
      { type: "h2", text: "Fix performance before the framework", id: "performance" },
      {
        type: "p",
        text: "A framework upgrade will not fix a page that loads a large image, three tracking scripts and an unnecessary data query. Profile first. The fixes are often unglamorous: compress images, split bundles, remove unused dependencies, cache the right things and stop rendering work the user cannot see.",
      },
      {
        type: "callout",
        title: "One measurable target at a time",
        text: "Choose a single journey, such as sign-up or the main dashboard, and define what better means. \"Faster\" is not a target; \"the dashboard is usable on a mid-range phone\" is.",
      },
      { type: "h2", text: "Use a strangler approach", id: "strangler" },
      {
        type: "p",
        text: "The strangler pattern means new code grows around the old system while the old system keeps serving traffic. Route one area at a time to the new implementation. When it is stable, remove the old route. This keeps releases small and gives you a rollback path.",
      },
      {
        type: "ol",
        items: [
          "Identify a self-contained area with clear inputs and outputs.",
          "Build the replacement behind the existing route or API.",
          "Run both versions in parallel where the risk justifies it.",
          "Move traffic gradually and watch errors and performance.",
          "Delete the old code only when the new path is proven.",
        ],
      },
      { type: "h2", text: "Upgrade dependencies in a planned order", id: "dependencies" },
      {
        type: "p",
        text: "Framework, language and library upgrades should be sequenced, not bundled into one heroic release. Start with the pieces that are unsupported or have known security issues. Add tests around the behaviour you cannot afford to break before you change the version underneath it.",
      },
      { type: "h2", text: "Keep the team shipping", id: "shipping" },
      {
        type: "p",
        text: "A modernization project that pauses all feature work becomes a political problem. Reserve part of each cycle for upgrades, keep a small stream of customer improvements flowing, and report progress in business terms: what is faster, what is safer, what can now be changed.",
      },
      { type: "h2", text: "Know when to stop", id: "stop" },
      {
        type: "p",
        text: "Incremental modernization is not an excuse to preserve a system that genuinely cannot support the business. Set a review point. If the same area keeps consuming disproportionate effort after several slices, the evidence now supports a larger replacement decision.",
      },
      {
        type: "p",
        text: "The practical rule: replace what blocks the business, improve what customers feel, and leave the rest alone until there is a reason to touch it.",
      },
    ],
  },
  {
    slug: "custom-dashboard-vs-spreadsheet-reporting",
    title: "Custom dashboard or spreadsheet? How to choose your reporting",
    headline: "Custom dashboard or spreadsheet?",
    accent: "How to choose your reporting.",
    description:
      "Spreadsheets are not the enemy. Here is when they are the right tool, when they become a risk, and what a custom dashboard should replace.",
    category: "Data",
    readMinutes: 7,
    datePublished: "2026-10-28",
    dateModified: "2026-10-28",
    service: "dashboards-portals",
    related: ["reduce-manual-work-in-business-operations", "automate-lead-follow-up"],
    blocks: [
      {
        type: "p",
        text: "Every dashboard conversation starts with someone frustrated by spreadsheets. But a spreadsheet is often the right tool: it is flexible, familiar and cheap. The problem starts when a spreadsheet becomes the system of record for work that other people depend on.",
      },
      { type: "h2", text: "Where spreadsheets work well", id: "strengths" },
      {
        type: "ul",
        items: [
          "One-off analysis and exploration.",
          "Small teams with a single owner for the data.",
          "Planning and modelling where the rules are still changing.",
          "Imports and exports between systems.",
        ],
      },
      { type: "h2", text: "Where they start to fail", id: "failures" },
      {
        type: "p",
        text: "The warning signs are rarely about the spreadsheet itself. They are about how many people touch it and what happens when they do.",
      },
      {
        type: "ul",
        items: [
          "More than one person edits the same file, and nobody is sure which version is current.",
          "A formula is understood by one person and breaks when they leave.",
          "The same numbers are copied into a second sheet for a different audience.",
          "Someone spends hours every week rebuilding the same report.",
          "A client or manager asks for a status update that already exists in the data.",
          "Access is controlled by emailing the file around.",
        ],
      },
      { type: "h2", text: "What a custom dashboard is actually for", id: "purpose" },
      {
        type: "p",
        text: "A dashboard is not a prettier spreadsheet. It is a controlled view of data that already exists. The value comes from four things: one source of truth, access rules, a repeatable refresh, and an interface built around the questions people actually ask.",
      },
      {
        type: "callout",
        title: "Ask the question first",
        text: "Write down the five questions each role asks every week. If a dashboard does not answer one of them, it is decoration.",
      },
      { type: "h2", text: "The hybrid option", id: "hybrid" },
      {
        type: "p",
        text: "You do not have to choose one or the other. A common pattern is a small operational database or connected data source, a dashboard for the recurring questions, and a spreadsheet export for analysis. That keeps the spreadsheet where it is strong and removes it from the critical path.",
      },
      { type: "h2", text: "A sensible first build", id: "first-build" },
      {
        type: "ol",
        items: [
          "Pick one recurring report that currently takes manual effort.",
          "List every data source it uses and who owns each one.",
          "Define the access rules before designing the screens.",
          "Build the smallest view that answers the recurring question.",
          "Run it alongside the spreadsheet for a few cycles and compare.",
          "Retire the manual process only when the dashboard is trusted.",
        ],
      },
      { type: "h2", text: "What it costs beyond the build", id: "costs" },
      {
        type: "p",
        text: "Any dashboard needs an owner, a data refresh plan and a way to handle bad data. Those are operational commitments, not features. If nobody will own the numbers, a dashboard can create more confusion than a spreadsheet because it looks authoritative.",
      },
      {
        type: "p",
        text: "The right question is not \"dashboard or spreadsheet?\" It is \"which decisions need a shared, reliable view, and what is the lightest tool that provides it?\"",
      },
    ],
  },
  {
    slug: "when-to-upgrade-nextjs-application",
    title: "When should you upgrade your Next.js application?",
    headline: "When should you upgrade",
    accent: "your Next.js application?",
    description:
      "A practical way to decide whether to upgrade Next.js now, wait, or modernize a specific area first — including how to plan the work without stopping the product.",
    category: "Engineering",
    readMinutes: 8,
    datePublished: "2026-10-29",
    dateModified: "2026-10-29",
    service: "modernization",
    related: [
      "upgrade-existing-saas-product-without-rewrite",
      "signs-your-business-needs-software-modernization",
    ],
    blocks: [
      {
        type: "p",
        text: "Next.js releases move quickly, and every major version brings deprecations. The decision to upgrade should not be driven by a version number alone. It should be driven by support, security, the features you need and the cost of waiting.",
      },
      { type: "h2", text: "Signals that the upgrade is due", id: "signals" },
      {
        type: "ul",
        items: [
          "The version no longer receives security fixes.",
          "A dependency you need requires a newer Next.js or React version.",
          "You are fighting the framework to do something it now supports natively.",
          "Build or deploy times have grown because of legacy configuration.",
          "New engineers cannot get the project running without tribal knowledge.",
        ],
      },
      { type: "h2", text: "What waiting actually costs", id: "waiting" },
      {
        type: "p",
        text: "Waiting is sometimes correct. If the product is stable, the version is supported and the team has more valuable work, an upgrade can wait. The cost appears when the upgrade becomes urgent: security pressure, a blocked feature or a dependency that will not install. At that point, you have less time and fewer options.",
      },
      {
        type: "callout",
        title: "Make it a planned task",
        text: "Put an upgrade review on the calendar before it becomes an emergency. A small amount of planned maintenance is cheaper than an unplanned migration under pressure.",
      },
      { type: "h2", text: "Audit before you upgrade", id: "audit" },
      {
        type: "p",
        text: "Start with the current state: framework and React versions, package manager, build tool, hosting target, routing conventions, data fetching patterns and custom configuration. Note anything that depends on deprecated behaviour. The output should be a short written plan, not a branch full of speculative changes.",
      },
      {
        type: "ol",
        items: [
          "Record the exact versions and how the app is built and deployed.",
          "List custom configuration, middleware and build scripts.",
          "Identify pages or routes that rely on deprecated APIs.",
          "Check third-party packages for compatible versions.",
          "Add or repair tests around the most important user journeys.",
          "Upgrade in a branch and deploy to a preview environment.",
        ],
      },
      { type: "h2", text: "Upgrade in slices", id: "slices" },
      {
        type: "p",
        text: "A single release that changes the framework, routing, styling and data layer at once is difficult to debug. Separate the work: framework and React first, then the code changes required by deprecations, then any optional modernization. Keep each step deployable.",
      },
      { type: "h2", text: "Watch these areas", id: "watch" },
      {
        type: "ul",
        items: [
          "Data fetching and caching behaviour: confirm each page still gets the freshness it needs.",
          "Metadata and SEO: check titles, canonicals and structured data after the change.",
          "Images and fonts: confirm optimisation still runs in production, not just locally.",
          "Forms and API routes: test validation and error handling, not only the happy path.",
          "Accessibility: re-test keyboard navigation and focus behaviour.",
        ],
      },
      { type: "h2", text: "When an upgrade becomes a modernization project", id: "modernization" },
      {
        type: "p",
        text: "If the app also has performance problems, an outdated design or a fragile admin area, an upgrade is a good moment to fix one of them — not all of them. Choose the area with the clearest business value and leave the rest for a later slice. Mixing a framework upgrade with a full redesign makes it hard to tell what caused a regression.",
      },
      { type: "h2", text: "A realistic plan", id: "plan" },
      {
        type: "p",
        text: "For most small and mid-sized products, the work is a series of small releases over a few weeks, with a preview environment and a rollback path. The exact effort depends on how much custom configuration and deprecated behaviour the app contains. That is why the audit comes first.",
      },
      {
        type: "p",
        text: "The upgrade is successful when the product behaves the same or better, the deployment is stable, and the team can keep shipping. A newer version number on its own is not the outcome.",
      },
    ],
  },
  {
    slug: "reduce-manual-work-in-business-operations",
    title: "How to reduce manual work in business operations",
    headline: "How to reduce manual work",
    accent: "in business operations.",
    description:
      "A repeatable method for finding, ranking and automating repetitive admin work without disrupting the processes your team depends on.",
    category: "Operations",
    readMinutes: 8,
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    service: "automation-ai",
    related: ["automate-lead-follow-up", "custom-dashboard-vs-spreadsheet-reporting"],
    blocks: [
      {
        type: "p",
        text: "Most operations teams know they are doing too much manual work. What they usually lack is a way to decide which work to fix first. Automating the loudest complaint is not always the best use of time; the most valuable target is the task that is frequent, rule-based and costly when it goes wrong.",
      },
      { type: "h2", text: "1. List the work, not the tools", id: "list" },
      {
        type: "p",
        text: "Start with the tasks people actually perform during a normal week: copying enquiries into the CRM, checking a payment, preparing a report, chasing a missing document, updating a client. Write each one as a verb and a result. \"Update the CRM\" is too vague; \"create a contact from each website enquiry\" is testable.",
      },
      { type: "h2", text: "2. Measure frequency and cost", id: "measure" },
      {
        type: "p",
        text: "For each task, estimate how often it happens and how long it takes. You do not need perfect data. A rough weekly count and a rough duration are enough to rank the list. Add a risk column for what happens when the task is missed or done incorrectly.",
      },
      {
        type: "callout",
        title: "Look for the handoffs",
        text: "The most expensive manual work often sits between two systems, not inside one. Someone downloads a file, renames it, uploads it somewhere else and emails a colleague. That is a workflow problem, not a training problem.",
      },
      { type: "h2", text: "3. Rank by value and difficulty", id: "rank" },
      {
        type: "p",
        text: "A simple matrix works: high frequency and low complexity first. These are the quick wins that build trust in automation. High-risk tasks, such as payments or customer commitments, need more design and human approval, so they come later even when the volume is high.",
      },
      {
        type: "ul",
        items: [
          "Quick win: new enquiries recorded in the CRM automatically.",
          "Quick win: a recurring report assembled from data that already exists.",
          "Medium: documents checked and routed for approval.",
          "Higher risk: pricing, refunds or customer-facing commitments.",
        ],
      },
      { type: "h2", text: "4. Map the current process honestly", id: "map" },
      {
        type: "p",
        text: "Write down the real process, including the exceptions. Who does what, in which tool, with which file, and what happens when something is missing? Automation built on the documented process rather than the real one will fail at the first exception.",
      },
      { type: "h2", text: "5. Keep a person at the decision point", id: "human" },
      {
        type: "p",
        text: "Automate the movement and transformation of data. Keep a person responsible for judgement: approving a refund, accepting a contract, deciding a lead is qualified. A human-in-the-loop step is not a failure of automation; it is how you make automation safe enough to use.",
      },
      { type: "h2", text: "6. Run it in parallel first", id: "parallel" },
      {
        type: "p",
        text: "For the first few cycles, let the automated workflow run alongside the manual process. Compare the output. This catches mapping errors, duplicate records and edge cases before anyone relies on the result. It also gives the team confidence that the new process is not quietly losing work.",
      },
      { type: "h2", text: "7. Document and assign ownership", id: "ownership" },
      {
        type: "p",
        text: "A workflow without an owner decays. Record what it does, which systems it touches, what to do when it fails and who can change it. Review it when a tool, form or process changes. The documentation is part of the deliverable, not an afterthought.",
      },
      { type: "h2", text: "A realistic first project", id: "first-project" },
      {
        type: "p",
        text: "Choose one recurring task with a clear trigger and a clear result. Build it, test it with real data, run it in parallel, then switch it on. Do not start with a company-wide transformation. One reliable workflow that saves a few hours a week is a better foundation than a grand plan that never ships.",
      },
      {
        type: "p",
        text: "If you are not sure where to start, an automation audit is simply this exercise done with someone who has seen the patterns before: list the work, measure it, rank it, and agree the first workflow in writing.",
      },
    ],
  },
];

export const ARTICLE_BY_SLUG = Object.fromEntries(
  ARTICLES.map((article) => [article.slug, article]),
) as Record<ArticleSlug, Article>;

/** Newest first, for the Insights index and related-article lists. */
export const ARTICLES_NEWEST_FIRST = [...ARTICLES].sort((a, b) =>
  b.datePublished.localeCompare(a.datePublished),
);

export function isArticleSlug(value: string): value is ArticleSlug {
  return value in ARTICLE_BY_SLUG;
}

/** Two or three related articles that are not the current one. */
export function relatedArticles(slug: ArticleSlug): Article[] {
  return ARTICLE_BY_SLUG[slug].related
    .filter((related) => related !== slug)
    .map((related) => ARTICLE_BY_SLUG[related]);
}

/** Articles that support a given service. */
export function articlesForService(service: ServiceSlug): Article[] {
  return ARTICLES.filter((article) => article.service === service);
}

/** Canonical path for an article. */
export function articleHref(slug: ArticleSlug): string {
  return `/insights/${slug}`;
}

const ARTICLE_DATE = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

/** "20 October 2026" — the format used beside every byline. */
export function formatArticleDate(isoDate: string): string {
  return ARTICLE_DATE.format(new Date(`${isoDate}T00:00:00Z`));
}
