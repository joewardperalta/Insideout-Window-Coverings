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

        "window-coverings":
          "linear-gradient(to left, rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('/licensed/pexels-heyho-6438767.jpg')",

        "window-blinds":
          "linear-gradient(to left, rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('/licensed/pexels-curtis-adams-1694007-3773571.jpg')",

        "window-shutters":
          "linear-gradient(to left, rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('/licensed/pexels-andrew-2682318.jpg')",

        "window-drapery":
          "linear-gradient(to left, rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('/licensed/pexels-heyho-6903221.jpg')",

        "window-shades":
          "linear-gradient(to left, rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('/licensed/pexels-heyho-7046160.jpg')",

        "window-awning":
          "linear-gradient(to left, rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('/licensed/pexels-efrem-efre-2786187-16976919.jpg')",
      },
    },
  },
  plugins: [],
};
