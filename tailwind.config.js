module.exports = {
  purge: {
    content: ['./frontend/**/*.{vue,html}']
  },
  darkMode: false,
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
  variants: {
    extend: {
      backgroundColor: ['odd'],
      margin: ['hover']
    }
  },
  plugins: []
}
