<template>
    <div>
        <span>{{ category.name }}: </span>
        <select v-model="selectedOption" @change="$emit('selectedOption', selectedOption)">
            <option v-for="categoryOption in category.options" :key="categoryOption.name" :value="categoryOption">{{ categoryOption.name }}</option>
        </select>
    </div>
</template>
<script setup lang="ts">

import { ref, type PropType, type Ref } from 'vue';
import type { Category } from '@/util/types/Category';
import type { Option } from '@/util/types/Option';

const props = defineProps({
    category: {
        type: Object as PropType<Category>,
        required: true
    }
})

const selectedOption : Ref<Option | null> = ref(null)

</script>@/util/types/Option