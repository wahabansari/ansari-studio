import { PageHero } from "@/components/design/PageHero";
import { SiteFooter } from "@/components/design/SiteFooter";
import { WorkGrid } from "@/components/work/WorkGrid";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Software and Web Development Case Studies",
  description:
    "Real projects we have delivered: marketplaces, web applications, online stores and healthcare websites for clients in the US, UK, Europe, the Middle East and Australia.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <main id="main">
        <PageHero
          active="work"
          parent=""
          crumb="Work"
          eyebrow="Our work"
          title="Work we have"
          titleAccent="delivered."
          lead="Marketplaces, web applications, online stores and healthcare websites for clients in the US, UK, Europe, the Middle East and Australia. Every write-up describes real work."
          primary="Book a discovery call"
          primaryHref="/contact#book"
          secondary="Discuss your project"
          secondaryHref="/contact"
          points=""
        />
        <section className="px-6 pt-20 pb-24">
          <div className="mx-auto max-w-[1200px]">
            <WorkGrid />
          </div>
        </section>
      </main>
      <SiteFooter
        title="Could your project be next?"
        text="Tell us what you need to build, improve or connect. You get a reply within one business day."
      />
    </>
  );
}
