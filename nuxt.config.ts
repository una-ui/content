export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nexvelt/ui-nuxt',
  ],
  content: {
    documentDriven: true,
  },
  typescript: {
    includeWorkspace: true,
  },
})
