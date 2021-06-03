module.exports = {
  purge: {
    content: ['./frontend/**/*.{vue,html}']
  },
  darkMode: false,
  theme: {
    extend: {
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
