<template>
  <div class="flex">
    <div
      v-for="option in categories[category].options"
      :key="option"
      class="group flex flex-grow items-center justify-center space-x-2 bg-primary-50 duration-0 first:rounded-l-full last:rounded-r-full dark:bg-primary-950"
      :class="{
        '!bg-primary-300 dark:!bg-primary-700': option == selectedOption,
        'hover:bg-primary-200 dark:hover:bg-primary-800': option != selectedOption
      }"
    >
      <i class="fa-solid" :class="categoryOptions[option].icon ?? 'fa-notdef'"></i>
      <p
        class="hidden cursor-default group-hover:flex"
        :class="{ '!flex': selectedOption == option }"
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

defineProps({
  category: {
    type: String as PropType<CategoryList>,
    required: true
  },
  selectedOption: {
    type: String as PropType<CategoryOptionList>,
    required: true
  }
})
</script>
