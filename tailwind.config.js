module.exports = {
  purge: ['./src/pages/**/*.{js, ts, jsx, tsx}', './src/components/**/*.{js, ts, jsx, tsx}'],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {
      colors: {
        'primary': '#ffc107',
        'secondary': '#212529',
      }
    }
  }
}