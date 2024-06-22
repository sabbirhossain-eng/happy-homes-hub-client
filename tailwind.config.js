/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-light': '#63ac44',
        'secondary-light': '#FF4195',
        'in-light': '#f9faff',
        'primary-dark': '#0d0d0d',
        'card-dark': '#1b1c1d',
        'in-dark': '#F4F4F4',
      },
      fontFamily: {
        gloria: ['Gloria Hallelujah', 'cursive'],
        josep: ['Josefin Sans', 'sans-serif'],
      },
      screens: {
        xs: '500px',
        '900': '900px',
      },
    },
  },
  plugins: [require("daisyui")],
});
