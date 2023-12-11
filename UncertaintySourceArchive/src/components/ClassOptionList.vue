<template>
  <div class="flex">
    <div
      v-for="option in categories[category].options"
      :key="option"
      class="group flex flex-grow items-center justify-center space-x-2 bg-primary-50 first:rounded-l-full last:rounded-r-full"
      :class="{
        '!bg-primary-300': option == selectedOption,
        'hover:bg-primary-200': option != selectedOption
      }"
    >
      <FontAwesomeIcon :icon="categoryOptions[option].icon ?? faNotdef" />
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
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faNotdef } from '@fortawesome/free-solid-svg-icons'

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
