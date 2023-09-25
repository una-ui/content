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
  <ul content="docs-toc-links">
    <!-- :class="[`depth-${link.depth}`]" -->
    <li
      v-for="link in links"
      :key="link.text"
      :class="{ 'border-primary border-l-1 ': activeHeadings.includes(link.id) }"
      class="truncate py-1 pl-4"
    >
      <NLink
        :to="`#${link.id}`"
        :class="{ 'text-primary': activeHeadings.includes(link.id) }"
        @click.prevent="scrollToHeading(link.id)"
      >
        {{ link.text }} sdffsffssfdfdfssssdffsffssfdfdfssssdffsffssfdfdfssssdffsffssfdfdfssssdffsffssfdfdfsss
      </NLink>
      <DocsTocLinks
        v-if="link.children"
        :links="link.children"
        @move="childMove($event)"
      />
    </li>
  </ul>
</template>
