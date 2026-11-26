import { PartnersContent } from "@/content/partners";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "White-Label Development Partner for Agencies",
  description:
    "Overflow web development and workflow automation for agencies. Senior engineering under your brand, clear communication, clean handover.",
  path: "/partners",
});

export default function Page() {
  return (
    <main id="main">
      <PartnersContent />
    </main>
  );
}
