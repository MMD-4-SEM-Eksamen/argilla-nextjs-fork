import HeaderNav from "@/components/layout/header-nav/HeaderNav";
import "./globals.css";
import FooterElem from "@/components/layout/FooterElem";
import Providers from "@/providers/Providers";

export const metadata = {
  title: "Argilla",
  description: "Førende IT-virksomhed indenfor SaaS",
};

// Added parent grid to body to center everything. Makes 4K screens less awkward now.
export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body className="antialiased min-h-svh md:min-h-dvh grid grid-cols-breakout *:col-start-2 *:col-end-auto">
        <Providers>
          <HeaderNav />
          {children}
          <FooterElem />
        </Providers>
      </body>
    </html>
  );
}
