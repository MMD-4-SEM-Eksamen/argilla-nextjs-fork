"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CART_STORAGE_KEY = "argilla-selected-offer";
const TOAST_DURATION = 3500;

const CartContext = createContext(null);

function readStoredSelection() {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const rawSelection = window.localStorage.getItem(CART_STORAGE_KEY);

    if (!rawSelection) {
      return null;
    }

    return JSON.parse(rawSelection);
  } catch {
    return null;
  }
}

export function CartProvider({ children }) {
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    const storedSelection = readStoredSelection();

    if (storedSelection?.type) {
      setSelectedOffer(storedSelection);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (selectedOffer?.type) {
      window.localStorage.setItem(
        CART_STORAGE_KEY,
        JSON.stringify(selectedOffer),
      );
      return;
    }

    window.localStorage.removeItem(CART_STORAGE_KEY);
  }, [selectedOffer]);

  useEffect(() => {
    if (!toastMessage) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setToastMessage("");
    }, TOAST_DURATION);

    return () => window.clearTimeout(timeoutId);
  }, [toastMessage]);

  const rememberSelection = (nextSelection) => {
    setSelectedOffer(nextSelection);

    if (nextSelection?.title) {
      setToastMessage(`${nextSelection.title} er lagt i kurven.`);
    }
  };

  const value = useMemo(
    () => ({
      selectedOffer,
      hasSelection: Boolean(selectedOffer?.type),
      rememberSelection,
      setSelectedOffer,
      toastMessage,
    }),
    [selectedOffer, toastMessage],
  );

  return (
    <CartContext.Provider value={value}>
      {children}
      {toastMessage ? (
        <div
          className="border-primary bg-secondary text-primary fixed right-4 bottom-4 z-50 max-w-[calc(100vw-2rem)] rounded-2xl border-2 px-4 py-3 shadow-[0_18px_50px_rgba(0,0,0,0.18)] md:right-8 md:bottom-8"
          role="status"
          aria-live="polite"
        >
          <p className="font-sans text-sm font-medium">{toastMessage}</p>
        </div>
      ) : null}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider.");
  }

  return context;
}
