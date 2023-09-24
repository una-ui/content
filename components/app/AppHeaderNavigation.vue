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
        btn="text-gray square hover:text-primary"
        active-class="text-primary"
        size="sm"
        :una="{
          btn: 'font-normal',
        }"
      />

      <!--
        TODO: add dropdown to item children
        :trailing="item.children ? 'i-heroicons-chevron-down-20-solid text-sm' : ''"
       -->
    </template>
  </div>
</template>
