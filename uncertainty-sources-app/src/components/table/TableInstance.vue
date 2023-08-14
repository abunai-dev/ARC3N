<template>
  <div class="table">
    <div v-if="items.length > 0">
      <div class="topBar">
        <div class="searchBar" v-if="isSearch">
          <button @click="isSearch=false; searchValue=''">Filter</button>
          <div class="input">
            <span>search value:</span>
            <input type="text" v-model="searchValue"/>
            <button @click="reset">Reset</button>
          </div>
        </div>
        <div class="filterBar" v-else>
          <div class="filter">
            <span>filter by:</span>
            <select v-model="selectedHeader" @change="searchValue=''">
              <option v-for="header in getFilterableHeaders()" :key="header.text" :value="header.value">{{ header.text }}</option>
            </select>

            <span class="filter-options" v-if="selectedHeader !== ''">
              <select v-model="searchValue">
                <option v-for="option in filterOptions(selectedHeader)" :key="option"> {{ option }}</option>
              </select>
            </span>
            <button @click="reset">Reset</button>
          </div>
          <button @click="isSearch=true; searchValue=''; selectedHeader=''">Search</button>
        </div>
      </div>
      <EasyDataTable :headers="headers" :items="items" @click-row="setSelectedUncertainty" :search-field=selectedHeader :search-value="searchValue" v-if="selectedHeader !== ''" :sort-by="sortBy" :sort-type="sortType" />
      <EasyDataTable :headers="headers" :items="items" @click-row="setSelectedUncertainty" :search-value="searchValue" :sort-by="sortBy" :sort-type="sortType" v-else />
    </div>
    <div v-else>
      <p>
        No data available. <br><br>
        Please make sure that the data server is up and running (localhost:3000). <br>
        Start the server by running "Node server.js" in the terminal of the data folder (./uncertainty-sources/PostJSON).
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Header, Item, ClickRowArgument, SortType } from 'vue3-easy-data-table'

import axios from 'axios'
import { ref, type PropType } from 'vue'

import type { Uncertainty } from '@/util/types/Uncertainty'

import { architecturalTypeMapping }from '@/util/scripts/manifestationMapping/architecturalTypeMapping'
import {impactOnConfidentialityMapping} from '@/util/scripts/manifestationMapping/impactOnConfidentialityMapping'
import {locationMapping} from '@/util/scripts/manifestationMapping/locationMapping'
import {manageabilityMapping} from '@/util/scripts/manifestationMapping/manageabilityMapping'
import {reducibleByAddMapping} from '@/util/scripts/manifestationMapping/reducibleByAddMapping'
import {resolutionTimeMapping} from '@/util/scripts/manifestationMapping/resolutionTimeMapping'
import {severityOfImpactMapping} from '@/util/scripts/manifestationMapping/severityOfImpactMapping'
import {typeMapping} from '@/util/scripts/manifestationMapping/typeMapping'

import { getArchitecturalTypeNames } from '@/util/scripts/manifestationMapping/architecturalTypeMapping'
import { getImpactOnConfidentialityNames } from '@/util/scripts/manifestationMapping/impactOnConfidentialityMapping'
import { getLocationNames } from '@/util/scripts/manifestationMapping/locationMapping'
import { getManageabilityNames } from '@/util/scripts/manifestationMapping/manageabilityMapping'
import { getReducibleByAddNames } from '@/util/scripts/manifestationMapping/reducibleByAddMapping'
import { getResolutionTimeNames } from '@/util/scripts/manifestationMapping/resolutionTimeMapping'
import { getSeverityOfImpactNames } from '@/util/scripts/manifestationMapping/severityOfImpactMapping'
import { getTypeNames } from '@/util/scripts/manifestationMapping/typeMapping'
import type { Category } from '@/util/types/Category'
import type { Manifestation } from '@/util/types/Manifestation'

const props = defineProps({
  filterByOption: {
    type: Object as PropType<{category: Category, manifestation: Manifestation} | null>,
    default: null
  },
  searchValue: {
    type: String,
    default: ''
  }
})
const uncertainties = await fetchData()
const items: Item[] = buildItems()
var currentItemId = ref(0)
var currentUncertainty = ref(getUncertainty(currentItemId.value))
const headers: Header[] = [
  { text: 'ID', value: 'id', sortable:true},
  { text: 'Name', value: 'name' },
  { text: 'Type', value: 'type' , sortable:true},
  { text: 'Location', value: 'location' , sortable:true},
  { text: 'Manageability', value: 'manageability' , sortable:true},
  { text: 'Severity Of Impact', value: 'severityOfImpact' , sortable:true},
  { text: 'Resolution Time', value: 'resolutionTime' , sortable:true},
  { text: 'Reducible by ADD', value: 'reducibleByADD' , sortable:true},
  { text: 'Impact On Confidentiality', value: 'impactOnConfidentiality', sortable:true},
  { text: 'Architectural Element Type', value: 'architecturalType', sortable:true }
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

const searchValue = ref(props.filterByOption?.manifestation.name || props.searchValue)
const selectedHeader = ref(findHeader(props.filterByOption?.category.name || ''))
const isSearch = ref(props.filterByOption === null)

async function fetchData(): Promise<Uncertainty[]> {
  const response = await axios.get('http://localhost:3000/uncertainties').catch((error) => {
    console.log("Data could not be fetched. Please check if the data server is running! " + "\n" + "Error: " + error)
    return error
  })
  if (response.data === undefined) {
    return []
  } else {
    return parseData(response.data)
  }
}

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

function parseData(rawData: any): Uncertainty[] {
  const uncertainties: Uncertainty[] = []
  for (const uncertainty of rawData) {
    try {
    const obj : Uncertainty = {
      id: uncertainty.id,
      name: uncertainty.name,
      location: locationMapping(uncertainty.location),
      architecturalType: architecturalTypeMapping(uncertainty.architecturalType),
      type: typeMapping(uncertainty.type),
      manageability: manageabilityMapping(uncertainty.manageability),
      resolutionTime: resolutionTimeMapping(uncertainty.resolutionTime),
      reducibleByADD: reducibleByAddMapping(uncertainty.reducibleByADD),
      impactOnConfidentiality: impactOnConfidentialityMapping(uncertainty.impactOnConfidentiality),
      severityOfImpact: severityOfImpactMapping(uncertainty.severityOfImpact),
      relationParent: uncertainty.relationParent,
      relationSibling: uncertainty.relationSibling,
      url: uncertainty.url,
      description: uncertainty.description,
      keywords: uncertainty.keywords,
      definition: uncertainty.definition,
      exampleScenario: uncertainty.exampleScenario,
      exampleImagePath: uncertainty.exampleImagePath,
      communityAnnotationUrl: uncertainty.communityAnnotationUrl
    }
    uncertainties.push(obj)
  } catch (error) {
    console.log("Error while parsing data on Uncertainty: "+ uncertainty.name + "\n" + "Error: " + error + "\n" + "Data is being skipped!")
  }
    console.log('Uncertainty Object Name: ' + uncertainties[uncertainties.length - 1].name + '\n')
  }
  return uncertainties
}

function buildItems(): Item[] {
  const items: Item[] = []
  for (const uncertainty of uncertainties) {
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
      severityOfImpact: uncertainty.severityOfImpact.name
    }
    items.push(obj)
  }
  return items
}

function getUncertainty(id: number): Uncertainty {
  for (const uncertainty of uncertainties) {
    if (uncertainty.id === id) {
      return uncertainty
    }
  }
  //TODO: Throw error
  return uncertainties[0]
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

function reset() {
  searchValue.value = ''
  selectedHeader.value = ''
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
