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
  title: "Projeto São Francisco — Flagship Showroom em Niterói | Pinciara Imóveis Exclusivos",
  description: "Endereço comercial de alto padrão na esquina nobre de São Francisco, Niterói - RJ. Loja + Mezanino (~225m²). Ideal para marcas de móveis planejados, arquitetura e design.",
  keywords: ["São Francisco Niterói", "Ponto Comercial Niterói", "Showroom Móveis Planejados", "Imóvel Comercial Alto Padrão", "Pinciara Imóveis Exclusivos", "Luiz Pinciara"],
  openGraph: {
    title: "Projeto São Francisco — Flagship Showroom em Niterói",
    description: "Espaço comercial de alto padrão com fachada contemporânea, brises de alumínio e pé-direito amplo na esquina de São Francisco.",
    images: ["/assets/caderno/page-01.png"],
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
