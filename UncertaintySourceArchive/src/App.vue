<template>
  <div class="flex h-screen max-h-screen flex-col overflow-hidden">
    <NavBar />
    <div
      class="flex grow flex-col space-y-5 overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800 p-5"
    >
      <ContainerComponent class="box-border grow overflow-auto bg-white p-5">
        <RouterView class="" />
      </ContainerComponent>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import ContainerComponent from './components/ContainerComponent.vue'
import NavBar from './components/NavBar.vue'
</script>
