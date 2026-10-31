import Link from "next/link";
import { PageHero } from "@/components/design/PageHero";
import { SiteFooter } from "@/components/design/SiteFooter";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: { absolute: "Website Terms of Service: Using This Site | Ansari Product Engineering" },
  description:
    "The terms for using the Ansari Product Engineering website. Project work is covered by a separate written agreement signed before any engagement starts.",
  path: "/terms",
});

const SECTIONS = [
  { id: "agreement", label: "Our agreement" },
  { id: "scope", label: "Scope and changes" },
  { id: "payment", label: "Quotes and payment" },
  { id: "ownership", label: "Who owns the work" },
  { id: "confidential", label: "Confidentiality" },
  { id: "support", label: "Support after launch" },
  { id: "liability", label: "Liability" },
  { id: "ending", label: "Ending a project" },
];

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

        <section className="px-6 pt-16 pb-24">
          <div className="mx-auto grid max-w-[1100px] grid-cols-[200px_minmax(0,680px)] items-start justify-center gap-16 max-[900px]:grid-cols-1">

            {/* ── Sidebar ─────────────────────────────────────────── */}
            <aside className="sticky top-6 max-[900px]:hidden">
              {/* Privacy / Terms toggle */}
              <div className="inline-flex overflow-hidden rounded-xl border border-line bg-subtle text-[13px] font-semibold">
                <Link href="/privacy" className="px-4 py-2 text-muted transition-colors hover:text-ink">
                  Privacy
                </Link>
                <span className="bg-ink px-4 py-2 text-white">Terms</span>
              </div>

              {/* Section nav */}
              <nav className="mt-6" aria-label="Sections">
                <ul className="flex flex-col gap-0.5 text-[13px]">
                  {SECTIONS.map((s, i) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className={`block rounded-lg px-3 py-2 transition-colors ${
                          i === 0
                            ? "bg-brand-50 font-semibold text-brand"
                            : "text-muted hover:bg-subtle hover:text-ink"
                        }`}
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* ── Content ─────────────────────────────────────────── */}
            <article className="prose-custom">
              <h2 id="agreement">Our agreement</h2>
              <p>
                These terms apply to every project and ongoing development agreement with Ansari Product
                Engineering. Our terms are flexible: payment schedule, timelines, support and notice
                periods are agreed with each client to fit their needs, and written into the proposal
                before work starts. If the proposal and this page disagree, the proposal wins.
              </p>

              <h2 id="scope">Scope and changes</h2>
              <p>
                We build what the signed proposal describes. If you want something new or different, we
                tell you in writing how it affects the timeline and price before any work on it starts.
                Nothing is added to your bill without your approval.
              </p>

              <h2 id="payment">Quotes and payment</h2>
              <p>
                Every project gets a clear written quote. How and when you pay (for example in
                milestones, monthly or on delivery) is agreed with you and set out in the proposal.
                Nothing is added to your bill without your approval.
              </p>

              <h2 id="ownership">Who owns the work</h2>
              <p>
                Once you have paid in full, you own the code, designs and content we create for you, and
                you get access to all of it. Third-party tools, open-source packages and services keep
                their own licences. We may show the finished work in our portfolio unless you ask us not
                to.
              </p>

              <h2 id="confidential">Confidentiality</h2>
              <p>
                We keep your business information, data and access details private and use them only to
                do your work. We are happy to sign your non-disclosure agreement before you share
                anything sensitive.
              </p>

              <h2 id="support">Support after launch</h2>
              <p>
                If something we built does not work as the proposal describes, we fix it. The support
                period after launch, and any ongoing maintenance, is agreed with you in the proposal.
              </p>

              <h2 id="liability">Liability</h2>
              <p>
                We work carefully and test before every release, but software can still fail because of
                things outside our control, such as third-party services or hosting. Any limits on
                liability are agreed with you in the proposal.
              </p>

              <h2 id="ending">Ending a project</h2>
              <p>
                Either side can end a project or ongoing agreement with written notice, under the notice
                period agreed in the proposal. You pay for the work completed up to that point, and we
                hand over everything built so far. Questions about these terms? Email{" "}
                <a href="mailto:wahabansari.dev@gmail.com">wahabansari.dev@gmail.com</a>.
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
        secondary=""
      />
    </>
  );
}
