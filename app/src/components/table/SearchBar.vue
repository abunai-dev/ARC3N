<template>
    <button @click="$emit('toggleSearch')">Filter</button>
          <div class="input">
            <span>search value:</span>
            <input type="text" v-model="searchValue" @input="emitSearch"/>
            <button @click="$emit('reset'), searchValue = ''">Reset</button>
          </div>
</template>
<script setup lang="ts">
import {ref} from 'vue';

const props = defineProps(
    {
        searchValue: {
            type: String,
            default: ''
        }
    }
)
const searchValue = ref(props.searchValue);
const emits = defineEmits(['search', 'reset', 'toggleSearch']);

function emitSearch() {
    emits('search', searchValue.value)
}
</script>
