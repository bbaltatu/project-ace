// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        { src: 'https://unpkg.com/flowbite@1.5.3/dist/flowbite.js' }
      ]
    },
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ]
})
