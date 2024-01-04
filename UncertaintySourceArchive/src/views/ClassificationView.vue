<template>
  <main class="space-y-5">
    <h1 class="text-3xl font-bold">Classification</h1>
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
      <SectionComponent
        v-for="category in categoryOrder"
        :key="category"
        :heading="categories[category].name"
        class="col-span-1 col-start-1 row-span-1"
        :class="`md:col-start-${(categoryOrder.indexOf(category) % 2) + 1}`"
      >
        <div class="space-y-5">
          <p>{{ categories[category].description }}</p>
          <ClassOptionList :category="category" />
          <RouterLink :to="{ name: 'category', params: { category: category } }">
            <ButtonComponent class="mt-5">More Information</ButtonComponent>
          </RouterLink>
        </div>
      </SectionComponent>
    </div>
  </main>
</template>

<script setup lang="ts">
import SectionComponent from '@/components/SectionComponent.vue'
import { categoryOrder, categories } from '@/model/categories/Category'
import ButtonComponent from '@/components/ButtonComponent.vue'
import ClassOptionList from '@/components/ClassOptionList.vue'
</script>
