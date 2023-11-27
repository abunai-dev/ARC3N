<template>
  <div class="flex h-screen bg-gradient-to-br from-primary to-primary-dark p-5">
    <ContainerComponent class="box-border grow overflow-auto bg-white p-5">
      <RouterView class="" />
    </ContainerComponent>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import ContainerComponent from './components/ContainerComponent.vue'
</script>
