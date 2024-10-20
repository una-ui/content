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
  <UiScrollArea orientation="vertical" class="relative h-full overflow-hidden text-sm py-6 pr-6" type="hover">
    <LayoutHeaderNavMobile v-if="isMobile" class="border-b pb-2 mb-5" />
    <LayoutSearchButton v-if="config.search.inAside" />
    <ul v-if="config.aside.useLevel" class="border-b mb-1 pb-4">
      <li v-for="link in navigation" :key="link.id">
        <NLink
          :to="link._path" class="mb-1 w-full flex gap-2 rounded-md py-2 transition-all hover:bg-muted px-3"
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
  </UiScrollArea>
</template>
