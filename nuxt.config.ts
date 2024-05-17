// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  /* devtools: { enabled: true }, */

  runtimeConfig: {
    public: {
      EMAIL_SERVICE_ID: process.env.EMAIL_SERVICE_ID || "",
      EMAIL_TEMPLATE_ID: process.env.EMAIL_TEMPLATE_ID || "",
      EMAIL_PUBLIC_KEY: process.env.EMAIL_PUBLIC_KEY || "",
    },
  },

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
