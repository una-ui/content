<script setup lang="ts">
defineProps<{
  prevNext: any
  side: 'left' | 'right'
}>()
</script>

<template>
  <NuxtLink
    v-if="prevNext && prevNext._path"
    :to="prevNext._path"
    class="basis-1/3"
  >
    <div class="hover:bg-$c-muted/50 mb-4 border rounded-lg p-4 transition-all space-y-2">
      <div class="flex flex-row gap-3">
        <div v-if="side === 'left'" class="min-w-6 flex square-6">
          <Icon name="lucide:arrow-left" size="20" class="mx-auto self-center" />
        </div>
        <span class="self-center space-y-2">
          <div class="text-lg font-semibold">
            {{ prevNext.title }}
          </div>
          <div v-if="prevNext.description" class="text-sm text-muted">
            {{ prevNext.description }}
          </div>
        </span>
        <div v-if="side === 'right'" class="ml-auto min-w-6 flex square-6">
          <Icon name="lucide:arrow-right" size="20" class="mx-auto self-center" />
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
