// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  /* devtools: { enabled: true }, */

  googleFonts: {
    prefetch: true,
    families: {
      "Space Grotesk": true,
    },
  },

  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxtjs/google-fonts"],

  build: {
    transpile: ["gsap"],
  },
});
