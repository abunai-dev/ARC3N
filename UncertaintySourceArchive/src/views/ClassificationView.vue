<template>
  <main class="space-y-5">
    <h1 class="text-3xl font-bold">Classification</h1>
    <ExpandableComponent
      v-for="category in categoryOrder"
      :key="category"
      :heading="categories[category].name"
    >
      <div class="space-y-5">
        {{ categories[category].description }}
        <RouterLink :to="{ name: 'category', params: { category: category } }">
          <ButtonComponent>More Information</ButtonComponent>
        </RouterLink>
      </div>
    </ExpandableComponent>
  </main>
</template>

<script setup lang="ts">
import ExpandableComponent from '@/components/ExpandableComponent.vue'
import { categoryOrder, categories } from '@/model/categories/Category'
import ButtonComponent from '@/components/ButtonComponent.vue'
</script>
