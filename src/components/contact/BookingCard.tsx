"use client";

import { useState } from "react";
import { Calendar } from "@/components/icons";
import { CONTACT_EMAIL } from "@/lib/site";

const SLOTS = ["2:00 PM", "2:30 PM", "3:00 PM", "4:00 PM", "4:30 PM", "5:30 PM"];

/** The next five weekdays, starting tomorrow. */
function upcomingWeekdays(count = 5) {
  const days: Date[] = [];
  const d = new Date();
  while (days.length < count) {
    d.setDate(d.getDate() + 1);
    if (d.getDay() !== 0 && d.getDay() !== 6) days.push(new Date(d));
  }
  return days;
}

/**
 * "Prefer to talk?" card from the design, with the inline day/slot picker.
 * TODO(content): replace the email hand-off with the Cal.com booking link once it exists.
 */
export function BookingCard() {
  // Days are computed when the visitor opens the calendar (never at build time), so they are always current.
  const [days, setDays] = useState<Date[] | null>(null);
  const [day, setDay] = useState(1);
  const [slot, setSlot] = useState("3:00 PM");

  const chosen = days?.[day];
  const summary = chosen
    ? `${chosen.toLocaleDateString("en-US", { weekday: "short" })} · ${slot} · 30 min`
    : "";
  const longDate = chosen?.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("30-minute call")}&body=${encodeURIComponent(
    `Hi, I would like to book a 30-minute call on ${longDate} at ${slot} (my time).`,
  )}`;

  return (
    <div id="book" className="scroll-mt-[24px] rounded-[24px] bg-ink p-[28px] text-white">
      <div className="flex items-center gap-[12px]">
        <span className="flex h-[40px] w-[40px] items-center justify-center rounded-[12px] bg-[rgba(143,163,255,0.14)] text-brand-300">
          <Calendar size={19} />
        </span>
        <span className="text-[19px] font-[680] tracking-[-0.01em]">Prefer to talk?</span>
      </div>
      <p className="mt-[12px] text-[15px] leading-[1.6] text-mist">
        Pick a 30-minute slot that suits you. Times overlap UK and US working hours.
      </p>

      {days ? (
        <div className="mt-[18px] rounded-[14px] border border-edge bg-raised p-[16px] motion-safe:animate-[menu-in_200ms_ease-out]">
          <div className="flex items-center justify-between text-[13px] text-mist">
            <span className="font-[650] text-white">Pick a day</span>
            <span>Times shown in your time zone</span>
          </div>
          <div className="mt-[12px] grid grid-cols-5 gap-[6px]">
            {days.map((date, i) => {
              const on = day === i;
              return (
                <button
                  key={date.toISOString()}
                  type="button"
                  aria-pressed={on}
                  aria-label={date.toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                  })}
                  onClick={() => setDay(i)}
                  className={`cursor-pointer rounded-[10px] border py-[8px] transition-colors duration-150 ${
                    on
                      ? "border-brand-300 bg-brand-300 text-[#0B1020]"
                      : "border-edge bg-transparent text-[#E2E8F2] hover:border-brand-300"
                  }`}
                >
                  <span className="block text-[11px] opacity-80">
                    {date.toLocaleDateString("en-US", { weekday: "short" })}
                  </span>
                  <span className="block text-[15px] font-[650]">{date.getDate()}</span>
                </button>
              );
            })}
          </div>
          <div className="mt-[14px] grid grid-cols-3 gap-[6px]">
            {SLOTS.map((label) => {
              const on = slot === label;
              return (
                <button
                  key={label}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setSlot(label)}
                  className={`h-[36px] cursor-pointer rounded-[9px] border text-[13px] font-semibold transition-colors duration-150 ${
                    on
                      ? "border-mint bg-[rgba(98,220,203,0.14)] text-mint"
                      : "border-edge bg-transparent text-haze hover:border-mint"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
          <div className="mt-[14px] flex items-center justify-between gap-[12px] text-[13px] text-mist">
            <span>{summary}</span>
            <a
              href={mailto}
              className="inline-flex h-[38px] items-center rounded-[10px] bg-brand px-[16px] text-[14px] font-semibold text-white transition-colors duration-150 hover:bg-[#2643c9]"
            >
              Confirm
            </a>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setDays(upcomingWeekdays())}
          className="mt-[18px] inline-flex h-[46px] cursor-pointer items-center gap-[8px] rounded-[12px] bg-white px-[20px] text-[15px] font-semibold text-ink transition-colors duration-150 hover:bg-brand-50"
        >
          Show calendar
        </button>
      )}
    </div>
  );
}
