/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
      },
      colors: {
        brainyWaveBlack: "#161C2D",
        brainyWavePurple: "#473BF0",
        brainyServiceBG: "#E7E9ED",
        brainyGreen: "#68D585",
      },
    },
  },
  plugins: [],
};
