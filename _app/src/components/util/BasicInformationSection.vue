<template>
    <div>
        <div class="definition">
            <p>{{ props.definition }}</p>
        </div>
        <div class="description">
            <p>{{ props.description }}</p>
        </div>
    </div>

</template>

<script setup lang="ts">

const props = defineProps({
        definition: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
    });
</script>
<style scoped>

.definition {
    justify-self: auto;
    align-self: auto;
    margin: 10px;
    font-size: large;
    font-weight: bold;
}
.description {
    justify-self: auto;
    align-self: auto;
    margin: 10px;
    font-size: medium;
    font-weight: normal;
}
</style>