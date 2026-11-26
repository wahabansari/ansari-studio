/** Projects shown on the Work page, in display order. Case-study pages exist for the ones with a slug. */
export type ProjectKind = "web" | "mkt" | "site" | "des";

export interface Project {
  name: string;
  kind: ProjectKind;
  category: string;
  line: string;
  service: string;
  /** Internal case-study path, or the live site for projects without a write-up. */
  href: string;
  external?: boolean;
}

/** Filters for client work. Concept designs are a separate group and never mixed in. */
export const PROJECT_FILTERS = ["All", "Web apps", "Marketplaces & stores", "Websites"] as const;
export const CONCEPT_CATEGORY = "Concept designs";

export const PROJECTS: readonly Project[] = [
  {
    name: "Sunhub",
    kind: "mkt",
    category: "Marketplaces & stores",
    line: "Solar equipment marketplace for business buyers and sellers.",
    service: "Website & Web App Modernization",
    href: "https://sunhub.com",
    external: true,
  },
  {
    name: "Verdira",
    kind: "web",
    category: "Web apps",
    line: "A web application built and handed over end to end.",
    service: "Product Engineering",
    href: "/work/verdira",
  },
  {
    name: "AussieMotor",
    kind: "mkt",
    category: "Marketplaces & stores",
    line: "Automotive website for an Australian client.",
    service: "Website & Web App Modernization",
    href: "/work/aussiemotor",
  },
  {
    name: "Digestive Care",
    kind: "site",
    category: "Websites",
    line: "Healthcare website that explains services to patients.",
    service: "Dashboards & Client Portals",
    href: "/work/digestivecare",
  },
  {
    name: "Vapestore",
    kind: "mkt",
    category: "Marketplaces & stores",
    line: "Online store for a UK client.",
    service: "Product Engineering",
    href: "/work/vapestore",
  },
  {
    name: "SilcoLabs",
    kind: "site",
    category: "Websites",
    line: "Company website designed to be easy to update.",
    service: "Product Engineering",
    href: "/work/silcolabs",
  },
  {
    name: "Cennetsol",
    kind: "des",
    category: CONCEPT_CATEGORY,
    line: "Concept design: homepage for a software agency.",
    service: "Concept",
    href: "/work/cennetsol",
  },
  {
    name: "Talha Estate",
    kind: "des",
    category: CONCEPT_CATEGORY,
    line: "Concept design: property listings website.",
    service: "Concept",
    href: "/work/talhaestate",
  },
  {
    name: "Select & Health",
    kind: "des",
    category: CONCEPT_CATEGORY,
    line: "Concept design: website for a health services brand.",
    service: "Concept",
    href: "/work/selecthealth",
  },
];

export const CLIENT_PROJECTS = PROJECTS.filter((project) => project.kind !== "des");
export const CONCEPT_PROJECTS = PROJECTS.filter((project) => project.kind === "des");

/** Number of cards in a category, calculated from the cards themselves so it can never drift. */
export function countByCategory(category: string): number {
  return PROJECTS.filter((project) => project.category === category).length;
}

/** Balanced rows: threes, with the remainder split evenly (1 -> full, 2 -> halves, 4 -> 2x2). */
export function gridSpans(count: number): string[] {
  const spans: string[] = [];
  let remaining = count;
  while (remaining > 0) {
    if (remaining === 1) {
      spans.push("c12");
      remaining = 0;
    } else if (remaining === 2) {
      spans.push("c6", "c6");
      remaining = 0;
    } else if (remaining === 4) {
      spans.push("c6", "c6", "c6", "c6");
      remaining = 0;
    } else {
      spans.push("c4", "c4", "c4");
      remaining -= 3;
    }
  }
  return spans;
}

const TYPE_BY_KIND: Record<ProjectKind, string> = {
  web: "Web App",
  mkt: "Marketplace",
  site: "Website",
  des: "Concept Design",
};

/** "[Type]" in the case-study title template: "[Project]: [Type] Case Study". */
export function caseTypeLabel(slug: string): string {
  const project = PROJECTS.find((item) => item.href === `/work/${slug}`);
  if (!project) return "Project";
  return project.name === "Vapestore" ? "Online Store" : TYPE_BY_KIND[project.kind];
}
