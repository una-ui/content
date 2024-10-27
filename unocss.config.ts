import una from '@una-ui/nuxt/una.config'
// import extractorMdc from '@unocss/extractor-mdc'
import { defineConfig } from 'unocss'

export default defineConfig({
  ...una(),
  // extractors: [extractorMdc()],
  content: {
    pipeline: {
      include: [
        '**/*.{yml,yaml,ts,tsx,vue,md}',
      ],
    },
    filesystem: ['content/**/*.md'],
  },
})
