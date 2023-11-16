<template>
    <div class="example-section">
        <div class="scenario" v-if="props.header !== undefined || props.description !== undefined">
            <h3 v-if="props.header !== undefined">{{props.header}}</h3>
            <p v-for="section in descriptionSections" :key="section">{{ section }}</p>
        </div>
        <div class="supporting-image">
            <img :src="imagePath" :alt="imagePath">
        </div>
        <div class="collaboration">
            <a :href="props.collaborationUrl" class="button" target="_blank">Click here, to find out about the ongoing discussion</a>
        </div>
    </div>

</template>
<script setup lang="ts">
import { computed } from 'vue';


const props = defineProps({
        description: {
            type: String,
            required: false
        },
        imagePath: {
            type: String,
            required: true
        },
        collaborationUrl: {
            type: String,
            required: true
        },
        header: {
            type: String,
            required: false
        }
        });

const descriptionSections = computed(() =>{
    if (props.description !== undefined) {
        return props.description.split("\n");
    } else {
        return '';
    }
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
    margin: 20px;
}
.collaboration {
    display: flex;
    justify-content: center;
    align-items: center;
}
.scenario {
    display: block;
    max-width: 1500px;
    text-align: left;
    margin: 10px;
}

.scenario p {
    text-align: left;
}
</style>