<script setup lang="ts">
const config = useConfig()
</script>

<template>
  <header
    class="bg-$c-base/80 sticky top-0 z-40 backdrop-blur-lg"
    :class="{ 'lg:border-b': config.header.border }"
  >
    <div
      class="flex items-center justify-between px-4 md:px-8 gap-2 h-14"
      :class="{ 'border-b lg:border-none': config.header.border, 'container max-w-screen-2xl': config.main.padded }"
    >
      <LayoutHeaderLogo class="hidden flex-1 md:flex" />
      <LayoutMobileNav />
      <LayoutHeaderLogo v-if="config.header.showTitleInMobile" class="flex md:hidden" />
      <LayoutHeaderNav class="hidden flex-1 lg:flex" />
      <div class="flex flex-1 gap-2 justify-end">
        <LayoutSearchButton v-if="!config.search.inAside" />
        <div class="inline-flex gap-1">
          <NButton
            v-for="(link, i) in config.header.links"
            :key="i"
            btn="ghost-gray"
            class="text-base"
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
