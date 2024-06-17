/** @type {import('tailwindcss').Config} */

const px0_50 = { ...Array.from(Array(51)).map((_, i) => `${i}px`) };
const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
const px0_200 = { ...Array.from(Array(201)).map((_, i) => `${i}px`) };
const px0_400 = { ...Array.from(Array(401)).map((_, i) => `${i}px`) };

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
      width: px0_400,
      backgroundPosition: {
        "80%-bottom": "80% bottom",
      },
    },

    screens: {
      sm: { min: "375px", max: "767px" },
      md: { min: "768px", max: "1199px" },
    },

    colors: {
      white: "#ffffff",
      blue: "#3692FF",
      skyblue: "#CFE5FF",
      gray: {
        100: "#CFCFCF",
        200: "#676767",
        700: "#374151",
      },
      black: "#000000",
    },
  },
  plugins: [],
};
