<script setup lang="ts">
const props = defineProps<{ id?: string }>()

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => props.id && headings?.anchorLinks?.h3)
</script>

<template>
  <h3 :id="id" class="font-semibold scroll-m-20 tracking-tight [&:not(:first-child)]:mt-8 text-2xl">
    <NuxtLink
      v-if="id && generate"
      :href="`#${id}`"
    >
      <slot />
    </NuxtLink>
    <slot v-else />
  </h3>
</template>
