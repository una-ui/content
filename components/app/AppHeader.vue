<script lang="ts" setup>
const { header } = useAppConfig().una.content
const { currentRoute } = useRouter()
</script>

<template>
  <header
    content="header"
    :class="{
      'border-b': currentRoute.meta.layout !== 'page',
    }"
  >
    <nav
      content="container"
      class="flex items-center justify-between gap-x-3 py-4"
    >
      <div class="flex items-center gap-x-12 lg:flex-1">
        <NLink to="/" class="flex items-center p-1.5 -m-1.5">
          <AppLogo v-if="header?.logo" class="h-9 w-auto" />
          <span v-if="header?.title" class="ml-3 text-lg font-bold">{{ header.title }}</span>
        </NLink>

        <NButton
          label="Search"
          btn="soft-gray"
          leading="i-heroicons-magnifying-glass"
          class="hidden rounded-lg px-4 py-2 font-light lg:block"
          :una="{
            btnLabel: 'pr-10 pl-3',
          }"
        >
          <template #trailing>
            <span class="inline-flex items-center space-x-0.5" size="md">
              <NKbd label="⌘ K" />
            </span>
          </template>
        </NButton>
      </div>
      <div class="flex items-center justify-end gap-x-3 lg:flex-1">
        <AppHeaderNavigation />

        <div class="mx-1.5 hidden h-7 border-r-0.5 border-gray/20 lg:flex" />

        <AppSocialIcons class="hidden items-center lg:flex" />
        <NButton
          icon
          btn="text-gray square"
          class="block opacity-70 lg:hidden hover:opacity-100"
          label="i-heroicons-magnifying-glass-20-solid"
          aria-label="Toggle search"
        />

        <ColorMode class="-ml-1.5" />
        <NThemeSwitcher class="!ml-0" />
        <NButton
          icon
          label="i-heroicons-bars-3-20-solid"
          class="lg:hidden" btn="ghost-gray square"
          aria-label="Toggle menu"
        />
      </div>
    </nav>
  </header>
</template>
