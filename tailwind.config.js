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
        "2sl": "568px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
        xxl: "1920px",
      },
    },
    screens: {
      sm: "360px",
      sl: "414px",
      "2sl": "568px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      xxl: "1920px",
    },
    extend: {
      keyframes: {
        levitate: {
          "0%, 100%": { transform: "translateY(-10px)" },
          "50%": { transform: "translateY(10px)" },
        },
      },
      animation: {
        levitate: "levitate 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
