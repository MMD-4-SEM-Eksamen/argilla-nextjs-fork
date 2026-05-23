/* Use Case:
// (themeVariant) - Determines theme palette: themeVariant = "primary" / "secondary"
// (initSize) - Determines card parent container sizing: initSize = "auto" / "full" / "fit"
// (cardStyle) - Used to add aditonal styling to card parent container: cardStyle = "px-1"

// (iconChild) - Determines what the icon child element should be in the <IconWrapper> component: iconChild={<GlobeIcon />} 

// (cardTitle) - Determines the heading title of the card element: cardTitle="Lorem Ipsum"
// (cardText) - Determines the body text of the card element: cardText="Lorem Ipsum"
// (cardCitation) - Determines citation text of body text, if none is provided, won't be rendered: cardCitation="Lorem McIpsum"

// (tagChild) - Determines what the <TagElem> -> <span> child elem texts should be in the <TagElem> component: tagChild={[{ label: "Software" }, { label: "Hardware" }]}
// (filterKey) - Used for filtering when used later on (UPDATE ME).
// (baseUrl) - Sets the base url for filtering when used later on (UPDATE ME).

// (btnChild) - Determins the button to use: btnChild = {{ type: "LinkBtn", label: "Se Mere", props: { btnLink: "/", initSize: "base" } }}
*/

/* Example Usage with almost all props:

<IconCard
  themeVariant="secondary"
  initSize="fit"
  iconChild={<ShieldIcon />}
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

import TagElem from "../ui/tag/TagElem";
import IconWrapper from "../ui/icon-wrapper/IconWrapper";
import ActionBtn from "../ui/buttons/ActionBtn";
import LinkBtn from "../ui/buttons/LinkBtn";

export default function IconCard({
  themeVariant = "primary",
  initSize = "auto",
  cardStyle = "",
  iconChild,
  cardTitle = "",
  cardText = "",
  cardCitation,
  tagChild,
  filterKey = "category",
  baseUrl = "/",
  btnChild
}) {
  const size = {
    auto: "size-auto",
    full: "size-full",
    fit: "size-fit",
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
      className={`grid auto-rows-min gap-y-6 rounded-xl px-mobile-inline py-7 justify-items-center items-start  ${size[initSize]} ${theme.bg} ${cardStyle}`}
    >
        {iconChild ? <IconWrapper themeVariant={themeVariant} elemStyle="justify-self-start">{iconChild}</IconWrapper> : null}
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
          {cardCitation ? <p className={`${theme.text} place-self-end`}>{cardCitation}</p> : null}
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
    </article>
  );
}
