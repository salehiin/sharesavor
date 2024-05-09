/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        lato: "'Lato', sans-serif",
        lobster: "'Lobster', sans-serif",
        poetsen: "'Poetsen One', sans-serif"
      }
    },
  },
  plugins: [require('daisyui'),],
}

