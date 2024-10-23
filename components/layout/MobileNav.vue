<script setup lang="ts">
const open = ref(false)

// Close sheet on navigation
watch(() => useRoute().path, () => {
  open.value = false
})
</script>

<template>
  <CommonSheet v-model:open="open">
    <CommonSheetTrigger as-child>
      <NButton
        btn="ghost-gray"
        square
        icon
        class="md:hidden"
        label="i-lucide-menu"
      />
    </CommonSheetTrigger>
    <CommonSheetContent side="left" class="pr-0">
      <LayoutHeaderLogo />
      <LayoutAside is-mobile />
    </CommonSheetContent>
  </CommonSheet>
</template>
