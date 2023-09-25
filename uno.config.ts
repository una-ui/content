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
      'content-docs-toc': 'border-l border-base pt-2 pb-8',
      'content-docs-header': 'text-sm text-muted mb-2 pl-4',
      'content-docs-toc-links': 'text-sm text-$c-gray-500',
    },
  ],
  content: {
    pipeline: {
      include: [
        /\.(vue|svelte|[jt]sx|md|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // include js/ts files
        'src/**/*.{js,ts}',
      ],
      // exclude files
      exclude: ['/.playground/**/*'],
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography({
      cssExtend: {
        'a': {
          'text-underline-offset': '5px',
          'text-decoration-style': 'dashed',
          'font-weight': '400',
          'text-decoration-thickness': '1px',
        },
        'a:hover': {
          'text-decoration': 'underline',
          'text-underline-offset': '5px',
        },
        'h2 a:hover': {
          'text-decoration': 'none',
        },
        'p,ul,ol,pre': {
          'line-height': 1.5,
        },
        'h1, h2, h3, h4, h5, h6': {
          'scroll-margin-top': '100px',
          'color': 'var(--c-gray-900)',
          'font-weight': '700',
        },
        ':not(pre) > code::before,:not(pre) > code::after': {
          content: '',
        },
        'pre,code': {
          'background': 'var(--c-gray-50)',
          'padding': '0.1rem 0.5rem',
          'color': 'var(--c-brand)',
          'border-radius': '0.25rem',
          'font-style': 'normal',
          'font-weight': '400',
          'font-size': '16px',
        },
        'h1 a, h2 a, h3 a, h4 a, h5 a, h6 a': {
          'text-decoration': 'none',
          'color': 'inherit',
          'font-weight': '600',
        },
        'h1': {
          'margin': '1rem 0',
          'font-size': '2.75em',
          'color': 'var(--c-brand)',
        },
        'h2': {
          'margin': '1em 0 1em',
          'font-size': '2.25em',
        },
        'h3': {
          'margin': ' 0 .5em',
          'font-size': '1.75em',
        },
        'h4': {
          'margin': '0',
          'font-size': '1.375em',
        },
        'h5': {
          'margin': '0',
          'font-size': '1.25em',
        },
        'h6': {
          'margin': '1em 0',
          'font-size': '1.125em',
        },
        'hr': {
          'border-top': '.5px solid var(--un-prose-hr)',
        },
        'blockquote': {
          'color': 'var(--c-gray-500)',
          'font-style': 'normal',
        },
      },
    }),
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
