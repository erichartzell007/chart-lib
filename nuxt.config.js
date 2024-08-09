import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineNuxtConfig({
  routeRules: {
    "/dashboard": { ssr: false },
    "/auth/*": { ssr: false },
  },
  devtools: { enabled: true },

  css: ["~/assets/css/main.css"],
  modules: [
    "@pinia/nuxt",
    "@vee-validate/nuxt",

    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Roboto: [300, 400, 500, 600, 700],
          Lato: [100, 300],
          Poppins: [200, 300, 400, 500, 600, 700, 800],
        },
      },
    ],
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
