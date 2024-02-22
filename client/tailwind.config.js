/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        DMSefif: ["DMSerif", "sans-serif"],
        Heebo300: ["heebo-light", "sans-serif"],
        Heebo400: ["heebo-regular", "sans-serif"],
        Heebo500: ["heebo-medium", "sans-serif"],
        Heebo600: ["heebo-semiBold", "sans-serif"],
        Heebo700: ["heebo-bold", "sans-serif"],
      },
      colors: {
        primary: "#1B4D3E",
        secondary: "#A91F20",
        gray: "#F2F2F2",
        dark: "#4C4C4C",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('tailwind-scrollbar-hide')],
};
