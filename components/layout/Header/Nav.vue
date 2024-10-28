<script setup lang="ts">
import { navigationMenuTriggerStyle } from '~/components/common/navigation-menu'

const { nav } = useConfig().value.header
</script>

<template>
  <CommonNavigationMenu>
    <CommonNavigationMenuList>
      <CommonNavigationMenuItem v-for="(item, i) in nav" :key="i" class="relative">
        <template v-if="item.links">
          <CommonNavigationMenuTrigger class="bg-transparent font-semibold">
            {{ item.title }}
          </CommonNavigationMenuTrigger>
          <CommonNavigationMenuContent>
            <ul class="w-250px p-2">
              <li v-for="link in item.links" :key="link.title">
                <NuxtLink
                  :to="link.to"
                  :target="link.target"
                  class="mb-1 block w-full gap-2 rounded-md hover:bg-muted px-3 py-2 transition-all"
                >
                  <div class="font-semibold">
                    {{ link.title }}
                  </div>
                  <div class="text-sm text-muted">
                    {{ link.description }}
                  </div>
                </NuxtLink>
              </li>
            </ul>
          </CommonNavigationMenuContent>
        </template>
        <NuxtLink v-else :to="item.to" :target="item.target">
          <NIcon name="lucide-arrow-up-right" class="absolute right-2 top-2 text-muted" size="13" />
          <div class="bg-transparent pr-6 font-semibold" :class="navigationMenuTriggerStyle()">
            {{ item.title }}
          </div>
        </NuxtLink>
      </CommonNavigationMenuItem>
    </CommonNavigationMenuList>
  </CommonNavigationMenu>
</template>
