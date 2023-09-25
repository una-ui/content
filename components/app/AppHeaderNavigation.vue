<script setup lang="ts">
const { navigation } = useContent()
const header = useAppConfig().una.content.header

const excluded = computed(() => {
  return header?.exclude || []
})

// filter excluded navigation items
const filteredNavigation = computed(() => {
  return navigation.value.filter((item: any) => {
    return !excluded.value.includes(item._path)
  })
})
</script>

<template>
  <div class="hidden gap-x-4 lg:flex">
    <NButton
      v-for="item in filteredNavigation"
      :key="item._id"
      :to="item._path"
      :label="item.title"
      btn="~ square"
      inactive-class="btn-(text-gray hover:text-primary)"
      active-class="text-primary"
      class="whitespace-nowrap font-normal"
      size="sm"
    />
    <!--
        TODO: add dropdown to item children
        :trailing="item.children ? 'i-heroicons-chevron-down-20-solid text-sm' : ''"
       -->
  </div>
</template>
