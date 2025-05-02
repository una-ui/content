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
    label="i-tabler-brightness"
    aria-label="Color Mode"
    @click="toggleDark"
  />
</template>
