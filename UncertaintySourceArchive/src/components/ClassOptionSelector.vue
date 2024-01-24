<template>
  <div class="flex min-h-[24px]">
    <div
      v-for="option in categories[category].options"
      :key="option"
      class="group flex flex-grow items-center justify-center space-x-2 bg-primary-100 duration-0 first:rounded-l-full last:rounded-r-full dark:bg-primary-900"
      :class="{
        '!bg-primary-300 dark:!bg-primary-700': option == selectedOption,
        'hover:cursor-pointer hover:bg-primary-200 dark:hover:bg-primary-800':
          option != selectedOption
      }"
    >
      <CategoryIconDisplay :option="option" />
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
import { computed, type PropType } from 'vue'
import CategoryIconDisplay from './CategoryIconDisplay.vue'

const props = defineProps({
  category: {
    type: String as PropType<CategoryList>,
    required: true
  },
  modelValue: {
    type: String as PropType<CategoryOptionList>,
    required: true
  }
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: CategoryOptionList): void
}>()

const selectedOption = computed({
  get: () => props.modelValue,
  set: (value: CategoryOptionList) => emit('update:modelValue', value)
})
</script>
