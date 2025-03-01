<script setup lang="ts">
const route = useRoute()

const breadcrumbs = computed(() => useBreadcrumb(route.path))
</script>

<template>
  <CommonBreadcrumb>
    <CommonBreadcrumbList>
      <template v-for="(breadcrumb, index) in breadcrumbs" :key="breadcrumb.title">
        <CommonBreadcrumbItem>
          <NLink
            :to="index === 0 ? undefined : breadcrumb.href"
            class="transition-colors hover:text-foreground"
            :class="{ 'text-foreground': index === breadcrumbs.length - 1 }"
          >
            {{ breadcrumb.title }}
          </NLink>
        </CommonBreadcrumbItem>
        <CommonBreadcrumbSeparator v-if="index !== breadcrumbs.length - 1" />
      </template>
    </CommonBreadcrumbList>
  </CommonBreadcrumb>
</template>
