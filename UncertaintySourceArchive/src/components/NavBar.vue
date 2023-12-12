<template>
  <div class="text-primary-1000 dark:text-primary-0">
    <button
      class="absolute left-0 top-0 z-40 m-2 w-20 md:hidden"
      @click="shownNavBar = !shownNavBar"
    >
      <ButtonComponent>
        <FontAwesomeIcon icon="bars" class="flex h-5 w-5 items-center justify-center" />
      </ButtonComponent>
    </button>
    <nav
      class="absolute left-0 z-30 hidden h-full flex-col space-x-5 border bg-primary-0 px-3 pt-16 shadow dark:bg-primary-900 md:relative md:flex md:h-fit md:flex-row md:items-center md:border-0 md:pt-0 md:shadow-none"
      :class="{
        '!flex': shownNavBar
      }"
    >
      <RouterLink to="/"><h1 class="cursor-pointer text-2xl">ARC<sup>3</sup>N</h1></RouterLink>
      <ul class="flex flex-col space-x-1 text-lg md:flex-row">
        <NavBarComponent
          :link="{
            link: {
              name: 'archive'
            },
            name: 'Archive'
          }"
        />
        <NavBarComponent
          :link="{
            link: {
              name: 'classification'
            },
            name: 'Classification'
          }"
          :children="
            categoryOrder.map((category) => ({
              link: {
                name: 'category',
                params: { category: category }
              },
              name: category
            }))
          "
        />
        <NavBarComponent
          :link="{
            link: {
              name: 'guide'
            },
            name: 'Guide'
          }"
        />
        <NavBarComponent
          :link="{
            link: {
              name: 'export'
            },
            name: 'Export'
          }"
        />
        <NavBarComponent
          :link="{
            link: {
              name: 'create'
            },
            name: 'Add New'
          }"
        />
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import NavBarComponent from './NavBarComponent.vue'
import { RouterLink } from 'vue-router'
import { categoryOrder } from '../model/categories/Category'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { ref } from 'vue'
import ButtonComponent from './ButtonComponent.vue'
import { router } from '@/router'

library.add(faBars)

const shownNavBar = ref(false)

router.afterEach(() => {
  shownNavBar.value = false
})
</script>
