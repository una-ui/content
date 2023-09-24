<script lang="ts" setup>
// setup header
useSetupPageHeader()
</script>

<template>
  <div>
    <NuxtLoadingIndicator
      color="repeating-linear-gradient(to right,rgb(var(--una-primary)) 0%,rgb(var(--una-primary-active)) 100%)"
    />
    <AppLayout>
      <NuxtPage />
    </AppLayout>
  </div>
</template>
