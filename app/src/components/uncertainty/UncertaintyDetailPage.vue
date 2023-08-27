<template>
    <header>
        <h1> {{props.uncertainty.id}} - {{ props.uncertainty.name }}</h1>
    </header>
    <main class="vertical">
        <div class="information">
            <BasicInformation :definition="props.uncertainty.definition" :description="props.uncertainty.description"/>
        </div>
        <div class="keywords">
            <KeywordComponent v-for="(keyword, index) in props.uncertainty.keywords" :keyword="keyword" :key="index" :value="keyword" @click="toggleShowKeywordResults(keyword)"/>
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
            <RelationshipItem v-for="(relation, index) in props.uncertainty.relations" :relationship="relation" :key="index" :value="relation.relatedToId" @click="$emit('selected-uncertainty-id', relation.relatedToId.toString())"/>
        </div>
        <div class="additionalHelp">
            <ExampleSectionVue :description="props.uncertainty.exampleScenario" :imagePath="imagePath" :collaborationUrl="props.uncertainty.communityAnnotationUrl"/>
        </div>
    </main>
</template>

<script setup lang="ts">
import type { Uncertainty } from '@/util/types/Uncertainty';
import {type PropType, ref} from 'vue';
import KeywordComponent from './KeywordComponent.vue';
import BasicInformation from '@/components/util/BasicInformationSection.vue';
import ClassificationItem from './ClassificationItem.vue';
import RelationshipItem from './RelationshipItem.vue';


import architecturalElementType from '@/data/categories/architecturalElementType';
import impactOnConfidentiality from '@/data/categories/impactOnConfidentiality';
import location from '@/data/categories/location'
import manageability from '@/data/categories/manageability';
import reducibleByADD from '@/data/categories/reducibleByAdd';
import resolutionTime from '@/data/categories/resolutionTime';
import severityOfImpact from '@/data/categories/severityOfImpact';
import typeManifestation from '@/data/categories/type';
import type { Category } from '@/util/types/Category';
import requirementsTime from '@/data/manifestations/resolutionTime/requirementsTime';
import ExampleSectionVue from '../util/ExampleSection.vue';


const props = defineProps({
        uncertainty: {
            type: Object as PropType<Uncertainty>,
            required: true
        },
    });

const imagePath= ref("images/uncertainties/" + props.uncertainty.exampleImagePath)

const emit = defineEmits(['selected-classification-category', 'selected-keyword', 'selected-uncertainty-id']);

function toggleShowClassification(category: Category) {
    emit('selected-classification-category', category);
}

function toggleShowKeywordResults(keyword: string) {
    emit('selected-keyword', keyword);
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
