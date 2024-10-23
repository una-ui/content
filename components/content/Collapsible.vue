<script setup lang="ts">
const { variant = 'simple' } = defineProps<{
  variant?: 'simple' | 'card'
  title?: string
}>()
const isOpen = ref(false)
</script>

<template>
  <NCollapsible v-if="variant === 'card'" v-model:open="isOpen" class="space-y-2">
    <div class="flex items-center space-x-4 justify-between">
      <h4 class="font-semibold text-sm">
        <ContentSlot :use="$slots.title" unwrap="p" />
        {{ title }}
      </h4>
      <NCollapsibleTrigger as-child>
        <NButton
          name="i-lucide-chevrons-up-down"
          square
          icon
          btn="ghost-gray"
        />
      </NCollapsibleTrigger>
    </div>

    <NCollapsibleContent class="space-y-2">
      <div class="px-4 text-sm rounded-md border font-mono py-3">
        <ContentSlot :use="$slots.content" unwrap="p" />
        <ContentSlot unwrap="p" />
      </div>
    </NCollapsibleContent>
  </NCollapsible>

  <NCollapsible v-else-if="variant === 'simple'" v-model:open="isOpen">
    <NCollapsibleTrigger class="w-full text-left">
      <div class="w-full flex gap-1">
        <SmartIcon
          name="lucide:chevron-down"
          class="self-center transition-all"
          :class="[!isOpen && '-rotate-90']"
        />
        <span>
          <ContentSlot :use="$slots.title" unwrap="p" />
          {{ title }}
        </span>
      </div>
    </NCollapsibleTrigger>
    <NCollapsibleContent>
      <div class="py-2 ml-2 border-l pl-4">
        <ContentSlot :use="$slots.content" unwrap="p" />
        <ContentSlot unwrap="p" />
      </div>
    </NCollapsibleContent>
  </NCollapsible>
</template>
