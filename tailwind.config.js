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
          "linear-gradient(to left, rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('/blinds_banner-1024x429.jpg')",
        "window-blinds":
          "linear-gradient(to left, rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('/smart-privacy-1-scaled-1.png')",
        "window-shutters":
          "linear-gradient(to left, rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('/window-shutters.jpg')",
        "window-drapery":
          "linear-gradient(to left, rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('/NJRhhmEYBN3kWZsW2GMf6e.jpg')",
        "window-shades":
          "linear-gradient(to left, rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('/types-of-window-treatments-2022-section-7.jpg')",
      },
    },
  },
  plugins: [],
};
