
# Plano de Implementação: Nova Landing Page Next.js — Projeto São Francisco

A nova aplicação web será desenvolvida em **Next.js (App Router)** com **React**, **TypeScript**, **Tailwind CSS** e **GSAP com ScrollTrigger**, incorporando a estrutura sofisticada, micro-interações e o altíssimo padrão visual do site *ERA Residence*, alinhado à identidade visual da **Pinciara Imóveis Exclusivos** e às especificações do **Projeto São Francisco**.

---

## 🎯 Foco e Objetivo Comercial
- **Público-Alvo**: Lojas de móveis planejados de alto padrão, marcas de design/decor e arquitetos de prestígio.
- **Objetivo**: Posicionar o imóvel comercial de esquina em São Francisco (Niterói - RJ) como o **Flagship Showroom** definitivo da região.
- **Destaques Técnicos do Imóvel**:
  - Loja: **147,87 m²**
  - Mezanino: **77,92 m²**
  - Área total integrada: **~225,79 m²**
  - Fachada contemporânea com brises de alumínio, pele de vidro e presença marcante de esquina.

---

## 🎨 Identidade Visual e Design System
- **Cores da Marca (Pinciara Exclusivos)**:
  - `gold` / `amber-accent`: `#FFB300` (Dourado de prestígio)
  - `dark-bg`: `#121312` / `#1B1B19` (Escuro profundo sofisticado)
  - `paper`: `#EAEAEB` / `#F7F6F1` (Neutro mineral para seções claras)
  - `sand` / `sandal`: `#E5DCCC` / `#BBA87E` (Tons quentes de palha e sândalo)
- **Tipografia**: Sans-serif arquitetônica moderna (Inter / Geist) combinada com títulos fluidos.
- **Animações (GSAP + ScrollTrigger)**:
  - Hero parallax com efeito de profundidade.
  - Revelações graduais de texto e imagens ao rolar a página (*scroll-driven reveals*).
  - Transição de cabeçalho fixa com efeito `mix-blend-mode` e alteração de tema.
  - Lightbox imersivo com zoom em pranchas técnicas e imagens do projeto.

---

## 🚀 Estrutura de Componentes da Aplicação

### 1. `HeaderNav`
- Navegação fixa com logotipo vetorial em SVG (`#FFB300`), links de seção e botão de ação rápida para contato.
- Suporte a menu responsivo mobile e animação de entrada.

### 2. `HeroSection` (GSAP Parallax)
- Chamada de impacto: *"O Endereço Definitivo para sua Flagship Store em Niterói"*.
- Background imersivo com imagem do projeto (`assets/caderno/page-01.png`), efeito de vinheta mineral e indicação de scroll animada.

### 3. `PillarsSection` (Conceito Arquitetônico)
- 3 Pilares: *Originalidade*, *Funcionalidade* e *Modernidade*.
- Animação de entrada stagger via GSAP ScrollTrigger.

### 4. `ShowroomConceptSection` (Seção Flagship Especial)
- Destaque direcionado a lojas de móveis planejados e arquitetos.
- Apresentação da vocação do espaço: pé-direito duplo, integração visual com a rua, vitrine contínua de esquina.

### 5. `BlueprintViewer` (Pranchas Técnicas e Métricas)
- Exibição da prancha técnica (`assets/prancha/prancha-1.png`).
- Tabela interativa de métricas: Loja (147,87m²), Mezanino (77,92m²), Localização (Franklin Roosevelt x Guajianases).
- Modal Lightbox com zoom em alta resolução.

### 6. `MaterialsGallery` (Caderno de Especificações)
- Galeria em grid responsivo com cartões dos materiais, memorial de pintura, paisagismo (costela-de-adão, alpínias) e brises de alumínio.

### 7. `LocationSection` (Endereço & Mapa)
- Destaque da esquina nobre de São Francisco, Niterói - RJ.

