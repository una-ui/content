<script setup lang="ts">
const { title } = useAppConfig().una.content
</script>

<template>
  <div>
    <header>{{ title }}</header>
    <main>
      <NThemeSwitcher />
      <slot />
    </main>
  </div>
</template>
