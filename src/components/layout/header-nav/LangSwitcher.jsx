"use client";
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/lang-context/useLanguage";
import {
  CaretDownIcon,
  PlanetIcon
} from "@phosphor-icons/react";

export default function LangSwitcher ({ themeVariant = "primary" }) {
  const { language, setLanguage } = useLanguage();
  const [isLangOpen, setIsLangOpen] = useState(false);

  // Should correspond to actual html lang="" attr
  // Link: https://www.w3schools.com/tags/ref_language_codes.asp
  const langOptions = ["da", "en", "sv"];

  const langDropdown = useRef(null);

  const themeSwatch = {
    primary: {
      bg: "bg-secondary",
      text: "text-secondary group-hover:text-dark",
      textAlt: "text-primary hover:text-dark",
      icon: "fill-secondary group-hover:fill-dark",
      border: "border-secondary hover:border-dark"
    },
    secondary: {
      bg: "bg-primary",
      text: "text-primary group-hover:text-dark",
      textAlt: "text-secondary hover:text-dark",
      icon: "fill-primary group-hover:fill-dark",
      border: "border-primary hover:border-dark",
    },
  };

  const theme = themeSwatch[themeVariant] || themeSwatch.primary;

  // If any clicks are happening outside the dropdown container, will close it.
  // Similar to how dropdown behaves in FilterElem.jsx
  useEffect(() => {
    const handleActionOutside = (e) => {
      if (langDropdown.current && !langDropdown.current.contains(e.target)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("pointerdown", handleActionOutside);
    return () =>
      document.removeEventListener("pointerdown", handleActionOutside);
  }, []);

  return (
    <div className="lg:mx-auto relative inline-block max-lg:mt-3" ref={langDropdown}>
      <button
        type="button"
        onClick={() => setIsLangOpen(!isLangOpen)}
        className={`group flex gap-5 rounded-xl border-3 px-3 py-1 ${theme.border}`}
      >
        <PlanetIcon size={32} className={`${theme.icon}`} />
        <div className="flex items-center gap-3">
          <span className={`text-lg md:text-xl uppercase ${theme.text}`}>
            {language}
          </span>
          <CaretDownIcon
            size={16}
            className={`${theme.icon} transition-transform duration-300 ease-in-out ${
              isLangOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>
      {isLangOpen && (
        <ul
          className={`absolute top-full left-0 z-200 mt-1 w-full rounded-xl ${theme.bg}`}
        >
          {langOptions.map((lang) => (
            <li
              key={lang}
              onClick={() => {
                setLanguage(lang);
              }}
              className={`block w-full px-3 py-2 text-center uppercase text-lg md:cursor-pointer md:text-xl ${theme.textAlt}`}
            >
              {lang}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

