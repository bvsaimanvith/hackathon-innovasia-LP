/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
        blob1: "blob1 8s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
        blob1: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(10px, -30px) scale(1.2)",
          },
          "66%": {
            transform: "translate(-10px, 10px) scale(0.8)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
        },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
