<script setup lang="ts">
import { useMagicKeys } from '@vueuse/core'
import { VisuallyHidden } from 'radix-vue'

const open = defineModel<boolean>('open', { default: false })
const colorMode = useColorMode()
const { placeholderDetailed } = useConfig().value.search

const activeSelect = ref(0)

const { Meta_K, Ctrl_K } = useMagicKeys({
  passive: false,
  onEventFired(e: any) {
    if (e.key === 'k' && (e.metaKey || e.ctrlKey))
      e.preventDefault()
  },
})
watch([Meta_K, Ctrl_K], (v) => {
  if (v[0] || v[1])
    open.value = true
})

const input = ref('')
const searchResult = ref()
const searchLoading = ref(false)
watch(
  input,
  async (v) => {
    activeSelect.value = 0
    if (!v)
      return

    searchLoading.value = true
    searchResult.value = (await searchContent(v)).value
    searchLoading.value = false
  },
)

function getHighlightedContent(text: string) {
  return text.replace(input.value, `<span class="font-semibold underline">${input.value}</span>`)
}

const { navKeyFromPath } = useContentHelpers()
const { navigation } = useContent()
function getItemIcon(path: string) {
  return navKeyFromPath(path, 'icon', navigation.value)
}

watch(activeSelect, (value) => {
  document.querySelector(`[id="${value}"]`)?.scrollIntoView({ block: 'nearest' })
})

async function handleEnter() {
  if (searchResult.value[activeSelect.value]?.id) {
    await navigateTo(searchResult.value[activeSelect.value].id)
    open.value = false
  }
}

function handleNavigate(delta: -1 | 1) {
  if (activeSelect.value + delta >= 0 && activeSelect.value + delta < searchResult.value.length)
    activeSelect.value += delta
}
</script>

<template>
  <CommonDialog v-model:open="open">
    <CommonDialogContent class="p-0">
      <VisuallyHidden as-child>
        <CommonDialogTitle />
      </VisuallyHidden>
      <VisuallyHidden as-child>
        <CommonDialogDescription aria-describedby="undefined" />
      </VisuallyHidden>
      <CommonCommand v-model:search-term="input" class="h-svh sm:h-[350px]">
        <CommonCommandInput
          :loading="searchLoading"
          :placeholder="placeholderDetailed"
          @keydown.enter="handleEnter"
          @keydown.down="handleNavigate(1)"
          @keydown.up="handleNavigate(-1)"
        />
        <CommonCommandList class="text-sm" @escape-key-down="open = false">
          <template v-if="!input?.length">
            <template v-for="item in navigation" :key="item._path">
              <CommonCommandGroup v-if="item.children" :heading="item.title" class="p-1.5">
                <NuxtLink v-for="child in item.children" :key="child.id" :to="child._path">
                  <CommonCommandItem :value="child._path">
                    <SmartIcon v-if="child.icon" :name="child.icon" class="mr-2 square-4" />
                    <div v-else class="mr-2 square-4" />
                    <span>{{ child.title }}</span>
                  </CommonCommandItem>
                </NuxtLink>
              </CommonCommandGroup>
              <CommonCommandSeparator v-if="item.children" />
            </template>
            <CommonCommandGroup heading="Theme" class="p-1.5">
              <CommonCommandItem value="light" @click="colorMode.preference = 'light'">
                <Icon name="lucide:sun" class="mr-2 square-4" />
                <span>Light</span>
              </CommonCommandItem>
              <CommonCommandItem value="dark" @click="colorMode.preference = 'dark'">
                <Icon name="lucide:moon" class="mr-2 square-4" />
                <span>Dark</span>
              </CommonCommandItem>
              <CommonCommandItem value="system" @click="colorMode.preference = 'auto'">
                <Icon name="lucide:monitor" class="mr-2 square-4" />
                <span>System</span>
              </CommonCommandItem>
            </CommonCommandGroup>
          </template>

          <div v-else-if="searchResult?.length" class="p-1.5">
            <NuxtLink
              v-for="(item, i) in searchResult"
              :id="i"
              :key="item.id"
              :to="item.id"
              class="flex select-none rounded-md p-2 hover:cursor-pointer hover:bg-muted"
              :class="[i === activeSelect && 'bg-muted']"
              @click="open = false; activeSelect = i;"
            >
              <SmartIcon v-if="getItemIcon(item.id)" :name="getItemIcon(item.id)" class="mr-2 shrink-0 self-center square-4" />
              <div v-else class="mr-2 shrink-0 square-4" />

              <span v-for="(subtitle, j) in item.titles" :key="`${subtitle}${j}`" class="flex shrink-0 self-center">
                {{ subtitle }}
                <Icon name="lucide:chevron-right" class="mx-0.5 self-center text-muted" />
              </span>
              <span class="shrink-0 self-center">
                {{ item.title }}
              </span>
              <span class="ml-2 self-center truncate text-xs text-muted" v-html="getHighlightedContent(item.content)" />
            </NuxtLink>
          </div>

          <div v-else class="pt-4 text-center text-muted">
            No results found.
          </div>
        </CommonCommandList>
      </CommonCommand>
    </CommonDialogContent>
  </CommonDialog>
</template>
