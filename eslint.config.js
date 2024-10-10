import antfu from '@antfu/eslint-config'

export default antfu(
  {
    type: 'lib',
    unocss: true,
    rules: {
      'node/prefer-global/process': 'off',
      'vue/no-v-text-v-html-on-component': 'off',
      'unocss/order': 'warn',
      'unocss/order-attributify': 'warn',
    },
  },
  {
    // files: ['docs/**', '**/playground/**'],
    rules: {
      'ts/explicit-function-return-type': ['off'],
    },
  },
)
