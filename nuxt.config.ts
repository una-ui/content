export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/icon',
    '@una-ui/nuxt',
    'nuxt-content-snippet',
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
  content: {
    documentDriven: true,
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
    transpile: ['shiki'],
  },
  compatibilityDate: '2024-07-05',
})
