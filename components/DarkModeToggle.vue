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
    square="8"
    icon
    label="dark:i-radix-icons-sun i-radix-icons-moon"
    aria-label="Color Mode"
    @click="toggleDark"
  />
</template>
