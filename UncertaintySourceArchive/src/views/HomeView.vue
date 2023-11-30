<template>
  <main class="flex h-full flex-col items-center justify-center text-center">
    <h1 class="text-3xl font-bold">ARC3N</h1>
    <h3 class="text-lg font-bold">ReseARCh ARChive for Software-ARChitectural Uncertainty</h3>
    <p class="my-5">Text</p>
    <RouterLink to="/archive">
      <ButtonComponent>Go to Collection</ButtonComponent>
    </RouterLink>
  </main>
</template>

<script setup lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue'
import { RouterLink } from 'vue-router'
</script>
