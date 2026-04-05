/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'sky-blue': '#87CEEB',
        'deep-ocean': '#1e3a8a',
      }
    },
  },
  plugins: [],
}
