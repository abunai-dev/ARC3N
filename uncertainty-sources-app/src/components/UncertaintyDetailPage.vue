<template>
    <div v-if="!showClassificationOverview">
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
                <ClassificationItem @showClassification="toggleShowClassification(location)" :statedcategory="location" :statedmanifestation="props.uncertainty.location"/>
                <ClassificationItem @showClassification="toggleShowClassification(typeManifestation)" :statedcategory="typeManifestation" :statedmanifestation="props.uncertainty.type"/>
                <ClassificationItem @showClassification="toggleShowClassification(architecturalElementType)" :statedcategory="architecturalElementType" :statedmanifestation="props.uncertainty.architecturalType"/>
                <ClassificationItem @showClassification="toggleShowClassification(impactOnConfidentiality)" :statedcategory="impactOnConfidentiality" :statedmanifestation="props.uncertainty.impactOnConfidentiality"/>
            </div>
            <div class ="classificationitems">
                <ClassificationItem @showClassification="toggleShowClassification(manageability)" :statedcategory="manageability" :statedmanifestation="props.uncertainty.manageability"/>
                <ClassificationItem @showClassification="toggleShowClassification(reducibleByADD)" :statedcategory="reducibleByADD" :statedmanifestation="props.uncertainty.reducibleByADD"/>
                <ClassificationItem @showClassification="toggleShowClassification(resolutionTime)" :statedcategory="resolutionTime" :statedmanifestation="props.uncertainty.resolutionTime"/>
                <ClassificationItem @showClassification="toggleShowClassification(severityOfImpact)" :statedcategory="severityOfImpact" :statedmanifestation="props.uncertainty.severityOfImpact"/>
            </div>
        </div>
        <div class="relationships">
            <p>Is parent of: {{ props.uncertainty.relationParent }}</p>
            <p>Is related to: {{ props.uncertainty.relationSibling }}</p>
        </div>
        <div class="additionalHelp">
            <p>Example of Uncertainty: {{ props.uncertainty.exampleScenario }}</p>
            <div class="image-container">
                <img :src="props.uncertainty.exampleImagePath" :alt="props.uncertainty.exampleImagePath">
            </div>
            
            <p>Find out about the ongoing discussion regarding the uncertainty: {{ props.uncertainty.communityAnnotationUrl }}</p>
            <p> {{ props.uncertainty.url }}</p>
        </div>
    </main>
    </div>
    <div v-if="showClassificationOverview" class="vertical">
        <ClassificationCategoryOverview :statedcategory="classificationToShow" :statedmanifestation="props.uncertainty.location"/>
    </div>
    

</template>

<script setup lang="ts">
import type { Uncertainty } from '@/util/types/Uncertainty';
import {type PropType, ref} from 'vue';
import KeywordComponent from './KeywordComponent.vue';
import BasicInformation from './BasicInformationSection.vue';
import ClassificationItem from './ClassificationItem.vue';
import ClassificationCategoryOverview from './CategoryOverviewPage.vue';

import architecturalElementType from '@/data/categories/architecturalElementType';
import impactOnConfidentiality from '@/data/categories/impactOnConfidentiality';
import location from '@/data/categories/location'
import manageability from '@/data/categories/manageability';
import reducibleByADD from '@/data/categories/reducibleByAdd';
import resolutionTime from '@/data/categories/resolutionTime';
import severityOfImpact from '@/data/categories/severityOfImpact';
import typeManifestation from '@/data/categories/type';
import type { Category } from '@/util/types/Category';


const props = defineProps({
        uncertainty: {
            type: Object as PropType<Uncertainty>,
            required: true
        },
    });

const showClassificationOverview = ref(false);
const classificationToShow = ref();

function toggleShowClassification(category: Category) {
    showClassificationOverview.value = !showClassificationOverview.value;
    classificationToShow.value = category;
}

</script>

<style scoped>
p {
    text-align: center;
    color: grey;
    display: block;
}

.information {
    margin: 10px;
    padding: 10px;
}

.classification {
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
    margin: 10px;
    padding: 10px;
    flex-direction: row;
}

.additionalHelp {
    margin: 10px;
    padding: 10px;
}

.vertical {
    display: flex;
    flex-direction: column;
}

.keywords {
    margin: 10px;
    padding: 10px;
    flex-direction: row;
    justify-content: center;
}

.image-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
}

img {
    max-width: 1000px;
    max-height: 400px;
}
</style>
