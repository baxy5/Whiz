// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  /* devtools: { enabled: true }, */

  runtimeConfig: {
    public: {
      EMAIL_SERVICE_ID: "service_ydv629z",
      EMAIL_TEMPLATE_ID: "template_0fhsncf",
      EMAIL_PUBLIC_KEY: "Zk0eL7zWfyRHDaIV7",
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
