"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, CheckCircle2, MessageSquare, Building2 } from "lucide-react";

export default function LeadContactForm() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [segmento, setSegmento] = useState("Design de Interiores & Mobiliário");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedText = `Olá, Luiz Pinciara! Tenho interesse no imóvel comercial da Loja Conceitual no Canal de São Francisco (Rua Guaianazes, 46).\n\n*Nome:* ${nome}\n*Telefone:* ${telefone}\n*E-mail:* ${email}\n*Segmento da Marca:* ${segmento}\n\nGostaria de receber a apresentação técnica e agendar uma visita ao espaço.`;

    const encodedText = encodeURIComponent(formattedText);
    const whatsappLink = `https://wa.me/5521995221369?text=${encodedText}`;

    setSubmitted(true);
    setTimeout(() => {
      window.open(whatsappLink, "_blank");
    }, 400);
  };

  return (
    <section
      id="contato"
      className="py-16 md:py-24 bg-[#1d1d1d] border-b border-white/[0.08] relative"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Broker Authority Card & Copy (5 Cols) */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <span className="text-[9px] sm:text-[10px] tracking-[0.28em] uppercase text-champagne font-semibold block mb-1.5 sm:mb-2">
              Atendimento Sob Medida
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white tracking-tight leading-tight">
              Conecte sua Marca a um Endereço Ícone
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm md:text-base leading-relaxed mt-3.5 mb-6 sm:mb-8 font-light">
              Trate diretamente com quem é referência na intermediação de imóveis corporativos e comerciais de alto padrão em Niterói. Atendimento discreto, ágil e consultivo.
            </p>

            {/* Broker Professional Card */}
            <motion.div
              whileHover={{ y: -3 }}
              className="p-5 sm:p-7 bg-[#242424] border border-white/[0.1] hover:border-champagne/40 transition-colors shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-champagne flex items-center justify-center text-neutral-950 font-bold text-lg sm:text-xl shrink-0 shadow-md">
                  LP
                </div>
                <div>
                  <span className="text-[9px] sm:text-[10px] uppercase font-semibold tracking-[0.2em] text-champagne">
                    Corretor Responsável
                  </span>
                  <h4 className="text-sm sm:text-base font-semibold text-white mt-0.5">
                    Luiz Pinciara
                  </h4>
                  <p className="text-[11px] sm:text-xs text-neutral-400 font-light">
                    Especialista Imobiliário • CRECI CJ 7119
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-5 border-t border-white/[0.08] space-y-2.5 text-xs">
                <a
                  className="flex items-center gap-3 text-neutral-300 hover:text-champagne transition"
                  href="tel:21995221369"
                >
                  <Phone className="w-3.5 h-3.5 text-champagne shrink-0" />
                  <span>(21) 99522-1369</span>
                </a>
                <a
                  className="flex items-center gap-3 text-neutral-300 hover:text-champagne transition"
                  href="https://wa.me/5521995221369"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-champagne shrink-0" />
                  <span>Conversa Prioritária via WhatsApp</span>
                </a>
                <div className="flex items-center gap-3 text-neutral-400">
                  <Building2 className="w-3.5 h-3.5 text-champagne shrink-0" />
                  <span>Pinciara Imóveis Exclusivos</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Editorial Form (7 Cols) */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
          >
            <div className="bg-[#242424] p-5 sm:p-10 border border-white/[0.1] shadow-2xl">
              <div className="mb-6 sm:mb-7">
                <h3 className="text-lg sm:text-xl font-normal text-white tracking-tight">
                  Solicitar Apresentação Técnica Completa
                </h3>
                <p className="text-xs text-neutral-400 mt-1.5 font-light leading-relaxed">
                  Preencha os campos para receber o dossiê detalhado em PDF e agendar uma visita presencial ao imóvel.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-6 sm:p-8 text-center bg-[#1c1c1c] border border-champagne/40"
                  >
                    <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-champagne mx-auto mb-3" />
                    <h4 className="text-base sm:text-lg font-medium text-white mb-2">
                      Solicitação Iniciada com Sucesso
                    </h4>
                    <p className="text-xs text-neutral-400 mb-5 font-light">
                      Redirecionando para a conversa direta no WhatsApp de <strong>Luiz Pinciara</strong>.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 bg-champagne text-neutral-950 font-semibold text-[10px] sm:text-[11px] uppercase tracking-[0.16em]"
                    >
                      Enviar Nova Mensagem
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="nome"
                        className="block text-[10px] sm:text-[11px] uppercase tracking-[0.16em] font-medium text-neutral-300 mb-1.5"
                      >
                        Nome Completo *
                      </label>
                      <input
                        id="nome"
                        type="text"
                        required
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Seu nome ou representante comercial"
                        className="w-full bg-[#181818] border border-white/[0.1] px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-champagne transition"
                      />
                    </div>

                    {/* Phone & Email (2 cols) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label
                          htmlFor="telefone"
                          className="block text-[10px] sm:text-[11px] uppercase tracking-[0.16em] font-medium text-neutral-300 mb-1.5"
                        >
                          Telefone / WhatsApp *
                        </label>
                        <input
                          id="telefone"
                          type="tel"
                          required
                          value={telefone}
                          onChange={(e) => setTelefone(e.target.value)}
                          placeholder="(21) 99999-9999"
                          className="w-full bg-[#181818] border border-white/[0.1] px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-champagne transition"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-[10px] sm:text-[11px] uppercase tracking-[0.16em] font-medium text-neutral-300 mb-1.5"
                        >
                          E-mail Corporativo *
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="seuemail@empresa.com.br"
                          className="w-full bg-[#181818] border border-white/[0.1] px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-champagne transition"
                        />
                      </div>
                    </div>

                    {/* Segment Select */}
                    <div>
                      <label
                        htmlFor="segmento"
                        className="block text-[10px] sm:text-[11px] uppercase tracking-[0.16em] font-medium text-neutral-300 mb-1.5"
                      >
                        Segmento da Marca / Atividade Comercial
                      </label>
                      <select
                        id="segmento"
                        value={segmento}
                        onChange={(e) => setSegmento(e.target.value)}
                        className="w-full bg-[#181818] border border-white/[0.1] px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-champagne transition cursor-pointer"
                      >
                        <option value="Design de Interiores & Mobiliário" className="bg-[#242424] text-neutral-300">
                          Design de Interiores &amp; Mobiliário
                        </option>
                        <option value="Gastronomia / Café / Bistrô Nobre" className="bg-[#242424] text-neutral-300">
                          Gastronomia / Café / Bistrô Nobre
                        </option>
                        <option value="Concessionária & Veículos Premium" className="bg-[#242424] text-neutral-300">
                          Concessionária &amp; Veículos Premium
                        </option>
                        <option value="Moda & Joalheria Conceito" className="bg-[#242424] text-neutral-300">
                          Moda &amp; Joalheria Conceito
                        </option>
                        <option value="Serviços Financeiros / Clínica / Saúde" className="bg-[#242424] text-neutral-300">
                          Serviços Financeiros / Clínica / Saúde
                        </option>
                        <option value="Outros Segmentos Exclusivos" className="bg-[#242424] text-neutral-300">
                          Outros Segmentos Exclusivos
                        </option>
                      </select>
                    </div>

                    {/* Submit CTA */}
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full mt-2 py-3.5 sm:py-4 px-5 bg-champagne hover:bg-champagne-light text-neutral-950 font-semibold text-[10px] sm:text-[11px] uppercase tracking-[0.18em] transition duration-300 flex items-center justify-center gap-2.5 cursor-pointer shadow-lg"
                    >
                      <MessageSquare className="w-4 h-4 shrink-0" />
                      <span>Iniciar Conversa no WhatsApp</span>
                    </motion.button>

                    <p className="text-[10px] text-center text-neutral-400 mt-2 font-light">
                      Respeitamos sua privacidade. Seus dados serão utilizados estritamente para o envio das informações solicitadas.
                    </p>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
