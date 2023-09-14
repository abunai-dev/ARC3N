<template>
  <div class="table">
    <div v-if="items.length > 0">
      <div class="topBar">
        <div class="searchBar">
          <SearchBar :search-value="tableState.searchValue" @reset="tableState.searchValue=''" />
        </div>
      </div>
      <EasyDataTable table-class-name="customize-table" 
        :filter-options="filterOptions" 
        :headers="headers" 
        :items="items" 
        @click-row="setSelectedUncertainty" 
        :search-value="tableState.searchValue" 
        :sort-by="sortBy" 
        :sort-type="sortType" 
        header-text-direction="center" 
        body-text-direction="center">
        <template #header-keywords="header">
          <div class="filter-column">
            <img src="/images/filter.png" class="filter-icon" @click.stop="showKeywwordFilter =!showKeywwordFilter, tableState.selectedKeyword='all'">
              {{ header.text }}
            <div class="filter-menu filter-keywords-menu" v-if="showKeywwordFilter">
              <select
                class="keyword-selector"
                v-model="tableState.selectedKeyword"
                name="keyword">
              <option v-for="keywordoption in Object.values(Keyword)" :key="keywordoption" :value="keywordoption">
              {{keywordoption}}
              </option>
              <option>all</option>
          </select>
        </div>
      </div>
    </template>
    <template #header-location="header">
          <div class="filter-column">
            <img src="/images/filter.png" class="filter-icon" @click.stop="showLocationFilter =!showLocationFilter, tableState.selectedLocation='all'">
              {{ header.text }}
            <div class="filter-menu filter-location-menu" v-if="showLocationFilter">
              <select
                class="location-selector"
                v-model="tableState.selectedLocation"
                name="location">
              <option v-for="locationoption in location.options" :key="locationoption.name" :value="locationoption.name">
              {{locationoption.name}}
              </option>
              <option>all</option>
          </select>
        </div>
      </div>
    </template>
    <template #header-architecturalelementtype="header">
          <div class="filter-column">
            <img src="/images/filter.png" class="filter-icon" @click.stop=" showArchitecturalTypeFilter =!showArchitecturalTypeFilter, tableState.selectedArchitecturalType='all'">
              {{ header.text }}
            <div class="filter-menu filter-architecturalelementtype-menu" v-if="showArchitecturalTypeFilter">
              <select
                class="architecturalelementtype-selector"
                v-model="tableState.selectedArchitecturalType"
                name="architecturalelementtype">
              <option v-for="aetoption in architecturalElementType.options" :key="aetoption.name" :value="aetoption.name">
              {{aetoption.name}}
              </option>
              <option>all</option>
          </select>
        </div>
      </div>
    </template>
    <template #header-type="header">
          <div class="filter-column">
            <img src="/images/filter.png" class="filter-icon" @click.stop=" showTypeFilter =!showTypeFilter, tableState.selectedType='all'">
              {{ header.text }}
            <div class="filter-menu filter-type-menu" v-if="showTypeFilter">
              <select
                class="type-selector"
                v-model="tableState.selectedType"
                name="type">
              <option v-for="typeoption in type.options" :key="typeoption.name" :value="typeoption.name">
              {{typeoption.name}}
              </option>
              <option>all</option>
          </select>
        </div>
      </div>
    </template>
    <template #header-manageability="header">
          <div class="filter-column">
            <img src="/images/filter.png" class="filter-icon" @click.stop="showManageabilityFilter =!showManageabilityFilter, tableState.selectedManageability='all'">
              {{ header.text }}
            <div class="filter-menu filter-manageability-menu" v-if="showManageabilityFilter">
              <select
                class="manageability-selector"
                v-model="tableState.selectedManageability"
                name="manageability">
              <option v-for="manageabilityoption in manageability.options" :key="manageabilityoption.name" :value="manageabilityoption.name">
              {{manageabilityoption.name}}
              </option>
              <option>all</option>
          </select>
        </div>
      </div>
    </template>
    <template #header-resolutiontime="header">
          <div class="filter-column">
            <img src="/images/filter.png" class="filter-icon" @click.stop=" showResolutionTimeFilter =!showResolutionTimeFilter, tableState.selectedResolutionTime='all'">
              {{ header.text }}
            <div class="filter-menu filter-resolutiontime-menu" v-if="showResolutionTimeFilter">
              <select
                class="resolutiontime-selector"
                v-model="tableState.selectedResolutionTime"
                name="resolutiontime">
              <option v-for="restimeoption in resolutionTime.options" :key="restimeoption.name" :value="restimeoption.name">
              {{restimeoption.name}}
              </option>
              <option>all</option>
          </select>
        </div>
      </div>
    </template>
    <template #header-reduciblebyadd="header">
          <div class="filter-column">
            <img src="/images/filter.png" class="filter-icon" @click.stop=" showReducibleByAddFilter =!showReducibleByAddFilter, tableState.selectedReducibleByAdd='all'">
              {{ header.text }}
            <div class="filter-menu filter-reduciblebyadd-menu" v-if="showReducibleByAddFilter">
              <select
                class="reduciblebyadd-selector"
                v-model="tableState.selectedReducibleByAdd"
                name="reduciblebyadd">
              <option v-for="reducibleoption in reducibleByAdd.options" :key="reducibleoption.name" :value="reducibleoption.name">
              {{reducibleoption.name}}
              </option>
              <option>all</option>
          </select>
        </div>
      </div>
    </template>
    <template #header-impactonconfidentiality="header">
          <div class="filter-column">
            <img src="/images/filter.png" class="filter-icon" @click.stop=" showImpactOnConfidentialityFilter =!showImpactOnConfidentialityFilter, tableState.selectedImpactOnConfidentiality='all'">
              {{ header.text }}
            <div class="filter-menu filter-impactonconfidentiality-menu" v-if="showImpactOnConfidentialityFilter">
              <select
                class="impactonconfidentiality-selector"
                v-model="tableState.selectedImpactOnConfidentiality"
                name="impactonconfidentiality">
              <option v-for="iocoption in impactOnConfidentiality.options" :key="iocoption.name" :value="iocoption.name">
              {{iocoption.name}}
              </option>
              <option>all</option>
          </select>
        </div>
      </div>
    </template>
    <template #header-severityofimpact="header">
          <div class="filter-column">
            <img src="/images/filter.png" class="filter-icon" @click.stop=" showSeverityOfImpactFilter =!showSeverityOfImpactFilter, tableState.selectedSeverityOfImpact='all'">
              {{ header.text }}
            <div class="filter-menu filter-severityofimpact-menu" v-if="showSeverityOfImpactFilter">
              <select
                class="severityofimpact-selector"
                v-model="tableState.selectedSeverityOfImpact"
                name="severityofimpact">
              <option v-for="soioption in severityOfImpact.options" :key="soioption.name" :value="soioption.name">
              {{soioption.name}}
              </option>
              <option>all</option>
          </select>
        </div>
      </div>
    </template>
    <template #loading>
      <img src="https://i.pinimg.com/originals/94/fd/2b/94fd2bf50097ade743220761f41693d5.gif" style="width: 100px;height: 80px;"/>
    </template>
      </EasyDataTable>
    </div>
    <div v-else>
      <p>No data available.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Header, Item, ClickRowArgument, SortType, FilterOption } from 'vue3-easy-data-table'
