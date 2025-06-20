<script setup lang="ts">
import { navigationMenuTriggerStyle } from '~/components/common/navigation-menu'

const { nav } = useConfig().value.header
</script>

<template>
  <CommonNavigationMenu>
    <CommonNavigationMenuList>
      <CommonNavigationMenuItem v-for="(item, i) in nav" :key="i" class="relative">
        <template v-if="item.links">
          <CommonNavigationMenuTrigger class="h-8 bg-transparent font-semibold">
            {{ item.title }}
          </CommonNavigationMenuTrigger>
          <CommonNavigationMenuContent>
            <ul class="w-250px p-2">
              <li v-for="link in item.links" :key="link.title">
                <NuxtLink
                  :to="link.to"
                  :target="link.target"
                  class="mb-1 block w-full gap-2 rounded-md px-3 py-2 transition-all hover:bg-muted"
                >
                  <div class="font-semibold">
                    {{ link.title }}
                  </div>
                  <div class="text-muted-foreground text-sm">
                    {{ link.description }}
                  </div>
                </NuxtLink>
              </li>
            </ul>
          </CommonNavigationMenuContent>
        </template>
        <NuxtLink v-else :to="item.to" :target="item.target">
          <NIcon name="lucide-arrow-up-right" class="text-muted-foreground absolute right-2 top-2" size="13" />
          <div class="bg-transparent pr-6 font-semibold" :class="navigationMenuTriggerStyle()">
            {{ item.title }}
          </div>
        </NuxtLink>
      </CommonNavigationMenuItem>
    </CommonNavigationMenuList>
  </CommonNavigationMenu>
</template>
