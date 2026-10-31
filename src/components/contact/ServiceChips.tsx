"use client";

import { useState } from "react";
import { SERVICES } from "@/data/services";

const NOT_SURE = "Not sure yet";
const CHIPS = [...SERVICES.map((s) => s.name), NOT_SURE];

export function ServiceChips() {
  const [picked, setPicked] = useState(NOT_SURE);
  return (
    <fieldset className="mt-6">
      <legend className="mb-2.5 text-[13px] font-semibold">What do you need?</legend>
      <input type="hidden" name="service" value={picked} />
      <div className="flex flex-wrap gap-2">
        {CHIPS.map((label) => {
          const on = picked === label;
          return (
            <button
              key={label}
              type="button"
              aria-pressed={on}
              onClick={() => setPicked(label)}
              className={`inline-flex h-9 cursor-pointer items-center rounded-full border px-3.5 text-[13px] font-semibold transition-colors duration-150 ${
                on
                  ? "border-brand bg-brand text-white"
                  : "border-field bg-white text-ink hover:border-brand hover:text-brand"
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
