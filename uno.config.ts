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
      'n-container': 'container lg:px-8 mx-auto px-4 sm:px-6',
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
