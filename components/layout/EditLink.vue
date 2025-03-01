<script setup lang="ts">
const { url, enabledDocsFooter, text, icon } = useEditLink()
</script>

<template>
  <div v-if="enabledDocsFooter" class="w-fit">
    <NButton
      btn="text-primary"
      :to="url"
      target="_blank"
    >
      <div class="flex items-center gap-2">
        <SmartIcon :name="icon" />
        <span>
          {{ text }}
        </span>
      </div>
    </NButton>
  </div>
</template>
