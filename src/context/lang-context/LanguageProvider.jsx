"use client";
import { createContext, useState, useEffect } from "react";

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // Load saved language preference
  const [language, setLanguage] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("preferred-language") || "da";
    }
    return "da";
  });

  // Add language to localStorage and update html lang attribute.
  // Will update each time html lang changes via a language switcher comp elsewhere.
  useEffect(() => {
    // Set html lang attribute
    document.documentElement.lang = language;
    
    // Add to localStorage
    localStorage.setItem("preferred-language", language);
  }, [language]);

  // Will pass the state as a global state for any -
  // child elements to be able to read the state value, and also be able to modify it.
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
