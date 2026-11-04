import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        champagne: {
          DEFAULT: "#E5A641",
          light: "#F0B555",
          dim: "#C48A2D",
          subtle: "rgba(229, 166, 65, 0.12)",
        },
        neutral: {
          950: "#111111",
          900: "#141414",
          850: "#171717",
          800: "#1c1c1c",
          750: "#202020",
          700: "#242424",
          650: "#2a2a2a",
          600: "#333333",
          500: "#555555",
          400: "#888888",
          300: "#b0b0b0",
          200: "#dcdcdc",
          100: "#f0f0f0",
        },
        brand: {
          gold: "#E5A641",
          goldLight: "#F0B555",
          dark: "#141414",
          darker: "#111111",
          paper: "#1c1c1c",
          cream: "#242424",
          sand: "#E5DCCC",
          straw: "#DFD4BC",
          sandal: "#BBA87E",
          muted: "#888888",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Cormorant Garamond", "Playfair Display", "Georgia", "serif"],
      },
      letterSpacing: {
        widest: ".2em",
      },
    },
  },
  plugins: [],
};
export default config;
