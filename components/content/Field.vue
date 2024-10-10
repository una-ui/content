<script setup lang="ts">
defineProps<{
  name: string
  type?: string
  required?: boolean
  description?: string
  defaultValue?: string
}>()

const { fieldRequiredText } = useConfig().value.main
</script>

<template>
  <div class="[&:not(:first-child)]:mt-4 [&:not(:first-child)]:pt-4">
    <div class="mb-2">
      <div class="flex items-center gap-2">
        <span class="font-bold text-md text-primary">
          {{ name }}
        </span>
        <span v-if="required" class="text-muted text-sm font-mono">
          {{ fieldRequiredText }}
        </span>
        <span class="font-mono text-sm text-muted ml-auto">
          {{ type }}
        </span>
      </div>
      <div v-if="defaultValue" class="text-muted">
        <ProseCodeInline>
          {{ defaultValue }}
        </ProseCodeInline>
      </div>
    </div>
    <span class="text-sm text-muted">
      <ContentSlot unwrap="p" />
      {{ description }}
    </span>
  </div>
</template>
