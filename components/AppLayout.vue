<script setup lang="ts">
const myTheme = useAppConfig().myTheme
</script>

<template>
  <div>
    <header>{{ myTheme?.title || 'My project' }}</header>
    <main>
      <NThemeSwitcher/>
      <slot />
    </main>
  </div>
</template>
