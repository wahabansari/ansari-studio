import type { CaseSlug } from "./cases";

/**
 * The five services, in the order they appear everywhere on the site (menus, Home, Services hub,
 * footer, contact chips, structured data). Change a name or a line here and it changes everywhere.
 */
export type ServiceSlug =
  "product-engineering" | "modernization" | "dashboards-portals" | "maintenance-retainer" | "automation-ai";

export type ServiceIconName = "code" | "refresh" | "layout" | "shield" | "bolt";

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
  problems: [string, string, string];
  deliver: [
    { title: string; text: string },
    { title: string; text: string },
    { title: string; text: string },
    { title: string; text: string },
  ];
  steps: [string, string, string];
  /** Case studies shown as proof, using the existing thumbnails. */
  proof: CaseSlug[];
  faq: [ServiceFaq, ServiceFaq, ServiceFaq, ServiceFaq];
  /** Shown in place of case cards when a service has no case study of its own yet. */
  offer?: { label: string; title: string; text: string; cta: string; href: string };
  /** Closing call-to-action copy. */
  closing: { title: string; text: string };
}

export const SERVICES: Service[] = [
  {
    slug: "product-engineering",
    href: "/services/product-engineering",
    name: "Product Engineering",
    icon: "code",
    summary: "New web products, MVPs and features — planned clearly and built to last.",
    outcome: "Your product ships, and keeps shipping.",
    points: ["MVPs and new features", "A written scope", "Code your next hire can read"],
    cta: "Explore product engineering",
    meta: {
      title: "MVP, SaaS & Web App Development",
      description:
        "Web products, MVPs and new features with a written scope, weekly progress and a clean handover.",
    },
    hero: {
      title: "Product engineering for",
      accent: "startups and growing businesses.",
      lead: "We design and build web products, MVPs and new features with a written scope, weekly progress and a clean handover.",
    },
    problems: [
      "You have an idea but no team to build it.",
      "Your roadmap is stuck waiting for developers.",
      "Past projects ran over time or budget.",
    ],
    deliver: [
      {
        title: "MVPs",
        text: "The smallest version that proves the idea with real users.",
      },
      {
        title: "New features",
        text: "Added to your existing product without breaking what already works.",
      },
      {
        title: "Web applications",
        text: "Fast, accessible apps that work on every screen.",
      },
      {
        title: "Integrations",
        text: "Your product connected to the payments, CRMs and tools you use.",
      },
    ],
    steps: ["Agree the scope", "Build in weekly steps you can review", "Launch and hand over"],
    proof: ["verdira", "vapestore"],
    faq: [
      {
        q: "What is an MVP?",
        a: "A minimum viable product is the smallest version of your product that real users can try. It proves the idea quickly, so you invest in what users actually need.",
      },
      {
        q: "Who owns the code?",
        a: "You do. The code, documentation and every account are handed over to you at the end of the project.",
      },
      {
        q: "Can you work on our existing product?",
        a: "Yes. We start with a short review of the code, then add features or fixes without breaking what already works.",
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
    slug: "modernization",
    href: "/services/modernization",
    name: "Website & Web App Modernization",
    icon: "refresh",
    summary: "Faster, easier-to-change software, moved to a modern platform in safe steps.",
    outcome: "Old software stops holding you back.",
    points: ["Faster pages", "Safe, step-by-step migration", "No big-bang rewrite"],
    cta: "Explore modernization",
    meta: {
      title: "Website & Web App Modernization",
      description:
        "Make slow, ageing software faster and easier to change, in safe steps while it stays live.",
    },
    hero: {
      title: "Modernize your website or web app",
      accent: "without stopping the business.",
      lead: "We make slow, ageing software faster and easier to change — measured first, then improved in small, safe steps while your site stays live.",
    },
    problems: [
      "Pages are slow and customers notice.",
      "Small changes take weeks and break other things.",
      "It is hard to find developers for your old system.",
    ],
    deliver: [
      {
        title: "Speed and code review",
        text: "A written plan that ranks the real causes of slowness.",
      },
      {
        title: "Measurable performance fixes",
        text: "Each fix measured before and after, so the gain is visible.",
      },
      {
        title: "Step-by-step migration",
        text: "A move to a modern platform in small releases, with the site live throughout.",
      },
      {
        title: "Documentation",
        text: "How the software works now, so the next change is easier.",
      },
    ],
    steps: ["Measure and plan", "Fix and migrate in small releases", "Report before and after"],
    proof: ["sunhub", "aussiemotor"],
    faq: [
      {
        q: "Do we need a full rewrite?",
        a: "Usually not. Most of the gain comes from fixing the biggest causes of slowness and replacing the worst parts first, while everything else keeps working.",
      },
      {
        q: "Will the site go offline?",
        a: "No. Work ships in small releases to the live site, and we plan each one so visitors do not notice.",
      },
      {
        q: "How do you prove the improvement?",
        a: "We measure before we start and again after each release, then give you a short written report with both results side by side.",
      },
      {
        q: "How long does it take?",
        a: "It depends on the size of the software. The written plan includes an estimate and milestones, so you know what to expect before work begins.",
      },
    ],
    closing: {
      title: "Is your software slowing you down?",
      text: "Tell us what is not working. You get a reply within one business day.",
    },
  },
  {
    slug: "dashboards-portals",
    href: "/services/dashboards-portals",
    name: "Dashboards & Client Portals",
    icon: "layout",
    summary: "One place for your team and clients to see and act on their data.",
    outcome: "Everyone works from the same numbers.",
    points: ["Admin panels", "Client portals", "Live reporting"],
    cta: "Explore dashboards and portals",
    meta: {
      title: "Custom Dashboards & Client Portals",
      description:
        "Admin panels, client portals and reporting dashboards connected to the data you already have.",
    },
    hero: {
      title: "Dashboards and client portals",
      accent: "your team will actually use.",
      lead: "We bring the data your team and clients need into one fast, secure place, connected to the systems you already use.",
    },
    problems: [
      "Your numbers live in five different spreadsheets.",
      "Clients email you for every status update.",
      "Your current admin panel is slow or disliked.",
    ],
    deliver: [
      { title: "Admin panels", text: "Manage records, users and content without touching code." },
      { title: "Client portals", text: "A secure place where clients sign in to see their own information." },
      { title: "Reporting dashboards", text: "Live figures that replace the weekly spreadsheet." },
      {
        title: "Internal tools",
        text: "Approvals, scheduling and stock tracking built around how you work.",
      },
    ],
    steps: ["List the questions each role asks", "Connect the data", "Build and test with your team"],
    proof: ["verdira", "digestivecare"],
    faq: [
      {
        q: "What is a client portal?",
        a: "A private area of your website where clients sign in to see their own documents, orders or progress, instead of emailing you for updates.",
      },
      {
        q: "Can it connect to our existing data?",
        a: "Yes. We connect to the systems and spreadsheets you already use, so nobody has to re-enter anything.",
      },
      {
        q: "Can you redesign our current dashboard?",
        a: "Yes. We start by asking what each person needs to see and do, then rebuild the screens around those questions.",
      },
      {
        q: "Is client data secure?",
        a: "Access is checked on the server, each client sees only their own information, and sign-in is built to current good practice. We explain exactly how in the written scope.",
      },
    ],
    closing: {
      title: "Need one place for your data?",
      text: "Tell us who needs to see what. You get a reply within one business day.",
    },
  },
  {
    slug: "maintenance-retainer",
    href: "/services/maintenance-retainer",
    name: "Maintenance & Ongoing Development",
    icon: "shield",
    summary: "Updates, fixes and improvements every month from a team that knows your code.",
    outcome: "Your software stays healthy while you run the business.",
    points: ["Updates and security", "Fixes and small features", "A monthly report"],
    cta: "Explore ongoing development",
    meta: {
      title: "Website Maintenance & Ongoing Development",
      description: "Monthly updates, fixes, monitoring and small features from a team that knows your code.",
    },
    hero: {
      title: "Ongoing development and maintenance",
      accent: "from a team that knows your code.",
      lead: "Updates, fixes, monitoring and small improvements every month, with priorities you set and a clear monthly report.",
    },
    problems: [
      "You have a live product but no in-house developer.",
      "Every new freelancer has to relearn your code.",
      "Updates and security patches keep slipping.",
    ],
    deliver: [
      { title: "Updates and security", text: "Software kept current and patched before problems appear." },
      { title: "Monitoring", text: "We notice when something breaks, ideally before your customers do." },
      { title: "Bug fixes and small features", text: "Worked through in the order you set." },
      { title: "A monthly report", text: "What shipped, what is next and what needs your decision." },
    ],
    steps: ["Agree the month's priorities", "Work through them, urgent first", "Report what shipped"],
    proof: ["sunhub", "talhaestate"],
    faq: [
      {
        q: "What is included?",
        a: "Updates, security patches, monitoring, bug fixes and small improvements. Larger pieces of work are scoped separately, in writing, before they start.",
      },
      {
        q: "How are hours and pricing agreed?",
        a: "Flexibly, per client, and in writing before we start. We agree what you need each month and review it as your needs change.",
      },
      {
        q: "How fast do you respond to urgent issues?",
        a: "Urgent issues go to the front of the queue. We agree the response expectations with you in writing at the start.",
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
  {
    slug: "automation-ai",
    href: "/services/automation-ai",
    name: "AI Integrations & Workflow Automation",
    icon: "bolt",
    summary: "Repetitive work handled automatically, with AI added only where it helps.",
    outcome: "Your team stops doing repetitive work.",
    points: ["Connected tools", "Automated follow-ups and reports", "AI where it helps"],
    cta: "Explore automation",
    meta: {
      title: "AI Integrations & Workflow Automation",
      description: "Automate follow-ups, CRM updates and reports, with AI added where it clearly helps.",
    },
    hero: {
      title: "AI integrations and workflow automation",
      accent: "that give your team hours back.",
      lead: "We connect your forms, CRM, inbox and other tools so routine work happens on its own — and add AI only to the steps where it clearly helps, with a person reviewing anything important.",
    },
    problems: [
      "Details are copied by hand from one tool to another.",
      "Enquiries wait in an inbox until someone has time.",
      "The same report is rebuilt every week.",
    ],
    deliver: [
      {
        title: "Lead capture and CRM updates",
        text: "New enquiries recorded and routed the moment they arrive.",
      },
      {
        title: "Automatic replies and follow-ups",
        text: "The right message sent at the right time, without anyone remembering to.",
      },
      { title: "Scheduled reports", text: "The weekly figures built and sent for you." },
      {
        title: "AI-assisted sorting and drafting",
        text: "AI suggests, a person approves anything important.",
      },
    ],
    steps: [
      "Map how work moves today",
      "Build and test the workflow",
      "Hand over with documentation and optional upkeep",
    ],
    proof: [],
    offer: {
      label: "Start here",
      title: "Not sure what to automate first?",
      text: "Our free automation audit reviews your tools and workflows and ends with a short, prioritized list of what is worth automating.",
      cta: "Request your free audit",
      href: "/automation-audit",
    },
    faq: [
      {
        q: "What can you automate?",
        a: "Anything that follows a repeatable pattern: capturing leads, updating records, sending replies and reminders, and building reports. We confirm what is worth automating before building.",
      },
      {
        q: "Do we need to change our tools?",
        a: "No. We connect the tools you already use, so your team keeps working the way it does today, with less manual effort.",
      },
      {
        q: "Who owns the workflows and data?",
        a: "You do. The workflows, documentation and accounts are yours, and your data stays in your own systems.",
      },
      {
        q: "Is our data safe?",
        a: "We give each connection only the access it needs, keep a person in the loop for anything important, and explain how data moves in the written scope.",
      },
    ],
    closing: {
      title: "Ready to give your team hours back?",
      text: "Tell us what takes the most time. You get a reply within one business day.",
    },
  },
];

export const SERVICE_BY_SLUG = Object.fromEntries(
  SERVICES.map((service) => [service.slug, service]),
) as Record<ServiceSlug, Service>;
