/** @type {import('tailwindcss').Config} */
export default {
  // Components are the only source of markup; the HTML in dist/ is generated from them.
  content: ["./src/**/*.{js,jsx}"],
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
