export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@una-ui/nuxt',
  ],
  devtools: { enabled: true },
  content: {
    documentDriven: true,
  },
  typescript: {
    includeWorkspace: true,
  },
})
