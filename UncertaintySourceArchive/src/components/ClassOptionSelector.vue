<template>
  <div class="flex min-h-[24px]">
    <ToolTip
      v-for="option in categories[category].options"
      :key="option"
      class="group flex flex-grow items-center justify-center space-x-2 bg-primary-100 duration-0 first:rounded-l-full last:rounded-r-full dark:bg-primary-900"
      :class="{
        '!bg-primary-300 dark:!bg-primary-700': option == selectedOption,
        'hover:cursor-pointer hover:bg-primary-200 dark:hover:bg-primary-800':
          option != selectedOption
      }"
      @click="selectedOption = option"
      direction="bottom"
    >
      <template #default>
        <CategoryIconDisplay :option="option" />
        <p class="hidden group-hover:flex" :class="{ '!flex': selectedOption == option }">
          {{ categoryOptions[option].name }}
        </p>
      </template>
      <template #tooltip>
        <p>
          {{ categoryOptions[option].description }}
        </p>
      </template>
    </ToolTip>
  </div>
</template>

<script setup lang="ts">
import { type CategoryList, categories } from '@/model/categories/Category'
import { type CategoryOptionList, categoryOptions } from '@/model/categories/options/CategoryOption'
import { computed, ref, type PropType, type Ref } from 'vue'
import CategoryIconDisplay from './CategoryIconDisplay.vue'
import ToolTip from './ToolTip.vue'

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
  get: () => _selectedOption.value ?? props.modelValue,
  set: (value) => {
    _selectedOption.value = value
    emit('update:modelValue', value)
  }
})

const _selectedOption: Ref<CategoryOptionList | null> = ref(null)
</script>
