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

// (btnChild) - Determins the button to use: btnChild = {{ type: "LinkBtn", label: "Se Mere", props: { btnLink: "/", initSize: "base" } }}

// (contactIcon) - Determines the SoMe / Contact Icons and URL's of the SocialsIcon.jsx comp:   
// contactIcon={[
    {type: "phone", url: "tel:+123456789"},
    {type: "email", url: "mailto:lorem@ipsum"},
    {type: "linkedin", url: "https://linkedin.com"}
  ]}
*/

/* Full SoMe Icons table:

// const socialIcons = {
//   phone: PhoneIcon,
//   email: EnvelopeSimpleIcon,
//   linkedin: LinkedinLogoIcon,
//   github: GithubLogoIcon,
//   gitlab: GitlabLogoSimpleIcon,
// };

*/

/* Example Usage with almost all props:

<PersonCard
  themeVariant="secondary"
  initSize="fit"
  imgSrc="/images/new-image.webp"
  imgAlt="Sample Alt Text"
  imgWidth={400}
  imgHeight={200}
  imgStyle="px-2"
  cardTitle="Test 4"
  cardText="Lorem ipsum dolor sit amet, consecutor Lorem ipsum dolor sit amet, consecutor "
  tagChild={[{ label: "Cloud" }, { label: "Server" }]}
  contactIcon={[
    {type: "phone", url: "tel:+123456789"},
    {type: "email", url: "tel:+123456789"},
    {type: "linkedin", url: "tel:+123456789"}
  ]}
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
import SocialsIcon from "../ui/socials-icon/SocialsIcon";
import ActionBtn from "../ui/buttons/ActionBtn";
import LinkBtn from "../ui/buttons/LinkBtn";

export default function PersonCard({
  themeVariant = "primary",
  initSize = "auto",
  imgSrc,
  imgAlt,
  imgWidth,
  imgHeight,
  imgStyle,
  cardStyle = "",
  cardTitle = "",
  cardText = "",
  tagChild,
  contactIcon,
  btnChild
}) {
  const size = {
    auto: "size-auto",
    full: "size-full",
    fit: "size-fit",
  };

  const themeSwatch = {
    primary: {
      heading: "text-primary",
      text: "text-dark"
    },
    secondary: {
      heading: "text-dark",
      text: "text-primary"
    },
  };

  const theme = themeSwatch[themeVariant] || themeSwatch.primary;

  return (
    <article
      className={`px-mobile-inline grid auto-rows-min items-start justify-items-center gap-y-8 py-7 ${size[initSize]} ${theme.bg} ${cardStyle}`}
    >
      <Image
        src={imgSrc || "/images/test-image.jpg"}
        alt={imgAlt || "placeholder image"}
        width={imgWidth || 320}
        height={imgHeight || 240}
        className={`aspect-square w-full rounded-full ${imgStyle}`}
      />
      <div className="px-mobile-inline grid gap-y-6">
        {tagChild && tagChild.length > 0 ? (
          <div className="flex flex-wrap gap-3">
            {tagChild.map((tag) => (
              <TagElem
                key={tag.label}
                label={tag.label}
                linkVariant={false}
                themeVariant={themeVariant}
              />
            ))}
          </div>
        ) : null}
        <div className="grid gap-y-4">
          <h3 className={`text-2xl ${theme.heading}`}>{cardTitle}</h3>
          <p className={`${theme.text}`}>{cardText}</p>
        </div>
        {contactIcon && contactIcon.length > 0 ? (
          <div className="flex justify-evenly">
            {contactIcon.map((contact) => (
              <SocialsIcon
                key={contact.url}
                type={contact.type}
                contactLink={contact.url}
                themeVariant={themeVariant}
              />
            ))}
          </div>
        ) : null}
        {btnChild && btnChild.type === "ActionBtn" && (
          <div className="w-full flex justify-center">
          <ActionBtn themeVariant={themeVariant} {...btnChild.props}>
            {btnChild.label}
          </ActionBtn>
          </div>
        )}
        {btnChild && btnChild.type === "LinkBtn" && (
          <div className="w-full flex justify-center">
          <LinkBtn themeVariant={themeVariant} {...btnChild.props}>
            {btnChild.label}
          </LinkBtn>
          </div>
        )}
      </div>
    </article>
  );
}
