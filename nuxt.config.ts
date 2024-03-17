// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  /* devtools: { enabled: true }, */

  runtimeConfig: {
    public: {
      EMAIL_SERVICE_ID: "service_kn49xyk",
      EMAIL_TEMPLATE_ID: "template_97d1nf5",
      EMAIL_PUBLIC_KEY: "BxnGjPiCOCfZXuHP_",
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
