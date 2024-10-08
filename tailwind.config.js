/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
      'SW':['Star Wars','sans-serif'],
      'fedra':["CD Fedra Cond Pro Book","sans-serif"],
      'sahara' : ["Sahara","sans-serif"],
 
    },
      backgroundImage: {
        'background': "url('./src/assets/bg.jpg')",
        'speed': "url('./src/assets/speed.jpg')",
        
        
      }
  },
  },
  plugins: [],
}

