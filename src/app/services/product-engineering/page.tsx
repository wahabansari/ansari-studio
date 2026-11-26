import { ProductEngineeringContent } from "@/content/product-engineering";
import { SERVICE_BY_SLUG } from "@/data/services";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd, breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo";

const service = SERVICE_BY_SLUG["product-engineering"];

export const metadata = pageMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: service.href,
});

export default function Page() {
  return (
    <>
      <JsonLd data={serviceJsonLd({ name: service.name, description: service.metaDescription, path: service.href })} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.name, path: service.href },
        ])}
      />
      <main id="main">
        <ProductEngineeringContent />
      </main>
    </>
  );
}
