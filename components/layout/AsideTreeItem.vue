<script setup lang="ts">
import type { NavItem } from '@nuxt/content'

const { link, level } = defineProps<{
  link: NavItem
  level: number
}>()

const { collapse, folderStyle: defaultFolderStyle } = useConfig().value.aside

const collapsed = useCollapsedMap()
const isOpen = ref(collapsed.value.get(link._path) || (level < 1 && !collapse))
watch(isOpen, (v) => {
  collapsed.value.set(link._path, v)
})
const isActive = computed(() => link._path === useRoute().path)

const folderStyle = computed(() => link.sidebar?.style ?? defaultFolderStyle)
</script>

<template>
  <li>
    <div v-if="link.children">
      <template v-if="folderStyle === 'group'">
        <div class="mt-2 h-8 flex items-center gap-2 rounded-md px-2 text-xs text-$c-foreground/70 font-semibold outline-none">
          <SmartIcon
            v-if="link.icon"
            :name="link.icon"
          />
          {{ link.title }}
          <span v-for="(badge, i) in link.navBadges" :key="i">
            <Badge :variant="badge.variant" :type="badge.type" :size="badge.size ?? 'sm'">
              {{ badge.value }}
            </Badge>
          </span>
        </div>
        <LayoutAsideTree :links="link.children" :level="level" />
      </template>
      <template v-else>
        <button
          class="h-8 w-full flex cursor-pointer items-center gap-2 rounded-md bg-transparent hover:bg-muted p-2 text-left text-sm text-$c-foreground/80 font-medium hover:text-primary"
          @click="isOpen = !isOpen"
        >
          <SmartIcon
            v-if="folderStyle === 'tree'"
            name="lucide:chevron-down"
            class="transition-transform"
            :class="[!isOpen && '-rotate-90']"
          />

          <SmartIcon
            v-if="link.icon"
            :name="link.icon"
          />

          <span class="truncate text-nowrap">
            {{ link.title }}
          </span>

          <span v-for="(badge, i) in link.navBadges" :key="i">
            <Badge :variant="badge.variant" :type="badge.type" :size="badge.size ?? 'sm'">
              {{ badge.value }}
            </Badge>
          </span>

          <SmartIcon
            v-if="folderStyle === 'default'"
            name="lucide:chevron-down"
            class="ml-auto transition-transform"
            :class="[!isOpen && '-rotate-90']"
          />
        </button>
        <div v-show="isOpen">
          <LayoutAsideTree :links="link.children" :level="level + 1" />
        </div>
      </template>
    </div>
    <NuxtLink
      v-else
      :to="link._path"
      class="h-8 flex items-center gap-2 rounded-md hover:bg-muted p-2 text-sm text-$c-foreground/80 hover:text-primary"
      :class="[isActive && 'bg-muted !text-primary']"
    >
      <SmartIcon
        v-if="link.icon"
        :name="link.icon"
      />
      <span class="truncate text-nowrap">
        {{ link.title }}
      </span>
      <span v-for="(badge, i) in link.navBadges" :key="i">
        <Badge :variant="badge.variant" :type="badge.type" :size="badge.size ?? 'sm'">
          {{ badge.value }}
        </Badge>
      </span>
    </NuxtLink>
  </li>
</template>
