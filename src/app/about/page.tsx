import { AboutContent } from "@/content/about";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd, personJsonLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: { absolute: "About Ansari Product Engineering" },
  description:
    "A product engineering company helping growing businesses build, modernize and integrate the software they run on. Meet the founder and how we work.",
  path: "/about",
});

export default function Page() {
  return (
    <>
      <JsonLd data={personJsonLd()} />
      <main id="main">
        <AboutContent />
      </main>
    </>
  );
}
