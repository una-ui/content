<script setup lang="ts">
const props = defineProps<{
  item: any
  index: number
}>()

const collapsed = useCollapsedMap()
const isOpen = ref(collapsed.value.get(`mobile-header-nav${props.index}`) || false)
watch(isOpen, (v) => {
  collapsed.value.set(`mobile-header-nav${props.index}`, v)
})
</script>

<template>
  <template v-if="item.links">
    <NCollapsible v-model:open="isOpen">
      <NCollapsibleTrigger class="w-full bg-transparent p-2 text-left">
        <div class="w-full flex gap-1">
          {{ item.title }}
          <Icon
            :name="isOpen ? 'lucide:chevrons-down-up' : 'lucide:chevrons-up-down'"
            size="12"
            class="ml-auto self-center"
          />
        </div>
      </NCollapsibleTrigger>
      <NCollapsibleContent>
        <ul class="pl-2">
          <li v-for="link in item.links" :key="link.title">
            <NuxtLink
              :to="link.to"
              :target="link.to"
              class="mb-1 block w-full gap-2 rounded-md px-3 py-2 transition-all hover:bg-muted"
            >
              <div class="font-semibold">
                {{ link.title }}
              </div>
              <div class="text-sm text-muted-foreground">
                {{ link.description }}
              </div>
            </NuxtLink>
          </li>
        </ul>
      </NCollapsibleContent>
    </NCollapsible>
  </template>
  <NuxtLink v-else :to="item.to" :target="item.target" class="w-full flex p-2">
    {{ item.title }}
    <Icon name="lucide:arrow-up-right" class="ml-1 text-muted-foreground" size="12" />
  </NuxtLink>
</template>
