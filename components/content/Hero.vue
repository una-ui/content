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
  <section class="flex items-center gap-2 mx-auto flex-col py-8 md:py-12 md:pb-8 max-w-980px lg:py-24 lg:pb-20">
    <NuxtLink
      v-if="announcement"
      :to="announcement.to"
      :target="announcement.target"
      class="items-center text-sm inline-flex bg-muted font-medium rounded-lg px-3 py-1"
    >
      <template v-if="announcement.icon">
        <SmartIcon :name="announcement.icon" :size="16" />
        <NSeparator class="mx-2 h-4" orientation="vertical" />
      </template>
      <span class="sm:hidden">{{ announcement.title }}</span>
      <span class="hidden sm:inline">
        {{ announcement.title }}
      </span>
      <NIcon name="i-lucide-arrow-right" class="ml-1 size-4" />
    </NuxtLink>

    <h1 class="font-bold text-3xl leading-tight tracking-tighter lg:leading-[1.1] text-center md:text-6xl">
      <ContentSlot :use="$slots.title" unwrap="p" />
    </h1>
    <span class="text-center text-muted text-lg max-w-[750px] sm:text-xl">
      <ContentSlot :use="$slots.description" unwrap="p" />
    </span>

    <section class="flex w-full items-center space-x-4 justify-center py-4 md:pb-10">
      <NButton
        v-for="(action, i) in actions"
        :key="i"
        v-bind="action"
      />
    </section>
  </section>
</template>
