<template>
    <div class="classification-details">
        <header>
            <h1>Category - "{{ props.statedcategory.name }}"</h1>
        </header>
        <main>
            <BasicInformation :definition="props.statedcategory.definition" :description="props.statedcategory.description"/>
            <ManifestationsDetailSection :manifestations="props.statedcategory.manifestations"/>
        </main>
        <p> {{ props.statedcategory.exampleScenarios }}</p>
        <img :src="props.statedcategory.imagePath" alt="Example Image">
    </div>
</template>

<script setup lang="ts">
import type { Category } from '@/util/types/Category';
import type { Manifestation } from '@/util/types/Manifestation';
import { type PropType } from 'vue';
import BasicInformation from './BasicInformationSection.vue';
import ManifestationsDetailSection from './ManifestationsDetailSection.vue';

const props = defineProps({
        statedcategory: {
            type: Object as PropType<Category>,
            required: true
        },
        statedmanifestation: {
            type: Object as PropType<Manifestation>,
            required: true
        },
    });

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

</style>
