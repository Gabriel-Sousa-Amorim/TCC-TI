/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        infiniteSlider: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-250px *5))' },
        },
      },
      animation: {
        ["infinite-slider"]: 'infiniteSlider 10s linear infinite',
      },
    },
  },
  plugins: [],
}

