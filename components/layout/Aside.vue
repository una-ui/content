<script setup lang="ts">
defineProps<{ isMobile: boolean }>()

const { navDirFromPath } = useContentHelpers()
const { navigation } = useContent()
const config = useConfig()

const tree = computed(() => {
  const route = useRoute()
  const path = route.path.split('/')
  if (config.value.aside.useLevel) {
    const leveledPath = path.splice(0, 2).join('/')

    const dir = navDirFromPath(leveledPath, navigation.value)
    return dir ?? []
  }

  return navigation.value
})

const path = computed(() => useRoute().path)
</script>

<template>
  <CommonScrollArea orientation="vertical" class="relative h-full overflow-y-hidden pb-12 pr-6 pt-6 text-sm md:pb-6" type="hover">
    <LayoutHeaderNavMobile v-if="isMobile" class="mb-5 border-b pb-2" />
    <LayoutSearchButton v-if="config.search.inAside" />
    <ul v-if="config.aside.useLevel" class="mb-1 border-b pb-4">
      <li v-for="link in navigation" :key="link.id">
        <NLink
          :to="link._path" class="mb-1 w-full flex gap-2 rounded-md hover:bg-muted px-3 py-2 transition-all"
          :class="[
            path.startsWith(link._path) && 'bg-muted text-primary hover:bg-muted font-semibold',
          ]"
        >
          <SmartIcon v-if="link.icon" :name="link.icon" class="self-center" />
          {{ link.title }}
        </NLink>
      </li>
    </ul>

    <LayoutAsideTree :links="tree" :level="0" class="px-3" :class="[config.aside.useLevel ? 'pt-4' : 'pt-1']" />

    <div class="absolute inset-x-0 bottom-5 bg-base md:hidden">
      <div class="flex items-center">
        <NButton
          v-for="(link, i) in config.header.links"
          :key="i"
          size="xs"
          btn="ghost-gray"
          class="text-base"
          v-bind="link"
          square
          icon
          :label="link.icon"
        />
      </div>
    </div>
  </CommonScrollArea>
</template>
