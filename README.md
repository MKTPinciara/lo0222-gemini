# 🏛️ Projeto São Francisco — Flagship Showroom

Landing page de altíssimo padrão desenvolvida para apresentar o **Projeto São Francisco**, um imóvel comercial contemporâneo de esquina localizado na **Avenida Presidente Franklin Roosevelt, esquina com a Rua Guajianases**, no bairro de São Francisco em **Niterói – RJ**.

O projeto foi construído sob medida com foco em atração de **Lojas de Móveis Planejados de Alto Padrão** e **Escritórios de Arquitetura & Design**, combinando o design system refinado da **Pinciara Imóveis Exclusivos** com micro-interações inspiradas em referências internacionais como o *ERA Residence*.

---

## 📐 Especificações do Imóvel Comercial

- **Área Total Construída**: `~225,8 m²`
- **Área Térrea (Loja)**: `147,87 m²` (Pé-direito amplo e vitrine contínua de esquina)
- **Mezanino Elevado**: `77,92 m²` (Área VIP para atendimento e escritórios)
- **Fachada**: Brises de alumínio modular, pele de vidro e presença urbana marcante
- **Endereço**: Av. Pres. Franklin Roosevelt x Rua Guajianases — São Francisco, Niterói / RJ

---

## 🛠️ Tecnologias Utilizadas

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Estilização**: [Tailwind CSS](https://tailwindcss.com/)
- **Animações de Scroll**: [GSAP](https://gsap.com/) & ScrollTrigger
- **Animações de Componentes**: [Framer Motion](https://www.framer.com/motion/)
- **Ícones**: [Lucide React](https://lucide.dev/)
- **Mapa Interativo**: Componente `ViewOnMap` (inspirado no registry Watermelon/shadcn)

---

## 🎨 Identidade Visual & Marca

- **Cor Primária Accent**: `#FFB300` (Dourado Nobre Pinciara)
- **Paleta Mineral**: `#141513` (Escuro Profundo), `#EAEAEB` (Base Mineral), `#E5DCCC` (Sand), `#BBA87E` (Sândalo)
- **Corretor Responsável**: **Luiz Pinciara**
- **Contato Exclusivo**: `(21) 99522-1369` (Integrado ao envio direto via WhatsApp)

---

## 🚀 Estrutura de Componentes

```text
├── app/
│   ├── globals.css         # Estilos globais e utilitários de animação
│   ├── layout.tsx          # Fontes (Inter & Playfair), metadados SEO e estrutura
│   └── page.tsx            # Página principal integrando as seções
├── components/
│   ├── HeaderNav.tsx       # Navegação fixa com logo oficial e menu responsivo
│   ├── HeroSection.tsx     # Hero minimalista com parallax em GSAP e métricas
│   ├── PillarsSection.tsx  # Pilares arquitetônicos (Originalidade, Funcionalidade, Modernidade)
│   ├── ShowroomConceptSection.tsx # Vocação do espaço para lojas de móveis e arquitetos
│   ├── BlueprintViewer.tsx # Exibidor da prancha técnica com métricas e lightbox
│   ├── MaterialsGallery.tsx# Galeria dos cadernos de especificações e acabamentos
│   ├── LocationSection.tsx # Seção do endereço com o botão de mapa expansível ViewOnMap
│   ├── ViewOnMap.tsx       # Botão estilo pílula que abre o iframe expansível do Google Maps
│   ├── LeadContactForm.tsx # Formulário qualificado com envio direto para o WhatsApp de Luiz Pinciara
│   ├── LightboxModal.tsx   # Modal de ampliação em alta resolução para imagens e pranchas
│   └── Footer.tsx          # Rodapé institucional da Pinciara Imóveis Exclusivos
├── public/
│   ├── assets/             # Renders do caderno, prancha técnica e logo SVG
│   └── favicon.ico
```

---

## 💻 Como Executar o Projeto

### Pré-requisitos
- **Node.js** v18+ e **npm** v9+

### Passos para execução

1. **Instalar dependências**:
   ```bash
   npm install
   ```

2. **Iniciar o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```
   Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

3. **Gerar build de produção**:
   ```bash
   npm run build
   ```

4. **Iniciar em modo produção**:
   ```bash
   npm run start
   ```

---

## 👤 Atendimento Comercial

Para agendamento de visitas ou informações sobre o imóvel:
- **Corretor**: Luiz Pinciara
- **Imobiliária**: Pinciara Imóveis Exclusivos
- **WhatsApp**: `(21) 99522-1369`
