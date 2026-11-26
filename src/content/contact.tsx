import { BOOKING_URL } from "@/lib/site";
import { Reveal, Up } from "@/components/motion";
import { ContactForm } from "@/components/forms/ContactForm";
import { ContactArt1 } from "@/content/art/ContactArt1";

export function ContactContent() {
  return (
    <>
      <section className="hero c">
        <div className="hbg dk2" aria-hidden="true">
          <div className="sg">
            <i className="g1" />
            <i className="g2" />
            <i className="g3" />
            <i className="g4" />
            <i className="g5" />
          </div>
          <div className="gr" />
        </div>
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <Up className="eyebrow" as="span" k={0}>
                Contact
              </Up>
              <Up className="h1" as="h1" k={1}>
                Tell us what you need to build, improve or connect.
              </Up>
              <Up className="lead" as="p" k={2}>
                Send a message or book a 30-minute call. You get a reply within one business day.
              </Up>
            </div>
            <Up className="hdark" k={3} style={{ padding: "6px" }}>
              <ContactArt1 />
            </Up>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <Reveal className="mb">
            <div className="cell c8">
              <ContactForm />
            </div>
            <div className="cell dk c4" id="book">
              <svg className="ico" viewBox="0 0 256 256" aria-hidden="true">
                <g fill="#22D3EE" fillOpacity=".42">
                  <path d="M216,48V88H40V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z" />
                </g>
                <g fill="#4F46E5">
                  <path d="M208,34H182V24a6,6,0,0,0-12,0V34H86V24a6,6,0,0,0-12,0V34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34ZM48,46H74V56a6,6,0,0,0,12,0V46h84V56a6,6,0,0,0,12,0V46h26a2,2,0,0,1,2,2V82H46V48A2,2,0,0,1,48,46ZM208,210H48a2,2,0,0,1-2-2V94H210V208A2,2,0,0,1,208,210Z" />
                </g>
              </svg>
              <span className="fig">Prefer to talk?</span>
              <h3 style={{ fontSize: "1.15rem" }}>Book a 30-minute call</h3>
              <p>Pick a time that suits you. Times overlap US, UK and European working hours.</p>
              <div style={{ flex: "1" }} />
              <a
                className="btn btn-w"
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginTop: "24px", alignSelf: "flex-start" }}
              >
                {"Choose a time "}
                <svg className="i" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
                  <path d="M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z" />
                </svg>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
