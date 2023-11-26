<template>
  <p v-if="uncertainties == 'Not found'"></p>
  <p v-else-if="uncertainties == null">Loading...</p>
  <CreationView v-else :uncertaintyList="uncertainties" />
</template>

<script setup lang="ts">
import { resourceGetter } from '@/model/resourceGetter/Getter'
import type { BaseUncertainty } from '@/model/uncertainty/Uncertainty'
import { type Ref, ref } from 'vue'
import CreationView from '@/views/CreationView.vue'

const uncertainties: Ref<BaseUncertainty[] | null | 'Not found'> = ref(null)

resourceGetter
  .getUncertaintyCount()
  .then((uncertaintyCount) => {
    const promises: Promise<BaseUncertainty[]>[] = []
    for (let i = 0; i < uncertaintyCount; i += 100) {
      promises.push(resourceGetter.getList(i, 100))
    }
    return Promise.all(promises)
  })
  .then((data) => {
    uncertainties.value = data.flat()
  })
  .catch((error) => {
    void error
    uncertainties.value = 'Not found'
  })
</script>
