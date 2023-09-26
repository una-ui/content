import type { contentConfig } from './types'

export default defineAppConfig({
  una: {
    content: <contentConfig> {
      title: 'Una UI (Content)',
      description: 'Craft visually appealing content effortlessly using Una UI',
      ogImage: '',
      url: 'https://unaui.com',
      socials: {
        github: {
          url: 'https://github.com/una-ui/una-ui',
          icon: 'i-ri-github-fill',
        },
        twitter: {
          url: 'https://twitter.com/una_ui',
          icon: 'i-ri-twitter-x-fill',
          class: 'text-xs',
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
