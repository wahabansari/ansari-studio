"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Calendar } from "@/components/icons";
import { BOOKING_URL, BOOKING_URL_SHORT } from "@/lib/site";

/**
 * "Prefer to talk?" card from the design. "Show calendar" loads the real Cal.com booking page inline
 * (dark theme), so visitors only see times that are actually free. Cal.com loads only after that click,
 * or when the page is opened at #book from a "Book a 30-minute call" button.
 */
export function BookingCard() {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

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
      className="scroll-mt-[24px] rounded-[24px] bg-ink p-[28px] text-white max-[480px]:p-[20px]"
    >
      <div className="flex items-center gap-[12px]">
        <span className="flex h-[40px] w-[40px] items-center justify-center rounded-[12px] bg-[rgba(143,163,255,0.14)] text-brand-300">
          <Calendar size={19} />
        </span>
        <span className="text-[19px] font-[680] tracking-[-0.01em]">Prefer to talk?</span>
      </div>
      <p className="mt-[12px] text-[15px] leading-[1.6] text-mist">
        Pick a 30-minute slot that suits you. Times overlap UK and US working hours.
      </p>

      {open ? (
        <div className="mt-[18px] motion-safe:animate-[menu-in_200ms_ease-out]">
          <div className="relative overflow-hidden rounded-[14px] border border-edge bg-raised">
            {!loaded && (
              <div
                className="absolute inset-0 flex items-center justify-center text-[14px] text-mist"
                aria-hidden="true"
              >
                Loading calendar…
              </div>
            )}
            <iframe
              src={`${BOOKING_URL}?embed=true&theme=dark&layout=month_view`}
              title="Book a 30-minute call with Ansari Studio"
              onLoad={() => setLoaded(true)}
              className="relative block h-[680px] w-full border-0"
            />
          </div>
          <div className="mt-[14px] flex flex-wrap items-center justify-between gap-x-[16px] gap-y-[8px] text-[13px] text-mist">
            <a href={BOOKING_URL_SHORT} target="_blank" rel="noopener" className="hover:text-white">
              Short on time? Book 15 minutes
            </a>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-[6px] font-semibold text-white hover:text-brand-200"
            >
              Open in a new tab <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="mt-[18px] inline-flex h-[46px] cursor-pointer items-center gap-[8px] rounded-[12px] bg-white px-[20px] text-[15px] font-semibold text-ink transition-colors duration-150 hover:bg-brand-50"
        >
          Show calendar
        </button>
      )}
    </div>
  );
}
