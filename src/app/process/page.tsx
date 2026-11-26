import { ProcessContent } from "@/content/process";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: { absolute: "How We Work: Written Scope, Weekly Progress | Ansari Product Engineering" },
  description:
    "Discovery, written scope, weekly builds and a clean handover. See how we run a software project from first call to handover.",
  path: "/process",
});

export default function Page() {
  return (
    <main id="main">
      <ProcessContent />
    </main>
  );
}
