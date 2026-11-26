/**
 * The five services, in the order they appear everywhere on the site (header menu, footer,
 * contact chips, sitemap and structured data). Change a name here and it changes everywhere.
 * Page copy lives in `src/content/*.tsx`.
 */
export type ServiceSlug =
  "product-engineering" | "modernization" | "dashboards-portals" | "maintenance-retainer" | "automation-ai";

export interface Service {
  slug: ServiceSlug;
  href: `/services/${string}`;
  /** Full name, as shown in menus, chips and headings. */
  name: string;
  /** One line used in the menu and in structured data. */
  summary: string;
  /** Page title (the root layout appends the site name). */
  metaTitle: string;
  /** Search and social description, kept under about 160 characters. */
  metaDescription: string;
}

export const SERVICES: readonly Service[] = [
  {
    slug: "product-engineering",
    href: "/services/product-engineering",
    name: "Product Engineering",
    summary: "MVPs, products and features",
    metaTitle: "MVP, SaaS & Web App Development",
    metaDescription:
      "We design and build MVPs, SaaS products and custom web apps with a written scope, weekly progress and a clean handover. Built with React and Next.js.",
  },
  {
    slug: "modernization",
    href: "/services/modernization",
    name: "Website & Web App Modernization",
    summary: "Faster, easier-to-change software",
    metaTitle: "Website Redesign & Modernization",
    metaDescription:
      "Slow or outdated website? We redesign and modernize it in safe steps while it stays live: faster pages, better search visibility, easier updates.",
  },
  {
    slug: "dashboards-portals",
    href: "/services/dashboards-portals",
    name: "Dashboards & Client Portals",
    summary: "Admin panels and client portals",
    metaTitle: "Client Portals & Custom Dashboards",
    metaDescription:
      "Replace spreadsheets and email threads with a client portal or dashboard your team and customers can actually use. Built, secured and handed over.",
  },
  {
    slug: "maintenance-retainer",
    href: "/services/maintenance-retainer",
    name: "Maintenance & Ongoing Development",
    summary: "Updates, fixes, monthly report",
    metaTitle: "Website & Web App Maintenance",
    metaDescription:
      "Monthly updates, security patches, monitoring and bug fixes for your website or web app, with a plain-English monthly report.",
  },
  {
    slug: "automation-ai",
    href: "/services/automation-ai",
    name: "AI Integrations & Workflow Automation",
    summary: "Workflows, and AI where it helps",
    metaTitle: "Business & Workflow Automation",
    metaDescription:
      "We automate repetitive work such as lead follow-up and enquiry handling. AI only where it helps, and a person approves what matters.",
  },
];

export const SERVICE_BY_SLUG = Object.fromEntries(
  SERVICES.map((service) => [service.slug, service]),
) as Record<ServiceSlug, Service>;
