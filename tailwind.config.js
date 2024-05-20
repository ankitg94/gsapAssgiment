/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#82B440',
        'coutom-head':'#262626',
        'coustom-black':"#545454",        
        'start':'#F87516',
        'end':'#5E11FF'
      }
    },
  },
  plugins: [],
}

