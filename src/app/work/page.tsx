import type { Metadata } from "next";
import { PageHero } from "@/components/design/PageHero";
import { SiteFooter } from "@/components/design/SiteFooter";
import { WorkGrid } from "@/components/work/WorkGrid";

export const metadata: Metadata = {
  title: { absolute: "Case Studies: Web Apps & Automation | Ansari Studio" },
  description:
    "Real projects with the problem, the approach and the result — product builds, modernizations and automations for founders and growing teams.",
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
          eyebrow="Case studies"
          title="Real projects, explained by"
          titleAccent="the problem, the approach and the result."
          lead="Marketplaces, web applications, healthcare websites and design systems for clients in the United States, the United Kingdom, Australia and beyond. Every result shown is real."
          primary="Discuss your project"
          primaryHref="/contact"
          secondary="See how we work"
          secondaryHref="/process"
          points="9 shipped projects|US, UK and Australia|No invented results"
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
