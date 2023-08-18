export default defineNuxtConfig({
  modules: [
    '@nuxthq/studio',
    '@nuxt/content',
    '@nexvelt/ui-nuxt',
  ],
  content: {
    documentDriven: true
  },
  typescript: {
    includeWorkspace: true
  }
})
