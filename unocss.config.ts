import { defaultConfig } from '@una-ui/nuxt/una.config'
import { presetWebFonts } from 'unocss'

export default defaultConfig({
  content: {
    pipeline: {
      include: [
        '**/*.{yml,yaml,ts,tsx,vue,md}',
      ],
    },
    filesystem: ['content/**/*.md'],
  },

  presets: [
    presetWebFonts({
      provider: 'none',
      fonts: {
        sans: 'Geist',
        mono: 'GeistMono',
      },
    }),
  ],
})
