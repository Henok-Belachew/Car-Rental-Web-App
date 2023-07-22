/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      'accent': "#FF4D30",
      'white': "#ffff"
    },
    screens: {
      'sm': '640px',
      'md': "768px",
      'lg': '1024px'
    },
    extend: {
      screens: {
        'max-sm': {'max': '640px'},
        'max-md': {'max': '768px'},
        'max-lg': {'max': '1024px'} 

      }
    },
    plugins: [],
}}