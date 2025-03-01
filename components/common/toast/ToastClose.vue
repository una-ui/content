<script setup lang="ts">
import type { ToastCloseProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { ToastClose } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<ToastCloseProps & {
  class?: HTMLAttributes['class']
}>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ToastClose v-bind="delegatedProps" :class="cn('absolute right-1 top-1 rounded-md p-1 text-base/50 opacity-0 transition-opacity hover:text-base focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-error-300 group-[.destructive]:hover:text-error-50 group-[.destructive]:focus:ring-error-400 group-[.destructive]:focus:ring-offset-error-600', props.class)">
    <Icon name="lucide:x" class="square-4" />
  </ToastClose>
</template>
