<!-- Wrapper for the Uncertainty View. It handles the asynchronous data getting -->
<template>
  <p v-if="uncertainty == 'Not found'"></p>
  <p v-else-if="uncertainty == null">Loading...</p>
  <UncertaintyView v-else :uncertainty="uncertainty" />
</template>

<script setup lang="ts">
import { type Ref, ref, toRef } from 'vue'
import { type Uncertainty } from '@/model/uncertainty/Uncertainty'
import UncertaintyView from '@/views/UncertaintyView.vue'
import { JsonResourceGetter } from '@/model/resourceGetter/JsonResourceGetter'

const props = defineProps({
  /** The id of the uncertainty to display */
  id: {
    type: String,
    required: true
  }
})

const uncertainty: Ref<Uncertainty | null | 'Not found'> = ref(null)

const reactiveId = toRef(props, 'id')

new JsonResourceGetter()
  .getUncertainty(parseInt(reactiveId.value))
  .then((data) => {
    uncertainty.value = data
  })
  .catch((error) => {
    void error
    uncertainty.value = 'Not found'
  })
</script>
