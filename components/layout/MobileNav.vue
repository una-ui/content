<script setup lang="ts">
const open = ref(false)

// Close sheet on navigation
watch(() => useRoute().path, () => {
  open.value = false
})
</script>

<template>
  <UiSheet v-model:open="open">
    <UiSheetTrigger as-child>
      <NButton
        btn="ghost-gray"
        square
        icon
        class="md:hidden"
        label="i-lucide-menu"
      />
    </UiSheetTrigger>
    <UiSheetContent side="left" class="pr-0">
      <LayoutHeaderLogo />
      <LayoutAside is-mobile />
    </UiSheetContent>
  </UiSheet>
</template>
