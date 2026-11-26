import Link from "next/link";
import { ArrowIcon } from "@/components/brand";
import { Reveal } from "@/components/motion";

/** Closing call to action with the flowing gradient background from the design. */
export function CtaBand({
  title = "Have a project in mind?",
  text = "Tell us what you need. You get a reply within one business day.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="ctab">
      <div className="hbg" aria-hidden="true">
        <div className="mesh" />
        <div className="rib" />
        <div className="au a1" />
        <div className="au a2" />
        <div className="au a3" />
        <div className="gr" />
      </div>
      <Reveal className="wrap">
        <h2 className="h2">{title}</h2>
        <p className="lead">{text}</p>
        <div className="row">
          <Link className="btn btn-w" href="/contact">
            Discuss your project <ArrowIcon />
          </Link>
          <Link className="btn btn-d" href="/contact#book">
            Book a 30-minute call
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
