const { warning } = require("framer-motion");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        dark: "#0F1D40",
        default: "#F0F5F5",
        primary: "#0094FF",
        secondary: "#F0F0F0",
        danger: "#FF4D4F",
        warning: "#FFD500",
        success: "#00C48C",
      },
      fontFamily: {
        kanit: ["var(--kanit)"],
        nunito: ["var(--nunito)"],
        sans: ["Sarabun", "sans-serif"],
      },
    },
  },
  plugins: [],
};
