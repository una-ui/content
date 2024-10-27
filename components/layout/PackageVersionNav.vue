<script setup lang="ts">
const { header } = useConfig().value
</script>

<template>
  <NDropdownMenu
    v-bind="header.packageVersionNav"
    dropdown-menu="text-gray"
    trailing="i-radix-icons-caret-down"
  />
</template>
