<script setup lang="ts">
withDefaults(defineProps<{
  size?: 'xs' | 'sm' | 'md'
}>(), {
  size: 'sm',
})

const sizeClasses = {
  xs: 'min-h-4 text-[10px] h-4 px-1',
  sm: 'min-h-5 text-[11px] h-5 px-1',
  md: 'min-h-6 text-[12px] h-6 px-1.5',
}
</script>

<template>
  <kbd
    class="pointer-events-none h-5 inline-flex select-none items-center gap-1 border border-border rounded bg-muted font-medium font-sans"
    :class="sizeClasses[size]"
  >
    <slot />
  </kbd>
</template>
