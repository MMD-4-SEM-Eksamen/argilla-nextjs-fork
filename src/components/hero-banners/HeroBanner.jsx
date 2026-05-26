/* Use Case:
// (themeVariant) - Determines theme palette and button/text colors etc: themeVariant = "primary" / "secondary"
// (elemStyle) -  Used to add additonal styling to the Parent container: elemStyle = "mt-10";
// (centeredVariant) - Layout variant: centeredVariant = true (centered content) / false (content left, image right)
// (breakout) - Apply full-width col-span: breakout = true / false (default: true)
// (heroSubHeading) - Subheading text (only shown in non-centered variant): heroSubHeading = "Discover More"
// (heroHeading) - Main heading text: heroHeading = "Welcome to Our Site"
// (heroBodyText) - Body text below heading: heroBodyText = "Lorem ipsum dolor sit amet..."
// (backgroundImageConfig) - Config object for background image: backgroundImageConfig = { imgSrc: "path/to/bg.webp", imgWidth: 1920, imgHeight: 1080 }
// (foregroundImageConfig) - Config object for foreground image (non-centered only): foregroundImageConfig = { imgSrc: "path/to/fg.webp", imgWidth: 600, imgHeight: 600, themeVariant: "primary", strokeStyle: "bottomRight", roundingVariant: "medium" }
// (buttonLabel) - Button text (if empty, no button rendered): buttonLabel = "Se Mere"
// (buttonLink) - Link for button href: buttonLink = "/home"
// (buttonConfig) - Config object for button styling: buttonConfig = { initSize: "medium", bpSize: "toLarge" }

*/

/* Example Usage - Centered Variant:

<HeroBanner
  centeredVariant={true}
  breakout={false}
  heroHeading="Lorem Mc Ipsum Dolor Sit Amet"
  heroBodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. "
  backgroundImageConfig={{ imgSrc: "/images/working.webp" }}
  buttonLabel="Se Mere"
  buttonLink="/"
  buttonConfig={{ initSize: "medium", bpSize: "toLarge" }}
/>

*/

/* Example Usage - Non-Centered Variant (with foreground image):

<HeroBanner
  themeVariant="secondary"
  centeredVariant={false}
  heroSubHeading="Lorem"
  heroHeading="Lorem Mc Ipsum Dolor Sit Amet"
  heroBodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. "
  backgroundImageConfig={{ imgSrc: "/images/working.webp" }}
  foregroundImageConfig={{ 
    imgSrc: "/images/software.webp", 
    imgWidth: 600, 
    imgHeight: 600,
    strokeStyle: "bottom",
    roundingVariant: "medium"
  }}
  buttonLabel="Se Mere"
  buttonLink="/"
  buttonConfig={{ initSize: "medium", bpSize: "toLarge" }}
/>

*/

import ImageWrapper from "../ui/image-wrapper/ImageWrapper";
import LinkBtn from "../ui/buttons/LinkBtn";

export default function HeroBanner({
  themeVariant = "primary",
  elemStyle,
  centeredVariant = false,
  breakout = true,
  heroSubHeading = "",
  heroHeading = "",
  heroBodyText = "",
  backgroundImageConfig = {},
  foregroundImageConfig = {},
  buttonLabel = "",
  buttonLink = "",
  buttonConfig = {},
}) {
  const themeSwatch = {
    primary: {
      opagueOverlay: "bg-light/40",
      subHeading: "text-dark",
      heading: "text-primary",
      bodyText: "text-dark",
    },
    secondary: {
      opagueOverlay: "bg-dark/40",
      subHeading: "text-light",
      heading: "text-secondary",
      bodyText: "text-light",
    },
    tertiary: {
      opagueOverlay: "bg-dark",
      subHeading: "text-light",
      heading: "text-secondary",
      bodyText: "text-light",
    },
    quaternary: {
      opagueOverlay: "bg-secondary",
      subHeading: "text-dark",
      heading: "text-primary",
      bodyText: "text-dark",
    },
  };

  const theme = themeSwatch[themeVariant] || themeSwatch.primary;

  const defaultBackgroundConfig = {
    imgWidth: 1920,
    imgHeight: 1080,
    ...backgroundImageConfig,
  };

  return (
    <div
      className={`${breakout ? "col-span-full" : ""} ${elemStyle} grid *:[grid-area:1/1]`}
    >
      {themeVariant === "primary" || themeVariant === "secondary" ? (
        <ImageWrapper {...defaultBackgroundConfig} />
      ) : null}
      {centeredVariant ? (
        <div
          className={`${theme.opagueOverlay} ${themeVariant === "tertiary" || themeVariant === "quaternary" ? "min-h-screen" : ""} px-mobile-inline grid w-full place-content-center place-items-center gap-20 py-10 md:px-20 md:py-20`}
        >
          <div className="grid max-w-[75ch] gap-12 text-center">
            <h1 className={`${theme.heading} font-serif text-4xl md:text-6xl`}>
              {heroHeading}
            </h1>
            <p className={`${theme.bodyText} text-base md:text-3xl`}>
              {heroBodyText}
            </p>
          </div>
          {buttonLabel && (
            <LinkBtn
              btnLink={buttonLink}
              themeVariant={themeVariant}
              {...buttonConfig}
            >
              {buttonLabel}
            </LinkBtn>
          )}
        </div>
      ) : (
        <div
          className={`${theme.opagueOverlay} px-mobile-inline flex ${themeVariant === "tertiary" || themeVariant === "quaternary" ? "min-h-screen" : ""} w-full items-center justify-between gap-4 py-10 md:px-20 md:py-20`}
        >
          <div className="grid max-w-[75ch] gap-20">
            <div className="grid gap-5">
              <span className={`${theme.subHeading} text-xl md:text-3xl`}>
                {heroSubHeading}
              </span>
              <h1
                className={`${theme.heading} font-serif text-4xl md:text-6xl`}
              >
                {heroHeading}
              </h1>
              <p className={`${theme.bodyText} mt-3 text-base md:text-3xl`}>
                {heroBodyText}
              </p>
            </div>
            {buttonLabel && (
              <LinkBtn
                btnLink={buttonLink}
                themeVariant={themeVariant}
                {...buttonConfig}
              >
                {buttonLabel}
              </LinkBtn>
            )}
          </div>
          <div className="aspect-square max-h-150 max-w-150 max-xl:hidden">
            <ImageWrapper
              themeVariant={themeVariant}
              strokeStyle="bottomRight"
              {...foregroundImageConfig}
            />
          </div>
        </div>
      )}
    </div>
  );
}
