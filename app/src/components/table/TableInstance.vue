<template>
  <div class="table">
    <div v-if="items.length > 0">
      <div class="topBar">
        <div class="searchBar" v-if="isSearch">
          <SearchBar :search-value="searchValue" @toggle-search="toggleSearchAndFilter" @reset="reset" @search="setSearchValue" />
        </div>
        <div class="filterBar" v-else>
          <FilterBar :filterable-headers="getFilterableHeaders()" :selected-category="selectedHeader" :search-value="searchValue" @toggle-search="toggleSearchAndFilter" @reset="reset" @filter-category="setHeader" @filter-value="setSearchValue" />
        </div>
      </div>
      <EasyDataTable :headers="headers" :items="items" @click-row="setSelectedUncertainty" :search-field=selectedHeader :search-value="searchValue" :sort-by="sortBy" :sort-type="sortType" header-text-direction="center" body-text-direction="center"  v-if="selectedHeader !== ''"/>
      <EasyDataTable table-class-name="customize-table" :headers="headers" :items="items" @click-row="setSelectedUncertainty" :search-value="searchValue" :sort-by="sortBy" :sort-type="sortType" header-text-direction="center" body-text-direction="center" v-else />
    </div>
    <div v-else>
      <p>No data available.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Header, Item, ClickRowArgument, SortType } from 'vue3-easy-data-table'
import { ref, type PropType } from 'vue'
import type { Uncertainty } from '@/util/types/Uncertainty'
import uncertainties from '@/data/uncertainties'
import type { Category } from '@/util/types/Category'
import type { Option } from '@/util/types/Option'

import SearchBar from '@/components/table/SearchBar.vue'
import FilterBar from '@/components/table/FilterBar.vue'

const props = defineProps({
  filterByOption: {
    type: Object as PropType<{category: Category, Option: Option} | null>,
    default: null
  },
  searchValue: {
    type: String,
    default: ''
  }
})
const allUncertainties = uncertainties
const items: Item[] = buildItems()
var currentItemId = ref(0)
var currentUncertainty = ref(getUncertainty(currentItemId.value))
const headers: Header[] = [
  { text: 'ID', value: 'id', sortable:true},
  { text: 'Name', value: 'name' },
  { text: 'Keywords', value: 'keywords'},
  { text: 'Location', value: 'location' , sortable:true},
  { text: 'Architectural Element Type', value: 'architecturalType', sortable:true },
  { text: 'Type', value: 'type' , sortable:true},
  { text: 'Manageability', value: 'manageability' , sortable:true},
  { text: 'Resolution Time', value: 'resolutionTime' , sortable:true},
  { text: 'Reducible by ADD', value: 'reducibleByADD' , sortable:true},
  { text: 'Impact On Confidentiality', value: 'impactOnConfidentiality', sortable:true},
  { text: 'Severity Of Impact', value: 'severityOfImpact' , sortable:true}
]
const sortType: SortType = 'asc';
const sortBy = ref('id')
const emit = defineEmits(['selected-uncertainty']) 

const setSelectedUncertainty = (item: ClickRowArgument) => {
  var currentItemId = ref(item.id)
  currentUncertainty.value = getUncertainty(currentItemId.value)
  console.log('The current uncertainty is: ' + currentUncertainty.value.id)
  emit('selected-uncertainty', currentUncertainty.value)
}

const searchValue = ref(props.filterByOption?.Option.name || props.searchValue)
const selectedHeader = ref(findHeader(props.filterByOption?.category.name || ''))
const isSearch = ref(props.filterByOption === null)

function getFilterableHeaders(): Header[] {
  const filterableHeaders: Header[] = []
  for (const header of headers) {
    if (header.value !== 'id' && header.value !== 'name') {
      filterableHeaders.push(header)
    }
  }
  return filterableHeaders
}

function findHeader(name : string | null): string {
  if (name === null) {
    return ''
  }
  for (const header of getFilterableHeaders()) {
    if (header.value.toLowerCase() === name.toLowerCase()) {
      return header.value
    }
  }
  return ''
}

function buildItems(): Item[] {
  const items: Item[] = []
  for (const uncertainty of allUncertainties) {
    var obj = {
      id: uncertainty.id,
      name: uncertainty.name,
      location: uncertainty.location.name,
      architecturalType: uncertainty.architecturalType.name,
      type: uncertainty.type.name,
      manageability: uncertainty.manageability.name,
      resolutionTime: uncertainty.resolutionTime.name,
      reducibleByADD: uncertainty.reducibleByADD.name,
      impactOnConfidentiality: uncertainty.impactOnConfidentiality.name,
      severityOfImpact: uncertainty.severityOfImpact.name,
      keywords: uncertainty.keywords.join(', ')
    }
    items.push(obj)
  }
  return items
}

function getUncertainty(id: number): Uncertainty {
  for (const uncertainty of allUncertainties) {
    if (uncertainty.id === id) {
      return uncertainty
    }
  }
  //TODO: Throw error
  return allUncertainties[0]
}

function toggleSearchAndFilter() {
  isSearch.value = !isSearch.value
  selectedHeader.value = ''
  searchValue.value = ''
}
function reset() {
  searchValue.value = ''
  selectedHeader.value = ''
}

function setSearchValue(searchInput: string) {
  searchValue.value = searchInput
}

function setHeader(header: string) {
  selectedHeader.value = header
}
</script>

<style scoped>
.table {
  display: block;
  margin: 0 auto;
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  background: #fff;
  color: #2c3e50;
  font-size: 1rem;
  width: 100%;
  height: 100%;
}
.entry {
  display: block;
  margin: 0 auto;
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  background: #fff;
  color: #2c3e50;
  font-size: 1rem;
  width: 100%;
  height: 100%;
}

.topBar {
  display:block;
  flex-direction: column;
  justify-content: space-between;
}

.searchBar {
  display: flex;
  flex-direction: row;
  align-items: right;
  justify-content: space-between;
  margin: 10px;
  padding: 10px;
}

.filterBar {
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: space-between;
  margin: 10px;
  padding: 10px;
}
</style>
@/util/types/Option