import { ref, type PropType, type Ref, computed } from 'vue'
import type { Uncertainty } from '@/util/types/Uncertainty'
import uncertainties from '@/data/uncertainties'
import type { Category } from '@/util/types/Category'
import type { Option } from '@/util/types/Option'
import { tableState } from '@/util/types/TableState'
import categories from '@/util/scripts/categories'
import { Keyword } from '@/util/types/Keyword'

import SearchBar from '@/components/table/SearchBar.vue'
import location from '@/data/categories/location'
import architecturalElementType from '@/data/categories/architecturalElementType'
import type from '@/data/categories/type'
import manageability from '@/data/categories/manageability'
import resolutionTime from '@/data/categories/resolutionTime'
import reducibleByAdd from '@/data/categories/reducibleByAdd'
import impactOnConfidentiality from '@/data/categories/impactOnConfidentiality'
import severityOfImpact from '@/data/categories/severityOfImpact'

const allUncertainties = uncertainties
const items: Item[] = buildItems()
var currentItemId = ref(0)
var currentUncertainty = ref(getUncertainty(currentItemId.value))
const headers: Header[] = [
  { text: 'ID', value: 'id', sortable:true},
  { text: 'Name', value: 'name' },
  { text: 'Keywords', value: 'keywords'},
  { text: 'Location', value: 'location' , sortable:true},
  { text: 'Architectural Element Type', value: 'architecturalelementtype', sortable:true },
  { text: 'Type', value: 'type' , sortable:true},
  { text: 'Manageability', value: 'manageability' , sortable:true},
  { text: 'Resolution Time', value: 'resolutiontime' , sortable:true},
  { text: 'Reducible by ADD', value: 'reduciblebyadd' , sortable:true},
  { text: 'Impact On Confidentiality', value: 'impactonconfidentiality', sortable:true},
  { text: 'Severity Of Impact', value: 'severityofimpact' , sortable:true}
]
const showKeywwordFilter = ref(tableState.selectedKeyword !== 'all')
const showLocationFilter = ref(tableState.selectedLocation !== 'all')
const showArchitecturalTypeFilter = ref(tableState.selectedArchitecturalType !== 'all')
const showTypeFilter = ref(tableState.selectedType !== 'all')
const showManageabilityFilter = ref(tableState.selectedManageability !== 'all')
const showResolutionTimeFilter = ref(tableState.selectedResolutionTime !== 'all')
const showReducibleByAddFilter = ref(tableState.selectedReducibleByAdd !== 'all')
const showImpactOnConfidentialityFilter = ref(tableState.selectedImpactOnConfidentiality !== 'all')
const showSeverityOfImpactFilter = ref(tableState.selectedSeverityOfImpact !== 'all')


