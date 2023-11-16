<template>
    <main>
        <div class="keyword">
            <p>{{ props.keyword }}</p>
        </div>
    </main>
</template>

<script setup lang="ts">

const props = defineProps({
        keyword: {
            type: String,
            required: true
        },
    });


    console.log("Keyword is:" + props.keyword)
</script>

<style scoped>
.keyword {
    justify-self: auto;
    align-self: auto;
    margin: 10px;
}
.keyword p {
    cursor: pointer;
}
</style>