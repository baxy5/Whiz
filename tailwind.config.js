/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "0.75rem",
        xxl: "1rem",
      },
      screens: {
        sm: "360px",
        sl: "414px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
        xxl: "1920px",
      },
    },
    screens: {
      sm: "360px",
      sl: "414px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      xxl: "1920px",
    },
    extend: {},
  },
  plugins: [],
};
