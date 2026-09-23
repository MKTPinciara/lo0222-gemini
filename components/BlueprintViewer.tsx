"use client";

import { useState } from "react";
import Image from "next/image";
import { ZoomIn, Maximize2, FileText, Check } from "lucide-react";
import LightboxModal from "./LightboxModal";

export default function BlueprintViewer() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImage, setActiveImage] = useState("");
  const [activeCaption, setActiveCaption] = useState("");

  const handleOpenLightbox = (src: string, caption: string) => {
    setActiveImage(src);
    setActiveCaption(caption);
    setLightboxOpen(true);
  };

  return (
    <>
      <section id="plantas" className="py-24 md:py-36 bg-brand-sand text-brand-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold block mb-3">
              Engenharia & Arquitetura
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6">
              O espaço, por dentro.
            </h2>
            <p className="text-lg text-brand-muted font-light leading-relaxed">
              Uma planta simples, objetiva e inteligente que organiza a experiência em dois níveis integrados, equilibrando área de exposição térrea e privacidade no mezanino.
            </p>
          </div>

          {/* Blueprint Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Blueprint Technical Drawing Container */}
            <div className="lg:col-span-8 bg-brand-cream border border-brand-dark/15 p-4 md:p-6 rounded-sm shadow-xl relative group">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm bg-white border border-brand-dark/10">
                <Image
                  src="/assets/prancha/prancha-01.png"
                  alt="Prancha técnica com plantas baixas, cortes e fachadas do Projeto São Francisco"
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                  onClick={() =>
                    handleOpenLightbox(
                      "/assets/prancha/prancha-01.png",
                      "Prancha Técnica com Implantação, Plantas Baixas, Cortes e Quadro de Esquadrias — Projeto São Francisco"
                    )
                  }
                />
              </div>

              {/* Hover Action Overlay */}
              <button
                onClick={() =>
                  handleOpenLightbox(
                    "/assets/prancha/prancha-01.png",
                    "Prancha Técnica com Implantação, Plantas Baixas, Cortes e Quadro de Esquadrias — Projeto São Francisco"
                  )
                }
                className="mt-4 flex items-center justify-center gap-2 w-full py-3 bg-brand-dark text-white hover:bg-brand-gold hover:text-brand-dark text-xs font-bold uppercase tracking-widest rounded-sm transition-colors"
              >
                <ZoomIn className="w-4 h-4" />
                <span>Ampliar Prancha Técnica em Alta Resolução</span>
              </button>
            </div>

            {/* Sidebar Details & Data Table */}
            <div className="lg:col-span-4 bg-brand-cream border border-brand-dark/15 p-8 rounded-sm">
              <h3 className="text-2xl font-light tracking-tight mb-6 pb-4 border-b border-brand-dark/15 flex items-center gap-2">
                <FileText className="w-5 h-5 text-brand-gold" />
                Leitura Técnica
              </h3>

              {/* Data Table Rows */}
              <div className="space-y-4 text-sm mb-8">
                <div className="flex justify-between items-center py-2.5 border-b border-brand-dark/10">
                  <span className="text-brand-muted">Área Térrea (Loja)</span>
                  <strong className="font-semibold text-base">147,87 m²</strong>
                </div>

                <div className="flex justify-between items-center py-2.5 border-b border-brand-dark/10">
                  <span className="text-brand-muted">Mezanino Elevado</span>
                  <strong className="font-semibold text-base">77,92 m²</strong>
                </div>

                <div className="flex justify-between items-center py-2.5 border-b border-brand-dark/10">
                  <span className="text-brand-muted">Área Total Construída</span>
                  <strong className="font-semibold text-base text-brand-gold">225,79 m²</strong>
                </div>

                <div className="flex justify-between items-center py-2.5 border-b border-brand-dark/10">
                  <span className="text-brand-muted">Península / Esquina</span>
                  <strong className="font-semibold">Sim (Esquina Dupla)</strong>
                </div>

                <div className="flex justify-between items-center py-2.5 border-b border-brand-dark/10">
                  <span className="text-brand-muted">Endereço</span>
                  <strong className="font-semibold text-right">São Francisco — Niterói/RJ</strong>
                </div>
              </div>

              {/* Highlights List */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2 text-xs text-brand-dark">
                  <Check className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>Quadro de esquadrias em alumínio preto</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-brand-dark">
                  <Check className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>Brises metálicos modulares</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-brand-dark">
                  <Check className="w-4 h-4 text-brand-gold shrink-0" />
                  <span>Acesso facilitado para clientes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Component */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageSrc={activeImage}
        caption={activeCaption}
      />
    </>
  );
}
