<template>
          <div class="input">
            <span>search value:</span>
            <input type="text" v-model="tableState.searchValue"/>
            <button @click="$emit('reset'), searchValue = ''">Reset</button>
          </div>
</template>
<script setup lang="ts">
import {ref} from 'vue';
import { tableState } from '@/util/types/TableState';

const props = defineProps(
    {
        searchValue: {
            type: String,
            default: ''
        }
    }
)
const searchValue = ref(props.searchValue);

</script>
