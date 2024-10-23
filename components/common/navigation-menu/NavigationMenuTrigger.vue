<script setup lang="ts">
import { cn } from '@/lib/utils'
import {
  NavigationMenuTrigger,
  type NavigationMenuTriggerProps,
  useForwardProps,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'
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
      class="relative block duration-200 ml-1 top-px transition group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuTrigger>
</template>
