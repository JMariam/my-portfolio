/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        color1: 'rgb(102, 0, 204)',
        color2: 'rgb(163, 77, 255)',
        color3: 'rgb(242, 230, 255)',
        color4:  'rgb(64, 0, 128)',
        dark: 'rgb(57, 0, 77)',
        light: '#f2f2f2'
      },
    },
  },
  plugins: [],
}