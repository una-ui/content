<script lang="ts" setup>
// setup header
useSetupPageHeader()
</script>

<template>
  <div>
    <NuxtLoadingIndicator color="repeating-linear-gradient(to right,var(--c-primary) 0%,var(--c-primary-active) 100%)" />
    <NuxtPage />
  </div>
</template>
