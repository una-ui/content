<script setup lang="ts">
const { footer } = useConfig().value
</script>

<template>
  <footer class="py-6 text-muted-foreground md:px-8 md:py-0">
    <div class="container flex flex-col items-center justify-between gap-2 md:h-24 md:flex-row">
      <footer class="py-6 text-muted-foreground md:px-8 md:py-0">
        <div class="container flex flex-col items-center justify-between gap-2 md:h-24 md:flex-row">
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
    </div>
  </footer>
</template>
