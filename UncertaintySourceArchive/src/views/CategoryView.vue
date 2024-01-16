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
    <ContainerComponent class="bg-primary-100 dark:bg-primary-900">
      <h2 class="text-2xl">Options:</h2>
      <div class="mt-2 space-y-6">
        <SectionComponent
          v-for="option in categoryObject.options"
          :key="option"
          :heading="categoryOptions[option].name"
        >
          <div class="flex flex-col gap-5 md:flex-row">
            <div class="flex-1 space-y-3">
              <p>{{ categoryOptions[option].description }}</p>
              <p>{{ categoryOptions[option].exampleText }}</p>
            </div>
            <UncertaintyTable
              class="flex-1"
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
        </SectionComponent>
      </div>
    </ContainerComponent>

    <ExampleDisplay :example="categoryObject" />
  </main>
</template>

<script setup lang="ts">
import { CategoryList, categories } from '@/model/categories/Category'
import ContainerComponent from '@/components/ContainerComponent.vue'
import SectionComponent from '@/components/SectionComponent.vue'
import { computed, type PropType } from 'vue'
import { categoryOptions } from '@/model/categories/options/CategoryOption'
import ExampleDisplay from '@/components/ExampleDisplay.vue'
import UncertaintyTable from '@/components/UncertaintyTable.vue'

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
