<template>
  <i
    class="fa-solid"
    :class="categoryOptions[option].icon ?? 'fa-notdef'"
    :style="{ color: categoryOptions[option].color?.[500] ?? 'black' }"
  ></i>
</template>

<script setup lang="ts">
import { type CategoryOptionList, categoryOptions } from '@/model/categories/options/CategoryOption'
import type { PropType } from 'vue'

defineProps({
  option: {
    type: String as PropType<CategoryOptionList>,
    required: true
  }
})
</script>
