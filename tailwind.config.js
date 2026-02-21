/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        primary: {
          light: '#3b82f6',
          DEFAULT: '#1d4ed8', // Deep modern blue
          dark: '#1e3a8a',
        },
        secondary: {
          DEFAULT: '#0ea5e9', // Vibrant sky blue
        },
        accent: {
          DEFAULT: '#8b5cf6', // Purple accent for tech feel
        },
        dark: {
          DEFAULT: '#0f172a',
          lighter: '#1e293b',
        }
      },
      animation: {
        'blob': 'blob 7s infinite',
        'spin-slow': 'spin 15s linear infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
