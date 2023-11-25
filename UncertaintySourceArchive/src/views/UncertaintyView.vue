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

      <CategoryComponent
        heading="Related Uncertainties"
        v-if="
          uncertainty.children.length > 0 ||
          uncertainty.relatedUncertainties.length > 0 ||
          uncertainty.parent ||
          true
        "
      >
        <UncertaintyRelationshipDiagramm :uncertainty="uncertainty" />
      </CategoryComponent>
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

    <ContainerComponent
      class="col-span-1 col-start-1 row-span-1 row-start-2 bg-primary-light bg-opacity-20 md:col-span-1 md:col-start-2 md:row-span-2 md:row-start-1 md:overflow-auto"
    >
      <h2 class="text-2xl">Classification:</h2>
      <div class="mt-2 space-y-5">
        <CategoryComponent v-for="c in classesValues" :key="c">
          <template #heading>
            {{ classes[c].name }}: <i>{{ classOptions[uncertainty.classes[c]].name }}</i>
          </template>
          <template #default>
            <div class="space-y-2">
              <p>{{ classes[c].description }}</p>
              <div>
                <RouterLink
                  :to="{
                    name: 'class',
                    params: { category: c }
                  }"
                >
                  <ButtonComponent>More Info</ButtonComponent>
                </RouterLink>
              </div>
            </div>
          </template>
        </CategoryComponent>
      </div>
    </ContainerComponent>
  </main>
</template>

<script setup lang="ts">
import CategoryComponent from '@/components/CategoryComponent.vue'
import ContainerComponent from '@/components/ContainerComponent.vue'
import type { Uncertainty } from '@/model/uncertainty/Uncertainty'
import type { PropType } from 'vue'
import { classesValues, classes } from '@/model/classes/Class'
import { classOptions } from '@/model/classes/options/ClassOption'
import { IssueResourceGetter } from '@/model/resourceGetter/IssueResourceGetter'
import UncertaintyRelationshipDiagramm from '@/components/UncertaintyRelationshipDiagramm.vue'
import ExampleDisplay from '@/components/ExampleDisplay.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'

defineProps({
  uncertainty: {
    type: Object as PropType<Uncertainty>,
    required: true
  }
})
</script>
