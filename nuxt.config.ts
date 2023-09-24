export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@una-ui/nuxt',
  ],
  devtools: { enabled: true },
  content: {
    documentDriven: true,
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark',
      },
    },
  },
  typescript: {
    includeWorkspace: true,
  },
})
