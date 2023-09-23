<script setup lang="ts">
interface EllipsisProps {
  height?: string
  width?: string
  top?: string
  left?: string
  blur?: string
  opacity?: string
  radius?: string
}

const props = withDefaults(defineProps<EllipsisProps>(), {
  height: '300px',
  width: '300px',
  top: '0',
  left: '0',
  blur: '300',
  opacity: '100',
  radius: '50%',
})
</script>

<template>
  <div
    absolute
    :style="{
      height: props.height,
      width: props.width,
      top: props.top,
      left: props.left,
      opacity: props.opacity,
      filter: `blur(${props.blur}px)`,
    }"
  >
    <div
      class="h-full w-full from-primary to-primary-200 bg-gradient-to-r"
      :style="{
        borderRadius: props.radius,
      }"
    />
  </div>
</template>
