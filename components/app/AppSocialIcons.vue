<script setup lang="ts">
const { socials } = useAppConfig().una.content
</script>

<template>
  <div class="gap-x-2">
    <NButton
      v-for="(social, i) in socials"
      :key="i"
      icon
      :class="social.class"
      :to="social.url"
      target="_blank"
      class="opacity-70 hover:opacity-100"
      btn="text-gray square"
      :label="social.icon"
      :aria-label="i"
    />
  </div>
</template>
