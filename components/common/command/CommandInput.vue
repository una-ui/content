<script setup lang="ts">
import type { ComboboxInputProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { ComboboxInput, useForwardProps } from 'radix-vue'
import { computed } from 'vue'
import { cn } from '@/lib/utils'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<ComboboxInputProps & {
  class?: HTMLAttributes['class']
  loading?: boolean
}>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <div class="flex items-center border-b px-3" cmdk-input-wrapper>
    <Icon v-if="!loading" name="lucide:search" class="mr-2 shrink-0 opacity-50 square-4" />
    <Icon v-else name="lucide:loader" class="mr-2 shrink-0 animate-spin opacity-50 square-4" />
    <ComboboxInput
      v-bind="{ ...forwardedProps, ...$attrs }"
      auto-focus
      :class="cn('flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50', props.class)"
    />
  </div>
</template>
