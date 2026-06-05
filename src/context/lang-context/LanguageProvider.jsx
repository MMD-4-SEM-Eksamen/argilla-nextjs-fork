"use client";
import { createContext, useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

export const LanguageContext = createContext();
export const langOptions = ["da", "en"];
const DEFAULT_LANG = "da";

function LanguageProviderContent({ children }) {
  // Function to retrieve the current language.
  // if() statement is used as fallback to protect against SSR when DOM elemens (window, navigator) aren't rendered yet..
  // Checks for any saved languages to localStorage first, and returns that value, otherwise
  // - gets the current 'language' of the browser, if it exists in langOptions, otherwise fallback to DEFAULT_LANG
  const currentLang = () => {
    if (typeof window === "undefined") return DEFAULT_LANG;
    const savedLang = localStorage.getItem("preferred-language");
    if(savedLang && langOptions.includes(savedLang)) return savedLang;
    const browserLang = navigator.language.split("-")[0];
    return langOptions.includes(browserLang) ? browserLang : DEFAULT_LANG;
  };
  
  const [language, setLanguage] = useState(currentLang);
  console.log("current lang:", language);

  const router = useRouter(); // Used for changing routes.
  const searchParams = useSearchParams(); // Used for creating a new search param, which can then be added with useRouter.
  const currentPath = usePathname(); // Used for retrieving the current path name.

  // Effect which will persist to localStorage and sync html lang attribute on every language change.
  useEffect(() => {
    // Set html lang attribute to be = value of 'language'
    document.documentElement.lang = language;
    // Add to localStorage
    localStorage.setItem("preferred-language", language);
    console.log("new lang:", language);
  }, [language]);

  // Effect to "cosmetically" update the URL if 'language' is NOT DEFAULT_LANG
  // Sets ?language=<value> in the URL, or removes it when back on default.
  // Runs after each language change or page navigation (currentPath).
  useEffect(() => {
    if (language !== DEFAULT_LANG) {
      const params = new URLSearchParams(searchParams);
      params.set("language", language);
      router.push(`?${params.toString()}`);
    } else {
      router.push(window.location.pathname);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language, currentPath]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, langOptions }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function LanguageProvider({ children }) {
  return (
    <Suspense>
      <LanguageProviderContent>{children}</LanguageProviderContent>
    </Suspense>
  );
}
