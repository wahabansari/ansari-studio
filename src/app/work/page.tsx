import { WorkContent } from "@/content/work";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: { absolute: "Selected Work: Web Apps, Marketplaces & Websites | Ansari Product Engineering" },
  description:
    "Marketplaces, web apps, online stores and healthcare websites built for clients in the US, UK, Europe and Australia.",
  path: "/work",
});

export default function Page() {
  return (
    <main id="main">
      <WorkContent />
    </main>
  );
}
