/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "desktop-dark": "url('./src/assets/bg-desktop-dark.jpg')",
        "desktop-light": "url('./src/assets/bg-desktop-light.jpg')",
      },
      colors: {
        "dark-blue": "hsl(235, 24%, 19%)",
        "very-dark-grayish-blue": "hsl(237, 14%, 26%)",
        "light-grayish-blue": "hsl(234, 39%, 85%)",
        "dark-grayish-blue": "hsl(233, 14%, 35%)",
        "blue-gradient":
          "linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)",
        "active-blue": "hsl(220, 98%, 61%)",
      },
    },
  },
  plugins: [],
};
