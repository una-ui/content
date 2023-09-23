export function useSetupPageHeader() {
  const appInfo = useAppConfig().una.content

  useHead({
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { name: 'description', content: appInfo.description },
      { property: 'og:title', content: appInfo.title },
      { property: 'og:description', content: appInfo.description },
      { property: 'og:site_name', content: appInfo.title },
      { property: 'og:image', content: appInfo.ogImage },
    ],
    titleTemplate: (title) => {
      let titleTemplate = title ?? ''

      if (titleTemplate.length)
        titleTemplate += ' | '

      titleTemplate += appInfo.title

      return titleTemplate
    },
  })
}
