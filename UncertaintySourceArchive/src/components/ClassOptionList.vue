<template>
  <div class="flex min-h-[24px]" :class="{ 'flex-col': listOrientation == 'vertical' }">
    <div
      v-for="option in categories[category].options"
      :key="option"
      class="group flex flex-grow items-center space-x-2 bg-primary-50 duration-0 dark:bg-primary-950"
      :class="{
        '!bg-primary-300 dark:!bg-primary-700': option == selectedOption,
        'hover:bg-primary-200 dark:hover:bg-primary-800':
          option != selectedOption && listOrientation == 'horizontal',
        'justify-center first:rounded-l-full last:rounded-r-full': listOrientation == 'horizontal',
        '!bg-primary-100 pl-3 first:rounded-t-lg last:rounded-b-lg dark:!bg-primary-900':
          listOrientation == 'vertical'
      }"
    >
      <CategoryIconDisplay :option="option" />
      <p
        class="hidden cursor-default group-hover:flex"
        :class="{ '!flex': selectedOption == option || listOrientation == 'vertical' }"
      >
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
  },
  listOrientation: {
    type: String as PropType<'horizontal' | 'vertical'>,
    required: false,
    default: 'horizontal'
  }
})
</script>
