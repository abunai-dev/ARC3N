<template>
    <div class="item">
        <p>{{ props.manifestation.name }}: {{ props.manifestation.definition }}</p>
        <div class="example-list">
            <p v-for="(example, index) in props.manifestation.exampleScenarios" :key="index">{{example}}</p>
        </div>
    </div>
</template>
<script setup lang="ts">
    import type { Manifestation } from '@/util/types/Manifestation';
    import type { PropType } from 'vue';

    const props = defineProps({
        manifestation: {
            type: Object as PropType<Manifestation>,
            required: true
        },
    });

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
</style>