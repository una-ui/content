<script setup lang="ts">
const props = withDefaults(defineProps<{
  title?: string
  icon?: string
  type?: 'default' | 'info' | 'warning' | 'success' | 'error'
  to?: string
  target?: string
  external?: boolean
}>(), {
  type: 'default',
  external: undefined,
})

const typeTwClass = {
  default: '',
  info: 'border-sky-600/50 text-sky-600 [&>svg]:text-sky-600 bg-sky-600/10',
  warning: 'border-warning-600/50 text-warning-600 [&>svg]:text-warning-600 bg-warning-600/10',
  success: 'border-success-600/50 text-success-600 [&>svg]:text-success-600 bg-success-600/10',
  error: 'border-error-600/50 text-error-600 [&>svg]:text-error-600 bg-error-600/10',
}

async function alertClick() {
  if (props.to) {
    if (props.target) {
      await navigateTo(props.to, {
        external: props.external ?? props.to.startsWith('http'),
        open: { target: props.target },
      })
    }
    else {
      await navigateTo(props.to, {
        external: props.external ?? props.to.startsWith('http'),
      })
    }
  }
}
</script>

<template>
  <CommonAlert
    class="transition-all [&:not(:first-child)]:mt-5"
    :class="[typeTwClass[type], to && 'cursor-pointer hover:bg-muted/50']"
    @click="alertClick"
  >
    <SmartIcon v-if="icon && title" :name="icon" :size="16" />
    <CommonAlertTitle v-if="title" class="font-semibold">
      {{ title }}
    </CommonAlertTitle>
    <CommonAlertDescription>
      <div class="flex flex-row space-x-2">
        <SmartIcon v-if="icon && !title" :name="icon" :size="16" class="mb-[2px] min-w-5 self-center" />
        <span :class="[to && 'pr-3']">
          <slot />
        </span>
      </div>
      <SmartIcon v-if="to" name="lucide:arrow-up-right" class="absolute right-4 top-4" />
    </CommonAlertDescription>
  </CommonAlert>
</template>
