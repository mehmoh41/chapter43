module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        type: {
          '0%': { width: '0' },
          '100%': { width: '100%' }
        },
        fadein: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      },
      animation: {
        type: 'type 2s steps(80, end)',
        fadeIn: 'fadein 4s'
      }
    }
  },
  plugins: []
}
