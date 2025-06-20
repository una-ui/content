<script setup lang="ts">
const isOpen = ref(false)
const { enable, inAside, style, placeholder } = useConfig().value.search
</script>

<template>
  <template v-if="enable">
    <NButton
      v-if="style === 'input'"
      btn="outline-gray"
      class="h-8 w-full p-2"
      :class="[inAside ? 'mb-4' : 'md:w-40 lg:w-64']"
      @click="isOpen = true"
    >
      <span class="mr-auto overflow-hidden text-muted-foreground font-light">
        {{ placeholder }}
      </span>
      <NKbd kbd="soft">
        ⌘ K
      </NKbd>
    </NButton>
    <NButton
      v-else
      btn="ghost-gray"
      icon
      label="i-lucide-search"
      @click="isOpen = true"
    />
  </template>

  <LayoutSearchDialog v-model:open="isOpen" />
</template>
