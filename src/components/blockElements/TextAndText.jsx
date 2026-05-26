"use client";

/* Use case:
// title - Optional main heading text.
// leftTitle - Heading for the first text block.
// leftDescription - Paragraph text for the first text block.
// rightTitle - Heading for the second text block.
// rightDescription - Paragraph text for the second text block.
// reverseOrder - Boolean to reverse the order of the text blocks on large screens.
// className - Additional classes for the main container.
*/

export default function TextAndText({
  title,
  leftTitle,
  leftDescription,
  rightTitle,
  rightDescription,
  reverseOrder = false,
  className = "",
}) {
  const layoutOrder = reverseOrder ? "lg:grid-flow-col-dense" : "";

  return (
    <section
      className={`bg-light flex flex-col gap-8 rounded-4xl py-4 sm:gap-6 sm:py-6 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12 lg:py-0 ${layoutOrder} ${className} items-center`}
    >
      {title ? (
        <h2 className="text-primary col-span-full text-center font-serif text-4xl leading-none font-medium sm:text-5xl">
          {title}
        </h2>
      ) : null}

      <div
        className={`${reverseOrder ? "lg:order-2 lg:col-start-2" : "lg:order-1"} space-y-4 sm:space-y-5 lg:max-w-160 lg:pl-4`}
      >
        <div className="space-y-4">
          <h3 className="text-primary text-center font-sans text-3xl leading-none font-medium sm:text-4xl">
            {leftTitle}
          </h3>
          <p className="text-dark/80 max-w-prose text-sm leading-6 sm:text-[0.95rem]">
            {leftDescription}
          </p>
        </div>
      </div>

      <div
        className={`${reverseOrder ? "lg:order-1 lg:col-start-1" : "lg:order-2"} space-y-4 sm:space-y-5 lg:max-w-160 lg:pl-4`}
      >
        <div className="space-y-4">
          <h3 className="text-primary text-center font-sans text-3xl leading-none font-medium sm:text-4xl">
            {rightTitle}
          </h3>
          <p className="text-dark/80 max-w-prose text-sm leading-6 sm:text-[0.95rem]">
            {rightDescription}
          </p>
        </div>
      </div>
    </section>
  );
}
