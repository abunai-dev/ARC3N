<template>
  <div class="flex min-h-[24px] flex-col">
    <div
      v-for="option in categories[category].options"
      :key="option"
      class="group flex flex-grow items-center space-x-2 bg-primary-200 pl-3 first:rounded-t-lg last:rounded-b-lg dark:bg-primary-800"
      :class="{
        '!bg-primary-300 dark:!bg-primary-600': option == selectedOption
      }"
    >
      <CategoryIconDisplay :option="option" />
      <p class="cursor-default">
        {{ categoryOptions[option].name }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type CategoryList, categories } from '@/model/categories/Category'
import { type CategoryOptionList, categoryOptions } from '@/model/categories/options/CategoryOption'
import type { PropType } from 'vue'
import CategoryIconDisplay from './CategoryIconDisplay.vue'

defineProps({
  category: {
    type: String as PropType<CategoryList>,
    required: true
  },
  selectedOption: {
    type: String as PropType<CategoryOptionList>,
    required: false
  }
})
</script>
