<script setup lang="ts">
const open = ref(false)
const config = useConfig()

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
      <div class="flex items-center">
        <LayoutHeaderLogo />
        <NSeparator v-if="config.header.packageVersionNav.enable" orientation="vertical" class="mr-0 h-5" />
        <LayoutPackageVersionNav v-if="config.header.packageVersionNav.enable" />
      </div>

      <LayoutAside is-mobile />
    </CommonSheetContent>
  </CommonSheet>
</template>
