import { Up } from "@/components/motion";

export function TermsContent() {
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
          <div style={{ maxWidth: "700px" }}>
            <Up className="eyebrow" as="span" k={0}>
              Legal
            </Up>
            <Up className="h1" as="h1" k={1}>
              Terms
            </Up>
            <Up className="lead" as="p" k={2}>
              {"Simple, flexible terms that fit each client's needs."}
            </Up>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div className="doc">
            <h2>Our agreement</h2>
            <p>
              Every project starts with a written agreement that sets out what we will do, how we will work
              together and what you can expect from us.
            </p>
            <h2>Scope and changes</h2>
            <p>
              We agree the scope in writing before work starts. If your needs change, we talk it through and
              update the scope together.
            </p>
            <h2>Quotes and payment</h2>
            <p>
              Quotes and payment arrangements are agreed in writing with each client, to suit the project.
            </p>
            <h2>Who owns the work</h2>
            <p>
              You own the code, documentation and accounts we build for you once the agreed work is paid for.
            </p>
            <h2>Confidentiality</h2>
            <p>We treat your business information as confidential and use it only to do the work.</p>
            <h2>Support after launch</h2>
            <p>
              Support after launch is agreed per project, and can continue as monthly development if you want
              it.
            </p>
            <h2>Liability</h2>
            <p>
              We take care over our work and fix problems that come from it. Liability is set out in each
              agreement.
            </p>
            <h2>Ending a project</h2>
            <p>Either side can end a project in writing. We hand over the work completed to that point.</p>
            <h2 id="privacy">Privacy</h2>
            <p>
              We only collect the information you send us, such as your name, email and project details. We
              use it to reply to you and to run your project, and we do not sell it.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
