<template>
  <main
    class="grid w-full grid-cols-1 gap-5 gap-y-10 md:h-full md:grid-cols-2 md:grid-rows-[auto_1fr]"
  >
    <div class="col-span-1 col-start-1 row-span-1 row-start-1">
      <div class="flex flex-col md:flex-row">
        <h1 class="text-3xl font-bold md:flex-grow">
          <ToolTip direction="right">
            <template #default>
              <span
                class="cursor-pointer text-primary-500 active:text-primary-700 dark:text-primary-300 dark:active:text-primary-500"
                @Click="copyID()"
              >
                #{{ uncertainty.id }}
              </span>
            </template>
            <template #tooltip> Click to copy </template>
          </ToolTip>
          - {{ uncertainty.name }}
        </h1>
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

      <div class="flex flex-wrap gap-3 text-sm">
        <div
          v-for="keyword in uncertainty.keywords"
          :key="keyword"
          class="rounded bg-primary-200 px-1 dark:bg-primary-950"
        >
          #{{ keyword }}
        </div>
      </div>
      <article>{{ uncertainty.description }}</article>
      <a
        v-if="uncertainty.sourceReferenceLink"
        :href="uncertainty.sourceReferenceLink"
        class="text-link underline dark:text-link-dark"
        >Literature Reference</a
      >
    </div>
    <div
      class="col-span-1 col-start-1 row-span-1 row-start-3 space-y-10 md:row-start-2 md:overflow-auto"
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
    </div>

    <!-- The options for each category of this uncertainty -->
    <ContainerComponent
      class="col-span-1 col-start-1 row-span-1 row-start-2 bg-primary-100 dark:bg-primary-900 md:col-span-1 md:col-start-2 md:row-span-2 md:row-start-1 md:overflow-auto"
    >
      <h2 class="text-2xl">Classification:</h2>
      <div class="mt-2 grid grid-cols-1 space-y-5 md:grid-cols-2">
        <RouterLink
          v-for="category in categoryOrder"
          :key="category"
          :to="`/category/${category}?highlight=${uncertainty.classes[category]}`"
          class="[&_*]:!cursor-pointer"
        >
          <SectionComponent>
            <template #heading>
              {{ categories[category].name }}:
              <i>{{ categoryOptions[uncertainty.classes[category]].name }}</i>
            </template>
            <template #default>
              <div class="space-y-2">
                <p>{{ categories[category].description }}</p>
                <ClassOptionList
                  :category="category"
                  :selected-option="uncertainty.classes[category]"
                  class="hidden md:flex"
                />
              </div>
            </template>
          </SectionComponent>
        </RouterLink>
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
import ToolTip from '@/components/ToolTip.vue'

const props = defineProps({
  /** Uncertainty to dislpay */
  uncertainty: {
    type: Object as PropType<Uncertainty>,
    required: true
  }
})

function copyID() {
  navigator.clipboard.writeText(`#${props.uncertainty.id}`)
}
</script>
