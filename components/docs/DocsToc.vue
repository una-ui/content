<script setup lang="ts">
const emit = defineEmits(['move'])
const { toc } = useContent()
</script>

<template>
  <div content="docs-toc">
    <template v-if="toc?.links?.length">
      <div content="docs-header">
        <span>On this page</span>
      </div>

      <DocsTocLinks
        :links="toc.links"
        @move="emit('move')"
      />
    </template>
  </div>
</template>
