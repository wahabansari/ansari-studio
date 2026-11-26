import { AboutContent } from "@/content/about";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: { absolute: "About Ansari Product Engineering | Software for Growing Businesses" },
  description:
    "A remote-first product engineering company building, modernizing and connecting software for growing businesses in the US, UK and Europe.",
  path: "/about",
});

export default function Page() {
  return (
    <main id="main">
      <AboutContent />
    </main>
  );
}
