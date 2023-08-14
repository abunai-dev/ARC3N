<template>
    <div class="classification-details">
        <header>
            <h1>Category - "{{ props.statedcategory.name }}"</h1>
        </header>
        <main>
            <BasicInformation :definition="props.statedcategory.definition" :description="props.statedcategory.description"/>
            <ManifestationsDetailSection :manifestations="props.statedcategory.manifestations" :category="props.statedcategory" @filter-by-manifestation="sendFilterOption"/>
            <p> {{ props.statedcategory.exampleScenarios }}</p>
            <img :src=imagePath :alt="imagePath" >
        </main>
        
    </div>
</template>

<script setup lang="ts">
import type { Category } from '@/util/types/Category';
import type { Manifestation } from '@/util/types/Manifestation';
import { type PropType, ref } from 'vue';
import BasicInformation from '@/components/util/BasicInformationSection.vue'
import ManifestationsDetailSection from './ManifestationsDetailSection.vue';



const props = defineProps({
        statedcategory: {
            type: Object as PropType<Category>,
            required: true
        },
    });

const emit = defineEmits(['filterBy']);

function sendFilterOption(manifestation: Manifestation) {
    const category = props.statedcategory
    const payload = { category, manifestation }
    console.log("sendFilterOption :" + props.statedcategory.name + manifestation.name)
    emit('filterBy', payload)
}

const imagePath = "http://localhost:3000" + props.statedcategory.imagePath;

</script>

<style scoped>
.classification-details {
    margin: 10px;
    padding: 10px;
    flex-direction: column;
}

h1 {
    margin-top: 0;
}

main {
    flex-direction: column;
}

img {
    max-width: 1000px;
    max-height: 400px;
    align-content: center;
    text-align: center;
    align-self: center;

}

</style>
