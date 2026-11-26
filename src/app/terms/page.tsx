import { TermsContent } from "@/content/terms";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: { absolute: "Terms and Privacy | Ansari Product Engineering" },
  description:
    "The terms for using the Ansari Product Engineering website, and how we handle your information. Project work is covered by a separate written agreement.",
  path: "/terms",
});

export default function Page() {
  return (
    <main id="main">
      <TermsContent />
    </main>
  );
}
