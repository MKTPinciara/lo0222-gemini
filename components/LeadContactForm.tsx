"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Send, CheckCircle2 } from "lucide-react";

export default function LeadContactForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedText = `Olá, Luiz Pinciara! Tenho interesse no imóvel comercial do Projeto São Francisco.\n\n*Nome:* ${nome}\n*E-mail:* ${email}\n*Telefone:* ${telefone}\n*Mensagem:* ${mensagem || "Gostaria de agendar uma visita e receber mais informações."}`;

    const encodedText = encodeURIComponent(formattedText);
    const whatsappLink = `https://wa.me/5521995221369?text=${encodedText}`;

    setSubmitted(true);
    setTimeout(() => {
      window.open(whatsappLink, "_blank");
    }, 400);
  };

  const inputClass =
    "w-full bg-brand-darker border border-white/15 focus:border-brand-gold rounded-sm px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors";

  return (
    <section id="contato" className="py-24 md:py-36 bg-brand-darker text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Contact Intro & Agent Info */}
          <motion.div
            className="lg:col-span-5 flex flex-col justify-between"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-brand-gold block mb-3">
                Atendimento Comercial
              </span>
              <h2 className="text-3xl sm:text-5xl font-light tracking-tight leading-[1.05] mb-6">
                Fale com a equipe responsável.
              </h2>
              <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed mb-8">
                Preencha os dados no formulário ao lado para falar com o corretor responsável pelo Projeto São Francisco.
              </p>

              {/* Agent Card */}
              <motion.div
                className="bg-brand-dark/80 border border-white/10 p-6 rounded-sm mb-6 flex items-center gap-5"
                whileHover={{ borderColor: "rgba(255,179,0,0.35)", transition: { duration: 0.3 } }}
              >
                <div className="relative w-14 h-14 rounded-full border border-brand-gold flex items-center justify-center bg-brand-gold/10 shrink-0">
                  <Image
                    src="/assets/brand/logo.svg"
                    alt="Pinciara Imóveis Exclusivos"
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-brand-gold font-semibold block mb-0.5">
                    Corretor de Imóveis
                  </span>
                  <h3 className="text-lg font-semibold text-white">Luiz Pinciara</h3>
                  <span className="text-xs text-gray-400 font-light flex items-center gap-1.5 mt-0.5">
                    <Phone className="w-3.5 h-3.5 text-brand-gold" />
                    (21) 99522-1369
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Clean Minimalist Form */}
          <motion.div
            className="lg:col-span-7 bg-brand-dark border border-white/10 p-8 md:p-12 rounded-sm shadow-2xl"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-2xl font-light tracking-tight text-white mb-2">
              Formulário de Contato
            </h3>
            <p className="text-gray-400 text-xs font-light mb-8">
              Ao enviar, você será direcionado para o WhatsApp de Luiz Pinciara.
            </p>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  className="bg-brand-gold/10 border border-brand-gold/40 text-brand-gold p-8 rounded-sm text-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -30 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.1 }}
                  >
                    <CheckCircle2 className="w-10 h-10 mx-auto mb-3 text-brand-gold" />
                  </motion.div>
                  <h4 className="text-lg font-semibold mb-2 text-white">Mensagem Enviada!</h4>
                  <p className="text-xs text-gray-300 font-light mb-6">
                    Redirecionando para a conversa no WhatsApp com <strong>Luiz Pinciara</strong>.
                  </p>
                  <motion.a
                    href={`https://wa.me/5521995221369?text=${encodeURIComponent(
                      `Olá, Luiz Pinciara! Tenho interesse no imóvel comercial do Projeto São Francisco.\n*Nome:* ${nome}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-brand-gold bg-brand-gold text-brand-dark px-6 py-3 text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-amber-400 transition-colors"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Phone className="w-4 h-4" />
                    <span>Abrir WhatsApp Novamente</span>
                  </motion.a>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Name & Phone Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nome" className="block text-[10px] uppercase tracking-widest text-gray-300 mb-2">
                        Nome Completo *
                      </label>
                      <input
                        id="nome"
                        type="text"
                        required
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Seu nome"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label htmlFor="telefone" className="block text-[10px] uppercase tracking-widest text-gray-300 mb-2">
                        Telefone / WhatsApp *
                      </label>
                      <input
                        id="telefone"
                        type="tel"
                        required
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                        placeholder="(21) 99999-9999"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-[10px] uppercase tracking-widest text-gray-300 mb-2">
                      E-mail Comercial *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="seuemail@exemplo.com.br"
                      className={inputClass}
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="mensagem" className="block text-[10px] uppercase tracking-widest text-gray-300 mb-2">
                      Mensagem (opcional)
                    </label>
                    <textarea
                      id="mensagem"
                      rows={3}
                      value={mensagem}
                      onChange={(e) => setMensagem(e.target.value)}
                      placeholder="Escreva sua mensagem ou dúvida sobre o imóvel..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    className="w-full border border-brand-gold bg-brand-gold hover:bg-amber-400 text-brand-dark py-4 text-xs font-bold uppercase tracking-[0.18em] transition-all rounded-sm shadow-xl flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Mensagem via WhatsApp</span>
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
