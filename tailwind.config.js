import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        dark: "#1F2A3D",
        default: "#F4F7FB",
        primary: "#635BFF",
        secondary: "#16CDC7",
        info: "#46CAEB",
        warning: "#F8C20A",
        danger: "#FF6692",
        success: "#2EA95C",
      },
      fontFamily: {
        kanit: ["var(--kanit)"],
        nunito: ["var(--nunito)"],
        sans: ["Sarabun", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
