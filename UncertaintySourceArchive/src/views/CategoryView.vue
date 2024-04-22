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
        :class="{
          'border-2': option == props.highlight
        }"
      >
        <div class="flex flex-col gap-10 md:flex-row">
          <div class="flex-1">
            <div class="space-x-2 text-2xl">
              <CategoryIconDisplay :option="option" />
              <span>{{ categoryOptions[option].name }}</span>
            </div>
            <p class="mt-1">{{ categoryOptions[option].description }}</p>
            <p class="mt-3">
              <span class="italic">This includes:</span> {{ categoryOptions[option].exampleText }}
            </p>
          </div>
          <div class="flex-1">
            <div class="flex">
              <h3 class="flex-1 italic">Selected examples:</h3>
              <RouterLink :to="`/archive?filter=${JSON.stringify({ [category]: [option] })}`">
                <ButtonComponent class="py-[1px]">
                  <span class="space-x-1"
                    ><FontAwesomeIcon :icon="faTable" /> <span>See all</span></span
                  >
                </ButtonComponent>
              </RouterLink>
            </div>
            <UncertaintyTable
              class="pt-1"
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
  </main>
</template>

<script setup lang="ts">
import { CategoryList, categories } from '@/model/categories/Category'
import ContainerComponent from '@/components/ContainerComponent.vue'
import { computed, type PropType } from 'vue'
import { categoryOptions, type CategoryOptionList } from '@/model/categories/options/CategoryOption'
import UncertaintyTable from '@/components/UncertaintyTable.vue'
import CategoryIconDisplay from '@/components/CategoryIconDisplay.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTable } from '@fortawesome/free-solid-svg-icons'

const props = defineProps({
  /** The category to display */
  category: {
    type: String as PropType<CategoryList>,
    required: true
  },
  highlight: {
    type: String as PropType<CategoryOptionList>,
    required: false
  }
})

/** Object containing all the data of this category */
const categoryObject = computed(() => categories[props.category])
</script>
