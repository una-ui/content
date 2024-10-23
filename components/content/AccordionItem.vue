<script setup lang="ts">
import { useId } from 'radix-vue'

defineProps<{
  value?: string
  title?: string
  content?: string
}>()

const autoValue = useId()
</script>

<template>
  <CommonAccordionItem :value="value ?? autoValue">
    <CommonAccordionTrigger>
      <ContentSlot :use="$slots.title" unwrap="p" />
      {{ title }}
    </CommonAccordionTrigger>
    <CommonAccordionContent>
      <ContentSlot :use="$slots.content" unwrap="p" />
      {{ content }}
    </CommonAccordionContent>
  </CommonAccordionItem>
</template>
