/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",      // All files in the /app folder
    "./app/(dTabs)/**/*.{js,jsx,ts,tsx}",
    "./app/(pTabs)/**/*.{js,jsx,ts,tsx}",
    "./app/context/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}