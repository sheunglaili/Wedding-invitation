const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xxxs': '320px',
      'xxs': '375px',
      'xs': '410px', 
      ...defaultTheme.screens,
    },
    fontFamily: {
      'bebasneue': ['BebasNeue'],
      'impact': ['ImpactLabel'],
      'kozuka': ['Kozuka'],
      'znikomit': ['Znikomit'],
      'bigcaslon': ['BigCaslon'],
      'wedding': ['Wedding'],
      'twsung': ['Sung'],
      'notoseriflight': ['NotoSerifLight']
    },
    extend: {
      colors: {
        'wedding': '#00B4D7',
        'vaccination': '#027C93'
      },
      fontSize: {
        '4xl': '2.5rem',
        '4-1/2xl': '2.75rem'
      }
    },
  },
  plugins: [],
}
