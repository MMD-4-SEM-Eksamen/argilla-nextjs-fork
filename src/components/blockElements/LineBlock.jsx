"use client";

/* Use case:
// Items: [{ id, title, body }]
*/

import React from "react";

// ─── Content block ───────────────────────────────────────────────────────────

function Content({ title, body }) {
  return (
    <div className="">
      {title && (
        <h3 className="text-dark mb-1.5 font-sans text-base leading-snug font-bold sm:text-xl">
          {title}
        </h3>
      )}
      <p className="text-primary font-sans text-base leading-relaxed sm:text-xl">
        {body}
      </p>
    </div>
  );
}

// ─── Spine segment ───────────────────────────────────────────────────────────

function SpineLine() {
  return <div className="bg-dark min-h-8 w-3 flex-1" />;
}

// ─── Component ──────────────────────────────────────────────────────────────

export default function AlternatingTimeline({ items, className = "" }) {
  return (
    <div
      className={`mx-auto flex w-full max-w-360 flex-col items-stretch ${className}`}
    >
      {/* Top cap */}
      <div className="bg-dark mx-0 h-6 w-3 rounded-t sm:mx-auto" />

      {items.map((item, index) => {
        const isLeft = index % 2 === 0;

        return (
          <div
            key={item.id}
            className="grid grid-cols-[auto_auto_1fr] sm:grid-cols-[1fr_auto_1fr]"
          >
            {/* ── Left content slot ── */}
            <div className="flex items-center justify-end py-8 pr-0 sm:pr-6">
              {isLeft && (
                <div className="hidden sm:block">
                  <Content title={item.title} body={item.body} />
                </div>
              )}
            </div>

            {/* ── Spine + node ── */}
            <div className="flex w-3 flex-col items-center">
              <SpineLine />
              <div className="bg-secondary relative z-10 -my-0.5 h-9 w-9 shrink-0 rounded-full" />
              <SpineLine />
            </div>

            {/* ── Right content slot ── */}
            <div className="flex items-center justify-start py-8 pl-6">
              {isLeft ? (
                /* Left items: mobile only (stacked layout) */
                <div className="sm:hidden">
                  <Content title={item.title} body={item.body} />
                </div>
              ) : (
                /* Right items: always visible */
                <Content title={item.title} body={item.body} />
              )}
            </div>
          </div>
        );
      })}

      {/* Bottom cap */}
      <div className="bg-dark mx-0 h-6 w-3 rounded-b sm:mx-auto" />
    </div>
  );
}
