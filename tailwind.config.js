/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./frontend/**/*.{vue,html,js}'],
  theme: {
    extend: {
      margin: {
        '34': '8.5rem'
      },
      width: {
        '120': '30rem'
      }
    }
  },
  plugins: []
}
