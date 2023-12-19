<template>
  <main class="min-h-full md:overflow-hidden">
    <div
      class="grid grid-cols-1 grid-rows-3 gap-2 md:grid-cols-[auto_1fr_auto_auto] md:grid-rows-1 md:gap-5"
    >
      <FilterSelector
        v-model:filter="filter"
        class="col-span-1 col-start-1 row-span-1 row-start-1 md:col-span-1"
      />

      <div
        class="col-span-1 col-start-1 row-span-1 row-start-2 flex h-fit w-full items-center rounded border border-black border-opacity-50 dark:bg-gray-800 md:col-span-1 md:col-start-2 md:row-span-1 md:row-start-1 md:w-96"
      >
        <FontAwesomeIcon icon="search" class="mx-2 text-gray-400" />
        <input
          type="search"
          placeholder="Search"
          v-model="searchString"
          class="h-8 grow rounded bg-transparent outline-none placeholder:text-gray-400"
        />
      </div>

      <RouterLink
        to="/create"
        class="col col-span-1 col-start-1 row-span-1 row-start-3 md:col-start-4 md:row-start-1"
      >
        <ButtonComponent class="flex items-center space-x-1">
          <FontAwesomeIcon icon="plus" />
          <div>Add New</div>
        </ButtonComponent>
      </RouterLink>
    </div>
    <UncertaintyTable :filter="filter" :search-string="searchString" />
  </main>
</template>

<script setup lang="ts">
import UncertaintyTable from '@/components/UncertaintyTable.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faPlus, faFileExport } from '@fortawesome/free-solid-svg-icons'
import FilterSelector from '@/components/FilterSelector.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import type { Filter } from '@/model/ui/Table'
import { ref } from 'vue'

library.add(faSearch)
library.add(faPlus)
library.add(faFileExport)

const filter = ref({} as Filter)
const searchString = ref('')
</script>
