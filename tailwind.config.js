/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        mulish: ['Mulish', 'sans-serif'],
      },
      colors: {
        'card-bg': '#0e1a2b',
        'text-primary': '#c1d1e8',
        'text-headings': '#ffffff',
        'input-bg': '#182c47',
        'button-accent': '#5692e8',
      },

    },
  },
  plugins: [],
}