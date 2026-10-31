"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Calendar, Check } from "@/components/icons";
import { BOOKING_URL, BOOKING_URL_SHORT, WORKING_HOURS } from "@/lib/site";

interface BookingCardProps {
  /** Dark background (default). Pass false for use on light surfaces. */
  variant?: "dark" | "light";
}

export function BookingCard({ variant = "dark" }: BookingCardProps) {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const dark = variant === "dark";

  useEffect(() => {
    const openFromHash = () => {
      if (window.location.hash === "#book") setOpen(true);
    };
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  return (
    <div
      id="book"
      className={`scroll-mt-6 rounded-[20px] p-7 max-[480px]:p-5 ${
        dark ? "bg-ink text-white" : "border border-line bg-white text-ink"
      }`}
    >
      {/* Header */}
      <div className="flex items-start gap-3">
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
            dark ? "bg-brand-300/[0.14] text-brand-300" : "bg-brand-50 text-brand"
          }`}
        >
          <Calendar size={18} />
        </span>
        <div>
          <div className={`text-[17px] font-bold tracking-[-0.012em]`}>
            Book a 30-minute discovery call
          </div>
          <p className={`mt-0.5 text-[13px] leading-[1.5] ${dark ? "text-mist" : "text-muted"}`}>
            {WORKING_HOURS}.
          </p>
        </div>
      </div>

      {/* Trust points — shown before the calendar opens */}
      {!open && (
        <ul className={`mt-4 flex flex-col gap-2 ${dark ? "text-mist" : "text-muted"}`}>
          {[
            "Speak directly with the engineer, not a sales team",
            "No obligation — just a clear conversation",
            "Reply within one business day if a call does not suit you",
          ].map((point) => (
            <li key={point} className="flex items-start gap-2 text-[13px] leading-[1.5]">
              <Check
                size={13}
                className={`mt-[1px] shrink-0 ${dark ? "text-mint" : "text-teal"}`}
              />
              {point}
            </li>
          ))}
        </ul>
      )}

      {open ? (
        <div className="mt-5">
          <div
            className={`relative overflow-hidden rounded-[14px] border ${
              dark ? "border-edge bg-raised" : "border-line bg-subtle"
            }`}
          >
            {!loaded && (
              <div
                className={`absolute inset-0 flex items-center justify-center text-[13px] ${
                  dark ? "text-mist" : "text-muted"
                }`}
                aria-live="polite"
              >
                Loading calendar…
              </div>
            )}
            <iframe
              src={`${BOOKING_URL}?embed=true&theme=dark&layout=month_view`}
              title="Book a discovery call with Ansari Product Engineering"
              onLoad={() => setLoaded(true)}
              className="relative block h-[680px] w-full border-0"
              aria-hidden={!loaded}
            />
          </div>
          <div
            className={`mt-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 text-[12px] ${
              dark ? "text-mist" : "text-muted"
            }`}
          >
            <a
              href={BOOKING_URL_SHORT}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${dark ? "hover:text-white" : "hover:text-ink"}`}
            >
              Short on time? Book 15 minutes
            </a>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 font-semibold transition-colors ${
                dark ? "text-white hover:text-brand-200" : "text-brand hover:underline"
              }`}
            >
              Open in a new tab <ArrowUpRight size={13} />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className={`mt-5 inline-flex h-11 cursor-pointer items-center gap-2 rounded-xl px-5 text-[14px] font-semibold transition-colors duration-150 ${
            dark
              ? "bg-white text-ink hover:bg-brand-50"
              : "bg-brand text-white hover:bg-[#2440c4]"
          }`}
        >
          <Calendar size={15} />
          Show available times
        </button>
      )}
    </div>
  );
}
