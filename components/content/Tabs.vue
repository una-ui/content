<script setup lang="ts">
import ScrollBar from '../common/scroll-area/ScrollBar.vue'

withDefaults(defineProps<{
  variant?: 'separate' | 'card'
  padded?: boolean
}>(), {
  variant: 'separate',
  padded: true,
})

const activeTabIndex = ref(0)

const iconMap = new Map(Object.entries(useConfig().value.main.codeIcon))
function icon(props: any) {
  return props?.icon || iconMap.get(props?.filename?.toLowerCase()) || iconMap.get(props?.language)
}

function label(props: any) {
  return props?.label || props?.filename
}
</script>

<template>
  <CommonTabs
    v-if="variant === 'separate'"
    class="[&:not(:first-child)]:mt-5"
    :default-value="label(($slots.default?.() ?? [])[0]?.props)"
  >
    <CommonTabsList>
      <CommonTabsTrigger
        v-for="(slot, i) in $slots.default?.() ?? []"
        :key="`${i}${label(slot.props)}`"
        :value="label(slot.props)"
      >
        <SmartIcon
          v-if="icon(slot?.props)"
          :name="icon(slot?.props)!"
          class="mr-1.5 self-center"
        />
        {{ label(slot.props) }}
      </CommonTabsTrigger>
    </CommonTabsList>

    <CommonTabsContent
      v-for="(slot, i) in $slots.default?.() ?? []"
      :key="`${i}${label(slot.props)}`"
      :value="label(slot.props)"
    >
      <component :is="slot" />
    </CommonTabsContent>
  </CommonTabs>

  <CommonCard v-else-if="variant === 'card'" class="[&:not(:first-child)]:mt-5">
    <CommonScrollArea>
      <div class="relative flex overflow-x-auto border-b p-0.5 text-sm">
        <div class="flex p-1">
          <div
            v-for="(slot, i) in ($slots.default?.() ?? [])"
            :key="`${i}${label(slot.props)}`"
            :value="label(slot.props)"
            class="flex cursor-pointer rounded-md px-3 py-1.5 text-muted-foreground transition-all duration-75"
            :class="[activeTabIndex === i && 'bg-muted text-primary']"
            @mousedown.left="activeTabIndex = i"
          >
            <SmartIcon
              v-if="icon(slot?.props)"
              :name="icon(slot?.props)!"
              class="mr-1.5 self-center"
            />
            {{ label(slot.props) }}
          </div>
        </div>
        <CodeCopy
          v-if="$slots.default?.()[activeTabIndex]?.props?.code"
          class="ml-auto mr-3 self-center pl-2"
          :code="$slots.default?.()[activeTabIndex]?.props?.code"
        />
      </div>
      <ScrollBar orientation="horizontal" />
    </CommonScrollArea>

    <div
      v-for="(slot, i) in $slots.default?.() ?? []"
      v-show="activeTabIndex === i"
      :key="`${i}${label(slot.props)}`"
      :value="label(slot.props)"
      class="mt-0"
      :class="[padded && ($slots.default?.()[activeTabIndex]?.type as any).tag !== 'pre' && 'p-3']"
    >
      <component :is="slot" :in-group="true" />
    </div>
  </CommonCard>
</template>
