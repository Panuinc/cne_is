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
        dark: "#2E2D2B",           // Charcoal earth-tone
        default: "#F5F5F5",        // Warm off-white background
        primary: "#733DF2",        // Rich mocha brown (main brand)
        secondary: "#3B85FF",      // Soft sand (used for accent or highlight)
        warning: "#FFD530",        // Earth-tone amber (warning)
        danger: "#FE424D",         // Terracotta red (alert/danger)
        success: "#2DDEF8",           // Cool moss green-gray (status/info)
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
