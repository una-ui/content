export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/icon',
    '@una-ui/nuxt',
    'nuxt-content-snippet',
    'nuxt-og-image',
  ],
  components: {
    dirs: [
      {
        path: './components',
        ignore: ['**/*.ts'],
      },
    ],
  },
  devtools: {
    enabled: true,
    componentInspector: false,
  },
  routeRules: {
    '/': { prerender: true },
  },
  content: {
    documentDriven: {
      injectPage: false,
    },
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark',
      },
      preload: ['json', 'js', 'ts', 'html', 'css', 'vue', 'diff', 'shell', 'markdown', 'yaml', 'bash', 'ini'],
    },
    navigation: {
      fields: [
        'icon',
        'navBadges',
        'badges',
        'toc',
        'sidebar',
      ],
    },
    experimental: {
      search: {
        indexed: true,
      },
    },
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        baseUrl: '.',
      },
    },
  },
  build: {
    transpile: ['shiki', 'ohash'],
  },
  compatibilityDate: '2024-07-05',
})
