/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["coffee", "dark", "forest", "bumblebee"],
  },
  plugins: [require("daisyui")],
};
