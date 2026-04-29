export default defineNuxtConfig({
  css: ['./assets/css/main.css'],
  modules: ['@nuxt/ui'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  nitro: {
    preset: 'vercel'
  }
})