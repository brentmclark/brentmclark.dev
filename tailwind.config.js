module.exports = {
  theme: {
    inset: {
      '0': 0,
      auto: 'auto',
      'full': '100%',
      '1000': '1000px'
    },
    borderColor: theme => ({
      ...theme('colors'),
      'lightblue': '#1a9ec5'
    }),
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '2xl': '1.5rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
      '9xl': '7rem',
      '10xl': '8rem',
      '11xl': '9rem',
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}
