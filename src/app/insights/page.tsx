import { InsightsContent } from "@/content/insights";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Insights on Modernization, Automation and Custom Software",
  description:
    "Practical guides on modernizing software, automating manual work and building business applications, written by the engineer who does the work.",
  path: "/insights",
});

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Insights", path: "/insights" }])} />
      <main id="main">
        <InsightsContent />
      </main>
    </>
  );
}
