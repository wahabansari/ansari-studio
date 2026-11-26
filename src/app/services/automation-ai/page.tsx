import { AutomationContent } from "@/content/automation-ai";
import { FAQS } from "@/data/faqs";
import { SERVICE_BY_SLUG } from "@/data/services";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd, breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/seo";

const service = SERVICE_BY_SLUG["automation-ai"];

export const metadata = pageMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: service.href,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={serviceJsonLd({ name: service.name, description: service.metaDescription, path: service.href })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.name, path: service.href },
        ])}
      />
      <JsonLd data={faqJsonLd([...FAQS["automation-ai"]])} />
      <main id="main">
        <AutomationContent />
      </main>
    </>
  );
}
