<template>
        <div class="relationship" v-if="isSpecialRelation(props.relationship)">
            <p>Related to: {{ props.relationship.relatedToId }} Relation type: {{ props.relationship.positionInRelationship }}</p>
        </div>
        <div v-else>
            <p>Related to: {{ props.relationship.relatedToId }}</p>
        </div>
    

</template>
<script setup lang="ts">
import type { Relationship } from '@/util/types/Relationship';
import type { PropType } from 'vue';



const props = defineProps({
        relationship: {
            type: Object as PropType<Relationship>,
            required: true
        },
    });

function isSpecialRelation(relationship: Relationship) : boolean {
    return relationship.positionInRelationship != null
}

</script>
<style scoped>
.relationship {
    margin: 10px;
}
.relationship p {
    cursor: pointer;
}
</style>


