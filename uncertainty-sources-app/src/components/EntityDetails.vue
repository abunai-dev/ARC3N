<template>
    <p>This is the details page of the Entitiy {{ props.uncertainty.id }}</p>
</template>

<script setup lang="ts">
import type { Uncertainty } from '@/util/types/Uncertainty';
import type { PropType } from 'vue';

const props = defineProps({
        uncertainty: {
            type: Object as PropType<Uncertainty>,
            required: true
        },
    });

console.log("The id is: " + props.uncertainty.id)
</script>

<style scoped>
p {
    text-align: center;
    color: grey;
    display: block;
}
</style>
