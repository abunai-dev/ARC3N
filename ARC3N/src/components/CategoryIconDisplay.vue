<template>
  <span :class="categoryOptions[category][option].icon ?? 'icon-notdef'"></span>
</template>

<script setup lang="ts">
import type { CategoryList } from '@/model/categories/Category'
import { type CategoryOptionList, categoryOptions } from '@/model/categories/options/CategoryOption'
import type { PropType } from 'vue'

defineProps({
  category: {
    type: String as PropType<CategoryList>,
    required: true
  },
  option: {
    type: String as PropType<CategoryOptionList>,
    required: true
  }
})
</script>
