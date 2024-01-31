<template>
  <main class="space-y-5">
    <div>
      <h1 class="text-3xl font-bold">
        {{ categoryObject.name }}
      </h1>
      <article>
        {{ categoryObject.description }}
      </article>
    </div>

    <!-- All options this category has -->
    <h2 class="text-2xl">Options:</h2>
    <div class="mt-2 space-y-6">
      <ContainerComponent
        class="bg-primary-100 dark:bg-primary-900"
        v-for="option in categoryObject.options"
        :key="option"
      >
        <div class="flex flex-col gap-5 md:flex-row">
          <div class="flex-1">
            <div class="space-x-2 text-2xl">
              <CategoryIconDisplay :option="option" />
              <span>{{ categoryOptions[option].name }}</span>
            </div>
            <p class="mt-1">{{ categoryOptions[option].description }}</p>
            <p class="mt-3">{{ categoryOptions[option].exampleText }}</p>
          </div>
          <div class="flex-1">
            <h3>Selected examples:</h3>
            <UncertaintyTable
              :filter="{ [category]: [option] }"
              :shown-columns="[
                'id',
                'name',
                CategoryList.LOCATION,
                CategoryList.ARCHITECTURAL_ELEMENT_TYPE,
                CategoryList.TYPE
              ]"
              :max-rows="3"
            />
          </div>
        </div>
      </ContainerComponent>
    </div>

    <ExampleDisplay :example="categoryObject" />
  </main>
</template>

<script setup lang="ts">
import { CategoryList, categories } from '@/model/categories/Category'
import ContainerComponent from '@/components/ContainerComponent.vue'
import { computed, type PropType } from 'vue'
import { categoryOptions } from '@/model/categories/options/CategoryOption'
import ExampleDisplay from '@/components/ExampleDisplay.vue'
import UncertaintyTable from '@/components/UncertaintyTable.vue'
import CategoryIconDisplay from '@/components/CategoryIconDisplay.vue'

const props = defineProps({
  /** The category to display */
  category: {
    type: String as PropType<CategoryList>,
    required: true
  }
})

/** Object containing all the data of this category */
const categoryObject = computed(() => categories[props.category])
</script>
