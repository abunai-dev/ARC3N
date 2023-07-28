<template>
  <div class="table" v-if="!openDetails">
    <EasyDataTable :headers="headers" :items="items" @click-row="showRow" v-if="items.length > 0" />
    <p v-else>No data available. Please make sure that the data server is up and running (localhost:3000)</p>
  </div>
  <div class="entry" v-if="openDetails">
    <button @click="openDetails = false">Back</button>
    <EntityDetails :uncertainty="currentUncertainty" />
  </div>
</template>

<script setup lang="ts">
import type { Header, Item, ClickRowArgument } from 'vue3-easy-data-table'
import EntityDetails from './EntityDetails.vue'
import { ref } from 'vue'
import type { Uncertainty } from '@/util/types/Uncertainty'
import axios from 'axios'


const uncertainties = await fetchData()

const headers: Header[] = [
  { text: 'ID', value: 'id' },
  { text: 'Name', value: 'name' },
  { text: 'Type', value: 'type' },
  { text: 'Location', value: 'location' },
  { text: 'Manageability', value: 'manageability' },
  { text: 'Severity Of Impact', value: 'severityOfImpact' },
  { text: 'Resolution Time', value: 'resolutionTime' },
  { text: 'Reducible by ADD', value: 'reducibleByADD' },
  { text: 'Impact On Confidentiality', value: 'impactOnConfidentiality' },
  { text: 'Architectural Element Type', value: 'architecturalType' }
]

const items: Item[] = buildItems()

var currentItemId = ref(0)
const openDetails = ref(false)
var currentUncertainty = ref(getUncertainty(currentItemId.value))
const showRow = (item: ClickRowArgument) => {
  openDetails.value = true
  var currentItemId = ref(item.id)
  currentUncertainty.value = getUncertainty(currentItemId.value)
  console.log('The row is: ' + item.id + 'The openDetails is: ' + openDetails.value)
  console.log('The current uncertainty is: ' + currentUncertainty.value.id)
}

async function fetchData(): Promise<Uncertainty[]> {
  const response = await axios.get('http://localhost:3000/').catch((error) => {
    console.log("Data could not be fetched. Please check if the data server is running! " + "\n" + "Error: " + error)
    return error
  })
  if (response.data === undefined) {
    return []
  } else {
    return parseData(response.data)
  }
}

