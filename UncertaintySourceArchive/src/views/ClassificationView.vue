<template>
  <main class="space-y-5">
    <h1 class="text-3xl font-bold">Classification</h1>
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
