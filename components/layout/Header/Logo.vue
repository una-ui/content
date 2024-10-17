<script setup lang="ts">
const { logo, title, showTitle } = useConfig().value.header
</script>

<template>
  <NLink to="/" class="flex items-center">
    <template v-if="logo.light && logo.dark && title">
      <NuxtImg :src="logo.light" class="h-8 dark:hidden" />
      <NuxtImg :src="logo.dark" class="hidden h-8 dark:block" />
      <span v-if="showTitle && title" class="ml-3 self-center font-bold">
        {{ title }}
      </span>
    </template>

    <template v-else>
      <svg square="8" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M262 358C262 305.533 304.533 263 357 263H438.744C446.065 263 452 268.935 452 276.256V439.744C452 447.065 446.065 453 438.744 453H357C304.533 453 262 410.467 262 358Z" style="fill: rgb(var(--una-gray-500))" />
        <path d="M262 143C262 90.533 304.533 48 357 48C409.467 48 452 90.533 452 143V224.744C452 232.065 446.065 238 438.744 238H275.256C267.935 238 262 232.065 262 224.744V143Z" style="fill: rgb(var(--una-primary-600))" />
        <path d="M47 278C47 269.716 53.7157 263 62 263H222C230.284 263 237 269.716 237 278V358C237 410.467 194.467 453 142 453C89.533 453 47 410.467 47 358V278Z" style="fill: rgb(var(--una-gray-700))" />
      </svg>

      <span class="dark:drop-shadow-[0_0_0.1mm_rgb(var(--c-primary)) ml-3 hidden text-base font-bold drop-shadow-lg sm:block">
        Una <span class="text-lg text-primary-active">UI</span>
      </span>
    </template>
  </NLink>
</template>
