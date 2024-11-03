/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkPurple: '#120712', // or use rgb(51, 0, 51)
        navbgcolor: '#250e25',
        herobgbottom:'#890289',
        customPurple: '#800080',
        customText:'#b300b3',
        customTextbt1:'#b300b3',
        customTextbt2:'#e600e6',
        customTextbt3:'#ff66ff',
        titlefrom:'#320132',
        titleto:'#b300b3',
        fontFamily: {
          sans: ['"Titillium Web"', 'sans-serif'],
        },
      },
    },
  },
  plugins: [],
}

