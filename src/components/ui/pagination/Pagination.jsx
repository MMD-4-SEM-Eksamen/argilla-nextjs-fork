"use client";
import { CaretRightIcon } from "@phosphor-icons/react";
import { CaretLeftIcon } from "@phosphor-icons/react";
import IconWrapper from "../icon-wrapper/IconWrapper";

const Pagination = ({ page, total, setPage }) => {
  return (
    <div className="flex items-center justify-center gap-4 pt-2">
      <button
        onClick={() => setPage((p) => Math.max(0, p - 1))}
        disabled={page === 0}
        aria-label="Forrige"
        className="text-primary hover:bg-dark/10 flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-150 disabled:cursor-default disabled:opacity-30"
      >
        <IconWrapper initSize="xs" useBackground={false} themeVariant="primary">
          <CaretLeftIcon />
        </IconWrapper>
      </button>

      <span className="text-dark min-w-10 text-center font-sans text-sm font-semibold tracking-wide">
        {page + 1} / {total}
      </span>

      <button
        onClick={() => setPage((p) => Math.min(total - 1, p + 1))}
        disabled={page === total - 1}
        aria-label="Næste"
        className="text-primary hover:bg-dark/10 flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-150 disabled:cursor-default disabled:opacity-30"
      >
        <IconWrapper initSize="xs" useBackground={false} themeVariant="primary">
          <CaretRightIcon />
        </IconWrapper>
      </button>
    </div>
  );
};

export default Pagination;
