<script setup lang="ts">
const route = useRoute()

const breadcrumbs = computed(() => useBreadcrumb(route.path))
</script>

<template>
  <CommonBreadcrumb>
    <CommonBreadcrumbList>
      <template v-for="(breadcrumb, index) in breadcrumbs" :key="breadcrumb.title">
        <CommonBreadcrumbItem>
          <CommonBreadcrumbLink
            :href="index === 0 ? undefined : breadcrumb.href"
            :class="{ 'text-base': index === breadcrumbs.length - 1 }"
          >
            {{ breadcrumb.title }}
          </CommonBreadcrumbLink>
        </CommonBreadcrumbItem>
        <CommonBreadcrumbSeparator v-if="index !== breadcrumbs.length - 1" />
      </template>
    </CommonBreadcrumbList>
  </CommonBreadcrumb>
</template>
