<script setup lang="ts">
defineProps<{
  title?: string
  description?: string
  footer?: string
  content?: string
  to?: string
  target?: string
  icon?: string
}>()
</script>

<template>
  <div class="[&:not(:first-child)]:mt-5 group-has-[div]:mt-0">
    <NuxtLink :to="to" :target="target">
      <CommonCard class="transition-all relative h-full" :class="[to && 'hover:bg-muted']">
        <CommonCardHeader v-if="icon || title || $slots.title || description || $slots.description">
          <SmartIcon v-if="icon" class="mb-2" :name="icon" :size="24" />
          <CommonCardTitle v-if="title || $slots.title">
            <ContentSlot :use="$slots.title" unwrap="p" />
            {{ title }}
          </CommonCardTitle>
          <CommonCardDescription v-if="description || $slots.description">
            <ContentSlot :use="$slots.description" unwrap="p" />
            {{ description }}
          </CommonCardDescription>
        </CommonCardHeader>
        <CommonCardContent v-if="content || $slots.content || $slots.default">
          <ContentSlot :use="$slots.content" unwrap="p" />
          <ContentSlot unwrap="p" />
        </CommonCardContent>
        <CommonCardFooter v-if="footer || $slots.footer">
          <ContentSlot :use="$slots.footer" unwrap="p" />
          {{ footer }}
        </CommonCardFooter>
        <SmartIcon v-if="to" name="lucide:arrow-up-right" class="absolute right-4 top-4" />
      </CommonCard>
    </NuxtLink>
  </div>
</template>
