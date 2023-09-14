<template>
    <div class="entry" v-if="showUncertainty || showUncertaintyCreator">
        <button @click="toggleShowTable()">Back</button>
    </div>
    <div class="entry" v-if="showClassification">
        <button @click="toggleShowUncertainty()">Back</button>
    </div>
    <div class="table" v-if="showTable">
        <TableInstance @selected-uncertainty="setCurrentUncertainty"/>
        <div class="button">
            <button @click="toggleShowUncertaintyCreator()">Add new uncertainty</button>
        </div>
    </div>
    <div class="uncertainty-detail" v-if="(showUncertainty) && (currentUncertainty != null)">
        <UncertaintyDetail :uncertainty="currentUncertainty" @selected-classification-category="setClassificationCategory" @selected-keyword="setKeyword" @selected-uncertainty-id="setSearchValue"/>
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
import {tableState} from '@/util/types/TableState';

const showTable = ref(true);
const showUncertainty = ref(false);
const showClassification = ref(false);
const showUncertaintyCreator = ref(false);
let currentUncertainty = ref(null) as Ref<Uncertainty | null>;
let currentClassificationCategory= ref(null) as Ref<Category | null>;

function toggleShowTable() {
    showTable.value = true;
    showUncertainty.value = false;
    showClassification.value = false;
    showUncertaintyCreator.value = false;
    currentUncertainty = ref(null) as Ref<Uncertainty | null>;
    currentClassificationCategory= ref(null) as Ref<Category | null>;
    console.log(tableState)
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

function setFilteredTable(payload: {category: Category, option: Option}) {
    console.log("Incoming fitered table value: " + payload.category.name + payload.option.name)
    if(payload.category.name === 'Location') {
        tableState.selectedLocation = payload.option.name;
    } else if (payload.category.name === 'Architectural Element Type') {
        tableState.selectedArchitecturalType = payload.option.name;
    } else if (payload.category.name === 'Type') {
        tableState.selectedType = payload.option.name;
    } else if (payload.category.name === 'Manageability') {
        tableState.selectedManageability = payload.option.name;
    } else if (payload.category.name === 'Resolution Time') {
        tableState.selectedResolutionTime = payload.option.name;
    } else if (payload.category.name === 'Reducible by ADD') {
        tableState.selectedReducibleByAdd = payload.option.name;
    } else if (payload.category.name === 'Impact On Confidentiality') {
        tableState.selectedImpactOnConfidentiality = payload.option.name;
    } else if (payload.category.name === 'Severity Of Impact') {
        tableState.selectedSeverityOfImpact = payload.option.name;
    } else {
        tableState.searchValue = payload.option.name;
    }
    toggleShowTable();
}

function setKeyword(keyword: string) {
    console.log("Incoming keyword value: " + keyword)
    tableState.selectedKeyword = keyword;
    toggleShowTable();
}

function setSearchValue(searchValue: string) {
    console.log("Incoming search value: " + searchValue)
    tableState.searchValue = searchValue;
    toggleShowTable();
}

</script>
<style scoped>
.table {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.button {
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>