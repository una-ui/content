<script setup lang="ts">
const config = useConfig()

useSeoMeta({
  description: config.value.site.description,
  ogDescription: config.value.site.description,
  ogImage: config.value.site.ogImage,
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <NuxtLoadingIndicator :color="false" class="z-100 bg-primary/80" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
