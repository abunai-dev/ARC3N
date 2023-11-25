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
        <ExpandableComponent v-for="c in Classes" :key="c.toString()" :heading="classes[c].name">
          <div>
            <div v-for="o in classes[c].options" :key="o.toString()" class="space-x-2">
              <input type="checkbox" v-model="helper[c][o]" @change="changeFilter(c, o)" />
              <label @click="changeFilter(c, o)">{{ classOptions[o].name }}</label>
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
import { classes, classesValues, Classes } from '@/model/classes/Class'
import { classOptions, type ClassOptionEnumType } from '@/model/classes/options/ClassOption'
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
  const t = {} as Record<Classes, Record<ClassOptionEnumType, boolean>>
  for (const c of classesValues) {
    const tt = {} as Record<ClassOptionEnumType, boolean>
    for (const o of classes[c].options) {
      tt[o] = props.filter[c]?.includes(o) ?? false
    }
    t[c] = tt
  }
  return t
})

const emit = defineEmits(['update:filter'])

const visible = ref(false)

function changeFilter(cl: Classes, op: ClassOptionEnumType) {
  function isTrueInPropFilter(cla: Classes, opt: ClassOptionEnumType) {
    return props.filter[cla]?.includes(opt) ?? false
  }

  const t = {} as Filter
  for (const c of classesValues) {
    const tt = [] as ClassOptionEnumType[]
    for (const o of classes[c].options) {
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
