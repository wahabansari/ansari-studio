import type { Metadata } from "next";
import Link from "next/link";
import { BookingCard } from "@/components/contact/BookingCard";
import { ServiceChips } from "@/components/contact/ServiceChips";
import { PageHero } from "@/components/design/PageHero";
import { SiteFooter } from "@/components/design/SiteFooter";
import { ArrowRight } from "@/components/icons";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Tell us what you need. Reply within one business day.",
  alternates: { canonical: "/contact" },
};

const field =
  "box-border h-[48px] w-full rounded-[12px] border border-field bg-white px-[14px] text-[15px] text-ink focus:border-brand focus:outline-2 focus:outline-offset-2 focus:outline-brand";
const label = "mb-[6px] block text-[14px] font-semibold";

export default function ContactPage() {
  return (
    <>
      <main id="main">
        <PageHero
          active="none"
          parent=""
          crumb="Contact"
          eyebrow="Contact"
          title="Tell us what you need to build,"
          titleAccent="improve or connect."
          lead="Send a message or book a 30-minute call. You get a reply within one business day."
          primary="Book a 30-minute call"
          primaryHref="#book"
          secondary=""
          points=""
        />

        <section className="bg-[linear-gradient(180deg,#070B16_0,#070B16_120px,#FFFFFF_120px)] px-[24px] pb-[112px]">
          <div className="mx-auto grid max-w-[1200px] grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] items-start gap-[24px] max-[900px]:grid-cols-[minmax(0,1fr)]">
            <form
              method="post"
              action="/api/contact"
              className="rounded-[28px] border border-line bg-white p-[36px] shadow-[0_40px_80px_-40px_rgba(10,16,34,0.35)] max-[480px]:p-[24px]"
            >
              <div className="text-[24px] font-bold tracking-[-0.016em]">Send a message</div>
              <ServiceChips />
              <div className="mt-[20px] grid grid-cols-[repeat(2,minmax(0,1fr))] gap-[16px] max-[900px]:grid-cols-[minmax(0,1fr)]">
                <div>
                  <label htmlFor="c-name" className={label}>
                    Name
                  </label>
                  <input
                    id="c-name"
                    name="name"
                    className={field}
                    type="text"
                    placeholder="Your name"
                    autoComplete="name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="c-email" className={label}>
                    Work email
                  </label>
                  <input
                    id="c-email"
                    name="email"
                    className={field}
                    type="email"
                    placeholder="you@company.com"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>
              <div className="mt-[16px]">
                <label htmlFor="c-budget" className={label}>
                  How would you like to work?
                </label>
                <select id="c-budget" name="engagement" className={field}>
                  <option>Fixed-scope project</option>
                  <option>Monthly development</option>
                  <option>Automation audit</option>
                  <option>Not sure yet</option>
                </select>
              </div>
              <div className="mt-[16px]">
                <label htmlFor="c-msg" className={label}>
                  What are you trying to achieve?
                </label>
                <textarea
                  id="c-msg"
                  name="message"
                  className={`${field} h-[132px] resize-y py-[12px]`}
                  placeholder="The problem, who it affects and any deadline"
                  required
                />
              </div>
              <button
                type="submit"
                className="mt-[22px] inline-flex h-[52px] cursor-pointer items-center gap-[8px] rounded-[12px] bg-brand px-[26px] text-[16px] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_10px_30px_-10px_rgba(46,79,227,0.8)] transition-colors duration-150 hover:bg-[#2643c9]"
              >
                Send message <ArrowRight />
              </button>
              <p className="mt-[14px] text-[12px] leading-[1.5] text-faint">
                We use your details only to reply to you.{" "}
                <Link href="/privacy" className="underline">
                  Privacy policy
                </Link>
              </p>
            </form>

            <div className="flex flex-col gap-[16px]">
              <BookingCard />
              <div className="flex items-center gap-[14px] rounded-[24px] border border-line bg-subtle p-[24px]">
                <span className="flex h-[40px] w-[40px] flex-none items-center justify-center rounded-[12px] border border-line-strong bg-white text-brand">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                <span className="min-w-0">
                  <span className="block text-[13px] text-faint">Email directly</span>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-[16px] font-[650] break-all hover:text-brand"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </span>
              </div>
              <div className="rounded-[24px] border border-line p-[24px]">
                <div className="text-[13px] font-semibold tracking-[0.05em] text-faint uppercase">
                  What happens next
                </div>
                <ol className="mt-[16px] flex flex-col gap-[14px] text-[15px]">
                  {[
                    "A reply within one business day",
                    "A 30-minute discovery call",
                    "A written scope and estimate",
                  ].map((step, i) => (
                    <li key={step} className="flex gap-[12px]">
                      <span className="flex h-[24px] w-[24px] flex-none items-center justify-center rounded-full bg-brand text-[12px] font-[650] text-white">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter
        title="Prefer to talk it through?"
        text="Book a 30-minute call, or send a message above. You get a reply within one business day."
        cta="Discuss your project"
        ctaHref="/contact"
      />
    </>
  );
}
