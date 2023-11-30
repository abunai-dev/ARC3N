<template>
  <div class="flex h-screen max-h-screen flex-col overflow-hidden">
    <nav class="flex items-center space-x-5 px-3">
      <h1 class="text-2xl">ARC3N</h1>
      <ul class="flex space-x-1 bg-white py-1 text-lg">
        <NavBarComponent
          :link="{
            link: '/archive',
            name: 'Archive'
          }"
        />
        <NavBarComponent
          :link="{
            link: '/category',
            name: 'Classification'
          }"
          :children="
            categoryOrder.map((category) => ({
              link: '/category/' + category,
              name: category
            }))
          "
        />
        <NavBarComponent
          :link="{
            link: '/export',
            name: 'Export'
          }"
        />
        <NavBarComponent
          :link="{
            link: '/create',
            name: 'Add New'
          }"
        />
      </ul>
    </nav>
    <div
      class="flex grow flex-col space-y-5 overflow-hidden bg-gradient-to-br from-primary to-primary-dark p-5"
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
import NavBarComponent from './components/NavBarComponent.vue'
import { categoryOrder } from './model/categories/Category'
</script>
