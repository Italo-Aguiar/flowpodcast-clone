module.exports = {
  purge: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#131c25',
        secondary: '#ffb705',
        footer: '#111'
      },
      height: {
        26: '6.5rem'
      },
      fontFamily: {
        'flow': ['Montserrat', 'sans-serif']
      },
      spacing: {
        '4.5': '1.125rem',
        '5.5': '1.375rem',
        '6.5': '1.625rem',
        '7.5': '1.875rem',
        '8.5': '2.125rem',
        '9.5': '2.375rem',
        '10.5': '2.625rem',
        '11.5': '2.875rem',
        '12.5': '3.125rem'
      },
      borderWidth: {
        1: '1px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
