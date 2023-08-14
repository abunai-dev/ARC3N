<template>
    <div class="item">
        <div class="definition-and-button">
            <p>{{ props.manifestation.name }}: {{ props.manifestation.definition }}</p>
            <FilterButton buttontext="Show more examples!" @filter="sendFilterOption"/>
        </div>
        <div class="example-list">
            <p v-for="(example, index) in props.manifestation.exampleScenarios" :key="index">{{example}}</p>
        </div>
    </div>
</template>
<script setup lang="ts">
    import type { Manifestation } from '@/util/types/Manifestation';
    import { type PropType } from 'vue';
    import FilterButton from '@/components/util/FilterButton.vue';

    const props = defineProps({
        manifestation: {
            type: Object as PropType<Manifestation>,
            required: true
        },
    });

    const emit = defineEmits(['filterByManifestation']);

    function sendFilterOption() {
        console.log("sendFilterOption :" + props.manifestation.name)
        emit('filterByManifestation', props.manifestation)
    }


</script>
<style scoped>
.item {
    flex-direction: row;
    margin: 5px;
    padding: 5px;
}
.example-list {
    flex-direction: column;
}

.example-list p {
    text-align: left;
    flex-direction: column;
}

.item p {
    text-align: left;
}

.definition-and-button {
    flex-direction: column;
    justify-content: space-between;
}
</style>