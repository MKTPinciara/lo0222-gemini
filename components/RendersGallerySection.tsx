"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Camera,
} from "lucide-react";
import LightboxModal from "./LightboxModal";

export const projectRenders = [
  {
    id: 1,
    url: "/assets/renders/08-fachada-dramatica-golden-hour.jpg",
    shortLabel: "Fachada Noite",
    badge: "Fachada Principal & Esquina",
    title: "Perspectiva Angular — Cobertura Esculpida & Balanço Noturno",
    desc: "Marquise em balanço de linhas puras com iluminação indireta cênica sob o céu crepuscular de São Francisco. Vitrine com visualização desimpedida para pedestres e fluxo veicular contínuo.",
  },
  {
    id: 2,
    url: "/assets/renders/01-fachada-frontal-dia.jpg",
    shortLabel: "Salão Térreo",
    badge: "Fachada Frontal",
    title: "Fachada Frontal com Brises Amadeirados & Luz Natural",
    desc: "Composição de brises ripados que filtram a incidência solar, perfis em alumínio preto anodizado e pé-direito monumental.",
  },
  {
    id: 3,
    url: "/assets/renders/03-showroom-interno-decorado.jpg",
    shortLabel: "Pé-Direito",
    badge: "Showroom Conceito",
    title: "Showroom e Mezanino com Ambientação Premium",
    desc: "Simulação de layout para loja conceito com mobiliário de alto padrão, vão livre integrado e iluminação pontual de destaque.",
  },
  {
    id: 4,
    url: "/assets/renders/02-fachada-frontal-crepusculo.jpg",
    shortLabel: "Iluminação",
    badge: "Estudo Luminotécnico",
    title: "Fachada Noturna com Iluminação Cênica em Fitas LED",
    desc: "Sancas lineares contínuas embutidas sob as lajes e spots de piso arquitetônicos que mantêm o protagonismo visual 24 horas por dia.",
  },
  {
    id: 5,
    url: "/assets/renders/13-perspectiva-esquina-nobre.jpg",
    shortLabel: "Esquina Nobre",
    badge: "Volumetria Peninsular",
    title: "Volumetria da Esquina no Crepúsculo",
    desc: "Encontro estratégico das vias evidenciando a escala e a transparência do espaço comercial no Canal de São Francisco.",
  },
  {
    id: 6,
    url: "/assets/renders/05-acesso-carregador-eletrico.jpg",
    shortLabel: "Acesso EV",
    badge: "Sustentabilidade & Acessos",
    title: "Acesso Principal e Ponto de Carregador Elétrico (EV)",
    desc: "Portão de correr ripado, jardineiras com folhagens tropicais e infraestrutura preparada para wallbox de recarga veicular na calçada privativa.",
  },
  {
    id: 7,
    url: "/assets/renders/11-pele-de-vidro-mezanino.jpg",
    shortLabel: "Pele de Vidro",
    badge: "Transparência & Escala",
    title: "Pele de Vidro Contínua e Mezanino Panorâmico",
    desc: "Grande vitrine contínua que conecta o ambiente interno à dinâmica urbana, garantindo exposição máxima para os produtos em vitrine.",
  },
  {
    id: 8,
    url: "/assets/renders/04-calcada-angulo-rasante.jpg",
    shortLabel: "Calçada VIP",
    badge: "Ponto de Vista Pedestre",
    title: "Perspectiva Rasante ao Pôr do Sol",
    desc: "Ponto de vista do transeunte destacando o acabamento amadeirado, calçamento intertravado e generoso recuo de fachada.",
  },
  {
    id: 9,
    url: "/assets/renders/09-fachada-cobertura-marquise.jpg",
    shortLabel: "Marquise",
    badge: "Detalhe Arquitetônico",
    title: "Marquise em Balanço com Iluminação Embutida",
    desc: "Volume arquitetônico com sanca linear de LED e materiais de altíssima durabilidade projetados para resistir à maresia costeira.",
  },
  {
    id: 10,
    url: "/assets/renders/16-esquina-dia-showroom.jpg",
    shortLabel: "Showroom Dia",
    badge: "Luz & Amplitude",
    title: "Esquina Comercial em Dia Ensolarado",
    desc: "Luminosidade natural abundante evidenciando a amplitude do pé-direito duplo e a circulação interna fluida.",
  },
  {
    id: 11,
    url: "/assets/renders/10-fachada-frontal-iluminacao.jpg",
    shortLabel: "Brises Noite",
    badge: "Noite & Segurança",
    title: "Fachada Noturna com Brises Retroiluminados",
    desc: "Estética refinada e segurança ativa com iluminação indireta de piso e teto projetada pelo arquiteto.",
  },
  {
    id: 12,
    url: "/assets/renders/12-loja-portao-aberto.jpg",
    shortLabel: "Acesso Aberto",
    badge: "Operação & Fluxo",
    title: "Fachada Totalmente Aberta ao Público",
    desc: "Vão de acesso generoso promovendo circulação contínua entre o exterior e o showroom térreo.",
  },
  {
    id: 13,
    url: "/assets/renders/06-calcada-humanizada.jpg",
    shortLabel: "Humanizada",
    badge: "Urbanismo",
    title: "Calçada e Paisagismo Humanizado",
    desc: "Integração harmônica com a arborização e o ambiente sofisticado característico de São Francisco.",
  },
  {
    id: 14,
    url: "/assets/renders/07-esquina-panoramica-dusk.jpg",
    shortLabel: "Panorâmica",
    badge: "Vista Ampla",
    title: "Vista Panorâmica da Esquina ao Entardecer",
    desc: "Visão ampla de ambas as fachadas na esquina da Rua Guaianazes com a Av. Presidente Franklin Roosevelt.",
  },
  {
    id: 15,
    url: "/assets/renders/14-perspectiva-calcada-ampla.jpg",
    shortLabel: "Vagas Recuo",
    badge: "Estacionamento",
    title: "Recuo Frontal com Vagas Privativas de Estacionamento",
    desc: "Comodidade essencial para clientes de alto padrão, facilitando o acesso direto com segurança.",
  },
  {
    id: 16,
    url: "/assets/renders/15-angulo-dramatico-close.jpg",
    shortLabel: "Close Fachada",
    badge: "Acabamentos",
    title: "Detalhe Construtivo de Brises e Caixilhos Metálicos",
    desc: "Rigor técnico e acabamentos nobres com pintura eletrostática preta fosca e elementos termoacústicos.",
  },
];

