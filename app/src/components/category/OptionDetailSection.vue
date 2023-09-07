<template>
    <div class="options">
        <header>
            <h3>options:</h3>
         </header>
        <main>
            <OptionDetailItem v-for="(option, index) in props.options" :option="option" :key="index" @filter-byoption="forwardEmit"/>
        </main>
    </div>

</template>
<script setup lang="ts">
import type { PropType } from 'vue';
import type { Option } from '@/util/types/Option';
import OptionDetailItem from './OptionDetailItem.vue';


const props = defineProps({
        options: {
            type: Object as PropType<Option[]>,
            required: true
        },
    });

const emit = defineEmits(['filterByOption']);

function forwardEmit(option: Option) {
    console.log("forwardEmit :" + option.name)
    emit('filterByOption', option)
}

</script>
<style scoped>
.options {
    margin: 30px;
    display: flex;
    flex-direction: row;
}

header {
    margin-top: 0;
    text-align: left;
    justify-self: left;
}

main {
    margin-top: 50px;
    flex-direction: column;
}
</style>@/util/types/Option