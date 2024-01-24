<template>
  <main class="grid w-full grid-cols-1 gap-5 md:h-full md:grid-cols-2 md:grid-rows-[auto_1fr]">
    <div class="col-span-1 col-start-1 row-span-1 row-start-1">
      <h1 class="text-3xl font-bold">#{{ uncertainty.id }} - {{ uncertainty.name }}</h1>
      <article class="pl-3">{{ uncertainty.description }}</article>
    </div>
    <div
      class="col-span-1 col-start-1 row-span-1 row-start-3 space-y-5 md:row-start-2 md:overflow-auto"
    >
      <ExampleDisplay :example="uncertainty" />

      <SectionComponent
        heading="Related Uncertainties"
        v-if="
          uncertainty.children.length > 0 ||
          uncertainty.relatedUncertainties.length > 0 ||
          uncertainty.parent ||
          true
        "
      >
        <UncertaintyRelationshipDiagramm :uncertainty="uncertainty" />
      </SectionComponent>

      <div class="mx-auto w-fit">
        <a
          :href="
            'https://www.github.com/' +
            IssueResourceGetter.OWNER +
            '/' +
            IssueResourceGetter.REPO +
            '/issues/' +
            uncertainty.id
          "
        >
          <ButtonComponent>Go to discussion</ButtonComponent>
        </a>
      </div>
    </div>

    <!-- The options for each category of this uncertainty -->
    <ContainerComponent
      class="col-span-1 col-start-1 row-span-1 row-start-2 bg-primary-100 dark:bg-primary-900 md:col-span-1 md:col-start-2 md:row-span-2 md:row-start-1 md:overflow-auto"
    >
      <h2 class="text-2xl">Classification:</h2>
      <div class="mt-2 grid grid-cols-1 space-y-5 md:grid-cols-2">
        <SectionComponent v-for="c in categoryOrder" :key="c">
          <template #heading>
            {{ categories[c].name }}: <i>{{ categoryOptions[uncertainty.classes[c]].name }}</i>
          </template>
          <template #default>
            <div class="space-y-2">
              <p>{{ categories[c].description }}</p>
              <ClassOptionList
                :category="c"
                :selected-option="uncertainty.classes[c]"
                class="hidden md:flex"
              />
            </div>
          </template>
        </SectionComponent>
      </div>
    </ContainerComponent>
  </main>
</template>

<script setup lang="ts">
import SectionComponent from '@/components/SectionComponent.vue'
import ContainerComponent from '@/components/ContainerComponent.vue'
import type { Uncertainty } from '@/model/uncertainty/Uncertainty'
import type { PropType } from 'vue'
import { categoryOrder, categories } from '@/model/categories/Category'
import { categoryOptions } from '@/model/categories/options/CategoryOption'
import { IssueResourceGetter } from '@/model/resourceGetter/IssueResourceGetter'
import UncertaintyRelationshipDiagramm from '@/components/UncertaintyRelationshipDiagramm.vue'
import ExampleDisplay from '@/components/ExampleDisplay.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import ClassOptionList from '@/components/ClassOptionList.vue'

defineProps({
  /** Uncertainty to dislpay */
  uncertainty: {
    type: Object as PropType<Uncertainty>,
    required: true
  }
})
</script>
