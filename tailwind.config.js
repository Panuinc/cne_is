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
        dark: "#000000",
        default: "#F5F5F5",
        primary: "#3B85FF",
        secondary: "#733DF2",
        warning: "#FFD530",
        danger: "#FE424D",
        success: "#2DDEF8",
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
