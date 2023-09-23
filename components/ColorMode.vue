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
    label="i-heroicons-sun-20-solid dark:i-heroicons-moon-20-solid"
    class="opacity-70 hover:opacity-100"
    size="13px"
    @click="toggleDark()"
  />
</template>
