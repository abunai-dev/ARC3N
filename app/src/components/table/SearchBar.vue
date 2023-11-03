<template>
          <div class="input">
            <span class="search">search value:</span>
            <input type="text" v-model="tableState.searchValue"/>
            <button class="button" @click="$emit('reset'), tableState.searchValue = ''">Reset</button>
          </div>
</template>
<script setup lang="ts">
import { tableState } from '@/util/types/TableState';
</script>
<style scoped>
.input {
  display: flex;
  flex-direction: row;
  align-items: right;
  justify-content: right;
}
.search {
  margin-right: 10px;
}
.button {
  margin-left: 10px;
  margin-top: 0;
  padding: 5px;
}
</style>
