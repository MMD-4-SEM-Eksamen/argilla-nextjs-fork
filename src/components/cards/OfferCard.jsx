/* Use Case:
// (themeVariant) - Determines theme palette: themeVariant = "primary" / "secondary"
// (initSize) - Determines card parent container sizing: initSize = "auto" / "full" / "fit"
// (cardStyle) - Used to add aditonal styling to card parent container: cardStyle = "px-1"

// (iconChild) - Determines what the icon child element should be in the <IconWrapper> component: iconChild={<GlobeIcon />} 

// (cardTitle) - Determines the heading title of the card element: cardTitle="Lorem Ipsum"
// (cardText) - Determines the body text of the card element: cardText="Lorem Ipsum"
// (cardPrice) - Determines the price part of body text, if none is provided, won't be rendered: cardPrice="Lorem McIpsum"

// (btnChild) - Determins the button to use: btnChild = {{ type: "LinkBtn", label: "Se Mere", props: { btnLink: "/", initSize: "base" } }}

// (cardFeaturesField) - Text for the Features text field above the bulletpoints: cardFeaturesField = "The Features:"
// (bulletChild) - Generates and determines the text in the bulletPoint texts for each label: bulletChild={[{ label: "Software" }, { label: "Hardware" }]}
*/

/* Example Usage with almost all props:

<OfferCard
  themeVariant="secondary"
  initSize="fit"
  iconChild={<ShieldIcon />}
  cardTitle="Test 4"
  cardText="Lorem ipsum dolor sit amet, consecutor Lorem ipsum dolor sit amet, consecutor "
  cardPrice="1337 DKK"
  cardFeaturesField="Features List:"
  bulletChild={[{ label: "Lorem Mc Ipsum og Dolor Sit Amet og sådan noget" }, { label: "Det her er andet type tekst indhold." }]}
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

import IconWrapper from "../ui/icon-wrapper/IconWrapper";
import ActionBtn from "../ui/buttons/ActionBtn";
import LinkBtn from "../ui/buttons/LinkBtn";
import { CaretRightIcon } from "@phosphor-icons/react/dist/ssr";

export default function OfferCard({
  themeVariant = "primary",
  initSize = "auto",
  cardStyle = "",
  iconChild,
  cardTitle = "",
  cardText = "",
  cardPrice,
  btnChild,
  cardFeaturesTitle = "",
  bulletChild
}) {
  const size = {
    auto: "size-auto",
    full: "size-full",
    fit: "size-fit",
  };

  const themeSwatch = {
    primary: {
      bg: "bg-primary",
      bgAlt: "bg-secondary",
      heading: "text-secondary",
      text: "text-light",
      icon: "fill-light"
    },
    secondary: {
      bg: "bg-secondary",
      bgAlt: "bg-primary",
      heading: "text-primary",
      text: "text-dark",
      icon: "fill-dark"
    },
  };

  const theme = themeSwatch[themeVariant] || themeSwatch.primary;
  return (
    <article
      className={`grid auto-rows-min items-start justify-items-center gap-y-6 rounded-xl py-7 ${size[initSize]} ${theme.bg} ${cardStyle}`}
    >
      <div className="px-mobile-inline grid items-start justify-items-center gap-6">
        {iconChild ? (
          <IconWrapper
            themeVariant={themeVariant}
            elemStyle="justify-self-start"
          >
            {iconChild}
          </IconWrapper>
        ) : null}
        <div className={`${cardPrice ? "grid gap-y-8" : ""}`}>
          <div className="grid gap-y-4">
            <h3 className={`text-2xl ${theme.heading}`}>{cardTitle}</h3>
            <p className={`${theme.text}`}>{cardText}</p>
          </div>
          {cardPrice ? (
            <span className={`${theme.text} text-3xl font-bold`}>
              {cardPrice}
            </span>
          ) : null}
        </div>
        <div className={`${cardPrice ? "mt-2" : ""}`}>
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
      </div>
      <div className={`${theme.bgAlt} h-2 w-full`} />
      <div className="grid gap-y-6 px-mobile-inline">
        <h3 className={`text-xl ${theme.heading}`}>{cardFeaturesTitle}</h3>
        {bulletChild.map((bullet) => (
          <div className="flex gap-4 [&>svg]:mt-1 [&>svg]:shrink-0" key={bullet.label}>
            <CaretRightIcon size={16} fill={theme.icon}/>
            <span className={`${theme.text}`}>{bullet.label}</span>
          </div>
        ))}
      </div>
    </article>
  );
}