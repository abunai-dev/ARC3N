<template>
    <div class="item">
        <div class="definition-and-button">
            <p>{{ props.option.name }}: {{ props.option.definition }}</p>
            <FilterButton buttontext="Show more examples!" @filter="sendFilterOption"/>
        </div>
        <div class="example-list">
            <p>Example:</p>
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
    margin: 10px;
    padding: 5px;
}
.example-list {
    display:flex;
    margin: 5px;
    flex-direction: row;
}

.example-list p {
    text-align: left;
}

.item p {
    text-align: left;
}

.definition-and-button {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.definition-and-button p {
    margin: 5px;
}
</style>@/util/types/Option