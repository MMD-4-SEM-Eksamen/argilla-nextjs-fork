/* Use case:
// (themeVariant) - Determines border style: themeVariant = "bottom" / "bottomRight" / "bottomLeft"
// (roundingVariant) - Determines border radius: roundingVariant = "base" / "medium"
// (bpRounding) - Determines responsive rounding: bpRounding = "toMedium"
// (imgSrc) - Determins the src of the image, will default to a placeholder img in public / images: imgSrc = "path/to/img.webp";
// (imgAlt) - Determins the alt description of the image, will default to a placeholder text: imgAlt = "An Image of Something";
// (imgWidth) - Determins the width of the image, will default to placeholder width: imgWidth = {400};
// (imgHeight) - Determins the src of the image, will default to placeholder height: imgHeight = {200};
// (imgStyle) -  Used to add aditonal styling to the Image container: imgStyle = "px-4";
// (imgSrc) - Determins the src of the image, will default to a placeholder img in public / images: imgSrc = "path/to/img.webp";
*/

import Image from "next/image";

export default function ImageWrapper({
  themeVariant,
  strokeStyle,
  roundingVariant,
  bpRounding,
  imgStyle,
  imgSrc,
  imgWidth,
  imgHeight,
  imgAlt,
}) {

  const strokeSwatch = {
    primary: {
      bottom: "border-b-8 border-primary",
      bottomRight: "border-b-8 border-r-8 border-primary",
      bottomLeft: "border-b-8 border-l-8 border-primary",
    },
    secondary: {
      bottom: "border-b-8 border-secondary",
      bottomRight: "border-b-8 border-r-8 border-secondary",
      bottomLeft: "border-b-8 border-l-8 border-secondary",
    }
  }

  const theme = strokeSwatch[themeVariant]?.[strokeStyle];

  const roundingPresets = {
    base: "rounded-xl",
    medium: "rounded-2xl"
  }

  const roundingBp = {
    toMedium: "md:rounded-2xl"
  }

  return (
    <Image 
      src={imgSrc || "/images/test-image.jpg"}
      alt={imgAlt || "placeholder image"}
      width={imgWidth || 320}
      height={imgHeight || 240}
      className={`object-cover w-full h-full ${imgStyle} ${theme} ${roundingPresets[roundingVariant]} ${roundingBp[bpRounding]}`}
      />
  )
}