"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import {
  ANALYTICS_CONSENT_EVENT,
  CLARITY_ID,
  GA_MEASUREMENT_ID,
  GTM_ID,
  analyticsAllowed,
  track,
} from "@/lib/analytics";

/**
 * Loads the configured analytics tools only after consent. GTM takes precedence over a direct
 * GA4 tag so events are not counted twice. No script tag renders when the IDs are unset.
 */
export function Analytics() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const update = () => setAllowed(analyticsAllowed());
    update();
    window.addEventListener(ANALYTICS_CONSENT_EVENT, update);
    window.addEventListener("storage", update);
    return () => {
      window.removeEventListener(ANALYTICS_CONSENT_EVENT, update);
      window.removeEventListener("storage", update);
    };
  }, []);

  useEffect(() => {
    if (!allowed) return;

    const onClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const anchor = target?.closest<HTMLAnchorElement>("a[href]");
      if (!anchor) return;
      const href = anchor.getAttribute("href") ?? "";
      const path = new URL(anchor.href, window.location.origin).pathname;
      const hasBookingHash = href.includes("#book") || anchor.hash === "#book";

      if (hasBookingHash) {
        track("booking_click", { link_text: anchor.textContent?.trim().slice(0, 80) });
      } else if (path.startsWith("/automation-audit")) {
        track("audit_intent");
      } else if (path === "/contact") {
        track("contact_intent");
      } else if (path.startsWith("/work/")) {
        track("case_study_open", { case: path.replace("/work/", "") });
      }
    };

    const onSubmit = (event: Event) => {
      const form = (event.target as Element | null)?.closest("form");
      const action = form?.getAttribute("action");
      if (action === "/api/contact") track("contact_submit");
      if (action === "/api/audit") track("audit_submit");
    };

    document.addEventListener("click", onClick, true);
    document.addEventListener("submit", onSubmit, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("submit", onSubmit, true);
    };
  }, [allowed]);

  if (!allowed) return null;

  return (
    <>
      {GTM_ID ? (
        <>
          <Script id="gtm-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];window.dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});`}
          </Script>
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
          />
        </>
      ) : GA_MEASUREMENT_ID ? (
        <>
          <Script
            id="ga-script"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_MEASUREMENT_ID}',{anonymize_ip:true});`}
          </Script>
        </>
      ) : null}

      {CLARITY_ID ? (
        <Script id="clarity-init" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY_ID}");`}
        </Script>
      ) : null}
    </>
  );
}
