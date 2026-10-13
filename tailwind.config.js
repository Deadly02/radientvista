/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./{rooms,dining,bar,banquets,gallery}/index.html",
    "./src/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", "sans-serif"],
        serif: ["Playfair Display", "serif"]
      },
      colors: {
        hubli: {
          dark: "#292524",
          earth: "#78350f",
          green: "#14532d",
          sand: "#f5f5dc",
          sunset: "#d97706",
          light: "#fafaf9"
        }
      }
    }
  },
  plugins: []
};
