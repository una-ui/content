<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})

const { logo, title: siteTitle, showTitle } = useConfig().value.header
</script>

<template>
  <div
    class="size-full flex flex-col justify-center bg-white p-16"
    style="background-size: 120px 120px; background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);"
  >
    <div class="mb-4 flex">
      <img :src="logo.light" height="65">
      <span v-if="showTitle && siteTitle" class="ml-4 self-center text-4xl font-bold">
        {{ siteTitle }}
      </span>
    </div>
    <div class="relative">
      <h1 class="text-8xl font-bold">
        {{ title }}
      </h1>
      <p class="text-muted-foreground text-4xl leading-tight">
        {{ description }}
      </p>
    </div>
  </div>
</template>
