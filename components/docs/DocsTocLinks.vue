<script setup lang="ts">
import type { PropType } from 'vue'
import type { TocLink } from '@nuxt/content/dist/runtime/types'

defineProps({
  links: {
    type: Array as PropType<TocLink[]>,
    default: () => [],
  },
})

const emit = defineEmits(['move'])

const router = useRouter()

const { activeHeadings, updateHeadings } = useScrollspy()

// eslint-disable-next-line n/prefer-global/process
if (process.client) {
  setTimeout(() => {
    updateHeadings([
      ...document.querySelectorAll('.document-driven-page h1'),
      ...document.querySelectorAll('.document-driven-page h2'),
      ...document.querySelectorAll('.document-driven-page h3'),
      ...document.querySelectorAll('.document-driven-page h4'),
    ])
  }, 300)
}

function scrollToHeading(id: string) {
  router.push(`#${id}`)
  emit('move', id)
}

function childMove(id: string) {
  emit('move', id)
}
</script>

<template>
  <ol content="docs-toc-links">
    <li
      v-for="link in links"
      :key="link.text"
      :class="{ 'border-l border-primary-active -ml-0.25': activeHeadings.includes(link.id) && link.depth === 2 }"
      class="py-1"
    >
      <NLink
        :to="`#${link.id}`"
        :class="[
          { 'text-primary': activeHeadings.includes(link.id) },
          [link.depth === 2 ? 'pl-4' : 'pl-8'],
        ]"
        class="whitespace-nowrap"
        @click.prevent="scrollToHeading(link.id)"
      >
        {{ link.text }}
      </NLink>
      <DocsTocLinks
        v-if="link.children"
        :links="link.children"
        @move="childMove($event)"
      />
    </li>
  </ol>
</template>
