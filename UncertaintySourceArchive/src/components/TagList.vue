<template>
  <div class="flex flex-wrap gap-3 text-sm">
    <div v-for="tag in tags" :key="tag" class="rounded bg-primary-200 px-1 dark:bg-primary-950">
      {{ addHash ? '#' : '' }}{{ tag }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  tags: {
    type: Array<string>,
    required: true
  },
  addHash: {
    type: Boolean,
    default: true
  }
})
</script>
