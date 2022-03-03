const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Readex Pro', ...defaultTheme.fontFamily.sans],
      arab: ['noorhidayat', ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
}
