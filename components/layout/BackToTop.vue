<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'

const config = useConfig().value.main
const isBackToTopEnabled = config.backToTop
const { y } = useWindowScroll({ behavior: 'smooth' })
</script>

<template>
  <div v-if="isBackToTopEnabled" class="w-fit">
    <NButton
      btn="text-primary"
      leading="i-lucide-arrow-up"
      label="Back to Top"
      @click="y = 0"
    />
  </div>
</template>
