<script setup lang="ts">
import { useToast } from '~/components/common/toast/use-toast'

const props = defineProps<{
  code: string
}>()

const { toast } = useToast()

const { copy } = useClipboard({ source: props.code })
const copied = ref(false)

async function handleClick() {
  await copy(props.code)
  copied.value = true

  if (useConfig().value.main.codeCopyToast) {
    toast({
      description: useConfig().value.main.codeCopyToastText,
    })
  }
}

const checkIconRef = ref<HTMLElement>()
onClickOutside(checkIconRef, () => {
  copied.value = false
})
</script>

<template>
  <div class="flex">
    <Transition name="fade" mode="out-in">
      <Icon
        v-if="copied === false"
        name="lucide:copy"
        class="block cursor-pointer self-center text-muted-foreground hover:text-primary"
        @click="handleClick"
      />
      <Icon
        v-else
        ref="checkIconRef"
        name="lucide:check"
        class="block cursor-pointer self-center text-muted-foreground hover:text-primary"
      />
    </Transition>
  </div>
</template>