const keyMetrics = [
  {
    label: "Área Total Construída",
    value: "225,8",
    unit: "m²",
    desc: "Integração perfeita entre térreo de recepção e mezanino executivo.",
  },
  {
    label: "Salão Térreo Nobre",
    value: "147,9",
    unit: "m²",
    desc: "Pé-direito duplo de impacto e panos contínuos de vidro temperado.",
  },
  {
    label: "Mezanino Reservado",
    value: "77,9",
    unit: "m²",
    desc: "Espaço executivo privativo com vista panorâmica para o salão.",
  },
  {
    label: "Posição Estratégica",
    value: "Canal de São Francisco",
    unit: "",
    desc: "Rua Guaianazes esquina com Franklin Roosevelt.",
    isTextOnly: true,
  },
];

export default function RendersGallerySection() {
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  const active = projectRenders[index];

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? projectRenders.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === projectRenders.length - 1 ? 0 : prev + 1));
  };

  // Auto-scroll the thumbnail strip to center the active thumbnail in its single row
  useEffect(() => {
    if (thumbnailsRef.current) {
      const activeBtn = thumbnailsRef.current.children[index] as HTMLElement;
      if (activeBtn) {
        const container = thumbnailsRef.current;
        const scrollPosition =
          activeBtn.offsetLeft - container.offsetWidth / 2 + activeBtn.offsetWidth / 2;
        container.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });
      }
    }
  }, [index]);

  return (
    <>
      <section
        id="perspectivas"
        className="pt-8 md:pt-14 pb-16 md:pb-24 bg-[#151515] border-b border-white/[0.08] relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-10">
          {/* Main Interactive Media Viewer Card - First element in the section */}
          <motion.div
            className="bg-[#1c1c1c] border border-white/[0.09] overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            {/* Viewer Toolbar */}
            <div className="px-4 sm:px-7 py-3 border-b border-white/[0.08] flex items-center justify-between bg-[#191919]">
              <div className="flex items-center gap-2.5">
                <span className="inline-block w-2 h-2 rounded-full bg-champagne animate-pulse shrink-0" />
                <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.16em] uppercase text-neutral-300 truncate">
                  Render em Alta Resolução
                </span>
              </div>
              <div className="text-[11px] text-neutral-400 font-medium flex items-center gap-3 shrink-0">
                <span className="hidden sm:inline-flex items-center gap-1.5">
                  <Camera className="w-3.5 h-3.5 text-champagne" /> {active.badge}
                </span>
                <span className="px-2 py-0.5 border border-white/[0.12] bg-[#141414] text-champagne font-mono text-[11px] font-semibold">
                  {index + 1} / {projectRenders.length}
                </span>
              </div>
            </div>

            {/* Render Showcase Container - Instant slide change (no slow fade) */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] max-h-[600px] bg-[#111111] flex items-center justify-center overflow-hidden group">
              <div className="absolute inset-0">
                <Image
                  key={active.url}
                  src={active.url}
                  alt={active.title}
                  fill
                  priority
                  quality={95}
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className="object-cover object-center cursor-pointer select-none transition-transform duration-700 group-hover:scale-[1.02]"
                  onClick={() => setLightboxOpen(true)}
                />
              </div>

              {/* Desktop Gradient Vignette for Title Legibility */}
              <div className="hidden sm:block absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#111111]/90 via-[#111111]/40 to-transparent z-10 pointer-events-none" />

              {/* Desktop Caption Overlay: Title & Badge Only (No paragraph) */}
              <div className="hidden sm:flex relative w-full h-full flex-col justify-end p-7 lg:p-9 z-20 pointer-events-none">
                <div className="inline-block self-start px-2.5 py-1 bg-champagne text-neutral-950 font-semibold text-[10px] tracking-[0.18em] uppercase mb-2 pointer-events-auto">
                  {active.badge}
                </div>
                <h3 className="text-lg lg:text-2xl text-white font-normal tracking-tight pointer-events-auto">
                  {active.title}
                </h3>
              </div>

              {/* Top Right Zoom Button */}
              <button
                type="button"
                onClick={() => setLightboxOpen(true)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 inline-flex items-center gap-1.5 bg-[#191919]/90 hover:bg-champagne hover:text-neutral-950 text-white text-xs px-2.5 py-1.5 border border-white/[0.12] transition-colors cursor-pointer shadow-lg"
                title="Ampliar em tela cheia"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline uppercase text-[10px] tracking-wider font-medium">Tela Cheia</span>
              </button>

              {/* Carousel Controls */}
              <button
                type="button"
                aria-label="Visualização anterior"
                onClick={handlePrev}
                className="absolute left-2.5 sm:left-5 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 bg-[#191919]/85 hover:bg-champagne hover:text-neutral-950 text-white border border-white/[0.15] flex items-center justify-center transition-all cursor-pointer shadow-lg active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                aria-label="Próxima visualização"
                onClick={handleNext}
                className="absolute right-2.5 sm:right-5 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 bg-[#191919]/85 hover:bg-champagne hover:text-neutral-950 text-white border border-white/[0.15] flex items-center justify-center transition-all cursor-pointer shadow-lg active:scale-95"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Dedicated Caption Bar: Title & Badge Only (No paragraph) */}
            <div className="sm:hidden px-4 py-3.5 bg-[#181818] border-t border-white/[0.08]">
              <div className="inline-block px-2 py-0.5 bg-champagne text-neutral-950 font-semibold text-[9px] tracking-[0.18em] uppercase mb-1">
                {active.badge}
              </div>
              <h3 className="text-sm text-white font-medium tracking-tight leading-snug">
                {active.title}
              </h3>
            </div>

            {/* Single-Row Thumbnail Strip */}
            <div className="p-3.5 sm:p-5 bg-[#161616] border-t border-white/[0.08]">
              <div className="flex items-center justify-between mb-2 px-1 text-[10px] sm:text-[11px] text-neutral-400">
                <span className="uppercase tracking-[0.18em] font-medium text-neutral-300">
                  16 Perspectivas do Projeto
                </span>
                <span className="text-[10px] sm:text-xs text-neutral-400 font-light">
                  Deslize para explorar
                </span>
              </div>

              {/* Single row: nowrap, smooth overflow scroll */}
              <div
                ref={thumbnailsRef}
                className="overflow-x-auto py-1.5 scrollbar-none flex gap-2 sm:gap-2.5 items-center"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {projectRenders.map((r, i) => {
                  const isActive = i === index;
                  return (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => setIndex(i)}
                      className={`relative shrink-0 h-14 sm:h-20 aspect-[16/10] overflow-hidden rounded-sm transition-all duration-300 border cursor-pointer group/thumb ${
                        isActive
                          ? "border-champagne ring-2 ring-champagne/40 scale-105 z-10 shadow-lg shadow-champagne/20 opacity-100"
                          : "border-white/10 opacity-60 hover:opacity-100 hover:border-champagne/50"
                      }`}
                      title={`${String(i + 1).padStart(2, "0")} — ${r.title}`}
                    >
                      <Image
                        src={r.url}
                        alt={r.title}
                        fill
                        sizes="130px"
                        className="object-cover pointer-events-none select-none"
                      />
                      <span
                        className={`absolute bottom-1 right-1 px-1.5 py-0.5 text-[8px] sm:text-[9px] font-mono font-bold backdrop-blur-md rounded-xs transition-colors ${
                          isActive
                            ? "bg-champagne text-neutral-950"
                            : "bg-black/80 text-white group-hover/thumb:bg-black/95"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Key Metrics Cards right below the carousel — Serif ONLY on the metric numbers */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 mt-8 sm:mt-12 md:mt-16" id="metricas">
            {keyMetrics.map((m, idx) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className="bg-[#1c1c1c] p-4 sm:p-7 border border-white/[0.08] hover:border-champagne/50 transition-colors duration-300 shadow-sm group flex flex-col justify-between"
              >
                <div>
                  <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.2em] text-neutral-400 mb-2 sm:mb-3.5 font-medium group-hover:text-champagne transition-colors">
                    {m.label}
                  </div>
                  {m.isTextOnly ? (
                    <div className="text-base sm:text-xl font-medium text-white tracking-tight min-h-[36px] sm:min-h-[42px] flex items-center leading-tight">
                      {m.value}
                    </div>
                  ) : (
                    <div className="text-2xl sm:text-4xl font-light text-white tracking-tight flex items-baseline gap-1 font-serif min-h-[36px] sm:min-h-[42px]">
                      {m.value}{" "}
                      <span className="text-xs sm:text-sm font-sans text-champagne font-normal">
                        {m.unit}
                      </span>
                    </div>
                  )}
                </div>
                <p className="text-[11px] sm:text-xs text-neutral-400 mt-2.5 sm:mt-3 leading-relaxed font-light">
                  {m.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={projectRenders.map((r) => ({
          src: r.url,
          title: r.title,
          caption: r.desc,
          category: r.badge,
        }))}
        currentIndex={index}
        onNavigate={(newIdx) => setIndex(newIdx)}
      />
    </>
  );
}
