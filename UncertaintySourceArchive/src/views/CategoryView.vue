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
    <ContainerComponent class="bg-primary-light bg-opacity-20">
      <h2 class="text-2xl">Options:</h2>
      <div class="mt-2 space-y-5">
        <SectionComponent
          v-for="option in categoryObject.options"
          :key="option"
          :heading="categoryOptions[option].name"
        >
          <div space-y-2>
            <p>{{ categoryOptions[option].description }}</p>
            <ExampleDisplay :example="categoryOptions[option]" />
            <ExpandableComponent heading="Table">
              <UncertaintyTable :filter="{ [category]: [option] } as Filter" />
            </ExpandableComponent>
          </div>
        </SectionComponent>
      </div>
    </ContainerComponent>

    <ExampleDisplay :example="categoryObject" />
  </main>
</template>

<script setup lang="ts">
import { type CategoryList, categories } from '@/model/categories/Category'
import ContainerComponent from '@/components/ContainerComponent.vue'
import SectionComponent from '@/components/SectionComponent.vue'
import { computed, type PropType } from 'vue'
import { categoryOptions } from '@/model/categories/options/CategoryOption'
import ExampleDisplay from '@/components/ExampleDisplay.vue'
import UncertaintyTable from '@/components/UncertaintyTable.vue'
import type { Filter } from '@/model/ui/Table'
import ExpandableComponent from '@/components/ExpandableComponent.vue'

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
