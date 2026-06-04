"use client";

import { useEffect, useMemo } from "react";
import OfferCard from "@/components/cards/OfferCard";
import { GlobeIcon } from "@phosphor-icons/react/dist/ssr";
import { defaultOfferType, offers } from "@/data/offers";
import { useCart } from "@/context/cart-context/CartProvider";

export default function SelectedOfferCard({ initialType }) {
  const { selectedOffer, setSelectedOffer } = useCart();

  useEffect(() => {
    if (!initialType || !offers[initialType]) {
      return;
    }

    const nextOffer = offers[initialType] || offers[defaultOfferType];

    if (selectedOffer?.type !== initialType) {
      setSelectedOffer({
        type: initialType,
        title: nextOffer.title,
      });
    }
  }, [initialType, selectedOffer?.type, setSelectedOffer]);

  const selectedType = selectedOffer?.type || initialType || defaultOfferType;
  const selectedCard = offers[selectedType] || offers[defaultOfferType];

  const bulletPoints = useMemo(
    () => [
      selectedCard.label1,
      selectedCard.label2,
      selectedCard.label3,
      selectedCard.label4,
    ],
    [selectedCard],
  );

  return (
    <OfferCard
      themeVariant="primary"
      initSize="fit"
      iconChild={<GlobeIcon />}
      cardTitle={selectedCard.title}
      cardText={selectedCard.text}
      cardPrice={selectedCard.price}
      cardFeaturesTitle="Hvad er inkluderet:"
      bulletChild={bulletPoints.map((label) => ({ label }))}
    />
  );
}
