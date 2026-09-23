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
        brand: {
          gold: "#FFB300",
          dark: "#141513",
          darker: "#0C0D0C",
          paper: "#EAEAEB",
          cream: "#F7F6F1",
          sand: "#E5DCCC",
          straw: "#DFD4BC",
          sandal: "#BBA87E",
          muted: "#625E56",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
      },
      letterSpacing: {
        widest: ".2em",
      },
    },
  },
  plugins: [],
};
export default config;
