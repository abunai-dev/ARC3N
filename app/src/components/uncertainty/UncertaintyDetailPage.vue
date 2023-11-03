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
            <ClassificationSection :uncertainty="props.uncertainty" @showClassification="toggleShowClassification"/>
        </div>
        <div class="relationships">
            <RelationshipItem v-for="(relation, index) in props.uncertainty.relations" :relationship="relation" :key="index" :value="relation.relatedToId" @click="$emit('selected-uncertainty-id', relation.relatedToId.toString())"/>
        </div>
        <div class="additionalHelp">
            <ExampleSection header="Example Section" :description="props.uncertainty.exampleScenario" :imagePath="imagePath" :collaborationUrl="props.uncertainty.communityAnnotationUrl"/>
        </div>
    </main>
</template>

<script setup lang="ts">
import type { Uncertainty } from '@/util/types/Uncertainty';
import {type PropType, ref} from 'vue';
import KeywordComponent from './KeywordComponent.vue';
import BasicInformation from '@/components/util/BasicInformationSection.vue';
import ClassificationSection from './ClassificationSection.vue';
import RelationshipItem from './RelationshipItem.vue';
import type { Category } from '@/util/types/Category';
import ExampleSection from '../util/ExampleSection.vue';


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
    console.log("The keyword is: " + keyword);
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


.relationships {
    margin: 10px;
    padding: 10px;
    flex-direction: row;
}

.additionalHelp {
    margin: 50px;
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
