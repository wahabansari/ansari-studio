import { InsightsContent } from "@/content/insights";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: { absolute: "Insights: Software, Automation & Modernization | Ansari Product Engineering" },
  description:
    "Plain-English guides on automating lead follow-up, modernizing software, dashboards and reducing manual work.",
  path: "/insights",
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
        ])}
      />
      <main id="main">
        <InsightsContent />
      </main>
    </>
  );
}
