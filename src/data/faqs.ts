import type { ServiceSlug } from "./services";

export interface Faq {
  q: string;
  a: string;
}

/** Visible FAQs on each service page. The same list feeds the FAQPage structured data. */
export const FAQS: Record<ServiceSlug, readonly Faq[]> = {
  "product-engineering": [
    {
      q: "What is an MVP?",
      a: "The smallest version of your product that real users can try, so you learn before you spend more.",
    },
    {
      q: "Who owns the code?",
      a: "You do. At the end you receive the code, documentation and accounts.",
    },
    {
      q: "Can you work on a live product?",
      a: "Yes. We work inside your existing code safely.",
    },
    {
      q: "Can you build from our designer's files?",
      a: "Yes. If you have no designer, we help shape the screens.",
    },
  ],
  modernization: [
    {
      q: "Do we need a full rewrite?",
      a: "Usually not. We fix what hurts most first.",
    },
    {
      q: "Will the site go offline?",
      a: "No. Changes ship in small releases while it stays live.",
    },
    {
      q: "How do you prove it worked?",
      a: "Before and after measurements.",
    },
    {
      q: "How long does it take?",
      a: "We give a timeline after the initial review.",
    },
  ],
  "dashboards-portals": [
    {
      q: "What does a client portal do?",
      a: "Clients see their own project status, documents or invoices, privately.",
    },
    {
      q: "Can it connect to our systems?",
      a: "Yes, which avoids double data entry.",
    },
    {
      q: "Can you redesign our existing dashboard?",
      a: "Yes.",
    },
    {
      q: "Who sees what?",
      a: "Each user sees only what they are allowed to. Access rules are agreed before we build.",
    },
  ],
  "maintenance-retainer": [
    {
      q: "How is it priced?",
      a: "Hours and price are agreed per client, in writing, before work starts.",
    },
    {
      q: "What about urgent issues?",
      a: "Prioritised first. Messages get a reply within one business day.",
    },
    {
      q: "Is there a long contract?",
      a: "No long lock-in. You keep the code, documentation and accounts.",
    },
  ],
  "automation-ai": [
    {
      q: "What can be automated?",
      a: "Repetitive, rule-based work: lead capture, follow-ups, reports, data entry.",
    },
    {
      q: "Do we need to change our tools?",
      a: "No. We connect the tools you already use.",
    },
    {
      q: "Who owns the workflows and data?",
      a: "You do.",
    },
    {
      q: "Is our data safe?",
      a: "Access is limited to what the workflow needs, and we agree this with you before we build.",
    },
  ],
};
