<template>
  <div class="flex min-h-[24px] flex-col">
    <ToolTip
      v-for="[index, option] in categories[category].options.entries()"
      :key="index"
      class="group flex flex-grow items-center space-x-2 bg-primary-200 pl-3 first:rounded-t-lg last:rounded-b-lg dark:bg-primary-800"
      :class="{
        '!bg-primary-300 dark:!bg-primary-600': option == selectedOption
      }"
      :direction="index >= categories[category].options.length / 2 ? 'top' : 'bottom'"
    >
      <template #default>
        <CategoryIconDisplay :category="category" :option="option" />
        <p class="cursor-default">
          {{ categoryOptions[category][option].name }}
        </p>
      </template>

      <template #tooltip>
        <p class="min-w-[300px] max-w-full whitespace-pre-wrap">
          {{ categoryOptions[category][option].description }}
        </p>
      </template>
    </ToolTip>
  </div>
</template>

<script setup lang="ts">
import { type CategoryList, categories } from '@/model/categories/Category'
import { type CategoryOptionList, categoryOptions } from '@/model/categories/options/CategoryOption'
import type { PropType } from 'vue'
import CategoryIconDisplay from './CategoryIconDisplay.vue'
import ToolTip from './ToolTip.vue'

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
