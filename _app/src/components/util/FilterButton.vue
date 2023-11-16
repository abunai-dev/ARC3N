<template>
    <button class="button" @click="$emit('filter')">{{ props.buttontext }}</button>
</template>

<script setup lang="ts">

const props = defineProps({
        buttontext: {
            type: String,
            required: true
        },
    });
</script>

<style scoped>
.button {
    padding: 5px;
}
</style>