/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ss-green': '#182D09', // Forest Green
        'ss-gold': '#C79803',  // Gold
        'ss-taupe': '#C1A987', // Taupe
        'ss-blue': '#2E5AA7',  // Action Blue
      },
    },
  },
  plugins: [],
}