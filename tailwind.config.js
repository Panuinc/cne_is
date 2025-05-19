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
        default: "#F4F1EE",        // Warm off-white background
        primary: "#8B5E3C",        // Rich mocha brown (main brand)
        secondary: "#D6A76C",      // Soft sand (used for accent or highlight)
        warning: "#E1B866",        // Earth-tone amber (warning)
        danger: "#C55A5A",         // Terracotta red (alert/danger)
        success: "#7F9C96",           // Cool moss green-gray (status/info)
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
