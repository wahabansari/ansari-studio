import type { ArticleSlug } from "./articles";
import type { CaseSlug } from "./cases";

/**
 * The six services, in the order they appear everywhere on the site (menus, Home, Services hub,
 * footer, contact chips, structured data). Change a name or a line here and it changes everywhere.
 */
export type ServiceSlug =
  | "modernization"
  | "automation-ai"
  | "product-engineering"
  | "dashboards-portals"
  | "api-integrations"
  | "maintenance-retainer";

export type ServiceIconName = "refresh" | "bolt" | "code" | "layout" | "plug" | "shield";

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface Service {
  slug: ServiceSlug;
  href: string;
  /** Full name, as shown in menus, cards and headings. */
  name: string;
  icon: ServiceIconName;
  /** One line for the Home cards. */
  summary: string;
  /** Outcome headline on the Services hub card. */
  outcome: string;
  /** "You get" points on the Services hub card. */
  points: [string, string, string];
  /** Label on the hub card link. */
  cta: string;
  meta: { title: string; description: string };
  hero: { title: string; accent: string; lead: string };
  /** Who the service is for, shown as its own section on the service page. */
  audience: { lead: string; items: [string, string, string] };
  problems: [string, string, string];
  deliver: [
    { title: string; text: string },
    { title: string; text: string },
    { title: string; text: string },
    { title: string; text: string },
  ];
  /** Expected business outcomes, never numeric guarantees. */
  benefits: [string, string, string];
  steps: [string, string, string];
  /** Technologies named only where they are already used by the practice or its case studies. */
  technologies: string[];
  /** Case studies shown as proof, using the existing thumbnails. */
  proof: CaseSlug[];
  /** Related Insights articles. */
  articles: ArticleSlug[];
  faq: [ServiceFaq, ServiceFaq, ServiceFaq, ServiceFaq];
  /** Shown in place of case cards when a service has no case study of its own yet. */
  offer?: { label: string; title: string; text: string; cta: string; href: string };
  /** Closing call-to-action copy. */
  closing: { title: string; text: string };
}

