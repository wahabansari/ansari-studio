import { HomeContent } from "@/content/home";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: { absolute: "Web Apps & Business Automation | Ansari Product Engineering" },
  description:
    "We build web apps, modernize slow websites and automate repetitive business work, with a written scope and weekly progress. For US, UK and EU teams.",
  path: "/",
});

export default function Page() {
  return (
    <main id="main">
      <HomeContent />
    </main>
  );
}
