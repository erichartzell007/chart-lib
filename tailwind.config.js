/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./views/**/*.vue",
    "./forms/**/*.vue",
    // "./pages/auth/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1C1F58",
        secondary: "#BBBCCC",
        "purple-new": "#1C1F58",
        "light-primary": "#000037",
        "gray-900": "#26272E",
      },
    },
  },
  plugins: [],
};
