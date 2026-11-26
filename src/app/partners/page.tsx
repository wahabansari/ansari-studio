import { PartnersContent } from "@/content/partners";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: { absolute: "White-Label Development for Agencies | Ansari Product Engineering" },
  description:
    "Senior engineering under your brand, clear communication, clean handover. White-label web development for agencies and studios.",
  path: "/partners",
});

export default function Page() {
  return (
    <main id="main">
      <PartnersContent />
    </main>
  );
}
