<script setup lang="ts">
const location = Math.floor(Math.random() * 80) + 10
</script>

<template>
  <div>
    <DocsPageLayout>
      <slot />
    </DocsPageLayout>

    <!-- <Ellipsis
      :top="`${location}%`"
      :left="`${location}%`"
      height="35%"
      width="35%"
      opacity=".1"
      blur="150"
      rotate="5"
    /> -->
  </div>
</template>
