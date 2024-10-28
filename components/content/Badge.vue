<script setup lang="ts">
const props = withDefaults(defineProps<{
  type?: 'default' | 'info' | 'warning' | 'success' | 'error'
  to?: string
  target?: string
  variant?: 'default' | 'secondary' | 'destructive' | 'outline'
}>(), {
  type: 'default',
  variant: 'default',
})

const typeTwClass = {
  default: '',
  info: `${props.variant !== 'outline' && 'bg-info-500 hover:bg-info-400'} ${props.variant === 'outline' && 'border-info-500 text-info-500'}`,
  warning: `${props.variant !== 'outline' && 'bg-warning-500 hover:bg-warning-400'} ${props.variant === 'outline' && 'border-warning-500 text-warning-500'}`,
  success: `${props.variant !== 'outline' && 'bg-success-500 hover:bg-success-400'} ${props.variant === 'outline' && 'border-success-500 text-success-500'}`,
  error: `${props.variant !== 'outline' && 'bg-error-500 hover:bg-error-400'} ${props.variant === 'outline' && 'border-error-500 text-error-500'}`,
}
</script>

<template>
  <NuxtLink :to="to" :target="target" class="mx-0.5">
    <CommonBadge :variant="variant" :class="typeTwClass[type]">
      <ContentSlot unwrap="p" />
    </CommonBadge>
  </NuxtLink>
</template>
