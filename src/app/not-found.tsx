import Link from "next/link";
import { ArrowIcon } from "@/components/brand";
import { PageHero } from "@/components/PageHero";

export default function NotFound() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Error 404"
        title={
          <>
            This page is not <em>connected to anything.</em>
          </>
        }
        lead="The link may be old or mistyped. These will get you back on track."
        actions={
          <>
            <Link className="btn btn-p" href="/">
              Back to home <ArrowIcon />
            </Link>
            <Link className="btn btn-d" href="/services">
              Services
            </Link>
            <Link className="btn btn-d" href="/work">
              Work
            </Link>
            <Link className="btn btn-d" href="/contact">
              Contact
            </Link>
          </>
        }
      />
    </main>
  );
}
