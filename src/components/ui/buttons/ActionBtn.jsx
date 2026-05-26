/* Use case: 
// (handleBtnAction) - Used for applying onClick actions if needed.
// (initSize) - Determines elements initial size: initSize = "base" / "large"
// (bpSize) - Determines breakpoint sizing: bpSize = "toMedium" / "toLarge"
// (themeVariant) - Determines theme palette: themeVariant = "primary" / "secondary"
// (btnClass) - Used for additional classes.
// (type) - Determines button type: type = "button" / "submit" / "reset"
*/

export default function ActionBtn({
  handleBtnAction,
  initSize = "base",
  bpSize,
  themeVariant = "primary",
  btnClass = "",
  type = "button",
  children,
}) {
  const size = {
    base:
      "min-w-[128px] h-[36px] text-sm rounded-xl px-3 py-1.5 hover:border-b-3 hover:border-r-3",
    medium:
      "min-w-[176px] h-[44px] text-base rounded-2xl px-4 py-2 hover:border-b-[3.5px] hover:border-r-[3.5px]",
    large:
      "min-w-[256px] h-[56px] text-lg rounded-3xl px-6 py-3 hover:border-b-4 hover:border-r-4",
  };

  const responsiveSize = {
    toMedium:
      "md:min-w-[176px] md:h-[44px] md:text-base md:rounded-2xl md:px-4 md:py-2 md:hover:border-b-[3.5px] hover:border-r-[3.5px]",
    toLarge:
      "md:min-w-[256px] md:h-[56px] md:text-lg md:rounded-3xl md:px-6 md:py-3 md:hover:border-b-4 hover:border-r-4",
  };

  const themeSwatch = {
    primary: "bg-secondary text-primary hover:border-b-dark hover:border-r-dark",
    secondary: "bg-primary text-secondary hover:border-b-dark hover:border-r-dark",
  };

  const btnStyling = `font-bold w-fit inline-flex place-items-center md:cursor-pointer font-display transition-all duration-150 ease-in-out ${themeSwatch[themeVariant]} ${size[initSize]} ${btnClass} ${responsiveSize[bpSize]}`;
  const spanText = `block overflow-hidden text-ellipsis text-nowrap w-full text-center`;

  return (
    <button type={type} onClick={handleBtnAction} className={btnStyling}>
      <span className={`${spanText}`}>{children}</span>
    </button>
  );
}
