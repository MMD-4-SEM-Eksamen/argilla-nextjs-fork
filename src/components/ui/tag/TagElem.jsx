/* Use case:
// (label) - Determines the contents for the <span> text: label={"text"}
// (themeVariant) - Determines theme palette: themeVariant = "primary" / "secondary"
// (filterKey) - Used for filtering when used later on (UPDATE ME).
// (baseUrl) - Sets the base url for filtering when used later on (UPDATE ME).
*/

import Link from "next/link";

export default function TagElem({
  label,
  themeVariant = "primary",
  filterKey = "category",
  baseUrl = "/",
  ...props
}) {
  const filterUrl = `${baseUrl}?${filterKey}=${encodeURIComponent(label)}`;

  const themeSwatch = {
    primary: "bg-secondary text-primary",
    secondary: "bg-primary text-secondary",
  };

  const theme = themeSwatch[themeVariant] || themeSwatch.primary;
  const spanText = `block overflow-hidden text-ellipsis text-nowrap w-full text-center`;

  return (
    <Link href={filterUrl} {...props}>
      <button
        className={`${theme} inline-flex place-items-center md:cursor-pointer hover:border-b-dark h-fit w-fit rounded-lg px-2 py-1 font-sans text-sm font-bold transition-colors duration-150 ease-in-out hover:border-b-3`}
      >
        <span className={spanText}>{label}</span>
      </button>
    </Link>
  );
}
