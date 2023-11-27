<template>
  <div class="flex h-screen bg-gradient-to-br from-primary to-primary-dark p-5">
    <ContainerComponent class="box-border grow overflow-auto bg-white p-5">
      <RouterView class="" />
    </ContainerComponent>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import ContainerComponent from './components/ContainerComponent.vue'
import { UncertaintyIssueParser } from './model/resourceGetter/parser/UncertaintyIssueParser'
import { UncertaintyIssueEncoder } from './model/resourceGetter/encoder/UncertaintyIssueEncoder'
import { JsonResourceGetter } from './model/resourceGetter/JsonResourceGetter'

new JsonResourceGetter()
  .getUncertainty(1)
  .then((data) => {
    console.log(data)
    return new UncertaintyIssueEncoder().encode(data)
  })
  .then((data) => {
    console.log(data)
    return new UncertaintyIssueParser().parse(data)
  })
  .then((data) => {
    console.log(data)
  })
</script>
