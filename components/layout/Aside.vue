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
  <CommonScrollArea
    orientation="vertical"
    :class="{
      'lg:border-r': config.aside.border,
      'border-dashed': config.theme.border === 'dashed',
    }"
    class="relative h-full overflow-hidden pb-12 pr-6 pt-6 text-sm md:pr-4"
    type="hover"
  >
    <LayoutHeaderNavMobile v-if="isMobile" class="mb-5 border-b pb-2" />
    <LayoutSearchButton v-if="config.search.inAside" />
    <ul v-if="config.aside.useLevel" class="flex flex-col gap-1 border-b pb-4">
      <li v-for="link in navigation" :key="link.id">
        <NuxtLink
          :to="link._path"
          class="h-8 flex items-center gap-2 rounded-md p-2 text-sm text-foreground/80 hover:bg-muted hover:text-primary"
          :class="[
            path.startsWith(link._path) && 'bg-muted !text-primary',
          ]"
        >
          <SmartIcon
            v-if="link.icon"
            :name="link.icon"
            class="self-center"
            :size="16"
          />
          {{ link.title }}

          <span v-for="(badge, i) in link.navBadges" :key="i">
            <Badge :variant="badge.variant" :type="badge.type" :size="badge.size ?? 'sm'">
              {{ badge.value }}
            </Badge>
          </span>
        </NuxtLink>
      </li>
    </ul>
    <LayoutAsideTree
      :links="tree"
      :level="0"
      :class="[config.aside.useLevel ? 'pt-4' : 'pt-1']"
    />

    <div class="absolute inset-x-0 bottom-5 bg-background md:hidden">
      <div class="flex items-center">
        <NButton
          v-for="(link, i) in config.header.links"
          :key="i"
          size="xs"
          btn="ghost-gray"
          class="text-foreground"
          v-bind="link"
          square
          icon
          :label="link.icon"
        />
      </div>
    </div>
  </CommonScrollArea>
</template>
