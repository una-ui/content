<script setup lang="ts">
const { socials } = useAppConfig().una.content
</script>

<template>
  <div class="gap-x-3">
    <NButton
      v-for="(social, i) in socials"
      :key="i"
      icon
      :to="social.url"
      target="_blank"
      size="14px"
      class="opacity-70 hover:opacity-100"
      btn="text-gray square"
      :label="social.icon"
      :aria-label="i"
    />
  </div>
</template>
