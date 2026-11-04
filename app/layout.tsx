import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://saofrancisco-flagship.com.br"),
  title: "Pinciara Imóveis Exclusivos | Loja Conceitual no Canal de São Francisco, Niterói",
  description:
    "Ponto comercial de alto padrão no novo Polo de design no Canal de São Francisco (Rua Guaianazes, 46). Loja + Mezanino (~225,8 m²). Visibilidade ininterrupta em esquina estratégica.",
  keywords: [
    "São Francisco Niterói",
    "Canal de São Francisco",
    "Polo de design",
    "Loja Conceitual",
    "Ponto Comercial Niterói",
    "Showroom Móveis Planejados",
    "Imóvel Comercial Alto Padrão",
    "Pinciara Imóveis Exclusivos",
    "Luiz Pinciara",
    "Guaianazes 46",
  ],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Pinciara Imóveis Exclusivos | Loja Conceitual no Canal de São Francisco, Niterói",
    description:
      "Ponto comercial de alto padrão no novo Polo de design no Canal de São Francisco. Fachada contemporânea, brises de alumínio e pé-direito duplo.",
    images: ["/assets/renders/08-fachada-dramatica-golden-hour.jpg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${plusJakarta.variable}`}>
      <body className="blueprint-neutral bg-[#121212] text-neutral-200 antialiased selection:bg-champagne selection:text-neutral-950">
        {children}
      </body>
    </html>
  );
}
