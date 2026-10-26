import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/design/PageHero";
import { SiteFooter } from "@/components/design/SiteFooter";

export const metadata: Metadata = {
  title: { absolute: "Website Terms of Service: Using This Site | Ansari Product Engineering" },
  description:
    "The terms for using the Ansari Product Engineering website. Project work is covered by a separate written agreement signed before any engagement starts.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <main id="main">
        <PageHero
          active="none"
          parent=""
          crumb="Terms of service"
          eyebrow="Legal"
          title="Terms of service"
          titleAccent=""
          lead="Simple, flexible terms. The details are agreed with each client and written into the project proposal. Last updated 26 October 2026."
          primary="Ask a question about these terms"
          primaryHref="/contact"
          secondary=""
          points=""
        />
        <section className="px-[24px] pt-[72px] pb-[112px]">
          <div className="mx-auto grid max-w-[1100px] grid-cols-[240px_minmax(0,700px)] items-start justify-center gap-[72px] max-[900px]:grid-cols-[minmax(0,1fr)] [&_h2]:mt-[44px] [&_h2]:mr-0 [&_h2]:mb-0 [&_h2]:ml-0 [&_h2]:text-[24px] [&_h2]:leading-[1.2] [&_h2]:font-bold [&_h2]:tracking-[-0.016em] [&_h2]:text-ink [&_li]:text-[17px] [&_li]:leading-[1.75] [&_li]:text-prose [&_p]:mt-[12px] [&_p]:mr-0 [&_p]:mb-0 [&_p]:ml-0 [&_p]:text-[17px] [&_p]:leading-[1.75] [&_p]:text-prose">
            <aside className="sticky top-[24px] max-[900px]:hidden!">
              <div className="inline-flex rounded-full border border-line bg-subtle p-[4px] text-[14px] font-semibold">
                <Link className="px-[14px] py-[7px] text-muted" href="/privacy">
                  Privacy
                </Link>
                <span className="rounded-full bg-ink px-[14px] py-[7px] text-white">Terms</span>
              </div>
              <nav className="mt-[24px]" aria-label="Sections">
                <ul className="flex list-none flex-col gap-[2px] text-[14px] text-muted">
                  <li>
                    <a
                      className="block rounded-[8px] bg-brand-50 px-[12px] py-[8px] font-semibold text-brand"
                      href="#agreement"
                    >
                      Our agreement
                    </a>
                  </li>
                  <li>
                    <a className="block px-[12px] py-[8px]" href="#scope">
                      Scope and changes
                    </a>
                  </li>
                  <li>
                    <a className="block px-[12px] py-[8px]" href="#payment">
                      Quotes and payment
                    </a>
                  </li>
                  <li>
                    <a className="block px-[12px] py-[8px]" href="#ownership">
                      Who owns the work
                    </a>
                  </li>
                  <li>
                    <a className="block px-[12px] py-[8px]" href="#confidential">
                      Confidentiality
                    </a>
                  </li>
                  <li>
                    <a className="block px-[12px] py-[8px]" href="#support">
                      Support after launch
                    </a>
                  </li>
                  <li>
                    <a className="block px-[12px] py-[8px]" href="#liability">
                      Liability
                    </a>
                  </li>
                  <li>
                    <a className="block px-[12px] py-[8px]" href="#ending">
                      Ending a project
                    </a>
                  </li>
                </ul>
              </nav>
            </aside>
            <article>
              <h2 className="mt-0" id="agreement">
                Our agreement
              </h2>
              <p>
                These terms apply to every project and ongoing development agreement with Ansari Product
                Engineering. Our terms are flexible: payment schedule, timelines, support and notice periods
                are agreed with each client to fit their needs, and written into the proposal before work
                starts. If the proposal and this page disagree, the proposal wins.
              </p>
              <h2 id="scope">Scope and changes</h2>
              <p>
                We build what the signed proposal describes. If you want something new or different, we tell
                you in writing how it affects the timeline and price before any work on it starts. Nothing is
                added to your bill without your approval.
              </p>
              <h2 id="payment">Quotes and payment</h2>
              <p>
                Every project gets a clear written quote. How and when you pay (for example in milestones,
                monthly or on delivery) is agreed with you and set out in the proposal. Nothing is added to
                your bill without your approval.
              </p>
              <h2 id="ownership">Who owns the work</h2>
              <p>
                Once you have paid in full, you own the code, designs and content we create for you, and you
                get access to all of it. Third-party tools, open-source packages and services keep their own
                licences. We may show the finished work in our portfolio unless you ask us not to.
              </p>
              <h2 id="confidential">Confidentiality</h2>
              <p>
                We keep your business information, data and access details private and use them only to do
                your work. We are happy to sign your non-disclosure agreement before you share anything
                sensitive.
              </p>
              <h2 id="support">Support after launch</h2>
              <p>
                If something we built does not work as the proposal describes, we fix it. The support period
                after launch, and any ongoing maintenance, is agreed with you in the proposal.
              </p>
              <h2 id="liability">Liability</h2>
              <p>
                We work carefully and test before every release, but software can still fail because of things
                outside our control, such as third-party services or hosting. Any limits on liability are
                agreed with you in the proposal.
              </p>
              <h2 id="ending">Ending a project</h2>
              <p>
                Either side can end a project or ongoing agreement with written notice, under the notice
                period agreed in the proposal. You pay for the work completed up to that point, and we hand
                over everything built so far. Questions about these terms? Email{" "}
                <a className="font-semibold text-brand" href="mailto:wahabansari.dev@gmail.com">
                  wahabansari.dev@gmail.com
                </a>
                .
              </p>
            </article>
          </div>
        </section>
      </main>
      <SiteFooter
        title="Questions before you start?"
        text="Ask us anything about how we work and you get a reply within one business day."
        cta="Contact us"
        ctaHref="/contact"
      />
    </>
  );
}
