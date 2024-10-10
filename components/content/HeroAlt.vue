<script setup lang="ts">
defineProps<{
  announcement?: {
    to?: string
    target?: string
    icon?: string
    title: string
  }
  actions: [{
    name: string
    leftIcon?: string
    rightIcon?: string
    variant?: 'default' | 'link' | 'destructive' | 'outline' | 'secondary' | 'ghost'
    to: string
    target?: string
  }]
}>()
</script>

<template>
  <section class="flex items-start px-4 gap-2 mx-auto flex-col py-8 md:py-12 md:pb-8 lg:py-12 lg:pb-10">
    <NuxtLink
      v-if="announcement"
      :to="announcement.to"
      :target="announcement.target"
      class="items-center text-sm inline-flex font-medium px-0.5"
    >
      <template v-if="announcement.icon">
        <SmartIcon :name="announcement.icon" :size="16" />
        <NSeparator class="mx-2 h-4" orientation="vertical" />
      </template>
      <span class="underline-offset-4 hover:underline">{{ announcement.title }}</span>
      <Icon name="lucide:arrow-right" class="ml-1 size-4" />
    </NuxtLink>

    <h1 class="font-bold text-3xl leading-tight tracking-tighter lg:leading-[1.1] md:text-4xl">
      <ContentSlot :use="$slots.title" unwrap="p" />
    </h1>
    <p class="text-base text-lg max-w-2xl font-light">
      <ContentSlot :use="$slots.description" unwrap="p" />
    </p>

    <div class="flex w-full items-center gap-2 py-2 justify-start">
      <NuxtLink
        v-for="(action, i) in actions"
        :key="i"
        :to="action.to"
        :target="action.target"
      >
        <UiButton :variant="action.variant" size="sm">
          <SmartIcon v-if="action.leftIcon" :name="action.leftIcon" class="mr-1" />
          {{ action.name }}
          <SmartIcon v-if="action.rightIcon" :name="action.rightIcon" class="ml-1" />
        </UiButton>
      </NuxtLink>
    </div>
  </section>
</template>
