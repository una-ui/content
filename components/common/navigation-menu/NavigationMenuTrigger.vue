<script setup lang="ts">
import type { NavigationMenuTriggerProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import {
  NavigationMenuTrigger,

  useForwardProps,
} from 'radix-vue'
import { computed } from 'vue'
import { cn } from '@/lib/utils'
import { navigationMenuTriggerStyle } from '.'

const props = defineProps<NavigationMenuTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <NavigationMenuTrigger
    v-bind="forwardedProps"
    :class="cn(navigationMenuTriggerStyle(), 'group', props.class)"
  >
    <slot />
    <NIcon
      name="i-lucide-chevron-down"
      square="3"
      class="relative top-px ml-1 block transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuTrigger>
</template>
