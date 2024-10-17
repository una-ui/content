<script setup lang="ts">
defineProps<{
  announcement?: {
    to?: string
    target?: string
    icon?: string
    title: string
  }
  actions: any[]
}>()
</script>

<template>
  <section class="mx-auto max-w-980px flex flex-col items-center gap-2 py-8 lg:py-24 md:py-12 lg:pb-20 md:pb-8">
    <NButton
      v-if="announcement"
      :to="announcement.to"
      :target="announcement.target"
      rounded="lg"
      btn="soft-accent"
    >
      <template v-if="announcement.icon">
        <SmartIcon :name="announcement.icon" square="4" />
        <NSeparator class="mx-2 h-4" orientation="vertical" />
      </template>
      <span class="sm:hidden">{{ announcement.title }}</span>
      <span class="hidden sm:inline">
        {{ announcement.title }}
      </span>
      <NIcon name="i-lucide-arrow-right" class="ml-1" square="4" />
    </NButton>

    <h1 class="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
      <ContentSlot :use="$slots.title" unwrap="p" />
    </h1>
    <span class="max-w-[750px] text-center text-lg text-muted sm:text-xl">
      <ContentSlot :use="$slots.description" unwrap="p" />
    </span>

    <section class="w-full flex items-center justify-center py-4 space-x-4 md:pb-10">
      <NButton
        v-for="(action, i) in actions"
        :key="i"
        v-bind="action"
      />
    </section>
  </section>
</template>
