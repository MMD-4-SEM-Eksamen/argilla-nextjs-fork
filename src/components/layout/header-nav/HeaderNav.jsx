"use client";
// NextJS Components
import Link from "next/link";
import { useState } from "react";
// PhosphorIcons Imports
import { ListIcon, ShoppingCartSimpleIcon, XIcon } from "@phosphor-icons/react";
// Component Import
import LogoFull from "@/components/ui/logo/LogoFull";
import LinkBtn from "@/components/ui/buttons/LinkBtn";
import LangSwitcher from "./LangSwitcher";

export default function HeaderNav({ themeVariant = "primary" }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const themeSwatch = {
    primary: {
      bg: "bg-primary",
      bgAlt: "bg-secondary",
      border: "border-secondary",
      text: "text-secondary hover:text-dark",
      icon: "fill-secondary hover:fill-dark",
    },
    secondary: {
      bg: "bg-secondary",
      bgAlt: "bg-primary",
      border: "border-primary",
      text: "text-primary hover:text-dark",
      icon: "fill-primary hover:fill-dark",
    },
  };

  const theme = themeSwatch[themeVariant] || themeSwatch.primary;

  return (
    <header>
      <div
        className={`px-mobile-inline lg:grid-cols-max ${theme.bg} max-w-content-max relative py-3 lg:grid lg:px-11 lg:*:col-start-2`}
      >
        <nav className="flex w-full justify-between lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:justify-normal">
          <LogoFull
            logoLink="/"
            linkStyle="lg:col-start-1"
            logoStyle={` ${theme.icon}`}
          />
          <ul
            className={`col-start-2 flex gap-8 px-4 max-lg:hidden [&>li>a]:cursor-pointer [&>li>a]:font-sans [&>li>a]:text-lg`}
          >
            <li className={`${theme.text}`}>
              <Link href="/ydelser">Ydelser</Link>
            </li>
            <li className={`${theme.text}`}>
              <Link href="/omos">Om Os</Link>
            </li>
            <li className={`${theme.text}`}>
              <Link href="/cases">Cases</Link>
            </li>
            <li className={`${theme.text}`}>
              <Link href="/kontakt">Kontakt</Link>
            </li>
          </ul>
          <div className="col-start-3 flex w-full items-center justify-end gap-2.5 justify-self-end pl-2.5 max-lg:hidden">
            <LangSwitcher themeVariant={themeVariant} />
            <div className="flex items-center gap-6 px-4">
              <LinkBtn btnLink="/koeb" themeVariant={themeVariant}>
                Bestil
              </LinkBtn>
              <Link href="/koeb">
                <ShoppingCartSimpleIcon size={32} className={`${theme.icon}`} />
              </Link>
            </div>
          </div>
          <div className="flex gap-5 lg:hidden">
            <button
              type="button"
              onClick={() => setIsMobileOpen((prev) => !prev)}
              aria-expanded={isMobileOpen}
              aria-controls="mobil-nav"
              aria-label={isMobileOpen ? "Luk menu" : "Åben menu"}
              className="lg:hidden"
            >
              {isMobileOpen ? (
                <XIcon size={32} className={`${theme.icon}`} />
              ) : (
                <ListIcon size={32} className={`${theme.icon}`} />
              )}
            </button>
          </div>
        </nav>
        {isMobileOpen && (
          <nav
            id="mobil-nav"
            className={`${theme.bg} absolute top-full left-0 z-100 grid h-fit w-full place-items-center gap-8 border-t-2 border-solid px-4 py-8 ${theme.border} lg:hidden`}
          >
            <ul
              className={`grid w-full place-content-center gap-6 text-center [&>li>a]:text-lg`}
            >
              <li className={`${theme.text}`}>
                <Link href="/ydelser">Ydelser</Link>
              </li>
              <li className={`${theme.text}`}>
                <Link href="/omos">Om Os</Link>
              </li>
              <li className={`${theme.text}`}>
                <Link href="/cases">Cases</Link>
              </li>
              <li className={`${theme.text}`}>
                <Link href="/kontakt">Kontakt</Link>
              </li>
            </ul>
              <div className="relative inline-block">
                <LinkBtn
                  btnLink="/koeb"
                  themeVariant={themeVariant}
                  btnClass="mx-auto"
                  initSize="medium"
                >
                  Bestil
                </LinkBtn>
                <Link href="/koeb" className="absolute right-0 pl-8 translate-x-full translate-y-1/4">
                  <ShoppingCartSimpleIcon
                    size={32}
                    className={`${theme.icon}`}
                  />
                </Link>
              </div>
              <LangSwitcher themeVariant={themeVariant} />
          </nav>
        )}
      </div>
    </header>
  );
}
