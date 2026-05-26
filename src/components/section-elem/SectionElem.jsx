/* Use Case:
// (themeVariant) - Determines theme palette and text colors: themeVariant = "primary" / "secondary"
// (elemStyle) - Used to add additional styling to the section container: elemStyle = "mt-10"
// (centeredVariant) - Layout variant: centeredVariant = true (centered content) / false (content left, button right bottom)
// (breakout) - Apply full-width col-span: breakout = true / false (default: false)
// (sectionHeading) - Main heading text: sectionHeading = "Lorem Ipsum"
// (sectionBodyText) - Body text below heading: sectionBodyText = "Lorem ipsum dolor sit amet..."
// (btnChild) - Button configuration object: btnChild = { type: "LinkBtn", label: "Se Mere", props: { btnLink: "/URL", initSize: "medium" } }
// (children) - Additional child elements to render below the button
*/

/* Example Usage - Centered Variant:

<SectionElem
  centeredVariant={true}
  sectionHeading="Lorem Ipsum"
  sectionBodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  occaecat cupidatat non proident, sunt in culpa qui officia deserunt  mollit anim id est laborum."
  btnChild={{
    type: "LinkBtn",
    label: "Se Mere",
    props: {
      btnLink: "/home",
      initSize: "medium",
      bpSize: "toLarge"
    }
  }}
>
{children}
</SectionElem>

*/

/* Example Usage - Non-Centered Variant:

<SectionElem
  themeVariant="secondary"
  elemStyle="mt-20"
  centeredVariant={false}
  breakout={true}
  sectionHeading="Lorem Ipsum"
  sectionBodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  occaecat cupidatat non proident, sunt in culpa qui officia deserunt  mollit anim id est laborum.."
  btnChild={{
    type: "ActionBtn",
    label: "Køb Nu",
    props: {
      initSize: "medium"
    }
  }}
>
{children}
</SectionElem>

*/

import ActionBtn from "../ui/buttons/ActionBtn";
import LinkBtn from "../ui/buttons/LinkBtn";

export default function SectionElem({
  themeVariant = "primary",
  elemStyle,
  centeredVariant = false,
  breakout = false,
  sectionHeading = "",
  sectionBodyText = "",
  btnChild,
  children,
}) {
  const themeSwatch = {
    primary: {
      heading: "text-primary",
      bodyText: "text-dark",
    },
    secondary: {
      heading: "text-dark",
      bodyText: "text-primary",
    },
  };

  const theme = themeSwatch[themeVariant] || themeSwatch.primary;

  return (
    <section
      className={`${breakout ? "col-span-full" : ""} ${elemStyle} grid place-items-center gap-20 md:gap-24 max-md:px-mobile-inline max-md:py-7`}
    >
      {centeredVariant ? (
        <div className={`grid w-full gap-16 place-items-center place-content-center`}>
          <div className="grid max-w-[75ch] gap-10 text-center">
            <h2 className={`${theme.heading} text-4xl md:text-5xl`}>
              {sectionHeading}
            </h2>
            <p className={`${theme.bodyText} text-base md:text-lg`}>
              {sectionBodyText}
            </p>
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
      ) : (
        <div className={`grid w-full gap-16 md:flex md:justify-between`}>
          <div className="grid max-w-[75ch] gap-12 text-center">
            <h2 className={`${theme.heading} text-4xl md:text-5xl`}>
              {sectionHeading}
            </h2>
            <p className={`${theme.bodyText} text-base md:text-lg`}>
              {sectionBodyText}
            </p>
          </div>
          {btnChild && btnChild.type === "ActionBtn" && (
            <div className="justify-self-center md:place-self-end">
              <ActionBtn themeVariant={themeVariant} {...btnChild.props}>
                {btnChild.label}
              </ActionBtn>
            </div>
          )}
          {btnChild && btnChild.type === "LinkBtn" && (
            <div className="justify-self-center md:place-self-end">
              <LinkBtn themeVariant={themeVariant} {...btnChild.props}>
                {btnChild.label}
              </LinkBtn>
            </div>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
