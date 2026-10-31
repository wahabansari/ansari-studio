import { ServicePage } from "@/components/design/ServicePage";
import { SERVICE_BY_SLUG } from "@/data/services";
import { pageMetadata } from "@/lib/metadata";

const service = SERVICE_BY_SLUG["product-engineering"];

export const metadata = pageMetadata({
  title: service.meta.title,
  description: service.meta.description,
  path: service.href,
});

export default function Page() {
  return <ServicePage slug="product-engineering" />;
}
