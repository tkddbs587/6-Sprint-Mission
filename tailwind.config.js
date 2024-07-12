/** @type {import('tailwindcss').Config} */

const px0_50 = { ...Array.from(Array(51)).map((_, i) => `${i}px`) };
const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
const px0_200 = { ...Array.from(Array(201)).map((_, i) => `${i}px`) };
const px0_1920 = { ...Array.from(Array(1921)).map((_, i) => `${i}px`) };

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: px0_50,
      fontSize: px0_100,
      spacing: px0_200,
      width: px0_1920,
      height: px0_1920,
      padding: px0_1920,
      backgroundPosition: {
        "80%-bottom": "80% bottom",
      },
    },

    colors: {
      white: "#ffffff",
      blue: "#3692FF",
      skyblue: "#CFE5FF",
      gray: {
        10: "#F3F4F6",
        20: "#E5E7EB",
        50: "#F9FAFB",
        100: "#CFCFCF",
        200: "#676767",
        400: "#9CA3AF",
        500: "#6B7280",
        600: "#4B5563",
        700: "#374151",
      },
      black: {
        DEFAULT: "#000000",

        800: "#1F2937",
        900: "#111827",
      },
    },
  },
  plugins: [],
};
