/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "Desaturated-Red": "hsl(0, 36%, 70%)",
        "Soft-Red": "hsl(0, 93%, 68%)",
        "Dark-Grayish-Red": "hsl(0, 6%, 24%)",
       
      },
      backgroundImage: {
        "Gradient-Text-1": "linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%))",
        "Gradient-Text-2": "linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))",
        "Gradient-Text-3": "linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 60%, 90%))"
      }
    },
  },
  plugins: [],
}

