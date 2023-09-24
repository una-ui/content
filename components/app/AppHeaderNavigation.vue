<script setup lang="ts">
const { navigation } = useContent()
</script>

<template>
  <div class="hidden gap-x-4 lg:flex">
    <template
      v-for="item in navigation"
      :key="item._id"
    >
      <NButton
        :to="item._path"
        :label="item.title"
        btn="~ square"
        inactive-class="btn-(text-gray hover:text-primary) font-normal"
        active-class="text-primary font-bold"
        size="sm"
      />

      <!--
        TODO: add dropdown to item children
        :trailing="item.children ? 'i-heroicons-chevron-down-20-solid text-sm' : ''"
       -->
    </template>
  </div>
</template>
