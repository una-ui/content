<script setup lang="ts">
withDefaults(defineProps<{
  type?: 'single' | 'multiple'
  collapsible?: boolean
  defaultValue: string | string[]
}>(), {
  type: 'single',
})
</script>

<template>
  <CommonAccordion
    :type="type"
    :collapsible="collapsible"
    :default-value="defaultValue"
    class="[&:not(:first-child)]:mt-5"
  >
    <slot />
  </CommonAccordion>
</template>
