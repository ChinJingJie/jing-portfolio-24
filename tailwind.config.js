/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-clr": "#FFFFFF",
        "secondary-clr": "#000000",
        "tertiary-clr": "#3C4142",
      },
    },
    fontFamily: {
      Raleway: [ "Raleway", "sans-serif"],
      Lato: [ "Lato", "sans-serif"],
    },
    container: {
      center: true,
    },
    screens: {
      md: "1024px",
    },
  },
  plugins: [],
}

