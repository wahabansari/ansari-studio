/** Projects shown in the Work grid, in display order. Case-study pages exist for the ones with a slug. */
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

export const PROJECT_FILTERS = ["All", "Web apps", "Marketplaces & stores", "Websites", "Design"] as const;

export const PROJECTS: readonly Project[] = [
  { name: "Sunhub", kind: "mkt", category: "Marketplaces & stores", line: "Solar equipment marketplace for business buyers and sellers.", service: "Website & Web App Modernization", href: "https://sunhub.com", external: true },
  { name: "Verdira", kind: "web", category: "Web apps", line: "A web application designed, built and handed over end to end.", service: "Product Engineering", href: "/work/verdira" },
  { name: "AussieMotor", kind: "mkt", category: "Marketplaces & stores", line: "Automotive website for a client in Australia.", service: "Website & Web App Modernization", href: "/work/aussiemotor" },
  { name: "Digestive Care", kind: "site", category: "Websites", line: "Healthcare website that explains services clearly to patients.", service: "Dashboards & Client Portals", href: "/work/digestivecare" },
  { name: "Vapestore", kind: "mkt", category: "Marketplaces & stores", line: "Online store for a client in the United Kingdom.", service: "Product Engineering", href: "/work/vapestore" },
  { name: "SilcoLabs", kind: "site", category: "Websites", line: "Company website built to be easy to update.", service: "Product Engineering", href: "/work/silcolabs" },
  { name: "Cennetsol", kind: "des", category: "Design", line: "Concept: homepage for a software agency.", service: "Product Engineering", href: "/work/cennetsol" },
  { name: "Talha Estate", kind: "des", category: "Design", line: "Concept: property listing website.", service: "Maintenance & Ongoing Development", href: "/work/talhaestate" },
  { name: "Select & Health", kind: "des", category: "Design", line: "Concept: website for a health services brand.", service: "Product Engineering", href: "/work/selecthealth" },
];

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
