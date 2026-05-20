/* Use case:
// (bulletSize) - Determines bullet sizing: bulletSize = "medium" / "large"
// (bulletNumber) - Number or label shown inside the bullet.
// (bulletClass) - Used for additional classes.
// (children) - Text or content rendered next to the number.
*/

export default function Bulletpoint({
  bulletSize = "medium",
  bulletNumber = "01",
  bulletClass = "",
  children,
}) {
  const size = {
    medium: "gap-4 md:gap-5",
    large: "gap-5 md:gap-6",
  };

  const circleSize = {
    medium: "h-12 w-12 text-2xl md:h-16 md:w-16 md:text-[2rem] font-sans",
    large: "h-14 w-14 text-3xl md:h-20 md:w-20 md:text-[2.5rem] font-serif",
  };

  const textSize = {
    medium: "text-base leading-snug md:text-lg",
    large: "text-lg leading-snug md:text-xl",
  };

  const bulletStyling = `flex items-center ${size[bulletSize]} ${bulletClass}`;
  const circleStyling = `bg-secondary text-primary flex shrink-0 items-center justify-center rounded-full ${circleSize[bulletSize]}`;
  const contentStyling = `text-primary font-sans max-w-text-max ${textSize[bulletSize]}`;

  return (
    <div className={bulletStyling}>
      <span className={circleStyling}>{bulletNumber}</span>
      <div className={contentStyling}>{children}</div>
    </div>
  );
}
