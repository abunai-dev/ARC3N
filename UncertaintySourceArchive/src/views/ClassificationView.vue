<template>
  <main class="space-y-5">
    <div>
      <h1 class="text-3xl font-bold">Classification</h1>
      <p class="mt-2 w-3/6 italic">
        This classification is based on: S. Hahner, et al., "A Classification of
        Software-Architectural Uncertainty Regarding Confidentiality", ICETE, Springer, 2023, doi:
        <a
          href="https://doi.org/10.1007/978-3-031-36840-0_8"
          class="text-link underline dark:text-link-dark"
          >10.1007/978-3-031-36840-0_8</a
        >.
      </p>
    </div>
    <div class="grid grid-cols-1 gap-5 md:grid-cols-3">
      <RouterLink
        :to="{ name: 'category', params: { category: category } }"
        v-for="category in categoryOrder"
        :key="category"
        class="col-span-1 row-span-1 [&_*]:!cursor-pointer"
        :class="`grid-start-${(categoryOrder.indexOf(category) % 3) + 1}`"
      >
        <SectionComponent>
          <template #heading>
            <span class="space-x-2 text-link underline dark:text-link-dark">{{
              categories[category].name
            }}</span>
          </template>
          <div class="space-y-5">
            <p>{{ categories[category].description }}</p>
            <ClassOptionList :category="category" />
          </div>
        </SectionComponent>
      </RouterLink>
    </div>
  </main>
</template>

<script setup lang="ts">
import SectionComponent from '@/components/SectionComponent.vue'
import { categoryOrder, categories } from '@/model/categories/Category'
import ClassOptionList from '@/components/ClassOptionList.vue'
</script>

<style scoped>
@media (min-width: 768px) {
  .col-start-1 {
    grid-column-start: 1;
  }
  .col-start-2 {
    grid-column-start: 2;
  }
  .col-start-3 {
    grid-column-start: 3;
  }
}
</style>
