"use client";

/* Use case:
// title - Main heading text.
// description - Paragraph text for the content.
// reverseOrder - Boolean to reverse the order of bullets and text on large screens.
// bullets - Array of strings for each bullet. If omitted, four defaults are used.
// className - Additional classes for the main container.
*/

import Bulletpoint from "../bulletpoints/Bulletpoint";

const DEFAULT_BULLETS = [
  "Strategisk rådgivning og arkitektur",
  "Skræddersyede integrationer og automations",
  "Skalerbar hosting og drift",
  "Datadrevet optimering og rapportering",
];

export default function BulletsAndText({
  title,
  description,
  reverseOrder = false,
  bullets = DEFAULT_BULLETS,
  className = "",
}) {
  const layoutOrder = reverseOrder ? "lg:grid-flow-col-dense" : "";

  const items = bullets.length ? bullets.slice(0, 4) : DEFAULT_BULLETS;

  return (
    <section
      className={`bg-light flex flex-col items-center gap-8 rounded-4xl py-4 sm:gap-6 sm:py-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-0 ${layoutOrder} ${className}`}
    >
      <div
        className={`${reverseOrder ? "lg:order-2 lg:col-start-2" : "lg:order-1"} flex flex-col items-start justify-center lg:h-full`}
      >
        <div className="flex w-full flex-col gap-6">
          {items.map((text, idx) => (
            <Bulletpoint
              key={idx}
              bulletNumber={String(idx + 1).padStart(2, "0")}
            >
              {text}
            </Bulletpoint>
          ))}
        </div>
      </div>

      <div
        className={`${reverseOrder ? "lg:order-1 lg:col-start-1" : "lg:order-2"} space-y-4 sm:space-y-5 lg:max-w-160 lg:pl-4`}
      >
        <div className="space-y-4">
          <h2 className="text-primary font-serif text-4xl leading-none font-medium sm:text-5xl">
            {title}
          </h2>
          <p className="text-dark/80 max-w-prose text-sm leading-6 sm:text-[0.95rem]">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
