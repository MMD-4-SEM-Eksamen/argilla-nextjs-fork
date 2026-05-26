"use client";

/* Use case:
// title - Main heading text.
// description - Paragraph text for the content.
// reverseOrder - Boolean to reverse the order of facts and text on large screens.
// className - Additional classes for the main container.
*/

import FactbannerVertical from "../factbanner/FactbannerVertical";

export default function FactsAndText({
  title,
  description,
  reverseOrder = false,
  className = "",
}) {
  const layoutOrder = reverseOrder ? "lg:grid-flow-col-dense" : "";

  return (
    <section
      className={`bg-light flex flex-col gap-8 rounded-4xl py-4 sm:gap-6 sm:py-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-0 ${layoutOrder} ${className}`}
    >
      <div
        className={`${reverseOrder ? "lg:order-2 lg:col-start-2" : "lg:order-1"} flex items-center justify-center lg:h-full`}
      >
        <FactbannerVertical />
      </div>

      <div
        className={`${reverseOrder ? "lg:order-1 lg:col-start-1" : "lg:order-2"} space-y-4 sm:space-y-5 lg:max-w-160 lg:pl-4`}
      >
        <div className="flex flex-col items-center space-y-4">
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
