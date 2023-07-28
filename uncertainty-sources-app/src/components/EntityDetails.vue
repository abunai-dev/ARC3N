<template>
    <p>This is the details page of the Entitiy {{ id }}</p>
</template>

<script setup lang="ts">
const props = defineProps({
    id: Number
})
console.log("The id is: " + props.id)
</script>

<style scoped>
p {
    text-align: center;
    color: grey;
    display: block;
}
</style>
