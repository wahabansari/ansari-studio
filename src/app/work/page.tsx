import { WorkContent } from "@/content/work";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Software and Web Development Case Studies",
  description:
    "Real projects we have delivered: marketplaces, web applications, online stores and healthcare websites for clients in the US, UK, Europe and Australia.",
  path: "/work",
});

export default function Page() {
  return (
    <main id="main">
      <WorkContent />
    </main>
  );
}
