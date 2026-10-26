"use client";

import { useState } from "react";

const SERVICES = [
  "Automation & AI",
  "Product engineering",
  "Dashboards & portals",
  "Modernization",
  "Maintenance",
  "Not sure yet",
];

/** "What do you need?" chips from the design. The choice is sent with the form as `service`.
 * No chip is pre-selected as a sales nudge — the neutral default is "Not sure yet". */
export function ServiceChips() {
  const [picked, setPicked] = useState("Not sure yet");
  return (
    <fieldset className="mt-[24px]">
      <legend className="mb-[10px] text-[14px] font-semibold">What do you need?</legend>
      <input type="hidden" name="service" value={picked} />
      <div className="flex flex-wrap gap-[8px]">
        {SERVICES.map((label) => {
          const on = picked === label;
          return (
            <button
              key={label}
              type="button"
              aria-pressed={on}
              onClick={() => setPicked(label)}
              className={`inline-flex h-[38px] cursor-pointer items-center rounded-full border px-[14px] text-[14px] font-semibold transition-colors duration-150 ${
                on ? "border-ink bg-ink text-white" : "border-field bg-white text-ink hover:border-ink"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
