import type { Metadata } from "next";
import { ServicePage } from "@/components/design/ServicePage";
import { SERVICE_BY_SLUG } from "@/data/services";

const service = SERVICE_BY_SLUG["maintenance-retainer"];

export const metadata: Metadata = {
  title: service.meta.title,
  description: service.meta.description,
  alternates: { canonical: service.href },
};

export default function Page() {
  return <ServicePage slug="maintenance-retainer" />;
}
