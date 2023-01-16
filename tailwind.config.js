/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      'xl': {'max': '1200px'},
      'lg': {'max': '1000px'},
      'md': {'max': '900px'},
      'sm': {'max': '700px'},
      'xsm': {'max': '500px'},
    },
    extend: {
      fontFamily: {
        'Montserrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'g1': 'hsl(236, 72%, 79%)',
        'g2': 'hsl(237, 63%, 64%)',
        'VeryLightGrayishBlue': 'hsl(240, 78%, 98%)',
        'LightGrayishBlue': 'hsl(234, 14%, 74%)',
        'GrayishBlue': 'hsl(233, 13%, 49%)',
        'DarkGrayishBlue': 'hsl(232, 13%, 33%)',
      }
    },
  },
  plugins: [],
}