function parseData(rawData: any): Uncertainty[] {
  const uncertainties: Uncertainty[] = []
  for (const uncertainty of rawData) {
    const obj = {
      id: uncertainty.id,
      name: uncertainty.name,
      location: uncertainty.location,
      architecturalType: uncertainty.architecturalType,
      type: uncertainty.type,
      manageability: uncertainty.manageability,
      resolutionTime: uncertainty.resolutionTime,
      reducibleByADD: uncertainty.reducibleByADD,
      impactOnConfidentiality: uncertainty.impactOnConfidentiality,
      severityOfImpact: uncertainty.severityOfImpact,
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

    console.log(
      'Uncertainty Object:' +
        '\n' +
        'ID: ' +
        obj.id +
        '\n' +
        'Name:' +
        obj.name +
        '\n' +
        'Location:' +
        obj.location +
        '\n' +
        'architecturalElementType:' +
        obj.architecturalType +
        '\n' +
        'type:' +
        obj.type +
        '\n' +
        'manageability:' +
        obj.manageability +
        '\n' +
        'resolutionTime:' +
        obj.resolutionTime +
        '\n' +
        'resolvableByADD:' +
        obj.reducibleByADD +
        '\n' +
        'impactOnConfidentiality:' +
        obj.impactOnConfidentiality +
        '\n' +
        'severityOfImpact:' +
        obj.severityOfImpact +
        '\n' +
        'relationParent:' +
        obj.relationParent +
        '\n' +
        'relationshipSibling: ' +
        obj.relationSibling +
        '\n' +
        'url:' +
        obj.url +
        '\n' +
        'description:' +
        obj.description +
        '\n' +
        'keywords:' +
        obj.keywords +
        '\n' +
        'definition:' +
        obj.definition +
        '\n' +
        'exampleScenario:' +
        obj.exampleScenario +
        '\n' +
        'exampleImagePath:' +
        obj.exampleImagePath +
        '\n' +
        'communityAnnotationUrl:' +
        obj.communityAnnotationUrl
    )
    console.log(
      'Uncertainty Object in List:' +
        '\n' +
        'ID: ' +
        uncertainties[uncertainties.length - 1].id +
        '\n' +
        'Name:' +
        uncertainties[uncertainties.length - 1].name +
        '\n' +
        'Location:' +
        uncertainties[uncertainties.length - 1].location +
        '\n' +
        'architecturalElementType:' +
        uncertainties[uncertainties.length - 1].architecturalType +
        '\n' +
        'type:' +
        uncertainties[uncertainties.length - 1].type +
        '\n' +
        'manageability:' +
        uncertainties[uncertainties.length - 1].manageability +
        '\n' +
        'resolutionTime:' +
        uncertainties[uncertainties.length - 1].resolutionTime +
        '\n' +
        'resolvableByADD:' +
        uncertainties[uncertainties.length - 1].reducibleByADD +
        '\n' +
        'impactOnConfidentiality:' +
        uncertainties[uncertainties.length - 1].impactOnConfidentiality +
        '\n' +
        'severityOfImpact:' +
        uncertainties[uncertainties.length - 1].severityOfImpact +
        '\n' +
        'relationParent:' +
        uncertainties[uncertainties.length - 1].relationParent +
        '\n' +
        'relationshipSibling: ' +
        uncertainties[uncertainties.length - 1].relationSibling +
        '\n' +
        'url:' +
        uncertainties[uncertainties.length - 1].url +
        '\n' +
        'description:' +
        uncertainties[uncertainties.length - 1].description +
        '\n' +
        'keywords:' +
        uncertainties[uncertainties.length - 1].keywords +
        '\n' +
        'definition:' +
        uncertainties[uncertainties.length - 1].definition +
        '\n' +
        'exampleScenario:' +
        uncertainties[uncertainties.length - 1].exampleScenario +
        '\n' +
        'exampleImagePath:' +
        uncertainties[uncertainties.length - 1].exampleImagePath +
        '\n' +
        'communityAnnotationUrl:' +
        uncertainties[uncertainties.length - 1].communityAnnotationUrl
    )
  }
  return uncertainties
}

function buildItems(): Item[] {
  const items: Item[] = []
  for (const uncertainty of uncertainties) {
    var obj = {
      id: uncertainty.id,
      name: uncertainty.name,
      location: uncertainty.location,
      architecturalType: uncertainty.architecturalType,
      type: uncertainty.type,
      manageability: uncertainty.manageability,
      resolutionTime: uncertainty.resolutionTime,
      reducibleByADD: uncertainty.reducibleByADD,
      impactOnConfidentiality: uncertainty.impactOnConfidentiality,
      severityOfImpact: uncertainty.severityOfImpact
    }

    items.push(obj)
    console.log(
      'Table Item:' +
        '\n' +
        'ID: ' +
        obj.id +
        '\n' +
        'Name:' +
        obj.name +
        '\n' +
        'Location:' +
        obj.location +
        '\n' +
        'architecturalElementType:' +
        obj.architecturalType +
        '\n' +
        'type:' +
        obj.type +
        '\n' +
        'manageability:' +
        obj.manageability +
        '\n' +
        'resolutionTime:' +
        obj.resolutionTime +
        '\n' +
        'resolvableByADD:' +
        obj.reducibleByADD +
        '\n' +
        'impactOnConfidentiality:' +
        obj.impactOnConfidentiality +
        '\n' +
        'severityOfImpact' +
        obj.severityOfImpact
    )

    console.log(
      'Table Item in List:' +
        '\n' +
        ' ID: ' +
        items[items.length - 1].id +
        'Name:' +
        items[items.length - 1].name +
        '\n' +
        'Location:' +
        items[items.length - 1].location +
        '\n' +
        'architecturalElementType:' +
        items[items.length - 1].architecturalElementType +
        '\n' +
        'type:' +
        items[items.length - 1].type +
        '\n' +
        'manageability:' +
        items[items.length - 1].manageability +
        '\n' +
        'resolutionTime:' +
        items[items.length - 1].resolutionTime +
        '\n' +
        'resolvableByADD:' +
        items[items.length - 1].reducibleByADD +
        '\n' +
        'impactOnConfidentiality:' +
        items[items.length - 1].impactOnConfidentiality +
        '\n' +
        'severityOfImpact' +
        items[items.length - 1].severityOfImpact
    )
  }
  console.log('Items: ' + items.toString())
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
</style>
