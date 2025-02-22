/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '2px 2px 20px rgb(216, 213, 213)',
      }
    },
  },
  plugins: [],
}
