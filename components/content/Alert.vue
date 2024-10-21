<script setup lang="ts">
const props = withDefaults(defineProps<{
  title?: string
  icon?: string
  type?: 'default' | 'info' | 'warning' | 'success' | 'danger'
  to?: string
  target?: string
  external?: boolean
}>(), {
  type: 'default',
  external: undefined,
})

const typeTwClass = {
  default: '',
  info: 'border-info-600 text-info-600 [&>svg]:text-info-600',
  warning: 'border-warning-600 text-warning-600 [&>svg]:text-warning-600',
  success: 'border-success-600 text-success-600 [&>svg]:text-success-600',
  danger: 'border-error-600 text-error-600 [&>svg]:text-error-600',
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
  <UiAlert
    class="[&:not(:first-child)]:mt-5 transition-all"
    :class="[typeTwClass[type], to && 'cursor-pointer hover:bg-muted/50']"
    @click="alertClick"
  >
    <SmartIcon v-if="icon && title" :name="icon" :size="16" />
    <UiAlertTitle v-if="title" class="font-semibold">
      {{ title }}
    </UiAlertTitle>
    <UiAlertDescription>
      <div class="flex flex-row space-x-2">
        <SmartIcon v-if="icon && !title" :name="icon" :size="16" class="mb-[2px] min-w-5 self-center" />
        <span :class="[to && 'pr-3']">
          <slot />
        </span>
      </div>
      <SmartIcon v-if="to" name="lucide:arrow-up-right" class="absolute right-4 top-4" />
    </UiAlertDescription>
  </UiAlert>
</template>
