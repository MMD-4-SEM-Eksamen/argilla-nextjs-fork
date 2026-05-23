/* Use Case:
// (themeVariant) - Determines theme palette: themeVariant = "primary" / "secondary"
// (initSize) - Determines card parent container sizing: initSize = "auto" / "full" / "fit"

// (cardStyle) - Used to add aditonal styling to card parent container: cardStyle = "px-1"

// (imgSize) - Determines how the image should scale and its aspect ratio: imgSize = "portrait" / "square";
// (imgSrc) - Determins the src of the image, will default to a placeholder img in public / images: imgSrc = "path/to/img.webp";
// (imgAlt) - Determins the alt description of the image, will default to a placeholder text: imgAlt = "An Image of Something";
// (imgWidth) - Determins the width of the image, will default to placeholder width: imgWidth = {400};
// (imgHeight) - Determins the src of the image, will default to placeholder height: imgHeight = {200};
// (imgStyle) -  Used to add aditonal styling to the Image container: imgStyle = "px-4";
// (imgSrc) - Determins the src of the image, will default to a placeholder img in public / images: imgSrc = "path/to/img.webp";

// (cardTitle) - Determines the heading title of the card element: cardTitle="Lorem Ipsum"
// (cardText) - Determines the body text of the card element: cardText="Lorem Ipsum"
// (cardCitation) - Determines citation text of body text, if none is provided, won't be rendered: cardCitation="Lorem McIpsum"

// (tagChild) - Determines what the <TagElem> -> <span> child elem texts should be in the <TagElem> component: tagChild={[{ label: "Software" }, { label: "Hardware" }]}
// (filterKey) - Used for filtering when used later on (UPDATE ME).
// (baseUrl) - Sets the base url for filtering when used later on (UPDATE ME).

// (btnChild) - Determins the button to use: btnChild = {{ type: "LinkBtn", label: "Se Mere", props: { btnLink: "/", initSize: "base" } }}
*/

/* Example Usage with almost all props:

<ImageCard
  themeVariant="secondary"
  initSize="fit"
  imgSize="square"
  imgSrc="/images/new-image.webp"
  imgAlt="Sample Alt Text"
  imgWidth={400}
  imgHeight={200}
  imgStyle="px-2"
  cardTitle="Test 4"
  cardText="Lorem ipsum dolor sit amet, consecutor Lorem ipsum dolor sit amet, consecutor "
  cardCitation="- Lorem McIpsum"
  tagChild={[{ label: "Cloud" }, { label: "Server" }]}
  btnChild={{
    type: "LinkBtn",
    label: "Se Mere",
    props: {
      btnLink: "/",
      initSize: "medium"
    },
  }}
/>;
*/

import Image from "next/image";
import TagElem from "../ui/tag/TagElem";
import ActionBtn from "../ui/buttons/ActionBtn";
import LinkBtn from "../ui/buttons/LinkBtn";

export default function ImageCard({
  themeVariant = "primary",
  initSize = "auto",
  imgSize = "portrait",
  imgSrc,
  imgAlt,
  imgWidth,
  imgHeight,
  imgStyle,
  cardStyle = "",
  cardTitle = "",
  cardText = "",
  cardCitation,
  tagChild,
  filterKey = "category",
  baseUrl = "/",
  btnChild,
}) {
  const size = {
    auto: "size-auto",
    full: "size-full",
    fit: "size-fit",
  };

  const imageSize = {
    portrait: "w-full min-h-[240px] aspect-[4/3]",
    square: "w-full aspect-square",
  };

  const themeSwatch = {
    primary: {
      bg: "bg-primary",
      heading: "text-secondary",
      text: "text-light",
    },
    secondary: {
      bg: "bg-secondary",
      heading: "text-primary",
      text: "text-dark",
    },
  };

  const theme = themeSwatch[themeVariant] || themeSwatch.primary;
  return (
    <article
      className={`grid auto-rows-min items-start justify-items-center gap-y-6 pb-7 rounded-xl ${size[initSize]} ${theme.bg} ${cardStyle}`}
    >
      <Image
        src={imgSrc || "/images/test-image.jpg"}
        alt={imgAlt || "placeholder image"}
        width={imgWidth || 320}
        height={imgHeight || 240}
        className={`rounded-t-xl ${imgStyle} ${imageSize[imgSize]}`}
      />
      <div className="px-mobile-inline grid gap-y-6 justify-items-center">
        <div className="grid gap-y-4">
          <h3 className={`text-2xl ${theme.heading}`}>{cardTitle}</h3>
          {tagChild && tagChild.length > 0 ? (
            <div className="flex flex-wrap gap-3">
              {tagChild.map((tag) => (
                <TagElem
                  key={tag.label}
                  label={tag.label}
                  filterKey={tag.filterKey || filterKey}
                  baseUrl={baseUrl}
                  themeVariant={themeVariant}
                />
              ))}
            </div>
          ) : null}
          <div className={`${cardCitation ? "grid gap-y-4" : ""}`}>
            <p className={`${theme.text}`}>{cardText}</p>
            {cardCitation ? (
              <p className={`${theme.text} place-self-end`}>{cardCitation}</p>
            ) : null}
          </div>
        </div>
        {btnChild && btnChild.type === "ActionBtn" && (
          <ActionBtn themeVariant={themeVariant} {...btnChild.props}>
            {btnChild.label}
          </ActionBtn>
        )}
        {btnChild && btnChild.type === "LinkBtn" && (
          <LinkBtn themeVariant={themeVariant} {...btnChild.props}>
            {btnChild.label}
          </LinkBtn>
        )}
      </div>
    </article>
  );
}
