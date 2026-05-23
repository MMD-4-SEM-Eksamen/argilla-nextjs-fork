/* Use case: 
// children - Put an SVG or a text element in it.
// (themeVariant) - Determines theme palette: themeVariant = "primary" / "secondary"
// (initSize) - Determines elements initial sizing: initSize = "medium" / "large"
// (bpSize) - Determines breakpoint sizing: bpSize = "medium" / "large"
*/

export default function IconWrapper({
  children,
  themeVariant = "primary",
  initSize = "base",
  bpSize = "",
}) {

  const themeSwatch = {
    primary: "bg-secondary *:fill-primary *:text-primary",
    secondary: "bg-primary *:fill-secondary *:text-secondary",
  }
  
  const size = {
    small: "min-w-[48px] min-h-[48px] *:m-3 text-2xl",
    base: "min-w-[60px] min-h-[60px] *:m-3 text-3xl",
    medium: "min-w-[72px] min-h-[72px] *:m-3 text-4xl",
    large: "min-w-[96px] min-h-[96px] *:m-4 text-5xl",
  }

  const responsiveSize = {
    toBase: "md:min-w-[60px] md:min-h-[60px] md:*:m-3 md:text-3xl",
    toMedium: "md:min-w-[72px] md:min-h-[72px] md:*:m-3 md:text-4xl",
    toLarge: "md:min-w-[96px] md:min-h-[96px] md:*:m-4 md:text-5xl",
  }

  const spanText = `[&>:not(svg)]:overflow-hidden`

  return (
    <div className={`place-items-center grid w-fit aspect-square *:aspect-square rounded-full ${spanText} ${themeSwatch[themeVariant]} ${size[initSize]} ${responsiveSize[bpSize]}`}>
      {children}
    </div>
  )
}