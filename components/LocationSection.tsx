"use client";

import { MapPin } from "lucide-react";
import ViewOnMap from "./ViewOnMap";

export default function LocationSection() {
  return (
    <section id="localizacao" className="py-24 md:py-36 bg-brand-sand text-brand-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side Info */}
          <div className="lg:col-span-6">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-brand-gold block mb-3">
              Localização de Prestígio
            </span>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight leading-[1.05] mb-6">
              Na esquina da cidade.
            </h2>

            <div className="flex items-start gap-4 mb-8 bg-brand-cream/90 border border-brand-dark/10 p-6 rounded-sm">
              <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-1" />
              <div>
                <strong className="block text-brand-dark text-base font-medium mb-1">
                  Avenida Presidente Franklin Roosevelt, esq. Rua Guajianases
                </strong>
                <p className="text-brand-muted text-xs font-light">
                  São Francisco — Niterói, Rio de Janeiro.
                </p>
              </div>
            </div>

            <p className="text-brand-muted text-sm sm:text-base font-light leading-relaxed mb-8">
              São Francisco é um dos bairros mais valorizados de Niterói, reconhecido pela concentração de público de alto poder aquisitivo e trânsito contínuo de clientes em busca de projetos de decoração e arquitetura.
            </p>

            {/* Interactive ViewOnMap Button Component */}
            <div className="pt-2">
              <ViewOnMap
                address="Avenida Presidente Franklin Roosevelt Guajianases Sao Francisco Niteroi"
                locationName="Abrir Mapa Interativo"
                mapImageUrl="/assets/caderno/page-01.png"
              />
            </div>
          </div>

          {/* Right Side Minimal Location Card */}
          <div className="lg:col-span-6">
            <div className="relative aspect-square w-full rounded-sm overflow-hidden bg-brand-dark text-white p-8 flex flex-col justify-between border border-white/10 shadow-2xl">
              {/* Minimal Line Art Background */}
              <div className="absolute inset-10 border border-white/10 rounded-sm pointer-events-none" />
              <div className="absolute inset-20 border border-brand-gold/20 rounded-sm pointer-events-none" />

              {/* Center Content */}
              <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center">
                <div className="w-14 h-14 rounded-full bg-brand-gold/15 border border-brand-gold text-brand-gold flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-brand-gold font-semibold mb-1">
                  PROJETO SÃO FRANCISCO
                </span>
                <h3 className="text-xl font-light tracking-tight text-white mb-2">
                  Esquina Franklin Roosevelt x Guajianases
                </h3>
                <span className="text-xs text-gray-400 font-light">Niterói — RJ</span>
              </div>

              {/* Card Footer */}
              <div className="relative z-10 pt-6 border-t border-white/10 flex justify-between items-center text-[10px] text-gray-400 uppercase tracking-widest">
                <span>Ponto Comercial de Esquina</span>
                <span>Pinciara Exclusivos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
