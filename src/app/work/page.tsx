import type { Metadata } from "next";
import { PageHero } from "@/components/design/PageHero";
import { SiteFooter } from "@/components/design/SiteFooter";
import { WorkGrid } from "@/components/work/WorkGrid";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Marketplaces, web apps, online stores and healthcare websites we have delivered.",
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
          eyebrow="Our work"
          title="Work we have"
          titleAccent="delivered."
          lead="Marketplaces, web applications, online stores and healthcare websites for clients in the US, UK, Europe and Australia. Every write-up describes real work."
          primary="Discuss your project"
          primaryHref="/contact"
          secondary=""
          points=""
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
