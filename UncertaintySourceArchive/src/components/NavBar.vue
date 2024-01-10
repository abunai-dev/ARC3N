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
      class="absolute left-0 z-30 hidden h-full flex-col space-x-5 border bg-primary-0 px-3 pt-16 shadow dark:bg-primary-975 md:relative md:flex md:h-fit md:flex-row md:items-center md:border-0 md:pt-0 md:shadow-none"
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
      <div class="absolute right-5 top-2 flex h-full justify-center align-middle">
        <label class="relative inline-block h-6 w-12">
          <input type="checkbox" class="h-0 w-0 opacity-0" v-model="dark" />
          <span
            class="fa-solid content absolute bottom-0 left-0 right-0 top-0 cursor-pointer rounded-full border border-black border-opacity-10 bg-primary-50 transition-all duration-300 ease-in-out before:absolute before:bottom-[calc(0.125rem-1px)] before:left-[calc(0.125rem-1px)] before:h-5 before:w-5 before:rounded-full before:bg-primary-800 before:duration-300 dark:bg-primary-700"
            :class="{
              'before:translate-x-[1.375rem]': dark,
              'fa-sun': !dark,
              'fa-moon': dark
            }"
          >
          </span>
        </label>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import NavBarComponent from './NavBarComponent.vue'
import { RouterLink } from 'vue-router'
import { categoryOrder } from '../model/categories/Category'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { ref, watch } from 'vue'
import ButtonComponent from './ButtonComponent.vue'
import { router } from '@/router'

library.add(faBars, faSun, faMoon)

const shownNavBar = ref(false)

router.afterEach(() => {
  shownNavBar.value = false
})

const dark = ref(false)

watch(dark, (value) => {
  const root = document.getElementById('app') as HTMLElement
  if (value) {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }
})
</script>

<style scoped>
.content ::before {
  content: '';
}
</style>
