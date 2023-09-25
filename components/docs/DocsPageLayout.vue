<script setup lang="ts">

</script>

<template>
  <div content="container docs-page-layout">
    <!-- left sidebar -->
    <div class="hidden lg:col-span-1 lg:block">
      <div class="sticky top-30 space-y-4">
        <DocsAside />
      </div>
    </div>

    <article class="col-span-5 prose lg:col-span-3">
      <slot />
    </article>

    <!-- right sidebar -->
    <aside class="hidden lg:col-span-1 lg:block">
      <div class="sticky top-30 space-y-4">
        <DocsToc />
      </div>
    </aside>
  </div>
</template>
