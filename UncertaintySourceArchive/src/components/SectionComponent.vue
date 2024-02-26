<!-- Displays content with a heading in a uniform style. Used for soft grouping -->
<template>
  <article>
    <h3 class="text-lg">
      <div v-if="!$slots.heading && heading">{{ heading }}</div>
      <!-- Slot for the heading. Mutualy exclusive to the prop -->
      <slot name="heading" v-else-if="$slots.heading && !heading"></slot>
      <div v-else>Conflicting or no heading given</div>
    </h3>
    <p class="pl-3">
      <!-- Slot for the content -->
      <slot></slot>
    </p>
  </article>
</template>

<script setup lang="ts">
defineProps({
  /** Heading of the category. Mutualy exclusive to the heading slot */
  heading: {
    type: String,
    required: false
  }
})
</script>
