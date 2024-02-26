<template>
  <main class="flex h-full flex-col items-center text-center">
    <img src="https://raw.githubusercontent.com/abunai-dev/.github/main/profile/abunai-art.png" />
    <h1 class="text-3xl font-bold">ARC<sup>3</sup>N</h1>
    <h3 class="text-xl">
      Rese<b>ARC</b>h <b>ARC</b>hive for Software-<b>ARC</b>hitectural U<b>N</b>certainty
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
