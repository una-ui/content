import {
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import presetUna from '@una-ui/preset'

export default {
  shortcuts: [
    {
      // apps components
      'content-container': 'container lg:px-8 mx-auto px-4 sm:px-6',
      'content-header': 'sticky top-0 z-50 bg-white/50 backdrop-blur-md dark:bg-gray-950/50 border-base',

      // docs components
      'content-docs-page-layout': 'grid grid-cols-5 min-h-screen py-8 lg:gap-x-8',
      'content-docs-toc': 'border-l border-base py-2',
      'content-docs-header': 'text-sm text-muted mb-2 pl-4',
      'content-docs-toc-links': 'text-sm font-light text-$c-gray-500',
    },
  ],

  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography(),
    presetIcons({
      scale: 1.2,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetUna(),
  ],

  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],

  css: [
    '~/assets/css/main.css',
  ],
}
