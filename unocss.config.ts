import una from '@una-ui/nuxt/una.config'
import { mergeConfigs } from '@unocss/core'

export default mergeConfigs([una(), {
  content: {
    pipeline: {
      include: [
        '**/*.{yml,yaml,ts,tsx,vue,md}',
      ],
    },
    filesystem: ['content/**/*.md'],
  },
}])
