<script setup lang="ts">
import type { AccordionTriggerProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import {
  AccordionHeader,
  AccordionTrigger,

} from 'radix-vue'
import { computed } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<AccordionTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <AccordionHeader class="flex">
    <AccordionTrigger
      v-bind="delegatedProps"
      :class="
        cn(
          'flex flex-1 items-center bg-transparent justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
          props.class,
        )
      "
    >
      <slot />
      <slot name="icon">
        <Icon
          name="lucide:chevron-down"
          class="flex shrink-0 transition-transform duration-200 size-4"
        />
      </slot>
    </AccordionTrigger>
  </AccordionHeader>
</template>
