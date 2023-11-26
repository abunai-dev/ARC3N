<template>
  <main class="min-h-full md:overflow-hidden">
    <div
      class="grid grid-cols-1 grid-rows-2 gap-2 md:grid-cols-[auto_1fr_auto] md:grid-rows-1 md:gap-5"
    >
      <FilterSelector v-model:filter="filter" />
      <div
        class="col-span-1 col-start-1 row-span-1 row-start-2 flex h-fit w-full items-center rounded border border-black border-opacity-50 md:col-span-1 md:col-start-2 md:row-span-1 md:row-start-1 md:w-96"
      >
        <FontAwesomeIcon icon="search" class="mx-2 text-gray-400" />
        <input
          type="search"
          placeholder="Search"
          class="h-8 grow rounded bg-transparent outline-none placeholder:text-gray-400"
        />
      </div>
      <RouterLink to="/create">
        <ButtonComponent class="flex items-center space-x-1">
          <FontAwesomeIcon icon="plus" />
          <div>Add New</div>
        </ButtonComponent>
      </RouterLink>
    </div>
    <UncertaintyTable />
  </main>
</template>

<script setup lang="ts">
import UncertaintyTable from '@/components/UncertaintyTable.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons'
import FilterSelector from '@/components/FilterSelector.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import type { Filter } from '@/model/ui/Table'
import { ref, watch } from 'vue'

library.add(faSearch)
library.add(faPlus)

const filter = ref({} as Filter)

watch(filter, (value) => {
  console.log(value)
})
</script>
