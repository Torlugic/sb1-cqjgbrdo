/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'wiggle3': 'wiggle3 1.5s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        wiggle3: {
          '0%': { transform: 'rotate(-3deg)' },
          '25%': { transform: 'rotate(2deg)' },
          '50%': { transform: 'rotate(-1deg)' },
          '75%': { transform: 'rotate(3deg)' },
          '100%': { transform: 'rotate(-2deg)' },
        },
      },
      boxShadow: {
        'neon': '0 0 5px theme(colors.cyan.500), 0 0 20px theme(colors.cyan.500)',
        'neon-strong': '0 0 10px theme(colors.cyan.500), 0 0 30px theme(colors.cyan.500), 0 0 50px theme(colors.cyan.500)',
      },
    },
  },
  plugins: [],
};