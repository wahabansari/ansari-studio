import { SERVICE_BY_SLUG, type ServiceSlug } from "@/data/services";

const ONE_LINERS: [ServiceSlug, string][] = [
  ["product-engineering", "MVPs, SaaS products and custom web apps"],
  ["modernization", "faster, easier-to-change websites"],
  ["dashboards-portals", "replace spreadsheets and email threads"],
  ["maintenance-retainer", "monthly updates, security, monitoring"],
  ["automation-ai", "automate repetitive work, AI only where it helps"],
];

/** Plain-text site summary for AI assistants and crawlers, served at /llms.txt. */
export function GET() {
  const services = ONE_LINERS.map(([slug, line]) => {
    const service = SERVICE_BY_SLUG[slug];
    return `- [${service.name}](${service.href}): ${line}`;
  }).join("\n");

  const body = `# Ansari Product Engineering
> We build web apps, modernize slow websites and automate repetitive business work for growing businesses in the US, UK and Europe.

## Services
${services}

## Start here
- [Free automation audit](/automation-audit)
- [Work](/work)
- [Process](/process)
- [Contact](/contact)
`;

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
