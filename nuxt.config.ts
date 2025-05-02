import { dirname, join, resolve } from 'node:path'

import { fileURLToPath } from 'node:url'
import { defineNuxtConfig } from 'nuxt/config'

const currentDir = dirname(fileURLToPath(import.meta.url))
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
  css: [
    join(currentDir, './assets/main.css'),
  ],
  routeRules: {
    '/': { prerender: true },
    '/blocks-renderer/**': { prerender: false },
  },
  nitro: {
    publicAssets: [
      {
        dir: resolve('./public/assets/fonts'),
        maxAge: 24 * 60 * 60 * 365, // 1 year (versioned)
        baseURL: '/fonts',
      },
    ],
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
