<script setup lang="ts">
const colorMode = useColorMode()
function toggleDark() {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <NButton
    btn="text-gray square"
    aria-label="Toggle dark mode"
    icon
    label="i-tabler-sun dark:i-tabler-moon-stars"
    class="opacity-70 -rotate-15 hover:opacity-100"
    @click="toggleDark()"
  />
</template>
