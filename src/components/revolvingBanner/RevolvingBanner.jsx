"use client";
/**
 * IconMarquee
 * ───────────────────────────────────────────────────────────────────────────
 * An infinitely scrolling horizontal banner of icon badges.
 * Icons are sourced from @phosphor-icons/react.
 *
 * USE CASES
 * ─────────
 * • Tech-stack / tools strip on a landing page
 * • Feature highlights ticker
 * • Partner / integration logos (swap icons for images)
 * • Decorative section divider with themed icons
 * • "Powered by" or "Works with" banner
 *
 * INSTALL
 * ───────
 * npm install @phosphor-icons/react
 *
 * USAGE
 * ─────
 * import IconMarquee from "@/components/IconMarquee";
 *
 * // Use the default icon set:
 * <IconMarquee />
 *
 * // Or pass your own Phosphor icon components:
 * import { Airplane, Anchor, Atom } from "@phosphor-icons/react";
 * <IconMarquee icons={[Airplane, Anchor, Atom]} />
 *
 * PROPS
 * ─────
 * icons        – Array of Phosphor icon components (optional, has defaults)
 * speed        – Scroll duration in seconds for one full loop (default: 30)
 * direction    – "left" | "right" (default: "left")
 * iconSize     – Icon size in px (default: 28)
 * badgeSize    – Badge circle diameter in Tailwind units (default: "14" = 3.5rem)
 * className    – Extra Tailwind class(es) on the outer wrapper (optional)
 *
 * CUSTOMISATION
 * ─────────────
 * Override colours with Tailwind utilities on the wrapper or swap the
 * hardcoded arbitrary values:
 *   bg-[#7d2b1e]  — banner background
 *   bg-[#f5e0d6]  — badge fill
 *   text-[#7d2b1e] — icon colour (inherits from badge)
 * ───────────────────────────────────────────────────────────────────────────
 */

import React, { useRef, useEffect } from "react";
import {
  AlienIcon,
  AnchorIcon,
  BankIcon,
  CactusIcon,
  CampfireIcon,
  DatabaseIcon,
  DiscoBallIcon,
  DogIcon,
  DropHalfIcon,
  FishIcon,
} from "@phosphor-icons/react";

// ─── Default icon set ────────────────────────────────────────────────────────

const DEFAULT_ICONS = [
  AlienIcon,
  AnchorIcon,
  BankIcon,
  CactusIcon,
  CampfireIcon,
  DatabaseIcon,
  DiscoBallIcon,
  DogIcon,
  DropHalfIcon,
  FishIcon,
];

// ─── Single badge ────────────────────────────────────────────────────────────

function IconBadge({ Icon, iconSize, badgeSize }) {
  return (
    <div
      className="bg-secondary flex shrink-0 items-center justify-center rounded-full"
      style={{ width: badgeSize, height: badgeSize }}
    >
      <Icon size={iconSize} weight="regular" color="#803125" />
    </div>
  );
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function IconMarquee({
  icons = DEFAULT_ICONS,
  speed = 60,
  direction = "left",
  iconSize = 30,
  badgeSize = 56,
  className = "",
}) {
  // Duplicate the list so the loop is seamless
  const track = [...icons, ...icons];
  const animationName =
    direction === "right" ? "marquee-right" : "marquee-left";

  return (
    <div
      className={`bg-primary relative w-full overflow-hidden py-4 ${className}`}
      aria-label="Scrolling icon banner"
      aria-hidden="true"
    >
      {/* Inject keyframes once via a style tag */}
      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          will-change: transform;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div
        className="marquee-track"
        style={{
          animation: `${animationName} ${speed}s linear infinite`,
          gap: "200px",
          paddingInline: "20px",
        }}
      >
        {track.map((Icon, i) => (
          <IconBadge
            key={i}
            Icon={Icon}
            iconSize={iconSize}
            badgeSize={badgeSize}
          />
        ))}
      </div>
    </div>
  );
}
