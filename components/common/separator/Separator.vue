<script setup lang="ts">
import type { SeparatorProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { Separator } from 'radix-vue'
import { computed } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<SeparatorProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <Separator
    v-bind="delegatedProps"
    :class="cn('shrink-0 bg-muted-border', props.orientation === 'vertical' ? 'w-px h-full' : 'h-px w-full', props.class)"
  />
</template>
