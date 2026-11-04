import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://saofrancisco-flagship.com.br"),
  title: "Projeto São Francisco — Flagship Showroom em Niterói | Pinciara Imóveis Exclusivos",
  description:
    "Endereço comercial de alto padrão na esquina nobre de São Francisco, Niterói - RJ (Rua Guaianazes, 46). Loja + Mezanino (~225,8 m²). Ponto nobre para flagship store.",
  keywords: [
    "São Francisco Niterói",
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
    title: "Projeto São Francisco — Flagship Showroom em Niterói | Pinciara",
    description:
      "Espaço comercial de alto padrão com fachada contemporânea, brises de alumínio e pé-direito duplo na esquina nobre de São Francisco.",
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
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-brand-paper text-brand-dark antialiased selection:bg-brand-gold selection:text-brand-dark">
        {children}
      </body>
    </html>
  );
}
