<template>
    <div class="example-section">
        <div class="scenario">
            <p>{{ props.description }}</p>
        </div>
        <div class="supporting-image">
            <img :src="imagePath" :alt="imagePath">
        </div>
        <div class="collaboration">
            <a :href="props.collaborationUrl" class="button" target="_blank">Click, to find out about the ongoing discussion</a>
        </div>
    </div>

</template>
<script setup lang="ts">
import { type PropType } from 'vue';

const props = defineProps({
        description: {
            type: Object as PropType<string>,
            required: true
        },
        imagePath: {
            type: Object as PropType<string>,
            required: true
        },
        collaborationUrl: {
            type: Object as PropType<string>,
            required: true
        },
        });

</script>
<style scoped>
img {
    max-width: 1000px;
    max-height: 400px;
}

.example-section {
    display: flex;
    margin: 10px;
    padding: 10px;
    flex-direction: column;
}
.supporting-image {
    display: flex;
    justify-content: center;
    align-items: center;
}
.collaboration {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>