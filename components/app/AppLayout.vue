<template>
  <div class="relative min-h-screen">
    <AppHeader />

    <main>
      <slot />
    </main>

    <!-- should have dynamic height -->
    <AppFooter />
  </div>
</template>
