<template>
    <header>
        <h1> {{props.uncertainty.id}} - {{ props.uncertainty.name }}</h1>
    </header>
    <main class="vertical">
        <div class="information">
            <BasicInformation :definition="props.uncertainty.definition" :description="props.uncertainty.description"/>
        </div>
        <div class="keywords">
            <KeywordComponent v-for="(keyword, index) in props.uncertainty.keywords" :keyword="keyword" :key="index"/>
        </div>
        <div class="classification">
            <div class = "classificationitems">
                <ClassificationItem statedcategory="Location" :statedmanifestation="props.uncertainty.location"/>
                <ClassificationItem statedcategory="Type" :statedmanifestation="props.uncertainty.type"/>
                <ClassificationItem statedcategory="Architectural Element Type" :statedmanifestation="props.uncertainty.architecturalType"/>
                <ClassificationItem statedcategory="Impact on Confidentiality" :statedmanifestation="props.uncertainty.impactOnConfidentiality"/>
            </div>
            <div class ="classificationitems">
                <ClassificationItem statedcategory="Manageability" :statedmanifestation="props.uncertainty.manageability"/>
                <ClassificationItem statedcategory="Reducible by ADD" :statedmanifestation="props.uncertainty.reducibleByADD"/>
                <ClassificationItem statedcategory="Resolution Time" :statedmanifestation="props.uncertainty.resolutionTime"/>
                <ClassificationItem statedcategory="Severity of Impact" :statedmanifestation="props.uncertainty.severityOfImpact"/>
            </div>
        </div>
        <div class="relationships">
            <p>Is parent of: {{ props.uncertainty.relationParent }}</p>
            <p>Is related to: {{ props.uncertainty.relationSibling }}</p>
        </div>
        <div class="additionalHelp">
            <p>Example of Uncertainty: {{ props.uncertainty.exampleScenario }}</p>
            <p> {{ props.uncertainty.exampleImagePath }}</p>
            <p>Find out about the ongoing discussion regarding the uncertainty: {{ props.uncertainty.communityAnnotationUrl }}</p>
            <p> {{ props.uncertainty.url }}</p>
        </div>
    </main>
    

</template>

<script setup lang="ts">
import type { Uncertainty } from '@/util/types/Uncertainty';
import {type PropType, ref } from 'vue';
import KeywordComponent from './KeywordComponent.vue';
import BasicInformation from './BasicInformation.vue';
import ClassificationItem from './ClassificationItem.vue';

const props = defineProps({
        uncertainty: {
            type: Object as PropType<Uncertainty>,
            required: true
        },
    });


</script>

<style scoped>
p {
    text-align: center;
    color: grey;
    display: block;
}

.information {
    border: 1px solid black;
    margin: 10px;
    padding: 10px;
}

.classification {
    border: 1px solid black;
    margin: 10px;
    padding: 10px;
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
}
.classificationitems {
    margin: 10px;
    padding: 10px;
    display: block;
    flex-direction: column;
}

.classificationitems p {
    text-align: left;
}

.relationships {
    border: 1px solid black;
    margin: 10px;
    padding: 10px;
    flex-direction: row;
}

.additionalHelp {
    border: 1px solid black;
    margin: 10px;
    padding: 10px;
}

.vertical {
    display: flex;
    flex-direction: column;
}

.keywords {
    border: 1px solid black;
    margin: 10px;
    padding: 10px;
    flex-direction: row;
    justify-content: center;
}
</style>
