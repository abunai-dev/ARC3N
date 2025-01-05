<!-- Component for setting a filter for the table -->
<template>
  <div class="relative">
    <ButtonComponent class="flex items-center space-x-1" @click="visible = !visible">
      <FontAwesomeIcon icon="filter" />
      <div>Filter</div>
    </ButtonComponent>
    <ContainerComponent
      class="absolute top-[115%] z-10 max-h-[75vh] min-h-[270px] min-w-[300px] max-w-full overflow-scroll bg-primary-0 dark:bg-primary-950 md:min-w-[600px]"
      v-if="visible"
    >
      <div>
        <h3 class="text-lg font-bold">Filter</h3>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
          <SectionComponent
            v-for="c in categoryOrder"
            :key="c.toString()"
            :heading="categories[c].name"
          >
            <div>
              <div v-for="o in categories[c].options" :key="o.toString()" class="space-x-2">
                <input type="checkbox" v-model="helper[c][o]" @change="changeFilter(c, o)" />
                <label @click="changeFilter(c, o)">{{ categoryOptions[c][o].name }}</label>
              </div>
            </div>
          </SectionComponent>
        </div>
      </div>
    </ContainerComponent>
  </div>
</template>

<script setup lang="ts">
import ButtonComponent from './ButtonComponent.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ref, type PropType, computed } from 'vue'
import ContainerComponent from './ContainerComponent.vue'
import type { Filter } from '@/model/ui/Table'
import SectionComponent from './SectionComponent.vue'
import { categories, categoryOrder, CategoryList } from '@/model/categories/Category'
import { categoryOptions, type CategoryOptionList } from '@/model/categories/options/CategoryOption'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
library.add(faFilter)

const props = defineProps({
  /** v-model of the filter */
  filter: {
    type: Object as PropType<Filter>,
    required: true
  }
})

/** Helper object for storing the state of the filter */
const helper = computed(() => {
  const t = {} as Record<CategoryList, Record<CategoryOptionList, boolean>>
  for (const c of categoryOrder) {
    const tt = {} as Record<CategoryOptionList, boolean>
    for (const o of categories[c].options) {
      tt[o] = props.filter[c]?.includes(o) ?? false
    }
    t[c] = tt
  }
  return t
})

const emit = defineEmits<{
  /** v-model of the filter */
  (e: 'update:filter', t: Filter): void
}>()

/** Whether the filter is visible or not */
const visible = ref(false)

/**
 * Updates the helper filter and emits the new filter
 * @param category Category to set option in
 * @param option Option to set
 */
function changeFilter(category: CategoryList, option: CategoryOptionList) {
  function isTrueInPropFilter(c: CategoryList, o: CategoryOptionList) {
    return props.filter[c]?.includes(o) ?? false
  }

  const t = {} as Filter
  for (const c of categoryOrder) {
    const tt = [] as CategoryOptionList[]
    for (const o of categories[c].options) {
      if (c == category && o == option) {
        if (!isTrueInPropFilter(c, o)) {
          tt.push(o)
        }
      } else if (isTrueInPropFilter(c, o)) {
        tt.push(o)
      }
    }
    if (tt.length > 0) {
      t[c] = tt
    }
  }
  emit('update:filter', t)
}
</script>
