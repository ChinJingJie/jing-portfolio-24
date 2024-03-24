/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-clr": "#C4D7FD",
        "secondary-clr": "#5E17EB",
        "tertiary-clr": "#4B10BF",
      },
    },
    fontFamily: {
      Raleway: [ "Raleway", "sans-serif"],
      Lato: [ "Lato", "sans-serif"],
    },
    container: {
      padding: "2rem",
      center: true,
    },
    screens: {
      md: "1024px",
    },
  },
  plugins: [],
}

