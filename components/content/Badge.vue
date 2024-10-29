<script setup lang="ts">
const {
  type = 'default',
  variant = 'default',
  size = 'md',
} = defineProps<{
  type?: 'default' | 'info' | 'warning' | 'success' | 'danger' | 'lime'
  to?: string
  target?: Target
  variant?: 'default' | 'secondary' | 'destructive' | 'outline'
  size?: 'md' | 'sm'
}>()

const typeTwClass = {
  default: '',
  info: `${variant !== 'outline' && 'bg-sky-500 hover:bg-sky-400'} ${variant === 'outline' && 'border-sky-500 text-sky-500'}`,
  warning: `${variant !== 'outline' && 'bg-warning-500 hover:bg-warning-400'} ${variant === 'outline' && 'border-warning-500 text-warning-500'}`,
  success: `${variant !== 'outline' && 'bg-success-500 hover:bg-success-400'} ${variant === 'outline' && 'border-success-500 text-success-500'}`,
  danger: `${variant !== 'outline' && 'bg-error-500 hover:bg-error-400'} ${variant === 'outline' && 'border-error-500 text-error-500'}`,
  lime: `${variant !== 'outline' && 'bg-[#adfa1d] hover:bg-[#adfa1d] text-black'} ${variant === 'outline' && 'border-[#adfa1d] text-black'}`,
}
</script>

<template>
  <NuxtLink v-if="to" :to :target class="mx-0.5">
    <CommonBadge
      :variant
      :class="[
        typeTwClass[type],
        size === 'sm' && 'rounded-md px-1.5 py-0.5 text-xs font-normal leading-none',
      ]"
    >
      <ContentSlot unwrap="p" />
    </CommonBadge>
  </NuxtLink>

  <span v-else class="mx-0.5">
    <CommonBadge
      :variant
      :class="[
        typeTwClass[type],
        size === 'sm' && 'rounded-md px-1.5 py-0.5 text-xs font-normal leading-none',
      ]"
    >
      <ContentSlot unwrap="p" />
    </CommonBadge>
  </span>
</template>
