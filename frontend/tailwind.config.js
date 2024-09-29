/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      padding: {
        '30px': '30px',
      },
      colors: {
        pink: 'rgb(242, 175, 212)',
        lightRed: 'rgb(237, 111, 133)',
        lightOrange: 'rgb(242, 169, 86)'
      },
    },
  },
  plugins: [],
}
