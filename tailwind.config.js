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
        dark: "#000000",
        default: "#CAE2FF",
        primary: "#0176FD",
        secondary: "#34DEEB",
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