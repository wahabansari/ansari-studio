import { ServicesContent } from "@/content/services";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Software Development Services",
  description:
    "Five services to build, modernize and connect the software your business runs on, with a written scope before work starts.",
  path: "/services",
});

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])} />
      <main id="main">
        <ServicesContent />
      </main>
    </>
  );
}
