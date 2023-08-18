// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    // https://nuxt.studio
    '@nuxthq/studio',
    // https://content.nuxtjs.org
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
