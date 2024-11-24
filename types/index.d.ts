interface DefaultConfig {
  site: {
    name: string
    description: string
    ogImage: string
    ogImageComponent: string
  }
  theme: {
    customizable: boolean
    color: Color
    radius: number
  }
  header: {
    showLoadingIndicator: boolean
    title: string
    showTitle: boolean
    border: boolean
    logo: {
      light: string
      dark: string
    }
    showTitleInMobile: boolean
    darkModeToggle: boolean
    nav: ({
      title: string
      to: string
      target: string
      links: ({
        title: string
        to: string
        target: string
        description: string
      })[]
    })[]
    links: ({
      icon: string
      to: string
      target: string
    })[]
    packageVersionNav: {
      enable: boolean
      label: string
      items: ({
        label: string
        to: string
        trailing: string
      })[]
    }
  }
  aside: {
    useLevel: boolean
    collapse: boolean
    folderStyle: 'default' | 'tree' | 'group'
  }
  main: {
    breadCrumb: boolean
    showTitle: boolean
    codeCopyToast: boolean
    codeCopyToastText: string
    fieldRequiredText: string
    codeIcon: {
      [key: string]: string
    }
    padded: boolean
    editLink: {
      enable: boolean
      pattern: string
      text: string
      icon: string
      placement: ('docsFooter' | 'toc')[]
    }
  }
  footer: {
    credits: string
    links: ({
      label: string
      to: string
      target: string
    })[]
  }
  toc: {
    enable: boolean
    enableInMobile: boolean
    title: string
    links: ({
      icon: string
      title: string
      to: string
      target: string
    })[]
  }
  search: {
    enable: boolean
    inAside: boolean
    style: 'input' | 'button'
    placeholder: string
    placeholderDetailed: string
  }
}

type Color =
  | 'zinc'
  | 'slate'
  | 'stone'
  | 'gray'
  | 'neutral'
  | 'red'
  | 'rose'
  | 'orange'
  | 'green'
  | 'blue'
  | 'yellow'
  | 'violet'

type Target = '_blank' | '_parent' | '_self' | '_top' | (string & object) | null | undefined
