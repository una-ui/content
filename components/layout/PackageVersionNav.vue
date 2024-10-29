<script setup lang="ts">
const { header } = useConfig().value
</script>

<template>
  <NDropdownMenu
    :label="header.packageVersionNav.label"
    :items="header.packageVersionNav.items"
    dropdown-menu="text-gray"
    square
    size="sm"
    trailing="i-radix-icons-caret-down"
  />
</template>
