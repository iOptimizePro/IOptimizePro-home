// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    port: 3005,
  },

  app: {
    head: {
      // 解决403 Forbbiden问题
      meta: [{ name: 'referrer', content: 'no-referrer' }],
    },
  },

  modules: ['@nuxtjs/eslint-module', 'nuxt-swiper'],

  build: {
    transpile: ['three'],
  },
})
