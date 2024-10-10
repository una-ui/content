<script setup lang="ts">
const { prev, next } = useContent()
</script>

<template>
  <div class="border-t lg:flex mt-10 pt-8 lg:flex-row">
    <LayoutPrevNextButton :prev-next="prev" side="left" />
    <span class="flex-1" />
    <LayoutPrevNextButton :prev-next="next" side="right" />
  </div>
</template>
