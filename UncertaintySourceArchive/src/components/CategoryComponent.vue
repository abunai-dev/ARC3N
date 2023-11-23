<template>
  <article>
    <h3 class="text-lg">
      <div v-if="!$slots.heading && heading">{{ heading }}</div>
      <slot name="heading" v-else-if="$slots.heading && !heading"></slot>
      <div v-else>Conflicting or no heading given</div>
    </h3>
    <p class="pl-3">
      <slot></slot>
    </p>
  </article>
</template>

<script setup lang="ts">
defineProps({
  heading: String
})
</script>
