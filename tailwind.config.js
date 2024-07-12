/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",

        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",

        "window-blinds":
          "linear-gradient(to left, rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('/licensed/pexels-curtis-adams-1694007-3773571.jpg')",

        "window-drapery":
          "linear-gradient(to left, rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('/licensed/pexels-heyho-6903221.jpg')",

        "window-shades":
          "linear-gradient(to left, rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('/licensed/pexels-heyho-7046160.jpg')",

        "window-awning":
          "linear-gradient(to left, rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('/licensed/pexels-efrem-efre-2786187-16976919.jpg')",

        "window-skylight":
          "linear-gradient(to left, rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('/licensed/alisha-hieb-qly35FEQwA4-unsplash.jpg')",

        "window-motorization":
          "linear-gradient(to left, rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('/licensed/pexels-pixabay-276724.jpg')",
      },

      keyframes: {
        verticalWipeForward: {
          from: { "max-height": "0p" },
          to: { "max-height": "500px" },
        },
        verticalWipeBackward: {
          from: { "max-height": "500px" },
          to: { "max-height": "0px" },
        },
      },

      animation: {
        verticalWipeForward:
          "verticalWipeForward 0.5s ease-in-out 0s 1 normal forwards",
        verticalWipeBackward:
          "verticalWipeBackward 0.5s ease-in-out 0s 1 normal forwards",
      },

      height: {
        100: "30rem",
        101: "32rem",
        102: "34rem",
        103: "36rem",
        104: "38rem",
        105: "40rem",
        106: "42rem",
        107: "44rem",
        108: "46rem",
        109: "48rem",
        110: "50rem",
        111: "52rem",
        112: "54rem",
        113: "56rem",
      },
    },
  },
  plugins: [],
};
