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
        <span class="text-md text-primary font-bold">
          {{ name }}
        </span>
        <span v-if="required" class="text-sm text-muted-foreground font-mono">
          {{ fieldRequiredText }}
        </span>
        <span class="ml-auto text-sm text-muted-foreground font-mono">
          {{ type }}
        </span>
      </div>
      <div v-if="defaultValue" class="text-muted-foreground">
        <ProseCodeInline>
          {{ defaultValue }}
        </ProseCodeInline>
      </div>
    </div>
    <span class="text-sm text-muted-foreground">
      <ContentSlot unwrap="p" />
      {{ description }}
    </span>
  </div>
</template>
