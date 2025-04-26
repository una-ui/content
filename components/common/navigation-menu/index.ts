import { cva } from 'class-variance-authority'

export { default as NavigationMenu } from './NavigationMenu.vue'
export { default as NavigationMenuContent } from './NavigationMenuContent.vue'
export { default as NavigationMenuItem } from './NavigationMenuItem.vue'
export { default as NavigationMenuLink } from './NavigationMenuLink.vue'
export { default as NavigationMenuList } from './NavigationMenuList.vue'
export { default as NavigationMenuTrigger } from './NavigationMenuTrigger.vue'

// @unocss-include
export const navigationMenuTriggerStyle = cva(
  'group inline-flex h-8 w-max items-center justify-center rounded-md bg-base px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent focus:bg-accent focus:text-accent focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-$c-accent/50 data-[state=open]:bg-$c-accent/50',
)
