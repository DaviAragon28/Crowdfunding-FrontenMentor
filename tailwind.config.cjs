/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        moderateCyan: '#3cb4ac',
        darkCyan: '#147b74',
        darkGray: '#7a7a7a'
      },
      fontFamily: {
        'sans': ['Commissioner', ...defaultTheme.fontFamily.sans]
      } 
    },
  },
  plugins: [],
}
