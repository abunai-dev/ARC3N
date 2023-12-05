<template>
  <main class="flex h-full flex-col items-center justify-center text-center">
    <h1 class="text-3xl font-bold">ARC3N</h1>
    <h3 class="text-xl">
      Rese<b>ARC</b>h <b>ARC</b>hive for Software-<b>ARC</b>hitectural Uncertainty
    </h3>
    <p class="my-5">Toller Beispiel Text</p>
    <RouterLink to="/archive">
      <ButtonComponent>Go to Archive</ButtonComponent>
    </RouterLink>
  </main>
</template>

<script setup lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue'
import { RouterLink } from 'vue-router'
</script>
