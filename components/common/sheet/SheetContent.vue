<script setup lang="ts">
import { cn } from '@/lib/utils'
import {
  DialogClose,
  DialogContent,
  type DialogContentEmits,
  type DialogContentProps,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  useForwardPropsEmits,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'
import { type SheetVariants, sheetVariants } from '.'

interface SheetContentProps extends DialogContentProps {
  class?: HTMLAttributes['class']
  side?: SheetVariants['side']
}

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<SheetContentProps>()

const emits = defineEmits<DialogContentEmits>()

const delegatedProps = computed(() => {
  const { class: _, side, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <DialogPortal>
    <DialogOverlay
      class="fixed inset-0 z-50 data-[state=closed]:animate-out data-[state=open]:animate-in bg-black/80 data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0"
    />
    <DialogContent
      :class="cn(sheetVariants({ side }), props.class)"
      v-bind="{ ...forwarded, ...$attrs }"
    >
      <DialogTitle class="sr-only">
        Title
      </DialogTitle>
      <DialogDescription class="sr-only">
        Description
      </DialogDescription>

      <slot />

      <DialogClose
        class="absolute bottom-5 right-4 rounded-sm bg-base opacity-70 focus:ring-base ring-offset-base transition-opacity disabled:pointer-events-none hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2"
      >
        <Icon name="lucide:x" class="block size-4" />
      </DialogClose>
    </DialogContent>
  </DialogPortal>
</template>
