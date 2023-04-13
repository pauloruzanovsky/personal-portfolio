/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {
      animation: {
        changeColor: 'changeColor 2s ease-in-out infinite',
      },    
      keyframes: {            
        changeColor: {
          '0%': {
            color: '#ff8906',
          },

          '50%': {
            color: '#e53170',

          },
          '100%': {
            color: '#ff8906',
          },
        }
      },
      colors: {
        'background': '#0f0e17',
        'headline': '#fffffe',
        'paragraph': '#a7a9be',
        'button':'#ff8906',
        'button-text':'#fffffe',
        'second':'#f25f4c',
        'third':'#e53170'
      }
    },
  },
  plugins: [],
}

