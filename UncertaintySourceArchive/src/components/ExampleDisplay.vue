<template>
  <CategoryComponent heading="Example">
    <div class="space-y-2">
      <p>{{ example.exampleText }}</p>
      <img
        v-for="[index, img] in example.exampleImages.entries()"
        :key="img"
        :src="img"
        :alt="`Example image ${index + 1}`"
        class="max-h-[40vh] max-w-full"
      />
    </div>
  </CategoryComponent>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import CategoryComponent from './CategoryComponent.vue'

defineProps({
  example: {
    type: Object as PropType<{ exampleText: string; exampleImages: string[] }>,
    required: true
  }
})
</script>
