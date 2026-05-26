"use client";
// NextJS Components
import Link from "next/link";
import LogoFull from "@/components/ui/logo/LogoFull";
import Newsletter from "@/components/newsletter/Newsletter";
// Icon Imports
import {
  LinkedinLogoIcon,
  GithubLogoIcon,
  GitlabLogoSimpleIcon,
} from "@phosphor-icons/react";

export default function FooterElem({ themeVariant = "primary" }) {
  const themeSwatch = {
    primary: {
      bg: "bg-primary",
      text: "text-light",
      textAlt: "text-secondary",
      textHover: "hover:text-dark",
      icon: "fill-secondary hover:fill-dark",
    },
    secondary: {
      bg: "bg-secondary",
      text: "text-dark",
      textAlt: "text-primary",
      textHover: "hover:text-primary",
      icon: "fill-primary hover:fill-dark",
    },
  };

  const theme = themeSwatch[themeVariant] || themeSwatch.primary;

  return (
    <footer>
      <div
        className={`${theme.bg} max-w-breakout ${theme.text} grid px-mobile-inline`}
      >
        <div className="max-w-content-max px-mobile-inline grid gap-y-24 py-11 md:px-11 place-self-center w-full">
          <div className="grid gap-8 md:flex md:flex-wrap md:justify-between md:gap-12 [&_a,&_p]:text-lg [&_h2]:mb-4 [&_h2]:text-xl [&_h2]:font-bold [&_li:not(:last-child)]:mb-2">
            <LogoFull
              logoLink="/"
              linkStyle="place-self-center grow  min-w-44 max-w-63 md:place-self-auto"
              logoStyle={`w-full ${theme.icon}`}
            />
            <div>
              <h2 className={`${theme.textAlt}`}>Kontakt</h2>
              <address className="grid not-italic">
                <p>Vester Farimagsgade 37A</p>
                <p>1606 København</p>
                <a href="mailto:support@fab-it.dk" className="underline">
                  support@argilla.dk
                </a>
                <a href="tel:+4570202407">+45 70 20 24 07</a>
              </address>
            </div>
            <div>
              <h2 className={`${theme.textAlt}`}>Links</h2>
              <ul>
                <li className={`${theme.textHover}`}>
                  <Link href="/ydelser">Ydelser</Link>
                </li>
                <li className={`${theme.textHover}`}>
                  <Link href="/omos">Om Os</Link>
                </li>
                <li className={`${theme.textHover}`}>
                  <Link href="/cases">Cases</Link>
                </li>
                <li className={`${theme.textHover}`}>
                  <Link href="/kontakt">Kontakt</Link>
                </li>
                <li className={`${theme.textHover}`}>
                  <Link href="/legal">Legal</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className={`${theme.textAlt}`}>Følg os</h2>
              <ul className="grid [&_a]:flex [&_a]:items-center [&_a]:gap-x-2">
                <li>
                  <Link href="/" className={`${theme.textHover}`}>
                    <LinkedinLogoIcon size={24} />
                    <span>-</span>LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="/" className={`${theme.textHover}`}>
                    <GithubLogoIcon size={24} />
                    <span>-</span>GitHub
                  </Link>
                </li>
                <li>
                  <Link href="/" className={`${theme.textHover}`}>
                    <GitlabLogoSimpleIcon size={24} />
                    <span>-</span>GitLab
                  </Link>
                </li>
              </ul>
            </div>
            <Newsletter />
          </div>
          <p>© 2026 Argilla - Alle rettigheder forbeholdes | CVR: DK27374646</p>
        </div>
      </div>
    </footer>
  );
}
