import { ContactContent } from "@/content/contact";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: { absolute: "Contact Us | Ansari Product Engineering" },
  description:
    "Tell us what you need to build, improve or connect. We reply within one business day. Book a 30-minute call at a time that suits US, UK or EU hours.",
  path: "/contact",
});

export default function Page() {
  return (
    <main id="main">
      <ContactContent />
    </main>
  );
}
