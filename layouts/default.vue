<script setup lang="ts">
const location = Math.floor(Math.random() * 80) + 10
</script>

<template>
  <div class="relative min-h-screen overflow-x-hidden bg-base">
    <AppHeader />

    <div n="container">
      <slot />
    </div>

    <AppFooter />

    <Ellipsis
      :top="`${location}%`"
      :left="`${location}%`"
      height="10%"
      width="50%"
      opacity="20"
      blur="200"
      rotate="5"
    />
  </div>
</template>
