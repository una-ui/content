<script setup lang="ts">
const colorMode = useColorMode()
function toggleDark() {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <NButton
    btn="ghost-gray"
    class="text-base"
    square
    icon
    label="i-radix-icons-sun dark:i-radix-icons-moon"
    aria-label="Color Mode"
    @click="toggleDark"
  />
</template>
