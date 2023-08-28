<template>
    <div class="Name">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required/>
    </div>
    <div class="Location">
        <CategoryOptionForm :category="location" @selectedOption="(option: Manifestation) => chosenLocation = option" />
    </div>
    <div class="ArchitecturalElementType">
        <CategoryOptionForm :category="architecturalElementType" @selectedOption="(option: Manifestation) => chosenArchitecturalElementType = option" />
    </div>
    <div class="Type">
        <CategoryOptionForm :category="type" @selectedOption="(option: Manifestation) => chosenType = option" />
    </div>
    <div class="Manageability">
        <CategoryOptionForm :category="manageability" @selectedOption="(option: Manifestation) => chosenManageability = option" />
    </div>
    <div class="Resolution Time">
        <CategoryOptionForm :category="resolutionTime" @selectedOption="(option: Manifestation) => chosenResolutionTime = option" />
    </div>
    <div class="Reducible-By-Add">
        <CategoryOptionForm :category="reducibleByAdd" @selectedOption="(option: Manifestation) => chosenReducibleByAdd = option" />
    </div>
    <div class="Impact-On-Confidentiality">
        <CategoryOptionForm :category="impactOnConfidentiality" @selectedOption="(option: Manifestation) => chosenImpactOnConfidentiality = option" />
    </div>
    <div class="Severity-Of-Impact">
        <CategoryOptionForm :category="severityOfImpact" @selectedOption="(option: Manifestation) => chosenSeverityOfImpact = option" />
    </div>
    <div class="Definition">
        <label for="definition">Definition:</label>
        <input type="text" id="definition" v-model="definition" required/>
    </div>
    <div class="relationship">
        <p>TODO: Can choose Uncertainty related to</p>
    </div>
    <div class="description">
        <label for="description">Description:</label>
        <input type="text" id="description" v-model="description"/>
    </div>
    <div class="keyword">
        <p>TODO: Can Choose multiple keywords</p>
    </div>
    <div class="exampleScenario">
        <label for="exampleScenario">Example:</label>
        <input type="text" id="exampleScenario" v-model="exampleScenario"/>
    </div>
    <div class="exampleImage">
        <p>TODO: Figure out how to process potential image</p>
    </div>
    <div class="Submit" v-if="isValidInput()">
        <button @click="sendData()">Submit</button>
    </div>

</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';
import location  from '@/data/categories/location';
import CategoryOptionForm from './CategoryOptionForm.vue';
import type { Manifestation } from '@/util/types/Manifestation';
import architecturalElementType from '@/data/categories/architecturalElementType';
import type from '@/data/categories/type';
import manageability from '@/data/categories/manageability';
import resolutionTime from '@/data/categories/resolutionTime';
import reducibleByAdd from '@/data/categories/reducibleByAdd';
import impactOnConfidentiality from '@/data/categories/impactOnConfidentiality';
import severityOfImpact from '@/data/categories/severityOfImpact';

const name = ref('');
const chosenLocation : Ref<Manifestation | null> = ref(null)
const chosenArchitecturalElementType: Ref<Manifestation | null> = ref(null)
const chosenType: Ref<Manifestation | null> = ref(null)
const chosenManageability: Ref<Manifestation | null> = ref(null)
const chosenResolutionTime: Ref<Manifestation | null> = ref(null)
const chosenReducibleByAdd: Ref<Manifestation | null> = ref(null)
const chosenImpactOnConfidentiality: Ref<Manifestation | null> = ref(null)
const chosenSeverityOfImpact: Ref<Manifestation | null> = ref(null)
const description = ref('');
const definition = ref('');
const exampleScenario = ref('');


function isValidInput(): boolean {
    return name.value != '' && chosenLocation.value != null && chosenArchitecturalElementType.value != null 
        && chosenType.value != null && chosenManageability.value != null && chosenResolutionTime.value != null 
        && chosenReducibleByAdd.value != null && chosenImpactOnConfidentiality.value != null && chosenSeverityOfImpact.value != null
        && definition.value != '';
}

function sendData() {
    const payload = {
        name: name.value,
        location: chosenLocation.value,
        architecturalElementType: chosenArchitecturalElementType.value,
        type: chosenType.value,
        manageability: chosenManageability.value,
        resolutionTime: chosenResolutionTime.value,
        reducibleByAdd: chosenReducibleByAdd.value,
        impactOnConfidentiality: chosenImpactOnConfidentiality.value,
        severityOfImpact: chosenSeverityOfImpact.value,
        definition: definition.value,
        description: description.value,
        exampleScenario: exampleScenario.value
    };

    fetch('https://api.github.com/repos/abunai-dev/UncertaintySourceArchive/actions/workflows/create-pull-request-on-new-uncertainty-input/dispatches',
    {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ',
            'Accept': 'application/vnd.github.v3+json'
        },
        body: JSON.stringify({
            ref: 'main',
            inputs: {
                payload: JSON.stringify(payload)
            }
        })
    }).then(response => response.json()).then(data => console.log(data)).catch(error => console.log(error));

    //TODO: Create Repository secret
}
</script>