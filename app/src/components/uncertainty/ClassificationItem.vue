<template>
    <div class="container">
        <div class="classificationItem" @click="$emit('showClassification')">
            <div class="category">
                <p @mouseover="toggleShowCategoryDefinition" @mouseleave="toggleShowCategoryDefinition">{{ props.statedcategory.name }}:</p>
            </div>
            <div class="Option">
                <p @mouseover="toggleShowOptionDefintion" @mouseleave="toggleShowOptionDefintion">{{ props.statedOption.name }}</p>
            </div>
        </div>
        <div class="defintion" v-show="showDefinition">
            <p>{{message}}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Option } from '@/util/types/Option';
import type { Category } from '@/util/types/Category';
import { type PropType, ref } from 'vue';


const props = defineProps({
        statedcategory: {
            type: Object as PropType<Category>,
            required: true
        },
        statedOption: {
            type: Object as PropType<Option>,
            required: true
        },
    });

const showDefinition = ref(false);
const message = ref(setMessage());

function toggleShowCategoryDefinition() {
    message.value = props.statedcategory.definition;
    toggleShowDefinition();
    
}

function setMessage() {
    if (props.statedcategory.definition.length > props.statedOption.definition.length) {
        return props.statedcategory.definition;
    } else {
        return props.statedOption.definition;
    }
}

function toggleShowOptionDefintion() {
    message.value = props.statedOption.definition;
    toggleShowDefinition();
}

function toggleShowDefinition() {
    showDefinition.value = !showDefinition.value;
}


</script>

<style scoped>
.classificationItem {
    justify-self: auto;
    align-self: auto;
    margin: 5px;
    padding: 5px;
    display: flex;
    flex-direction: row;
    justify-content: left;
}
.classificationItem p {
    text-align: left;
    margin: 5px;
}
.definition {
    display: block;
    margin: 5px;
    max-width: 200px;
}
.container {
    display: block;
    justify-content: left;
}
</style>@/util/types/Option