/* Use case:
// (bulletNumber) - Number or label shown inside the bullet.
// (title) - Title text shown next to the bullet.
// (bulletClass) - Used for additional classes.
// (children) - Body text rendered below the title.
*/

export default function BulletpointTitle({
  bulletNumber = "01",
  title = "Title",
  bulletClass = "",
  children,
}) {
  const bulletStyling = `flex items-start gap-4 md:gap-5 ${bulletClass}`;
  const circleStyling =
    "bg-secondary text-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-display text-2xl font-normal font-sans md:h-16 md:w-16 md:text-[2rem]";
  const titleStyling =
    "text-primary font-display text-2xl leading-tight font-normal md:text-3xl";
  const contentStyling =
    "text-primary mt-4 font-display text-base leading-snug md:text-lg max-w-text-max";

  return (
    <div className={bulletStyling}>
      <span className={circleStyling}>{bulletNumber}</span>

      <div className="min-w-0 flex-1">
        <div className={titleStyling}>{title}</div>
        <div className={contentStyling}>{children}</div>
      </div>
    </div>
  );
}
