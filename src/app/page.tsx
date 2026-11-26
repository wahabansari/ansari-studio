import { HomeContent } from "@/content/home";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: { absolute: "Product Engineering, Modernization & Automation | Ansari Product Engineering" },
  description:
    "We build web products, modernize ageing software and connect the tools your business runs on, for startups and growing companies in the US, UK and Europe.",
  path: "/",
});

export default function Page() {
  return (
    <main id="main">
      <HomeContent />
    </main>
  );
}
