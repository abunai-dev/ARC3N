<template>
    <div class="manifestations">
        <header>
            <h3>Manifestations:</h3>
         </header>
        <main>
            <ManifestationDetailItem v-for="(manifestation, index) in props.manifestations" :manifestation="manifestation" :key="index" @filter-by-manifestation="forwardEmit"/>
        </main>
    </div>

</template>
<script setup lang="ts">
import type { PropType } from 'vue';
import type { Manifestation } from '@/util/types/Manifestation';
import ManifestationDetailItem from './ManifestationDetailItem.vue';


const props = defineProps({
        manifestations: {
            type: Object as PropType<Manifestation[]>,
            required: true
        },
    });

const emit = defineEmits(['filterByManifestation']);

function forwardEmit(manifestation: Manifestation) {
    console.log("forwardEmit :" + manifestation.name)
    emit('filterByManifestation', manifestation)
}

</script>
<style scoped>
.manifestations {
    margin: 30px;
    display: flex;
    flex-direction: row;
}

header {
    margin-top: 0;
    text-align: left;
    justify-self: left;
}

main {
    margin-top: 50px;
    flex-direction: column;
}
</style>