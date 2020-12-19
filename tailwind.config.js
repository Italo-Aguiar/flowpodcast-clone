module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        flow: '#131c25'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
