<script setup lang="ts">
const emit = defineEmits(['move'])
const { toc } = useContent()
</script>

<template>
  <div
    v-if="toc?.links?.length"
    content="docs-toc"
  >
    <div content="docs-header">
      <span>On this page</span>
    </div>

    <DocsTocLinks
      :links="toc.links"
      @move="emit('move')"
    />
  </div>
</template>
