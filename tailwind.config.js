/** @type {import('tailwindcss').Config} */
// npx tailwindcss -i ./src/input.css -o ./src/index.css --watch
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    

    extend: {
      screens: {
        'max-sm': {'max': '640px'},
        'max-md': {'max': '768px'},
        'max-lg': {'max': '1023px'},
        'o-md': {'min': '0px', 'max': '767px'},  
        'lg-sm': {'min': '640px', 'max': '1023px'},
        'md-lg': {'min': '768px', 'max': '1023px'},  
        'lg-xl': {'min': '1024px', 'max': '1279px'},

      },
      colors: {
        'accent': "#FF4D30",
        'white': "#ffff",
        'background': "#F8F8F8",
        'darkish': '#706f7b',
        'inactiveBtn': "#E9E9E9"
        // 'darkish': '#F8F8F8'
      },

    },
    plugins: [],
}}