import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

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
  components: [
    {
      prefix: '',
      path: resolve('./components/app'),
      global: true,
    },
    {
      prefix: '',
      path: resolve('./components/docs'),
      global: true,
    },
  ],
  typescript: {
    includeWorkspace: true,
  },
  css: [
    resolve('./styles/main.css'),
    resolve('./styles/override.css'),
  ],
})
