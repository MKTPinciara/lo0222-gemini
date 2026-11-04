"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, Sparkles } from "lucide-react";
import LightboxModal from "@/components/LightboxModal";

export interface CarouselItem {
  id: number | string;
  url: string;
  title: string;
  category?: string;
  description?: string;
}

export const defaultProjectRenders: CarouselItem[] = [
  {
    id: 1,
    url: "/assets/renders/08-fachada-dramatica-golden-hour.jpg",
    title: "Perspectiva Angular — Cobertura Esculpida",
    category: "Fachada & Esquina",
    description: "Marquise em balanço com iluminação cênica sob o céu crepuscular de São Francisco.",
  },
  {
    id: 2,
    url: "/assets/renders/01-fachada-frontal-dia.jpg",
    title: "Fachada Frontal — Luz Natural",
    category: "Fachada & Esquina",
    description: "Composição de brises ripados, estrutura metálica preta e pele de vidro térrea.",
  },
  {
    id: 3,
    url: "/assets/renders/03-showroom-interno-decorado.jpg",
    title: "Showroom e Mezanino com Ambientação",
    category: "Showroom & Interior",
    description: "Simulação de layout para loja conceito com mobiliário de alto padrão e mezanino.",
  },
  {
    id: 4,
    url: "/assets/renders/02-fachada-frontal-crepusculo.jpg",
    title: "Fachada Frontal — Iluminação Cênica",
    category: "Iluminação Noturna",
    description: "Estudo luminotécnico noturno com iluminação perimetral de LED na cobertura.",
  },
  {
    id: 5,
    url: "/assets/renders/13-perspectiva-esquina-nobre.jpg",
    title: "Volumetria da Esquina no Crepúsculo",
    category: "Fachada & Esquina",
    description: "Encontro nobre das vias evidenciando a escala e a transparência do espaço.",
  },
  {
    id: 6,
    url: "/assets/renders/05-acesso-carregador-eletrico.jpg",
    title: "Acesso Principal e Ponto de Carregador Elétrico (EV)",
    category: "Acessos & Sustentabilidade",
    description: "Portão de correr ripado, jardineiras com folhagens tropicais e infraestrutura para wallbox EV.",
  },
  {
    id: 7,
    url: "/assets/renders/11-pele-de-vidro-mezanino.jpg",
    title: "Pele de Vidro, Pé-Direito Duplo e Mezanino",
    category: "Showroom & Interior",
    description: "Grande vitrine contínua que integra o espaço comercial diretamente à calçada.",
  },
  {
    id: 8,
    url: "/assets/renders/04-calcada-angulo-rasante.jpg",
    title: "Perspectiva Rasante ao Pôr do Sol",
    category: "Fachada & Esquina",
    description: "Ponto de vista do pedestre destacando o acabamento amadeirado e o piso intertravado.",
  },
  {
    id: 9,
    url: "/assets/renders/09-fachada-cobertura-marquise.jpg",
    title: "Marquise em Balanço com Iluminação Embutida",
    category: "Iluminação Noturna",
    description: "Volume arquitetônico com sanca linear de LED e materiais nobres.",
  },
  {
    id: 10,
    url: "/assets/renders/16-esquina-dia-showroom.jpg",
    title: "Esquina Comercial em Dia Ensolarado",
    category: "Showroom & Interior",
    description: "Luminosidade natural abundante evidenciando a amplitude do pé-direito duplo.",
  },
  {
    id: 11,
    url: "/assets/renders/10-fachada-frontal-iluminacao.jpg",
    title: "Fachada Noturna com Brises Iluminados",
    category: "Iluminação Noturna",
    description: "Segurança e estética com iluminação indireta de piso e teto.",
  },
  {
    id: 12,
    url: "/assets/renders/12-loja-portao-aberto.jpg",
    title: "Fachada Totalmente Aberta ao Público",
    category: "Fachada & Esquina",
    description: "Vão de acesso amplo promovendo circulação contínua entre o exterior e o showroom.",
  },
  {
    id: 13,
    url: "/assets/renders/06-estacionamento-calcada.jpg",
    title: "Estacionamento Privativo e Calçada Conectada",
    category: "Acessos & Sustentabilidade",
    description: "Recuo frontal com vagas privativas de parada e manobra de veículos.",
  },
  {
    id: 14,
    url: "/assets/renders/07-esquina-panoramica-dusk.jpg",
    title: "Vista Panorâmica da Esquina ao Entardecer",
    category: "Fachada & Esquina",
    description: "Visão ampla de ambas as fachadas na esquina da Rua Guaianazes.",
  },
  {
    id: 15,
    url: "/assets/renders/14-perspectiva-arborizacao.jpg",
    title: "Integração Urbana e Arborização",
    category: "Acessos & Sustentabilidade",
    description: "Harmonia entre a arquitetura contemporânea e a vegetação existente do bairro.",
  },
  {
    id: 16,
    url: "/assets/renders/15-jardineiras-acesso-pedestres.jpg",
    title: "Jardineiras Tropicais e Acesso",
    category: "Acessos & Sustentabilidade",
    description: "Paisagismo lateral que emoldura a entrada nobre do empreendimento.",
  },
];

