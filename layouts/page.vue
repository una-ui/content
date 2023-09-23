<script setup lang="ts">
</script>

<template>
  <div>
    <slot />

    <Ellipsis
      width="20%"
      top="50%"
      height="20%"
      blur="100"
      opacity=".1"
    />
  </div>
</template>
