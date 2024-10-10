<script setup lang="ts">
const config = useConfig()
</script>

<template>
  <header
    class="sticky top-0 z-40 bg-background/80 backdrop-blur-lg"
    :class="{ 'lg:border-b': config.header.border }"
  >
    <div
      class="flex items-center justify-between gap-2 px-4 md:px-8 h-14"
      :class="{ 'border-b lg:border-none': config.header.border, 'container max-w-screen-2xl': config.main.padded }"
    >
      <LayoutHeaderLogo class="hidden flex-1 md:flex" />
      <LayoutMobileNav />
      <LayoutHeaderLogo v-if="config.header.showTitleInMobile" class="flex md:hidden" />
      <LayoutHeaderNav class="hidden flex-1 lg:flex" />
      <div class="flex flex-1 gap-1 justify-end">
        <LayoutSearchButton v-if="!config.search.inAside && config.search.style === 'input'" />
        <div class="flex space-x-1">
          <LayoutSearchButton v-if="!config.search.inAside && config.search.style === 'button'" />
          <NButton
            v-for="(link, i) in config.header.links"
            :key="i"
            :to="link?.to"
            :target="link?.target"
            btn="ghost-gray"
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
