<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <li
    role="presentation"
    aria-hidden="true"
    :class="cn('[&>svg]:square-3.5', props.class)"
  >
    <slot>
      <Icon name="lucide:chevron-right" class="block square-3.5" />
    </slot>
  </li>
</template>
