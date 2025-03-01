<script setup lang="ts">
import Toaster from '~/components/common/toast/Toaster.vue'

const config = useConfig()
const route = useRoute()

useSeoMeta({
  description: config.value.site.description,
  ogDescription: config.value.site.description,
  ogImage: config.value.site.ogImage,
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <NuxtLoadingIndicator :color="false" class="z-100 bg-primary/80" />
  <LayoutHeader />

  <div
    v-if="route.path !== '/'" class="min-h-screen border-b"
    :class="[
      config.theme.border === 'dashed' && 'border-dashed',
    ]"
  >
    <div
      class="flex-1 items-start px-4 md:grid lg:grid-cols-[240px_minmax(0,1fr)] md:grid-cols-[220px_minmax(0,1fr)] lg:gap-10 md:gap-6 md:px-8"
      :class="[
        config.main.padded && 'container',
        config.header.border && 'border-r',
        config.theme.border === 'dashed' && 'border-dashed',
      ]"
    >
      <aside
        class="fixed top-[102px] z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto md:sticky md:top-[60px] -ml-2 md:block"
      >
        <LayoutAside :is-mobile="false" />
      </aside>
      <NuxtPage />
    </div>
  </div>
  <NuxtPage v-else />

  <Toaster />
  <LayoutFooter />
</template>
