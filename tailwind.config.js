/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out 5',
        linearX: 'linearX 5s infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        linearX: {
          
          '0%': { transform: 'translate(110vw, 0px)' },
          // '75%' : { transform: 'scale(3)' },
          // '75%': { transform: 'translate(25vw, 0px)' },
          '100%': { transform: 'translate(0px,0px)' },
        }
      },

    },
  },
  plugins: [],
}

