<script setup lang="ts">
const { footer } = useConfig().value
</script>

<template>
  <footer class="py-6 text-muted md:px-8 md:py-0">
    <div class="flex flex-col items-center justify-between gap-2 container md:h-24 md:flex-row">
      <span class="text-sm">
        {{ footer.credits }}
      </span>

      <span class="flex-1" />

      <template
        v-if="footer.links"
      >
        <NButton
          v-for="(link, i) in footer.links"
          v-bind="link"
          :key="i"
          icon
          square
          btn="ghost-gray"
          class="flex gap-2"
        />
      </template>
    </div>
  </footer>
</template>
