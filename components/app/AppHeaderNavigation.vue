<script setup lang="ts">
const { navigation } = useContent()
</script>

<template>
  <div class="hidden gap-x-4 lg:flex">
    <NButton
      v-for="item in navigation"
      :key="item._id"
      :to="item._path"
      :label="item.title"
      btn="text-gray square hover:text-primary"
      size="sm"
      :una="{
        btn: 'font-normal',
      }"
    />
  </div>
</template>
