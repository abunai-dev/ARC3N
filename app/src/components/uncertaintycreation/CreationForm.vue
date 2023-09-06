<template>
    <div class="Name">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required/>
    </div>
    <div class="Location">
        <CategoryOptionForm :category="location" @selectedOption="(option: Option) => chosenLocation = option.name" />
    </div>
    <div class="ArchitecturalElementType">
        <CategoryOptionForm :category="architecturalElementType" @selectedOption="(option: Option) => chosenArchitecturalElementType = option.name" />
    </div>
    <div class="Type">
        <CategoryOptionForm :category="type" @selectedOption="(option: Option) => chosenType = option.name" />
    </div>
    <div class="Manageability">
        <CategoryOptionForm :category="manageability" @selectedOption="(option: Option) => chosenManageability = option.name" />
    </div>
    <div class="Resolution Time">
        <CategoryOptionForm :category="resolutionTime" @selectedOption="(option: Option) => chosenResolutionTime = option.name" />
    </div>
    <div class="Reducible-By-Add">
        <CategoryOptionForm :category="reducibleByAdd" @selectedOption="(option: Option) => chosenReducibleByAdd = option.name" />
    </div>
    <div class="Impact-On-Confidentiality">
        <CategoryOptionForm :category="impactOnConfidentiality" @selectedOption="(option: Option) => chosenImpactOnConfidentiality = option.name" />
    </div>
    <div class="Severity-Of-Impact">
        <CategoryOptionForm :category="severityOfImpact" @selectedOption="(option: Option) => chosenSeverityOfImpact = option.name" />
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
        <button @click="runSubmitProcess()">Submit</button>
    </div>

</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';
import location  from '@/data/categories/location';
import CategoryOptionForm from './CategoryOptionForm.vue';
import type { Option } from '@/util/types/Option';
import architecturalElementType from '@/data/categories/architecturalElementType';
import type from '@/data/categories/type';
import manageability from '@/data/categories/manageability';
import resolutionTime from '@/data/categories/resolutionTime';
import reducibleByAdd from '@/data/categories/reducibleByAdd';
import impactOnConfidentiality from '@/data/categories/impactOnConfidentiality';
import severityOfImpact from '@/data/categories/severityOfImpact';

import Swal from 'sweetalert2';
import type {SweetAlertResult} from 'sweetalert2';

const name = ref('');
const chosenLocation : Ref<string> = ref('')
const chosenArchitecturalElementType: Ref<string> = ref('')
const chosenType: Ref<string> = ref('')
const chosenManageability: Ref<string> = ref('')
const chosenResolutionTime: Ref<string> = ref('')
const chosenReducibleByAdd: Ref<string> = ref('')
const chosenImpactOnConfidentiality: Ref<string> = ref('')
const chosenSeverityOfImpact: Ref<string> = ref('')
const description = ref('');
const definition = ref('');
const exampleScenario = ref('');
const newIssueUrl = ref('');



function isValidInput(): boolean {
    return name.value != '' && chosenLocation.value != '' && chosenArchitecturalElementType.value != '' 
        && chosenType.value != '' && chosenManageability.value != '' && chosenResolutionTime.value != '' 
        && chosenReducibleByAdd.value != '' && chosenImpactOnConfidentiality.value != '' && chosenSeverityOfImpact.value != ''
        && definition.value != '';
}

async function runSubmitProcess() {
    if (isValidInput()) {
        createIssueUrl();
        await Swal.fire({
        title: 'Thank you for your contribution!',
        text: 'By clicking ok, you will be send to the github page to create a new issue with your uncertainty proposal. \n The form is already filled with your proposed changes.' + 
        'Please review your proposed changes, but do not change the format of the form. Additional comments can be added after the issue creation.',
        icon: 'info',
        confirmButtonText: 'Ok',
}).then((result : SweetAlertResult) => {
        if (result.value) {
            window.open(newIssueUrl.value);
            return true;
        } else {
            return false;
        }
    });
    }
    
}



function createIssueUrl() {

    const body = `{
        %0A
        "name": "${name.value}",
        %0A
        "location": "${chosenLocation.value}",
        %0A
        "architecturalElementType": "${chosenArchitecturalElementType.value}",
        %0A
        "type": "${chosenType.value}",
        %0A
        "manageability": "${chosenManageability.value}",
        %0A
        "resolutionTime": "${chosenResolutionTime.value}",
        %0A
        "reducibleByAdd": "${chosenReducibleByAdd.value}",
        %0A
        "impactOnConfidentiality": "${chosenImpactOnConfidentiality.value}",
        %0A
        "severityOfImpact": "${chosenSeverityOfImpact.value}",
        %0A
        "definition": "${definition.value}",
        %0A
        "description": "${description.value}",
        %0A
        "exampleScenario": "${exampleScenario.value}"
        %0A
    }`;

    const title = `New Uncertainty Proposal - ${name.value}`;

    newIssueUrl.value = `https://github.com/abunai-dev/UncertaintySourceArchive/issues/new?title=${title}&body=${body}`;
}
</script>@/util/types/Option