<script setup lang="ts">
const location = Math.floor(Math.random() * 80) + 10
</script>

<template>
  <div>
    <slot />

    <Ellipsis
      :top="`${location}%`"
      :left="`${location}%`"
      height="10%"
      width="50%"
      opacity=".5"
      blur="200"
      rotate="5"
    />
  </div>
</template>
