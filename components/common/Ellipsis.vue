<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  width: {
    type: String,
    default: '10rem',
  },
  height: {
    type: String,
    default: '10rem',
  },
  zIndex: {
    type: String,
    default: '10',
  },
  top: {
    type: String,
    default: '0',
  },
  left: {
    type: String,
    default: 'auto',
  },
  right: {
    type: String,
    default: 'auto',
  },
  blur: {
    type: String,
    default: '50px',
  },
  colors: {
    type: Array as PropType<string[]>,
    default: () => ['rgba(0, 71, 225, 0.22)', 'rgba(26, 214, 255, 0.22)', 'rgba(0, 220, 130, 0.22)'],
  },
})
</script>

<template>
  <div
    class="pointer-events-none absolute"
    :style="{
      top,
      left,
      right,
      zIndex,
      width,
      height,
      filter: `blur(${blur})`,
    }"
  >
    <div
      class="h-full w-full"
      :style="{
        background: `linear-gradient(97.62deg, ${colors[0]} 2.27%, ${colors[1]} 50.88%, ${colors[2]} 98.48%)`,
      }"
    />
  </div>
</template>
