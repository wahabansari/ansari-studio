import { ContactContent } from "@/content/contact";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: { absolute: "Contact Ansari Product Engineering" },
  description:
    "Tell us what you need to build, improve or connect. Book a call or send a message; you get a reply within one business day.",
  path: "/contact",
});

export default function Page() {
  return (
    <main id="main">
      <ContactContent />
    </main>
  );
}
