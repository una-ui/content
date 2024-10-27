interface DefaultConfig {
  site: {
    name: string
    description: string
    ogImage: string
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
      label: string
      enable: boolean
      items: ({
        label: string
        to: string
        trailing
      })[] // NButton
    }
  }
  aside: {
    useLevel: boolean
    collapse: boolean
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
  }
  footer: {
    credits: string
    links: []
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
