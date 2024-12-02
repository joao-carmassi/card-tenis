import tailwindcssAnimate from "tailwindcss-animate";
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        montSerrat: ["Montserrat", "sans-serif"],
      },
      animation: {},
      keyframes: {},
    },
  },
  plugins: [tailwindcssAnimate, daisyui],
  daisyui: {
    themes: ["light"],
  },
};
