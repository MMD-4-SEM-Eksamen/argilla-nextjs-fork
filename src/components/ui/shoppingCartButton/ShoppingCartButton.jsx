"use client";

import Link from "next/link";
import { ShoppingCartSimpleIcon } from "@phosphor-icons/react";
import IconWrapper from "@/components/ui/icon-wrapper/IconWrapper";
import { useCart } from "@/context/cart-context/CartProvider";

const ShoppingCartButton = ({
  themeVariant = "secondary",
  compact = false,
  className = "",
}) => {
  const { hasSelection, selectedOffer } = useCart();
  const cartHref = selectedOffer?.type
    ? `/koeb?type=${selectedOffer.type}`
    : "/koeb";

  return (
    <Link
      href={cartHref}
      className={`relative inline-flex ${className}`}
      aria-label={
        hasSelection
          ? `Gå til kurven med ${selectedOffer.title}`
          : "Gå til kurven"
      }
    >
      <IconWrapper
        themeVariant={themeVariant}
        elemStyle="hover:*:fill-dark"
        initSize={compact ? "small" : "base"}
      >
        <ShoppingCartSimpleIcon />
      </IconWrapper>
      {hasSelection ? (
        <span className="bg-secondary border-secondary absolute top-1 right-1 h-3 w-3 rounded-full border-2" />
      ) : null}
    </Link>
  );
};

export default ShoppingCartButton;
