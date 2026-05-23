import HeaderNav from "@/components/layout/header-nav/HeaderNav";
import "./globals.css";
import FooterElem from "@/components/layout/FooterElem";
import Providers from "@/providers/Providers";

export const metadata = {
  title: "Argilla",
  description: "Førende IT-virksomhed indenfor SaaS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body className="antialiased grid justify-center">
        <Providers>
          <HeaderNav />
          {children}
          <FooterElem />
        </Providers>
      </body>
    </html>
  );
}
