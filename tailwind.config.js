/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cinetype: ['GTCinetype', 'sans-serif'],
        timmons: ['TIMMONS NY', 'cursive'],
      },
    },
  },
  plugins: [],
}