const FULL_WIDTH_PX = 120;
const COLLAPSED_WIDTH_PX = 38;
const GAP_PX = 4;
const MARGIN_PX = 2;

interface ThumbnailsProps {
  items: CarouselItem[];
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

function Thumbnails({ items, index, setIndex }: ThumbnailsProps) {
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (thumbnailsRef.current) {
      let scrollPosition = 0;
      for (let i = 0; i < index; i++) {
        scrollPosition += COLLAPSED_WIDTH_PX + GAP_PX;
      }

      scrollPosition += MARGIN_PX;

      const containerWidth = thumbnailsRef.current.offsetWidth;
      const centerOffset = containerWidth / 2 - FULL_WIDTH_PX / 2;
      scrollPosition -= centerOffset;

      thumbnailsRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [index]);

  return (
    <div
      ref={thumbnailsRef}
      className="overflow-x-auto py-2"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <style>{`
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div className="flex gap-1 h-20 pb-1" style={{ width: "fit-content" }}>
        {items.map((item, i) => (
          <motion.button
            key={item.id}
            onClick={() => setIndex(i)}
            initial={false}
            animate={i === index ? "active" : "inactive"}
            variants={{
              active: {
                width: FULL_WIDTH_PX,
                marginLeft: MARGIN_PX,
                marginRight: MARGIN_PX,
              },
              inactive: {
                width: COLLAPSED_WIDTH_PX,
                marginLeft: 0,
                marginRight: 0,
              },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`relative shrink-0 h-full overflow-hidden rounded-sm border transition-all duration-300 ${
              i === index
                ? "border-brand-gold shadow-lg shadow-brand-gold/20 ring-1 ring-brand-gold"
                : "border-brand-dark/15 hover:border-brand-gold/60 opacity-75 hover:opacity-100"
            }`}
            title={item.title}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.url}
              alt={item.title}
              className="w-full h-full object-cover pointer-events-none select-none"
              draggable={false}
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
}

interface ThumbnailCarouselProps {
  items?: CarouselItem[];
  className?: string;
}

export default function ThumbnailCarousel({
  items = defaultProjectRenders,
  className = "",
}: ThumbnailCarouselProps) {
  const [index, setIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);

  useEffect(() => {
    if (!isDragging && containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth || 1;
      const targetX = -index * containerWidth;

      animate(x, targetX, {
        type: "spring",
        stiffness: 300,
        damping: 30,
      });
    }
  }, [index, x, isDragging]);

  const currentItem = items[index] || items[0];

  return (
    <>
      <div className={`w-full max-w-5xl mx-auto p-2 sm:p-4 lg:p-6 ${className}`}>
        <div className="flex flex-col gap-4">
          {/* Main Carousel Frame */}
          <div
            className="relative overflow-hidden rounded-sm bg-brand-darker border border-brand-dark/15 shadow-2xl group"
            ref={containerRef}
          >
            <motion.div
              className="flex cursor-grab active:cursor-grabbing"
              drag="x"
              dragElastic={0.2}
              dragMomentum={false}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={(_, info) => {
                setIsDragging(false);
                const containerWidth = containerRef.current?.offsetWidth || 1;
                const offset = info.offset.x;
                const velocity = info.velocity.x;

                let newIndex = index;

                // If fast swipe, use velocity
                if (Math.abs(velocity) > 500) {
                  newIndex = velocity > 0 ? index - 1 : index + 1;
                }
                // Otherwise use offset threshold (25% of container width)
                else if (Math.abs(offset) > containerWidth * 0.25) {
                  newIndex = offset > 0 ? index - 1 : index + 1;
                }

                // Clamp index
                newIndex = Math.max(0, Math.min(items.length - 1, newIndex));
                setIndex(newIndex);
              }}
              style={{ x }}
            >
              {items.map((item, i) => (
                <div
                  key={item.id}
                  className="shrink-0 w-full aspect-[16/10] sm:aspect-[16/9] max-h-[560px] relative bg-brand-darker"
                  onClick={() => {
                    if (!isDragging) {
                      setLightboxOpen(true);
                    }
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover select-none pointer-events-none"
                    draggable={false}
                  />

                  {/* Gradient for caption legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                  {/* Caption Overlay */}
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-20 text-white pointer-events-none">
                    {item.category && (
                      <span className="inline-block text-[10px] uppercase tracking-[0.2em] font-semibold text-brand-gold bg-black/60 px-2.5 py-1 rounded-sm mb-1.5 backdrop-blur-sm border border-brand-gold/30">
                        {item.category}
                      </span>
                    )}
                    <h3 className="text-base sm:text-xl font-light tracking-tight text-white line-clamp-1 drop-shadow-md">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-xs sm:text-sm text-gray-300 font-light line-clamp-1 mt-0.5 drop-shadow">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Previous Button */}
            <motion.button
              type="button"
              disabled={index === 0}
              onClick={() => setIndex((i) => Math.max(0, i - 1))}
              className={`absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center shadow-2xl transition-all z-20 ${
                index === 0
                  ? "opacity-20 cursor-not-allowed bg-black/40 text-gray-500"
                  : "bg-white/90 text-brand-dark hover:bg-brand-gold hover:text-brand-dark hover:scale-105 opacity-90 backdrop-blur-sm"
              }`}
              aria-label="Imagem anterior"
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>

            {/* Next Button */}
            <motion.button
              type="button"
              disabled={index === items.length - 1}
              onClick={() => setIndex((i) => Math.min(items.length - 1, i + 1))}
              className={`absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center shadow-2xl transition-all z-20 ${
                index === items.length - 1
                  ? "opacity-20 cursor-not-allowed bg-black/40 text-gray-500"
                  : "bg-white/90 text-brand-dark hover:bg-brand-gold hover:text-brand-dark hover:scale-105 opacity-90 backdrop-blur-sm"
              }`}
              aria-label="Próxima imagem"
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>

            {/* Top Controls: Zoom Button & Counter */}
            <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
              <button
                type="button"
                onClick={() => setLightboxOpen(true)}
                className="inline-flex items-center gap-1.5 bg-black/60 hover:bg-brand-gold hover:text-brand-dark text-white text-xs px-3 py-1.5 rounded-sm backdrop-blur-md border border-white/15 transition-colors cursor-pointer shadow-lg"
                title="Ampliar em tela cheia"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Tela Cheia</span>
              </button>

              <div className="bg-black/60 text-brand-gold px-3 py-1.5 rounded-sm text-xs font-mono font-medium backdrop-blur-md border border-brand-gold/30 shadow-lg">
                {index + 1} / {items.length}
              </div>
            </div>
          </div>

          {/* Animated Thumbnails Strip */}
          <div className="bg-white border border-brand-dark/10 p-2 sm:p-3 rounded-sm shadow-md">
            <div className="flex items-center justify-between px-1 mb-1 text-[11px] text-brand-muted">
              <span className="font-medium text-brand-dark uppercase tracking-widest text-[10px]">
                Miniaturas Interativas
              </span>
              <span>Arraste ou clique para selecionar</span>
            </div>
            <Thumbnails items={items} index={index} setIndex={setIndex} />
          </div>
        </div>
      </div>

      {/* Lightbox Modal with Fullscreen Zoom */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={items.map((it) => ({
          src: it.url,
          title: it.title,
          caption: it.description,
          category: it.category,
        }))}
        currentIndex={index}
        onNavigate={(newIdx) => setIndex(newIdx)}
      />
    </>
  );
}

