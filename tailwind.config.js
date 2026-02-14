/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fdfbf7',
          100: '#faf6ed',
          200: '#f4e8d8',
          300: '#ead5b8',
          400: '#ddb98a',
          500: '#c9a961',
          600: '#b8904d',
          700: '#987641',
          800: '#7a5f39',
          900: '#5d3a1a',
        },
        brown: {
          50: '#f9f7f5',
          100: '#f0ebe5',
          200: '#e1d5ca',
          300: '#cbb6a3',
          400: '#b5987d',
          500: '#9d7a5e',
          600: '#816350',
          700: '#6b5143',
          800: '#5d3a1a',
          900: '#4a2e15',
        },
        cream: {
          50: '#fffef9',
          100: '#fffcf0',
          200: '#fef9e7',
          300: '#fdf5d8',
          400: '#f4e8d8',
          500: '#ead5b8',
          600: '#d9c2a0',
          700: '#c4ad88',
          800: '#a89470',
          900: '#8a7858',
        },
        orange: {
          50: '#fdf8f3',
          100: '#faeee3',
          200: '#f5ddc6',
          300: '#ecc5a0',
          400: '#e0a870',
          500: '#d4915a',
          600: '#c27a45',
          700: '#a1643a',
          800: '#825134',
          900: '#6a432d',
        },
      },
      fontFamily: {
        arabic: ['Cairo', 'Tajawal', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(201, 169, 97, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(201, 169, 97, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}
