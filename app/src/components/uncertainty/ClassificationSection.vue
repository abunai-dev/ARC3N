<template>
    <div class = "classificationitems">
        <ClassificationItem @showClassification="$emit('showClassification', location)" :statedcategory="location" :statedmanifestation="props.uncertainty.location"/>
        <ClassificationItem @showClassification="$emit('showClassification', typeManifestation)" :statedcategory="typeManifestation" :statedmanifestation="props.uncertainty.type"/>
        <ClassificationItem @showClassification="$emit('showClassification', architecturalElementType)" :statedcategory="architecturalElementType" :statedmanifestation="props.uncertainty.architecturalType"/>
        <ClassificationItem @showClassification="$emit('showClassification', impactOnConfidentiality)" :statedcategory="impactOnConfidentiality" :statedmanifestation="props.uncertainty.impactOnConfidentiality"/>
    </div>
    <div class ="classificationitems">
        <ClassificationItem @showClassification="$emit('showClassification', manageability)" :statedcategory="manageability" :statedmanifestation="props.uncertainty.manageability"/>
        <ClassificationItem @showClassification="$emit('showClassification', reducibleByADD)" :statedcategory="reducibleByADD" :statedmanifestation="props.uncertainty.reducibleByADD"/>
        <ClassificationItem @showClassification="$emit('showClassification', resolutionTime)" :statedcategory="resolutionTime" :statedmanifestation="props.uncertainty.resolutionTime"/>
        <ClassificationItem @showClassification="$emit('showClassification', severityOfImpact)" :statedcategory="severityOfImpact" :statedmanifestation="props.uncertainty.severityOfImpact"/>
    </div>
</template>
<script setup lang="ts">
import type { Uncertainty } from '@/util/types/Uncertainty';
import { type PropType } from 'vue';
import ClassificationItem from './ClassificationItem.vue';
import location from '@/data/categories/location'
import typeManifestation from '@/data/categories/type';
import architecturalElementType from '@/data/categories/architecturalElementType';
import impactOnConfidentiality from '@/data/categories/impactOnConfidentiality';
import manageability from '@/data/categories/manageability';
import reducibleByADD from '@/data/categories/reducibleByAdd';
import resolutionTime from '@/data/categories/resolutionTime';
import severityOfImpact from '@/data/categories/severityOfImpact';

const props = defineProps({
        uncertainty: {
            type: Object as PropType<Uncertainty>,
            required: true
        },
    });

</script>
<style scoped>
.classificationitems {
    margin: 10px;
    padding: 10px;
    display: block;
    flex-direction: column;
}

.classificationitems p {
    text-align: left;
}
</style>