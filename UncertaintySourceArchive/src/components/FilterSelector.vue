<template>
  <div class="relative">
    <ButtonComponent class="flex items-center space-x-1" @click="visible = !visible">
      <FontAwesomeIcon icon="filter" />
      <div>Filter</div>
    </ButtonComponent>
    <ContainerComponent
      class="absolute top-[115%] z-10 max-h-[400px] min-h-[270px] min-w-[288px] max-w-full overflow-scroll bg-white"
      v-if="visible"
    >
      <div>
        <h3 class="text-lg font-bold">Filter</h3>
        <ExpandableComponent
          v-for="c in categoryOrder"
          :key="c.toString()"
          :heading="categories[c].name"
        >
          <div>
            <div v-for="o in categories[c].options" :key="o.toString()" class="space-x-2">
              <input type="checkbox" v-model="helper[c][o]" @change="changeFilter(c, o)" />
              <label @click="changeFilter(c, o)">{{ categoryOptions[o].name }}</label>
            </div>
          </div>
        </ExpandableComponent>
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
import ExpandableComponent from './ExpandableComponent.vue'
import { categories, categoryOrder, CategoryList } from '@/model/categories/Category'
import { categoryOptions, type CategoryOptionList } from '@/model/categories/options/CategoryOption'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
library.add(faFilter)

const props = defineProps({
  filter: {
    type: Object as PropType<Filter>,
    required: true
  }
})

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

const emit = defineEmits(['update:filter'])

const visible = ref(false)

function changeFilter(cl: CategoryList, op: CategoryOptionList) {
  function isTrueInPropFilter(cla: CategoryList, opt: CategoryOptionList) {
    return props.filter[cla]?.includes(opt) ?? false
  }

  const t = {} as Filter
  for (const c of categoryOrder) {
    const tt = [] as CategoryOptionList[]
    for (const o of categories[c].options) {
      if (c == cl && o == op && !isTrueInPropFilter(cl, op)) {
        tt.push(o)
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
