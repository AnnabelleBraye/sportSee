/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#E60000',
        'secondary-color': '#282D30',
        'light-grey': '#FBFBFB',
        'dark-grey': '#C4C4C480',
        'legend-grey': '#74798C'
      },
      screens: {
        'xl': '1480px'
      },
      fontSize: {
        'medium': '15px'
      }
    },
  },
  plugins: [],
}