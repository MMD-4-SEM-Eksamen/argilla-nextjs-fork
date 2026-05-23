/* Use case: 
// (handleBtnAction) - Used for applying onClick actions if needed.
// (btnLink) - Link for the 'href = "" ' of the <link> parent container: btnLink = "/page"
// (initSize) - Determines elements initial size: initSize = "base" / "large"
// (bpSize) - Determines breakpoint sizing: bpSize = "toMedium" / "toLarge"
// (themeVariant) - Determines theme palette: themeVariant = "primary" / "secondary"
// (btnClass) - Used for additional classes.
*/

import Link from "next/link";

export default function LinkBtn({
  handleBtnAction,
  btnLink = "",
  initSize = "base",
  bpSize,
  themeVariant = "primary",
  btnClass = "",
  children,
}) {
  const size = {
    base:
      "min-w-[128px] h-[36px] text-sm rounded-xl px-3 py-1.5 hover:border-b-3",
    medium:
      "min-w-[176px] h-[44px] text-base rounded-2xl px-4 py-2 hover:border-b-[3.5px]",
    large:
      "min-w-[256px] h-[56px] text-lg rounded-3xl px-6 py-3 hover:border-b-4",
  };

    const responsiveSize = {
    toMedium:
      "md:min-w-[176px] md:h-[44px] md:text-base md:rounded-2xl md:px-4 md:py-2 md:hover:border-b-[3.5px]",
    toLarge:
      "md:min-w-[256px] md:h-[56px] md:text-lg md:rounded-3xl md:px-6 md:py-3 md:hover:border-b-4",
  };

  const themeSwatch = {
    primary:
      "bg-secondary text-primary",
    secondary:
      "bg-primary text-secondary",
  };

  const btnStyling = `font-bold w-fit inline-flex place-items-center md:cursor-pointer font-display ${themeSwatch[themeVariant]} ${size[initSize]} ${btnClass} ${responsiveSize[bpSize]} transition-all duration-150 ease-in-out hover:border-b-dark`;
  const spanText = ` block overflow-hidden text-ellipsis text-nowrap w-full text-center`;

  return (
    <Link
      href={btnLink}
      onClick={handleBtnAction}
      className={btnStyling}
    >
      <span className={`${spanText}`}>{children}</span>
    </Link>
  );
}
