"use client";

import { offers, defaultOfferType } from "@/data/offers";
import { useCart } from "@/context/cart-context/CartProvider";

export default function OfferDropdown({ initialType }) {
  const { selectedOffer, rememberSelection } = useCart();

  const currentType = initialType || selectedOffer?.type || defaultOfferType;

  const handleChange = (event) => {
    const nextType = event.target.value;
    const nextOffer = offers[nextType];

    if (!nextOffer) {
      return;
    }

    rememberSelection({
      type: nextType,
      title: nextOffer.title,
    });

    window.localStorage.setItem(
      "argilla-selected-offer",
      JSON.stringify({ type: nextType, title: nextOffer.title }),
    );
    window.location.assign(`/koeb?type=${nextType}`);
  };

  return (
    <div className="mx-auto w-fit max-w-xl md:mx-0">
      <div className="relative">
        <select
          id="offer-select"
          name="offer-select"
          value={currentType}
          onChange={handleChange}
          className="text-dark border-primary bg-light focus:border-dark w-full appearance-none rounded-xl border-2 px-4 py-3 pr-12 font-sans text-base transition outline-none"
        >
          {Object.entries(offers).map(([offerType, offer]) => (
            <option key={offerType} value={offerType}>
              {offer.title}
            </option>
          ))}
        </select>
        <span className="text-primary pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-xl leading-none">
          ▾
        </span>
      </div>
    </div>
  );
}
