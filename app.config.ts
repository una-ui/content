import type { contentConfig } from './types'

// @unocss-include
export default defineAppConfig({
  una: {
    content: <contentConfig> {
      title: 'Una UI (Content)',
      description: 'Craft visually appealing content effortlessly using Una UI',
      ogImage: '',
      url: 'https://unaui.com',
      socials: {
        twitter: {
          url: 'https://twitter.com/una_ui',
          icon: 'i-carbon-logo-twitter',
        },
        github: {
          url: 'https://github.com/una-ui/una-ui',
          icon: 'i-carbon-logo-github',
        },
      },
      github: {
        root: 'content',
        edit: true,
        contributors: false,
      },
      layout: 'default',
      header: {
        title: 'Una UI',
        logo: true,
        exclude: [],
      },
    },
  },
})
