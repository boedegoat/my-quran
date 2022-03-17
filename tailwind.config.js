const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Readex Pro', ...defaultTheme.fontFamily.sans],
      arab: ['Noto Naskh Arabic', ...defaultTheme.fontFamily.mono],
    },
    extend: {},
  },
  plugins: [],
}
