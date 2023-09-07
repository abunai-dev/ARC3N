<template>
    <div class="entry" v-if="!showTable">
        <button @click="toggleShowTable()">Back</button>
    </div>
    <div class="table" v-if="showTable">
        <TableInstance @selected-uncertainty="setCurrentUncertainty" :filter-by-Option="currentFilterBy" :search-value="currentSearchValue"/>
        <div class="button">
            <button @click="toggleShowUncertaintyCreator()">Add new uncertainty</button>
        </div>
    </div>
    <div class="uncertainty-detail" v-if="(showUncertainty) && (currentUncertainty != null)">
        <UncertaintyDetail :uncertainty="currentUncertainty" @selected-classification-category="setClassificationCategory" @selected-keyword="setSearchValue" @selected-uncertainty-id="setSearchValue"/>
    </div>
    <div class="classification-detail" v-if="(showClassification) && (currentClassificationCategory != null)">
        <CategoryOverviewPage :statedcategory="currentClassificationCategory" @filter-by="setFilteredTable"/>
    </div>
    <div class="new-entry" v-if="showUncertaintyCreator">
        <UncertaintyCreator />
    </div>
</template>

<script setup lang="ts">
import {ref, type Ref} from 'vue';
import TableInstance from './table/TableInstance.vue';
import UncertaintyDetail from './uncertainty/UncertaintyDetailPage.vue';
import type { Uncertainty } from '@/util/types/Uncertainty';
import type { Category } from '@/util/types/Category';
import CategoryOverviewPage from './category/CategoryOverviewPage.vue';
import type { Option } from '@/util/types/Option';
import UncertaintyCreator from './uncertaintycreation/UncertaintyCreator.vue';

const showTable = ref(true);
const showUncertainty = ref(false);
const showClassification = ref(false);
const currentSearchValue = ref('');
const showUncertaintyCreator = ref(false);
let currentUncertainty = ref(null) as Ref<Uncertainty | null>;
let currentClassificationCategory= ref(null) as Ref<Category | null>;
let currentFilterBy = ref(null) as Ref< {category: Category, manifestation: Option} | null>;

function toggleShowTable() {
    showTable.value = true;
    showUncertainty.value = false;
    showClassification.value = false;
    showUncertaintyCreator.value = false;
    currentUncertainty = ref(null) as Ref<Uncertainty | null>;
    currentClassificationCategory= ref(null) as Ref<Category | null>;
    currentFilterBy = ref(null) as Ref< {category: Category, manifestation: Option} | null>;
    currentSearchValue.value = '';
    console.log("The value is set to show the table " )
}

function toggleShowUncertainty() {
    showTable.value = false;
    showUncertainty.value = true;
    showClassification.value = false;
    showUncertaintyCreator.value = false;
    if (currentUncertainty.value != null) {
        console.log("The value is set to show the uncertainty: " + currentUncertainty.value.name)
    }

}

function toggleShowClassification() {
    showTable.value = false;
    showUncertainty.value = false;
    showClassification.value = true;
    showUncertaintyCreator.value = false;
    if (currentClassificationCategory.value != null) {
        console.log("The value is set to show the classification " + currentClassificationCategory.value.name)
    }
}

function toggleShowUncertaintyCreator() {
    showTable.value = false;
    showUncertainty.value = false;
    showClassification.value = false;
    showUncertaintyCreator.value = true;
}

function setCurrentUncertainty(uncertainty: Uncertainty) {
    console.log("Incoming uncertainty value: " + uncertainty.name)
    currentUncertainty.value = uncertainty;
    toggleShowUncertainty();
}

function setClassificationCategory(category: Category) {
    console.log("Incoming category value: " + category.name)
    currentClassificationCategory.value = category;
    toggleShowClassification();
}

function setFilteredTable(payload: {category: Category, manifestation: Option}) {
    console.log("Incoming fitered table value: " + payload.category.name + payload.manifestation.name)
    toggleShowTable();
    currentFilterBy.value = payload;
}

function setSearchValue(searchValue: string) {
    console.log("Incoming search value: " + searchValue)
    toggleShowTable();
    currentSearchValue.value = searchValue;
}
</script>
<style scoped>
</style>@/util/types/Option