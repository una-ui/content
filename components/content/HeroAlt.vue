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
  <section class="mx-auto flex flex-col items-start gap-2 px-4 py-8 md:py-12 md:pb-8 lg:py-12 lg:pb-10">
    <NuxtLink
      v-if="announcement"
      :to="announcement.to"
      :target="announcement.target"
      class="items-center text-sm inline-flex px-0.5 font-medium"
    >
      <template v-if="announcement.icon">
        <SmartIcon :name="announcement.icon" :size="16" />
        <NSeparator class="mx-2 h-4" orientation="vertical" />
      </template>
      <span class="underline-offset-4 hover:underline">{{ announcement.title }}</span>
      <NIcon name="i-lucide-arrow-right" class="ml-1 size-4" />
    </NuxtLink>

    <h1 class="text-3xl font-bold leading-tight tracking-tighter lg:leading-[1.1] md:text-4xl">
      <ContentSlot :use="$slots.title" unwrap="p" />
    </h1>
    <p class="text-lg text-base max-w-2xl font-light">
      <ContentSlot :use="$slots.description" unwrap="p" />
    </p>

    <div class="w-full flex items-center gap-2 justify-start py-2">
      <NButton
        v-for="(action, i) in actions"
        :key="i"
        v-bind="action"
      />
    </div>
  </section>
</template>
