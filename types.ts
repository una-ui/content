export interface contentConfig {
  title?: string
  description?: string
  ogImage?: string
  url?: string
  socials?: {
    [key: string]: {
      url: string
      icon: string
    }
  }
  github?: {
    root?: string
    edit?: boolean
    contributors?: boolean
  }
  layout?: string
  header?: {
    title?: string
    logo?: boolean
    exclude?: string[]
  }
}
