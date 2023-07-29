<template>
    <div class="classificationItem">
        <div class="category">
            <p>{{ props.statedcategory }} :</p>
        </div>
        <div class="manifestation">
            <p> {{ props.statedmanifestation.name }}</p>
        </div>
    </div>

</template>

<script setup lang="ts">
import type { Manifestation } from '@/util/types/Manifestation';
import type { Category } from '@/util/types/Category';
import type { PropType } from 'vue';

const props = defineProps({
        statedcategory: {
            type: String,
            required: true
        },
        statedmanifestation: {
            type: Object as PropType<Manifestation>,
            required: true
        },
    });
</script>

<style scoped>
.classificationItem {
    justify-self: auto;
    align-self: auto;
    margin: 5px;
    padding: 5px;
    display: row;
    flex-direction: column;
    justify-content: space-evenly;
}
.classificationItem p {
    text-align: left;
}
</style>