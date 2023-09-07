<template>
    <div class="item">
        <div class="definition-and-button">
            <p>{{ props.option.name }}: {{ props.option.definition }}</p>
            <FilterButton buttontext="Show more examples!" @filter="sendFilterOption"/>
        </div>
        <div class="example-list">
            <p v-for="(example, index) in props.option.exampleScenarios" :key="index">{{example}}</p>
        </div>
    </div>
</template>
<script setup lang="ts">
    import type { Option } from '@/util/types/Option';
    import { type PropType } from 'vue';
    import FilterButton from '@/components/util/FilterButton.vue';

    const props = defineProps({
        option: {
            type: Object as PropType<Option>,
            required: true
        },
    });

    const emit = defineEmits(['filterByoption']);

    function sendFilterOption() {
        console.log("sendFilterOption :" + props.option.name)
        emit('filterByoption', props.option)
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
</style>@/util/types/Option