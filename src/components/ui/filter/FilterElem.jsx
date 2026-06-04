"use client";
// Optionally make this component more multi-usage, with custom-defined baseURL as a user-defined prop.

// To-Do: Update this logo later on to work with the actual options.

/* Use case: 
// (labelStyling) - Used for additional styling of label text.
// (selectStyling) - Used for additional styling of dropdown btn.
// (dropdownStyling) - Used for additonal styling of dropdown menu container.
// (filterId) - Determines the Id of dropdown btn and htmlFor of label text.
// (baseUrl) - Sets the base url for filtering when used later on (UPDATE ME).
// (options) - Value of what the options will push to the url, "Alle" should display all when chosen.
    - Used for filtering when used later on (UPDATE ME).
// (filterKey) - Used for filtering when used later on (UPDATE ME).
*/

import { useState, useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CaretDownIcon } from "@phosphor-icons/react";
import IconWrapper from "../icon-wrapper/IconWrapper";

export default function FilterElem({
  children,
  labelStyling = "",
  selectStyling = "",
  dropdownStyling = "",
  filterId = "",
  baseUrl = "/cases",
  options = ["Alle", "IT-sikkerhed", "Cloud Migration", "Udvikling"],
  filterKey = "category",
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeFilter = searchParams.get(filterKey) || "Alle";
  const validFilter = options.includes(activeFilter) ? activeFilter : "Alle";

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // If any clicks are happening outside the dropdown container, will close it.
  // UseEffect = Action (effect) that runs, in this case, once on mount (, []) , when comp first appears.
  // handleActionOutside = If interactivity falls outside the dropdownRef, will close menu.
  // Adds event listener on mount, then removes it when the component unmounts.
  useEffect(() => {
    const handleActionOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("pointerdown", handleActionOutside);
    return () =>
      document.removeEventListener("pointerdown", handleActionOutside);
  }, []);

  // Handler for pushing a text string into the URL, used for sorting.
  const handleChange = (selected) => {
    setIsOpen(false);
    if (selected === "Alle") {
      router.push(baseUrl);
    } else {
      router.push(`${baseUrl}?${filterKey}=${encodeURIComponent(selected)}`);
    }
  };

  return (
    <div className="text-primary px-mobile-inline pointer-events-none grid gap-6 text-lg font-bold md:flex md:items-center md:px-0 md:text-xl">
      <label htmlFor={filterId} className={`${labelStyling}`}>
        {children}
      </label>
      <div
        className="pointer-events-auto relative inline-block"
        ref={dropdownRef}
      >
        {/* Dropdown Btn */}
        <button
          id={filterId}
          onClick={() => setIsOpen(!isOpen)}
          className={`${selectStyling} text-text-dark border-primary flex items-center gap-3 rounded-lg border-[3px] px-3 py-2 md:cursor-pointer`}
        >
          {validFilter}
          <IconWrapper
            initSize="xs"
            useBackground={false}
            themeVariant="secondary"
          >
            <CaretDownIcon
              size={24}
              color="var(--primary-col)"
              className={`transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : ""}`}
            />
          </IconWrapper>
        </button>
        {/* Dropdown Menu */}
        {isOpen && (
          <div
            className={`${dropdownStyling} border-primary absolute top-full left-0 z-20 mt-1 w-max rounded-lg border-[3px] [&>*+*]:mt-2`}
          >
            {options.map((opt) => (
              <button
                key={opt}
                onClick={() => handleChange(opt)}
                className={`hover:text-text-dark block w-full px-3 py-2 text-left md:cursor-pointer ${
                  opt === validFilter ? "text-text-dark" : ""
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
