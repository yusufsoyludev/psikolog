/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FDFCF8',
        cream: '#F5F0E8',
        'warm-cream': '#EDE6D6',
        'soft-sage': '#C5D5C0',
        'botanical-green': '#8BA888',
        'deep-botanical': '#6B8F71',
        'dusty-blush': '#D4A5A5',
        'warm-beige': '#C4B5A0',
        'text-dark': '#3D3D3D',
        'text-soft': '#6B6B6B',
        'text-light': '#9B9B9B',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      animation: {
        'bloom': 'bloom 8s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-up': 'fadeUp 1s ease-out forwards',
        'fade-in': 'fadeIn 1.2s ease-out forwards',
      },
      keyframes: {
        bloom: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)', opacity: '0.6' },
          '50%': { transform: 'scale(1.1) rotate(2deg)', opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0,0,0,0.05)',
        'gentle': '0 8px 40px rgba(0,0,0,0.06)',
        'premium': '0 12px 60px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
}