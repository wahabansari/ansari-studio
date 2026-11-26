import { ServicesContent } from "@/content/services";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: { absolute: "Software Development Services | Ansari Product Engineering" },
  description:
    "Product engineering, website modernization, dashboards and portals, maintenance and workflow automation for growing businesses in the US, UK and Europe.",
  path: "/services",
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <main id="main">
        <ServicesContent />
      </main>
    </>
  );
}
