<script setup lang="ts">
const { page } = useContent()
const config = useConfig()

useSeoMeta({
  title: page.value?.title ? `${page.value.title} - ${config.value.site.name}` : `${config.value.site.name}`,
  ogTitle: page.value?.title,
  description: page.value?.description,
})
</script>

<template>
  <div class="px-4 py-6 md:px-8" :class="[config.main.padded && 'container']">
    <ContentRenderer :key="page._id" :value="page" />
  </div>
</template>