const filterOptions = computed((): FilterOption[] => {
  const filterOptionsArray: FilterOption[] = [];
  if (tableState.selectedKeyword !== 'all') {
    filterOptionsArray.push({
      field: 'keywords',
      comparison: '=',
      criteria: tableState.selectedKeyword
    })
  }
  if (tableState.selectedLocation !== 'all') {
    filterOptionsArray.push({
      field: 'location',
      comparison: '=',
      criteria: tableState.selectedLocation
    })
  }
  if (tableState.selectedArchitecturalType !== 'all') {
    filterOptionsArray.push({
      field: 'architecturalelementtype',
      comparison: '=',
      criteria: tableState.selectedArchitecturalType
    })
  }
  if (tableState.selectedType !== 'all') {
    filterOptionsArray.push({
      field: 'type',
      comparison: '=',
      criteria: tableState.selectedType
    })
  }
  if (tableState.selectedManageability !== 'all') {
    filterOptionsArray.push({
      field: 'manageability',
      comparison: '=',
      criteria: tableState.selectedManageability
    })
  }
  if (tableState.selectedResolutionTime !== 'all') {
    filterOptionsArray.push({
      field: 'resolutiontime',
      comparison: '=',
      criteria: tableState.selectedResolutionTime
    })
  }
  if (tableState.selectedReducibleByAdd !== 'all') {
    filterOptionsArray.push({
      field: 'reduciblebyadd',
      comparison: '=',
      criteria: tableState.selectedReducibleByAdd
    })
  }
  if (tableState.selectedImpactOnConfidentiality !== 'all') {
    filterOptionsArray.push({
      field: 'impactonconfidentiality',
      comparison: '=',
      criteria: tableState.selectedImpactOnConfidentiality
    })
  }
  if (tableState.selectedSeverityOfImpact !== 'all') {
    filterOptionsArray.push({
      field: 'severityofimpact',
      comparison: '=',
      criteria: tableState.selectedSeverityOfImpact
    })
  }
  return filterOptionsArray
});
const sortType: SortType = 'asc';
const sortBy = ref('id')
const emit = defineEmits(['selected-uncertainty']) 

const setSelectedUncertainty = (item: ClickRowArgument) => {
  var currentItemId = ref(item.id)
  currentUncertainty.value = getUncertainty(currentItemId.value)
  console.log('Emitted the current uncertainty: ' + currentUncertainty.value.id)
  emit('selected-uncertainty', currentUncertainty.value)
}

function buildItems(): Item[] {
  const items: Item[] = []
  for (const uncertainty of allUncertainties) {
    var obj = {
      id: uncertainty.id,
      name: uncertainty.name,
      location: uncertainty.location.name,
      architecturalelementtype: uncertainty.architecturalType.name,
      type: uncertainty.type.name,
      manageability: uncertainty.manageability.name,
      resolutiontime: uncertainty.resolutionTime.name,
      reduciblebyadd: uncertainty.reducibleByADD.name,
      impactonconfidentiality: uncertainty.impactOnConfidentiality.name,
      severityofimpact: uncertainty.severityOfImpact.name,
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

.filter-icon {
  cursor: pointer;
  display: inline-block;
  width: 15px !important;
  height: 15px !important;
  margin-right: 4px;
}
</style>
@/util/types/Option