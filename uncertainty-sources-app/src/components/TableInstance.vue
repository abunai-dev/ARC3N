<template>
    <div class="table" v-if="!openDetails">
        <EasyDataTable 
        :headers="headers"
        :items="items"
        @click-row="showRow"
        />
    </div>
    <div class="entry" v-if="openDetails">
        <button @click="openDetails = false">Back</button>
        <EntityDetails :id=currentItemId />
    </div>
</template>

<script setup lang="ts">
    import type { Header, Item, ClickRowArgument } from "vue3-easy-data-table";
    import EntityDetails from "./EntityDetails.vue";
    import { ref, type PropType } from "vue";
    
    defineProps({
        headers: {
            type: Array as PropType<Header[]>,
            required: true
        },
        items: {
            type: Array as PropType<Item[]>,
            required: true
        }
    });

    const openDetails = ref(false);
    var currentItemId= ref(0);
    const showRow = (item: ClickRowArgument) => {
        openDetails.value = true;
        currentItemId = ref(item.id);
        console.log("The row is: " + item.id + "The openDetails is: " + openDetails.value);
    }

</script>

<style scoped>
.table {
    display: block;
    margin: 0 auto;
    padding: 0.5rem 1rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    background: #fff;
    color: #2c3e50;
    font-size: 1rem;
    width: 100%;
    height: 100%;
}
.entry {
    display: block;
    margin: 0 auto;
    padding: 0.5rem 1rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    background: #fff;
    color: #2c3e50;
    font-size: 1rem;
    width: 100%;
    height: 100%;
}

</style>