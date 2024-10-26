<script setup lang="ts">
const { page } = useContent()
const config = useConfig()

useSeoMeta({
  title: page.value?.title ? `${page.value.title} - ${config.value.site.name}` : `${config.value.site.name}`,
  ogTitle: page.value?.title,
  description: page.value?.description,
})
</script>

<template>
  <main class="relative py-6" :class="[config.toc.enable && 'lg:grid lg:grid-cols-[1fr_200px] lg:gap-10 lg:py-8']">
    <div class="mx-auto w-full min-w-0">
      <LayoutBreadcrumb v-if="page?.body && config.main.breadCrumb" class="mb-4" />

      <div v-if="config.main.showTitle" class="space-y-2 mb-6">
        <ProseH1>
          {{ page?.title }}
        </ProseH1>
        <p class="text-lg text-muted">
          {{ page?.description }}
        </p>
      </div>

      <Alert v-if="!page?.body || page?.body?.children?.length === 0" title="Empty Page" icon="lucide:circle-x">
        Start writing in <ProseCodeInline>content/{{ page?._file }}</ProseCodeInline> to see this page taking shape.
      </Alert>

      <ContentRenderer v-else :key="page._id" :value="page" class="docs-content" />

      <LayoutPrevNext />
    </div>
    <div v-if="config.toc.enable" class="hidden text-sm lg:block">
      <div class="sticky h-[calc(100vh-3.5rem)] overflow-hidden top-[90px]">
        <LayoutToc :is-small="false" />
      </div>
    </div>
  </main>
</template>
