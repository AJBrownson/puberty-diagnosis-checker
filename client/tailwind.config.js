/** @type {import('tailwindcss').Config} */
const config =  {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  // eslint-disable-next-line no-undef
  plugins: [require("tw-elements/dist/plugin.cjs")]
}

export default config;