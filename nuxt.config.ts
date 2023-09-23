export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@una-ui/nuxt',
  ],
  content: {
    documentDriven: true,
  },
  typescript: {
    includeWorkspace: true,
  },
})
