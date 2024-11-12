import { defu } from 'defu'
import pkg from '../package.json'

const defaultConfig: DefaultConfig = {
  site: {
    name: 'UnaUI Content',
    description: 'Craft visually appealing content effortlessly using Una UI',
    ogImage: '/hero.png',
    ogImageComponent: 'Hero',
  },
  theme: {
    customizable: true,
    color: 'zinc',
    radius: 0.5,
  },
  header: {
    showLoadingIndicator: true,
    title: '',
    showTitle: true,
    logo: {
      light: '/logo.svg',
      dark: '/logo-dark.svg',
    },
    showTitleInMobile: false,
    border: false,
    darkModeToggle: true,
    nav: [],
    links: [],
    packageVersionNav: {
      enable: false,
      label: `v${pkg.version}`,
      items: [],
    },
  },
  aside: {
    useLevel: true,
    collapse: false,
    folderStyle: 'default',
  },
  main: {
    breadCrumb: true,
    showTitle: true,
    codeCopyToast: true,
    codeCopyToastText: 'Copied to clipboard!',
    fieldRequiredText: 'required',
    padded: true,
    codeIcon: {
      'package.json': 'vscode-icons:file-type-node',
      'tsconfig.json': 'vscode-icons:file-type-tsconfig',
      '.npmrc': 'vscode-icons:file-type-npm',
      '.editorconfig': 'vscode-icons:file-type-editorconfig',
      '.eslintrc': 'vscode-icons:file-type-eslint',
      '.eslintrc.cjs': 'vscode-icons:file-type-eslint',
      '.eslintignore': 'vscode-icons:file-type-eslint',
      'eslint.config.js': 'vscode-icons:file-type-eslint',
      'eslint.config.mjs': 'vscode-icons:file-type-eslint',
      'eslint.config.cjs': 'vscode-icons:file-type-eslint',
      '.gitignore': 'vscode-icons:file-type-git',
      'yarn.lock': 'vscode-icons:file-type-yarn',
      '.env': 'vscode-icons:file-type-dotenv',
      '.env.example': 'vscode-icons:file-type-dotenv',
      '.vscode/settings.json': 'vscode-icons:file-type-vscode',
      'nuxt': 'vscode-icons:file-type-nuxt',
      '.nuxtrc': 'vscode-icons:file-type-nuxt',
      '.nuxtignore': 'vscode-icons:file-type-nuxt',
      'nuxt.config.js': 'vscode-icons:file-type-nuxt',
      'nuxt.config.ts': 'vscode-icons:file-type-nuxt',
      'nuxt.schema.ts': 'vscode-icons:file-type-nuxt',
      'tailwind.config.js': 'vscode-icons:file-type-tailwind',
      'tailwind.config.ts': 'vscode-icons:file-type-tailwind',
      'vue': 'vscode-icons:file-type-vue',
      'ts': 'vscode-icons:file-type-typescript',
      'tsx': 'vscode-icons:file-type-typescript',
      'mjs': 'vscode-icons:file-type-js',
      'cjs': 'vscode-icons:file-type-js',
      'js': 'vscode-icons:file-type-js',
      'jsx': 'vscode-icons:file-type-js',
      'md': 'vscode-icons:file-type-markdown',
      'mdc': 'vscode-icons:file-type-markdown',
      'py': 'vscode-icons:file-type-python',
      'npm': 'vscode-icons:file-type-npm',
      'pnpm': 'vscode-icons:file-type-pnpm',
      'npx': 'vscode-icons:file-type-npm',
      'yarn': 'vscode-icons:file-type-yarn',
      'bun': 'vscode-icons:file-type-bun',
      'yml': 'vscode-icons:file-type-yaml',
      'json': 'vscode-icons:file-type-json',
      'terminal': 'lucide:terminal',
    },
  },
  footer: {
    credits: '',
    links: [],
  },
  toc: {
    enable: true,
    enableInMobile: false,
    title: 'On This Page',
    links: [],
  },
  search: {
    enable: true,
    inAside: false,
    style: 'input',
    placeholder: 'Search...',
    placeholderDetailed: 'Search documentation...',
  },
}

export function useConfig() {
  const appConfig = computed(() => useAppConfig()?.unaContent || {})

  const { navKeyFromPath } = useContentHelpers()
  const { navigation, page } = useContent()
  const route = useRoute()

  return computed(
    () => {
      const processedConfig = defu(appConfig.value, defaultConfig)
      const header = processedConfig.header
      const main = processedConfig.main
      const aside = processedConfig.aside
      const footer = processedConfig.footer
      const toc = processedConfig.toc

      return {
        ...appConfig.value,
        ...processedConfig,
        header: {
          ...header,
          ...navKeyFromPath(route.path, 'header', navigation.value || []),
          ...page.value?.header,
        } as typeof header,
        main: {
          ...main,
          ...navKeyFromPath(route.path, 'main', navigation.value || []),
          ...page.value?.main,
        } as typeof main,
        aside: {
          ...aside,
          ...navKeyFromPath(route.path, 'aside', navigation.value || []),
          ...page.value?.aside,
        } as typeof aside,
        toc: {
          ...toc,
          ...navKeyFromPath(route.path, 'toc', navigation.value || []),
          ...page.value?.toc,
        } as typeof toc,
        footer: {
          ...footer,
          ...navKeyFromPath(route.path, 'footer', navigation.value || []),
          ...page.value?.footer,
        } as typeof footer,
      }
    },
  )
}
