"use client";

import { LanguageProvider } from "@/context/lang-context/LanguageProvider";

// Wrapper for all providers. Made in case Vercel complains as with a previous use case from experience.
export default function Providers({ children }) {
  return (
    <LanguageProvider>
      {children}
    </LanguageProvider>
  );
}