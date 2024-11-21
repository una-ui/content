<script setup lang="ts">
const { header } = useConfig().value
</script>

<template>
  <div>
    <NDropdownMenu
      :label="header.packageVersionNav.label"
      :items="header.packageVersionNav.items"
      dropdown-menu="text-gray"
      size="sm"
      trailing="i-radix-icons-caret-down"
    />
  </div>
</template>
