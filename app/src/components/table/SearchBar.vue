<template>
          <div class="input">
            <span>search value:</span>
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
.button {
  margin-left: 10px;
  margin-top: 0;
  padding: 5;
}
</style>
