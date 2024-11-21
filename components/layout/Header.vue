<script setup lang="ts">
const config = useConfig()
</script>

<template>
  <header
    class="sticky top-0 z-40 bg-background/80 backdrop-blur-lg"
    :class="{ 'lg:border-b': config.header.border }"
  >
    <div
      class="h-14 flex items-center justify-between gap-2 px-4 md:px-8"
      :class="{ 'border-b lg:border-none': config.header.border, 'container max-w-screen-2xl': config.main.padded }"
    >
      <div class="flex flex-1 items-center">
        <LayoutHeaderLogo class="hidden md:flex" />
        <LayoutMobileNav />
        <LayoutHeaderLogo v-if="config.header.showTitleInMobile" class="flex md:hidden" />
        <NSeparator v-if="config.header.packageVersionNav.enable" orientation="vertical" class="mr-0 hidden h-5 md:flex" />
        <LayoutPackageVersionNav v-if="config.header.packageVersionNav.enable" class="hidden md:flex" />
      </div>

      <LayoutHeaderNav class="hidden flex-1 lg:flex" />

      <div class="flex flex-1 justify-end gap-2">
        <LayoutSearchButton v-if="!config.search.inAside" />
        <div class="inline-flex gap-1">
          <NButton
            v-for="(link, i) in config.header.links"
            :key="i"
            btn="ghost-gray"
            class="hidden text-base md:flex"
            v-bind="link"
            square
            icon
            :label="link.icon"
          />
          <DarkModeToggle v-if="config.header.darkModeToggle" />
          <NThemeSwitcher v-if="config.theme.customizable" />
        </div>
      </div>
    </div>
    <div v-if="config.toc.enable && config.toc.enableInMobile" class="lg:hidden">
      <LayoutToc is-small />
    </div>
  </header>
</template>
