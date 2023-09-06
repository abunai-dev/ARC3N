<template>
    <div class="filter">
            <span>filter by:</span>
            <select v-model="selectedCategory" @change="searchValue='', emitChanges">
              <option v-for="header in filterableHeaders" :key="header.text" :value="header.value">{{ header.text }}</option>
            </select>
            <span class="filter-options" v-if="selectedCategory !== ''">
              <select v-model="searchValue"  @change="emitChanges">
                <option v-for="option in filterOptions(selectedCategory)" :key="option"> {{ option }}</option>
              </select>
            </span>
            <button @click="$emit('reset'), selectedCategory='', searchValue=''">Reset</button>
    </div>
    <button @click="$emit('toggleSearch')">Search</button>
</template>
<script setup lang="ts">
import { ref, type PropType } from 'vue';
import type { Header } from 'vue3-easy-data-table'

import { getArchitecturalTypeNames } from '@/util/scripts/optionMapping/architecturalTypeMapping'
import { getImpactOnConfidentialityNames } from '@/util/scripts/optionMapping/impactOnConfidentialityMapping'
import { getLocationNames } from '@/util/scripts/optionMapping/locationMapping'
import { getManageabilityNames } from '@/util/scripts/optionMapping/manageabilityMapping'
import { getReducibleByAddNames } from '@/util/scripts/optionMapping/reducibleByAddMapping'
import { getResolutionTimeNames } from '@/util/scripts/optionMapping/resolutionTimeMapping'
import { getSeverityOfImpactNames } from '@/util/scripts/optionMapping/severityOfImpactMapping'
import { getTypeNames } from '@/util/scripts/optionMapping/typeMapping'

const props = defineProps(
    {
        filterableHeaders: {
            type: Array as PropType<Header[]>,
            required: true
        },
        selectedCategory: {
            type: String,
            default: ''
        },
        searchValue: {
            type: String,
            default: ''
        }
    }
)
const selectedCategory = ref(props.selectedCategory)
const searchValue = ref(props.searchValue)
const emits = defineEmits(['toggleSearch', 'reset', 'filterCategory', 'filterValue']);

function emitChanges() {
    emits('filterCategory', selectedCategory.value)
    emits('filterValue', searchValue.value)
}

function filterOptions(header: string): string[] {
  var options: string[] = []
  switch (header) {
    case 'location':
      options = getLocationNames()
      break
    case 'architecturalType':
      options = getArchitecturalTypeNames()
      break
    case 'type':
      options = getTypeNames()
      break
    case 'manageability':
      options = getManageabilityNames()
      break
    case 'resolutionTime':
      options = getResolutionTimeNames()
      break
    case 'reducibleByADD':
      options = getReducibleByAddNames()
      break
    case 'impactOnConfidentiality':
      options = getImpactOnConfidentialityNames()
      break
    case 'severityOfImpact':
      options = getSeverityOfImpactNames()
      break
    default:
      options = []
      break
  }
  return options
}

</script>
<style scoped>
</style>@/util/scripts/optionMapping/architecturalTypeMapping@/util/scripts/optionMapping/impactOnConfidentialityMapping@/util/scripts/optionMapping/locationMapping@/util/scripts/optionMapping/manageabilityMapping@/util/scripts/optionMapping/reducibleByAddMapping@/util/scripts/optionMapping/resolutionTimeMapping@/util/scripts/optionMapping/severityOfImpactMapping@/util/scripts/optionMapping/typeMapping