export const SERVICES: Service[] = [
  {
    slug: "modernization",
    href: "/services/modernization",
    name: "Software & Product Modernization",
    icon: "refresh",
    summary: "Upgrade an existing app or SaaS product in safe steps — without a risky rewrite.",
    outcome: "Your existing software stops holding the business back.",
    points: ["SaaS product upgrades", "Faster pages", "No big-bang rewrite"],
    cta: "Explore software modernization",
    meta: {
      title: "Software Modernization & SaaS Product Upgrades",
      description:
        "Modernize an existing web app or SaaS product in safe steps: performance, React and Next.js upgrades, UI improvements and technical debt.",
    },
    hero: {
      title: "Modernize the software your business",
      accent: "already depends on.",
      lead: "Upgrade an ageing web app, improve a live SaaS product or fix the performance problems customers notice — measured first, then shipped in small steps while the product stays live.",
    },
    audience: {
      lead: "For companies with software that still works but is slowing the business down.",
      items: [
        "SaaS teams with an ageing frontend or admin panel",
        "Businesses running a legacy web application",
        "Teams that need extra engineering capacity",
      ],
    },
    problems: [
      "Pages are slow and customers notice.",
      "Small changes take weeks and break other things.",
      "It is hard to find developers for your old system.",
    ],
    deliver: [
      {
        title: "Performance and Core Web Vitals",
        text: "Measure what is slow, fix the biggest causes and show the before-and-after result.",
      },
      {
        title: "React and Next.js upgrades",
        text: "Move to a supported version or a modern framework in small, reversible releases.",
      },
      {
        title: "Frontend and UX improvements",
        text: "Rebuild the screens customers and staff use most, without replacing everything.",
      },
      {
        title: "Admin panels and technical debt",
        text: "Replace fragile code and slow admin screens with something maintainable.",
      },
    ],
    benefits: [
      "Pages that load faster and stay fast",
      "A codebase your next developer can work in",
      "Improvements shipped without downtime",
    ],
    steps: ["Measure and plan", "Fix and migrate in small releases", "Report before and after"],
    technologies: ["React", "Next.js", "TypeScript", "Core Web Vitals", "WordPress"],
    proof: ["aussiemotor", "verdira"],
    articles: [
      "signs-your-business-needs-software-modernization",
      "upgrade-existing-saas-product-without-rewrite",
      "when-to-upgrade-nextjs-application",
    ],
    faq: [
      {
        q: "Do we need a full rewrite?",
        a: "Usually not. Most of the gain comes from fixing the biggest causes of slowness and replacing the worst parts first, while everything else keeps working. If a rewrite is genuinely the better option, we say so and explain why.",
      },
      {
        q: "Will the site go offline?",
        a: "No. Work ships in small releases to the live product, and we plan each one so visitors do not notice. Where a change cannot be released safely in place, we agree a short maintenance window with you first.",
      },
      {
        q: "How do you prove the improvement?",
        a: "We measure before we start and again after each release, then give you a short written report with both results side by side. We report what the measurement shows, not a guaranteed percentage.",
      },
      {
        q: "Can you upgrade an existing React or Next.js app?",
        a: "Yes. We review the current version, dependencies and build setup, then plan the upgrade in steps that can be tested and rolled back. You get the plan and the estimate before work starts.",
      },
    ],
    closing: {
      title: "Is your software slowing you down?",
      text: "Tell us what is not working. You get a reply within one business day.",
    },
  },
  {
    slug: "automation-ai",
    href: "/services/automation-ai",
    name: "AI & Workflow Automation",
    icon: "bolt",
    summary: "Connect your tools so repetitive admin work happens reliably, with AI only where it helps.",
    outcome: "Your team stops doing repetitive work by hand.",
    points: ["Connected tools", "Automated follow-ups and reports", "Human approval where it matters"],
    cta: "Explore workflow automation",
    meta: {
      title: "AI & Business Workflow Automation Services",
      description:
        "Automate lead follow-up, CRM updates, reporting and document processing. Connect the tools you already use, with AI and human approval where needed.",
    },
    hero: {
      title: "Automate the work your team",
      accent: "should not be doing by hand.",
      lead: "We connect your forms, CRM, inbox and back-office tools so routine work happens reliably — with AI only where it genuinely helps and a person in the loop for decisions that matter.",
    },
    audience: {
      lead: "For operations-heavy teams who lose hours to repeatable administrative work.",
      items: [
        "Small and medium businesses with disconnected tools",
        "Operations, sales and admin teams",
        "Agencies managing repeating client workflows",
      ],
    },
    problems: [
      "Details are copied by hand from one tool to another.",
      "Enquiries wait in an inbox until someone has time.",
      "The same report is rebuilt every week.",
    ],
    deliver: [
      {
        title: "Lead capture and follow-up",
        text: "New enquiries recorded, routed and acknowledged without waiting for someone to remember.",
      },
      {
        title: "CRM and back-office sync",
        text: "Keep contacts, orders and records consistent across the tools you already use.",
      },
      {
        title: "Documents and reporting",
        text: "Extract data from documents and assemble recurring reports automatically.",
      },
      {
        title: "Human-in-the-loop approvals",
        text: "AI drafts, sorts or summarizes; a person approves anything that carries risk.",
      },
    ],
    benefits: [
      "Fewer manual handoffs and copy-paste steps",
      "Faster response to new enquiries",
      "A documented workflow your team can own",
    ],
    steps: [
      "Map how work moves today",
      "Build and test the workflow",
      "Hand over with documentation and optional upkeep",
    ],
    technologies: ["n8n", "Make", "Zapier", "REST APIs", "CRM platforms", "AI model APIs"],
    proof: [],
    articles: ["automate-lead-follow-up", "reduce-manual-work-in-business-operations"],
    offer: {
      label: "Start here",
      title: "Not sure what to automate first?",
      text: "An automation audit maps how work moves today and ends with a written, prioritized shortlist of what is worth automating — and what is not. We scope it in writing before any work starts.",
      cta: "Request an automation audit",
      href: "/automation-audit",
    },
    faq: [
      {
        q: "What can you automate?",
        a: "Anything that follows a repeatable pattern: capturing leads, updating records, sending replies and reminders, processing documents and building reports. We confirm what is worth automating before building anything.",
      },
      {
        q: "Do we need to change our tools?",
        a: "Usually not. We connect the tools you already use wherever they expose an API or a supported integration, so your team keeps working the way it does today with less manual effort.",
      },
      {
        q: "Will AI make decisions on its own?",
        a: "Not for anything important. We use AI to draft, classify or summarize, and keep a person in the loop for approvals, customer commitments and financial decisions.",
      },
      {
        q: "Who owns the workflows and data?",
        a: "You do. The workflows, documentation and accounts are yours, and your data stays in your own systems. We explain exactly how data moves in the written scope.",
      },
    ],
    closing: {
      title: "Ready to give your team hours back?",
      text: "Tell us what takes the most time. You get a reply within one business day.",
    },
  },
  {
    slug: "product-engineering",
    href: "/services/product-engineering",
    name: "Custom Software Development",
    icon: "code",
    summary: "New web applications, SaaS products and internal tools — planned clearly and built to last.",
    outcome: "Your product ships, and keeps shipping.",
    points: ["SaaS MVPs", "Custom web apps", "Code your next hire can read"],
    cta: "Explore custom software",
    meta: {
      title: "Custom Software Development & SaaS MVP Builds",
      description:
        "Custom web applications, SaaS MVPs and internal tools with a written scope, weekly progress and a clean handover. React, Next.js and TypeScript.",
    },
    hero: {
      title: "Custom software built around",
      accent: "how your business actually works.",
      lead: "Web applications, SaaS products and internal tools planned with a written scope, built in weekly steps and handed over with code you own.",
    },
    audience: {
      lead: "For businesses that need a product built properly, not squeezed into a template.",
      items: [
        "Founders validating a SaaS idea",
        "Companies replacing spreadsheet processes",
        "Teams that need an internal business tool",
      ],
    },
    problems: [
      "You have an idea but no team to build it.",
      "Your roadmap is stuck waiting for developers.",
      "Past projects ran over time or budget.",
    ],
    deliver: [
      { title: "SaaS MVPs", text: "The smallest version that proves the idea with real users." },
      {
        title: "Custom web applications",
        text: "Fast, accessible products built around your actual workflow.",
      },
      {
        title: "Internal business tools",
        text: "Replace manual trackers with software your team can rely on.",
      },
      {
        title: "Feature development",
        text: "Add capability to an existing product without breaking what already works.",
      },
    ],
    benefits: [
      "A working product in front of real users",
      "Clear scope and weekly visible progress",
      "Code, accounts and documentation you control",
    ],
    steps: ["Agree the scope", "Build in weekly steps you can review", "Launch and hand over"],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "REST APIs", "Tailwind CSS"],
    proof: ["silcolabs", "vapestore", "verdira"],
    articles: ["upgrade-existing-saas-product-without-rewrite"],
    faq: [
      {
        q: "What is an MVP?",
        a: "A minimum viable product is the smallest version of your product that real users can try. It proves the idea quickly, so you invest in what users actually need instead of guessing.",
      },
      {
        q: "Who owns the code?",
        a: "You do. The code, documentation and every account are handed over to you at the end of the project.",
      },
      {
        q: "Can you work on our existing product?",
        a: "Yes. We start with a short review of the code, then add features or fixes without breaking what already works. If a piece needs modernizing first, we say so before the work starts.",
      },
      {
        q: "Can you build from our designer's files?",
        a: "Yes. We build from your designer's files and flag anything that will not work well on small screens or for accessibility before it is built.",
      },
    ],
    closing: {
      title: "Have a product to build?",
      text: "Tell us what you want to ship. You get a reply within one business day.",
    },
  },
  {
    slug: "dashboards-portals",
    href: "/services/dashboards-portals",
    name: "Dashboards & Client Portals",
    icon: "layout",
    summary: "One secure place for your team and clients to see and act on the data that matters.",
    outcome: "Everyone works from the same numbers.",
    points: ["Admin panels", "Client portals", "Live reporting"],
    cta: "Explore dashboards and portals",
    meta: {
      title: "Custom Dashboards, Client Portals & Internal Tools",
      description:
        "Admin panels, client portals, reporting dashboards and internal tools connected to the data you already have. Secure access and clear interfaces.",
    },
    hero: {
      title: "Dashboards and client portals",
      accent: "your team will actually use.",
      lead: "Bring the numbers, records and updates people need into one secure place, connected to the systems you already use.",
    },
    audience: {
      lead: "For teams whose data lives in spreadsheets, inboxes and disconnected tools.",
      items: [
        "Service businesses sending recurring client updates",
        "Operations teams tracking work and approvals",
        "SaaS companies that need a better admin panel",
      ],
    },
    problems: [
      "Your numbers live in five different spreadsheets.",
      "Clients email you for every status update.",
      "Your current admin panel is slow or disliked.",
    ],
    deliver: [
      { title: "Admin panels", text: "Manage records, users and content without touching code." },
      {
        title: "Client portals",
        text: "A secure place where clients sign in to see their own information.",
      },
      { title: "Reporting dashboards", text: "Live figures that replace the weekly spreadsheet." },
      {
        title: "Internal tools",
        text: "Approvals, scheduling and stock tracking built around how you work.",
      },
    ],
    benefits: [
      "One source of truth for routine questions",
      "Less time spent assembling reports",
      "Clients and staff self-serving the basics",
    ],
    steps: ["List the questions each role asks", "Connect the data", "Build and test with your team"],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "REST APIs",
      "Role-based access",
      "Charts and reporting",
    ],
    proof: ["digestivecare", "verdira"],
    articles: ["custom-dashboard-vs-spreadsheet-reporting"],
    faq: [
      {
        q: "What is a client portal?",
        a: "A private area of your website where clients sign in to see their own documents, orders or progress, instead of emailing you for updates.",
      },
      {
        q: "Can it connect to our existing data?",
        a: "Yes. We connect to the systems and spreadsheets you already use, so nobody has to re-enter anything twice.",
      },
      {
        q: "Can you redesign our current dashboard?",
        a: "Yes. We start by asking what each person needs to see and do, then rebuild the screens around those questions instead of decorating the old layout.",
      },
      {
        q: "Is client data secure?",
        a: "Access is checked on the server, each client sees only their own information, and sign-in follows current good practice. We explain exactly how in the written scope.",
      },
    ],
    closing: {
      title: "Need one place for your data?",
      text: "Tell us who needs to see what. You get a reply within one business day.",
    },
  },
  {
    slug: "api-integrations",
    href: "/services/api-integrations",
    name: "API & System Integrations",
    icon: "plug",
    summary: "Connect the CRM, storefront, finance and internal tools your business already runs on.",
    outcome: "Data enters once and reaches every system that needs it.",
    points: ["CRM and storefront sync", "Legacy system connections", "Monitoring and retries"],
    cta: "Explore API integrations",
    meta: {
      title: "API Integration Services for Business Systems",
      description:
        "Connect CRMs, storefronts, finance systems and internal tools with documented API integrations, webhooks and reliable retry handling.",
    },
    hero: {
      title: "Connect the systems your business",
      accent: "already runs on.",
      lead: "Replace copy-and-paste between CRMs, finance tools, storefronts and internal apps with documented, monitored API integrations that fail visibly instead of silently.",
    },
    audience: {
      lead: "For companies whose tools work well alone but not together.",
      items: [
        "Sales and CRM teams re-entering the same data",
        "E-commerce and finance operations",
        "Businesses with a custom internal system and off-the-shelf tools",
      ],
    },
    problems: [
      "The same customer data is typed into three systems.",
      "Orders or invoices are reconciled by hand.",
      "A failed sync is discovered days later.",
    ],
    deliver: [
      {
        title: "CRM and marketing integrations",
        text: "Connect forms, CRM, email and analytics so data is entered once.",
      },
      {
        title: "Payments and e-commerce",
        text: "Connect checkout, orders and finance systems reliably.",
      },
      {
        title: "Legacy system connections",
        text: "Put a documented API in front of software that was never designed to connect.",
      },
      {
        title: "Monitoring and retries",
        text: "Failed syncs are logged, retried and visible instead of silently lost.",
      },
    ],
    benefits: [
      "Data entered once and shared reliably",
      "Fewer silent failures and manual reconciliations",
      "A clear map of how your systems connect",
    ],
    steps: ["Map the data and systems", "Build and test the connection", "Monitor, document and hand over"],
    technologies: ["REST APIs", "Webhooks", "OAuth", "n8n", "Make", "Zapier"],
    proof: ["vapestore", "digestivecare"],
    articles: ["automate-lead-follow-up"],
    faq: [
      {
        q: "What if our software has no API?",
        a: "Some systems expose a documented API, some support webhooks, and some only offer file imports. We review what is possible before quoting and tell you when a clean integration is not realistic.",
      },
      {
        q: "Do you replace our current tools?",
        a: "No. The aim is to keep the tools that already work and make them exchange data reliably. Replacing a system is a separate decision with its own costs.",
      },
      {
        q: "What happens when a sync fails?",
        a: "Failures are logged and retried where it is safe to do so. Anything that still fails is surfaced to a person, so problems do not sit unnoticed in a queue.",
      },
      {
        q: "Who owns the integration?",
        a: "You do. The code, credentials, documentation and monitoring setup are handed over to you, and we explain how to change or disable each connection.",
      },
    ],
    closing: {
      title: "Tired of copying data between tools?",
      text: "Tell us which systems need to talk. You get a reply within one business day.",
    },
  },
  {
    slug: "maintenance-retainer",
    href: "/services/maintenance-retainer",
    name: "Maintenance & Ongoing Development",
    icon: "shield",
    summary: "Updates, fixes and improvements every month from a team that already knows your code.",
    outcome: "Your software stays healthy while you run the business.",
    points: ["Updates and security", "Fixes and small features", "A monthly report"],
    cta: "Explore ongoing development",
    meta: {
      title: "Software Maintenance & Development Retainer",
      description:
        "Monthly updates, security patches, monitoring, fixes and small features from a team that knows your code. Priorities you set, a report every month.",
    },
    hero: {
      title: "Ongoing development from a team",
      accent: "that already knows your code.",
      lead: "Updates, fixes, monitoring and small improvements every month, with priorities you set and a clear monthly report.",
    },
    audience: {
      lead: "For companies with a live product and no in-house engineering team.",
      items: [
        "Founders past the launch stage",
        "Teams between engineering hires",
        "Businesses inheriting an undocumented codebase",
      ],
    },
    problems: [
      "You have a live product but no in-house developer.",
      "Every new freelancer has to relearn your code.",
      "Updates and security patches keep slipping.",
    ],
    deliver: [
      {
        title: "Updates and security",
        text: "Dependencies patched and platforms kept on supported versions.",
      },
      {
        title: "Monitoring",
        text: "We notice when something breaks, ideally before your customers do.",
      },
      {
        title: "Bug fixes and small features",
        text: "Worked through in the order you set.",
      },
      {
        title: "A monthly report",
        text: "What shipped, what is next and what needs your decision.",
      },
    ],
    benefits: [
      "A supported, monitored product",
      "A predictable stream of improvements",
      "Continuity when your team changes",
    ],
    steps: ["Agree the month's priorities", "Work through them, urgent first", "Report what shipped"],
    technologies: ["Next.js", "React", "WordPress", "Monitoring", "CI/CD", "Security updates"],
    proof: ["talhaestate", "cennetsol"],
    articles: ["when-to-upgrade-nextjs-application"],
    faq: [
      {
        q: "What is included?",
        a: "Updates, security patches, monitoring, bug fixes and small improvements. Larger pieces of work are scoped separately, in writing, before they start.",
      },
      {
        q: "How are hours and pricing agreed?",
        a: "Per client, in writing, before we start. We agree what you need each month and review it as your needs change. There is no long lock-in.",
      },
      {
        q: "How fast do you respond to urgent issues?",
        a: "Urgent issues go to the front of the queue. We agree the response expectations with you in writing at the start, so both sides know what to expect.",
      },
      {
        q: "Can we stop at any time?",
        a: "Yes. There is no long lock-in, and you keep the code, documentation and accounts throughout.",
      },
    ],
    closing: {
      title: "Want someone who knows your code?",
      text: "Tell us about your product. You get a reply within one business day.",
    },
  },
];

export const SERVICE_BY_SLUG = Object.fromEntries(
  SERVICES.map((service) => [service.slug, service]),
) as Record<ServiceSlug, Service>;