### 8. `LeadContactForm` (Captação Qualificada)
- Formulário inteligente com seletor de perfil:
  - 🛋️ **Loja de Móveis Planejados**
  - 📐 **Arquiteto / Designer**
  - 🏢 **Investidor / Outros**
- Validação em tempo real e feedback visual refinado.

### 9. `Footer`
- Assinatura Pinciara Imóveis Exclusivos, informações institucionais e direitos autorais.

---

## 📁 Arquivos a Criar / Modificar

#### [NEW] [package.json](file:///c:/Users/berna/Desktop/projetos%20imob/LO0222%20-%20teste%20-%20Copia/package.json)
#### [NEW] [tsconfig.json](file:///c:/Users/berna/Desktop/projetos%20imob/LO0222%20-%20teste%20-%20Copia/tsconfig.json)
#### [NEW] [tailwind.config.ts](file:///c:/Users/berna/Desktop/projetos%20imob/LO0222%20-%20teste%20-%20Copia/tailwind.config.ts)
#### [NEW] [next.config.mjs](file:///c:/Users/berna/Desktop/projetos%20imob/LO0222%20-%20teste%20-%20Copia/next.config.mjs)
#### [NEW] [app/layout.tsx](file:///c:/Users/berna/Desktop/projetos%20imob/LO0222%20-%20teste%20-%20Copia/app/layout.tsx)
#### [NEW] [app/globals.css](file:///c:/Users/berna/Desktop/projetos%20imob/LO0222%20-%20teste%20-%20Copia/app/globals.css)
#### [NEW] [app/page.tsx](file:///c:/Users/berna/Desktop/projetos%20imob/LO0222%20-%20teste%20-%20Copia/app/page.tsx)
#### [NEW] [components/HeaderNav.tsx](file:///c:/Users/berna/Desktop/projetos%20imob/LO0222%20-%20teste%20-%20Copia/components/HeaderNav.tsx)
#### [NEW] [components/HeroSection.tsx](file:///c:/Users/berna/Desktop/projetos%20imob/LO0222%20-%20teste%20-%20Copia/components/HeroSection.tsx)
#### [NEW] [components/PillarsSection.tsx](file:///c:/Users/berna/Desktop/projetos%20imob/LO0222%20-%20teste%20-%20Copia/components/PillarsSection.tsx)
#### [NEW] [components/ShowroomConceptSection.tsx](file:///c:/Users/berna/Desktop/projetos%20imob/LO0222%20-%20teste%20-%20Copia/components/ShowroomConceptSection.tsx)
#### [NEW] [components/BlueprintViewer.tsx](file:///c:/Users/berna/Desktop/projetos%20imob/LO0222%20-%20teste%20-%20Copia/components/BlueprintViewer.tsx)
#### [NEW] [components/MaterialsGallery.tsx](file:///c:/Users/berna/Desktop/projetos%20imob/LO0222%20-%20teste%20-%20Copia/components/MaterialsGallery.tsx)
#### [NEW] [components/LocationSection.tsx](file:///c:/Users/berna/Desktop/projetos%20imob/LO0222%20-%20teste%20-%20Copia/components/LocationSection.tsx)
#### [NEW] [components/LeadContactForm.tsx](file:///c:/Users/berna/Desktop/projetos%20imob/LO0222%20-%20teste%20-%20Copia/components/LeadContactForm.tsx)
#### [NEW] [components/LightboxModal.tsx](file:///c:/Users/berna/Desktop/projetos%20imob/LO0222%20-%20teste%20-%20Copia/components/LightboxModal.tsx)

---

## 🧪 Plano de Verificação
- **Compilação e Build**: Executar `npm run build` para garantir TypeScript limpo e ausência de erros de sintaxe ou SSR.
- **Verificação Visual e Animações**: Validar as animações de scroll GSAP + ScrollTrigger, carregamento de imagens em `public/assets/`, responsividade mobile e modal lightbox.
