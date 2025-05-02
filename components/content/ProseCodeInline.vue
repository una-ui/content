<template>
  <code class="inline-code relative rounded-md bg-gray-500/10 px-[0.3rem] py-[0.2rem] font-mono dark:bg-black/20">
    <slot />
  </code>
</template>

<style lang="postcss">
table .inline-code {
  @apply text-primary bg-gray-500/10 dark:bg-gray-700/20;
}
</style>

<style scoped>
.inline-code:not(
    h1 > code,
    h1 > a > code,
    h2 > a > code,
    h3 > a > code,
    h4 > a > code,
    h5 > a > code,
    strong > a > code
  ) {
  /* text-sm */
  font-size: 0.875rem;
  line-height: 1.25rem;
}
</style>
