/* Use case: 
// (handleBtnAction) - Used for applying onClick actions if needed.
// (btnSize) - Determines button sizing: btnSize = "medium" / "large"
// (mdSize) - Determines breakpoint sizing: mdSize = "medium" / "large"
// (themeVariant) - Determines theme palette: themeVariant = "primary" / "secondary"
// (btnClass) - Used for additional classes.
*/

export default function ActionBtn({
  handleBtnAction,
  btnSize = "default",
  mdSize,
  themeVariant = "primary",
  btnClass = "",
  children,
}) {
  const size = {
    default:
      "min-w-[128px] h-[36px] text-sm rounded-xl px-3 py-1.5 hover:border-b-3",
    medium:
      "min-w-[176px] h-[44px] text-base rounded-2xl px-4 py-2 hover:border-b-[3.5px]",
    large:
      "min-w-[256px] h-[56px] text-lg rounded-3xl px-6 py-3 hover:border-b-4",
  };

  const bpSize = {
    medium:
      "md:min-w-[176px] md:h-[44px] md:text-base md:rounded-2xl md:px-4 md:py-2 md:hover:border-b-[3.5px]",
    large:
      "md:min-w-[256px] md:h-[56px] md:text-lg md:rounded-3xl md:px-6 md:py-3 md:hover:border-b-4",
  };

  const btnTheme = {
    primary:
      "bg-secondary text-primary",
    secondary:
      "bg-primary text-secondary",
  };

  const btnStyling = `font-bold w-fit inline-flex place-items-center md:cursor-pointer font-display ${btnTheme[themeVariant]} ${size[btnSize]} ${btnClass} ${bpSize[mdSize]} transition-all duration-150 ease-in-out hover:border-b-dark`;
  const spanText = `block overflow-hidden text-ellipsis text-nowrap w-full text-center`;

  return (
    <button
      type="button"
      onClick={handleBtnAction}
      className={btnStyling}
    >
      <span className={`${spanText}`}>{children}</span>
    </button>
  );
}
