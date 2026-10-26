import type { Metadata } from "next";
import { PageHero } from "@/components/design/PageHero";
import { SiteFooter } from "@/components/design/SiteFooter";
import { WorkGrid } from "@/components/work/WorkGrid";

export const metadata: Metadata = {
  title: { absolute: "Selected Project Experience | Ansari Product Engineering" },
  description:
    "Selected project experience across marketplaces, web applications, healthcare websites and design systems — with the problem, the approach and the honest outcome of each.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <main id="main">
        <PageHero
          active="work"
          parent=""
          crumb="Work"
          eyebrow="Selected project experience"
          title="Real projects, explained by"
          titleAccent="the problem, the approach and the result."
          lead="Selected project experience across marketplaces, web applications, healthcare websites and design systems — for clients in the United States, the United Kingdom and Australia. Every write-up describes work actually done."
          primary="Discuss your project"
          primaryHref="/contact"
          secondary="See how we work"
          secondaryHref="/process"
          points="Honest write-ups|US, UK and Australia|No invented results"
        />
        <section className="px-[24px] pt-[96px] pb-[112px]">
          <div className="mx-auto max-w-[1200px]">
            <WorkGrid />
          </div>
        </section>
      </main>
      <SiteFooter
        title="Could your project be next?"
        text="Tell us what you need to build, improve or connect. You get a reply within one business day."
        cta="Discuss your project"
        ctaHref="/contact"
      />
    </>
  );
}
