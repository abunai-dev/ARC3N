<template>
    <main>
        <div class="keyword">
            <p>{{ props.keyword }}</p>
        </div>
    </main>
</template>

<script setup lang="ts">
import type { Keyword } from '@/util/types/Keyword';
import type { PropType } from 'vue';

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
</style>