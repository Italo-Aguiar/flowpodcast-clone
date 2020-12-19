module.exports = {
  purge: ['./src/pages/**/*.{js, ts, jsx, tsx}', './src/components/**/*.{js, ts, jsx, tsx}'],
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
