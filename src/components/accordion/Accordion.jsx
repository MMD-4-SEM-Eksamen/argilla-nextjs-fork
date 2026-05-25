"use client";

/* Use case: 
// (hasCheckboxes) - Used to determine whether or not to show the checkboxes at the end of the accordion.
// items - An array of objects, where each object represents an accordion item. Each object should have the following properties:
  - id: A unique identifier for the accordion item.
  - title: The title of the accordion item, which will be displayed on the button that toggles the accordion.
  - slides: An array of objects, where each object represents a slide within the accordion item. Each object should have the following property:
    - content: The content of the slide, which will be displayed when the accordion item is expanded.
*/

import { useState } from "react";
import { CaretDownIcon } from "@phosphor-icons/react";
import Pagination from "../ui/pagination/Pagination";

// ─── Slider ───────────────────────────────────────────────────────────────────

function AccordionSlider({ slides }) {
  const [page, setPage] = useState(0);
  if (!slides || slides.length === 0) return null;
  const total = slides.length;
  const hasPagination = total > 1;

  return (
    <div className="bg-light px-6 pt-7 pb-5">
      <p className="text-dark mb-5 font-sans text-base leading-relaxed">
        {slides[page].content}
      </p>

      {hasPagination && (
        <Pagination page={page} total={total} setPage={setPage} />
      )}
    </div>
  );
}

// ─── Row ──────────────────────────────────────────────────────────────────────

function AccordionRow({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-light border-t last:border-b-0">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className={[
          "text-secondary flex w-full items-center justify-between gap-3 px-5 py-4.5 text-left transition-colors duration-200",
          open
            ? "border-secondary bg-dark text-light border-l-8"
            : "hover:bg-black/10",
        ].join(" ")}
      >
        <span className="font-sans text-base leading-snug font-bold tracking-[0.01em]">
          {item.title}
        </span>
        <span className="shrink-0 opacity-85">
          {open ? (
            <CaretDownIcon className="transition-all" />
          ) : (
            <CaretDownIcon className="-rotate-90 transition-all" />
          )}
        </span>
      </button>

      {open && <AccordionSlider slides={item.slides} />}
    </div>
  );
}

// ─── Checkboxes ─────────────────────────────────────────────────────────────────────

function AccordionCheckbox() {
  return (
    <div>
      <div className="mt-6 flex items-center gap-3 px-5">
        <input
          type="checkbox"
          id="checkbox"
          className="border-light accent-dark size-5 cursor-pointer"
        />
        <label htmlFor="checkbox" className="text-secondary font-sans">
          - Jeg har gennemgået de relevante vilkår og politikker.
        </label>
      </div>
      <div className="mt-6 flex items-center gap-3 px-5">
        <input
          type="checkbox"
          id="checkbox"
          className="border-light accent-dark size-5 cursor-pointer"
        />
        <label htmlFor="checkbox" className="text-secondary font-sans">
          - Jeg forstår, hvordan mine data behandles og beskyttes.
        </label>
      </div>
      <div className="mt-6 flex items-center gap-3 px-5">
        <input
          type="checkbox"
          id="checkbox"
          className="border-light accent-dark size-5 cursor-pointer"
        />
        <label htmlFor="checkbox" className="text-secondary font-sans">
          - Jeg accepterer de rammer og retningslinjer, der gælder for brugen af
          platformen.
        </label>
      </div>
    </div>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────

export default function Accordion({
  items = [],
  hasCheckboxes = false,
  title = "Ofte stillede spørgsmål",
  description = "lorem ipsum",
}) {
  return (
    <div className="bg-primary mx-auto w-full max-w-360 overflow-hidden px-8 py-10">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-secondary font-serif text-5xl">{title}</h2>
        <p className="text-light mb-6 font-sans">{description}</p>
        {items.map((item) => (
          <AccordionRow key={item.id} item={item} />
        ))}
        {hasCheckboxes && <AccordionCheckbox />}
      </div>
    </div>
  );
}
