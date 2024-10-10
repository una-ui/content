import una from '@una-ui/nuxt/una.config'

import extractorMdc from '@unocss/extractor-mdc'
import { defineConfig } from 'unocss'

export default defineConfig({
  extractors: [
    extractorMdc(),
  ],

  ...una,
})
