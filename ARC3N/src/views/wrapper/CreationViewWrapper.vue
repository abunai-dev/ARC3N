<!-- Wrapper for the Creation View. It handles the asynchronous data getting -->
<template>
  <p v-if="uncertainties == 'Not found'"></p>
  <p v-else-if="uncertainties == null">Loading...</p>
  <CreationView v-else :uncertaintyList="uncertainties" />
</template>

<script setup lang="ts">
import type { BaseUncertainty } from '@/model/uncertainty/Uncertainty'
import { type Ref, ref } from 'vue'
import CreationView from '@/views/CreationView.vue'
import { resourceGetter } from '@/model/resourceGetter/ResourceGetter'

const uncertainties: Ref<BaseUncertainty[] | null | 'Not found'> = ref(null)

resourceGetter
  .getAll()
  .then((data) => {
    uncertainties.value = data.flat()
  })
  .catch((error) => {
    void error
    uncertainties.value = 'Not found'
  })
</script>
