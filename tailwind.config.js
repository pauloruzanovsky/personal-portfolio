/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        figtree: ["Figtree", "Noto Sans JP", "Noto Sans", "sans-serif"]
      },
    extend: {
      animation: {
        changeColor: 'changeColor 2s ease-in-out infinite',
      },    
      keyframes: {            
        changeColor: {
          '0%': {
            color: 'hsl(var(--a))',
          },
          '33%': {
            color: 'hsl(var(--s))',
          },
          '66%': {
            color: 'hsl(var(--p))',
          },
          '100%': {
            color: 'hsl(var(--a))',
          },
        }
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["cupcake"]
  }
}

