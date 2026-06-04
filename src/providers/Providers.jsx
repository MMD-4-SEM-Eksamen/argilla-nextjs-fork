"use client";

import { LanguageProvider } from "@/context/lang-context/LanguageProvider";
import { CartProvider } from "@/context/cart-context/CartProvider";

// Wrapper for all providers. Made in case Vercel complains as with a previous use case from experience.
export default function Providers({ children }) {
  return (
    <LanguageProvider>
      <CartProvider>{children}</CartProvider>
    </LanguageProvider>
  );
}
