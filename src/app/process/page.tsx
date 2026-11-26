import { ProcessContent } from "@/content/process";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "How We Work: Scope, Build and Handover",
  description:
    "Discovery, a written scope, weekly progress and a documented handover: how a software project runs with Ansari Product Engineering.",
  path: "/process",
});

export default function Page() {
  return (
    <main id="main">
      <ProcessContent />
    </main>
  );
}
