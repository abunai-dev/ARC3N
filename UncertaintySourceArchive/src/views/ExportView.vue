<template>
  <div class="">
    <p class="mx-auto w-fit">
      Get a json file containing all the uncertainties either by using this link:
    </p>
    <p class="mx-auto my-2 w-fit">
      <span class="h-10 rounded rounded-r-none border border-primary-400 px-2 py-1">{{ url }}</span>
      <span
        class="h-10 cursor-pointer rounded rounded-l-none border border-l-0 border-primary-400 px-2 py-1"
        @click="copy()"
      >
        <FontAwesomeIcon :icon="faCopy" />
      </span>
    </p>
    <p class="mx-auto w-fit">Or by directly downloading it:</p>
    <form method="get" file="url">
      <a :href="url" download="data.json">
        <ButtonComponent class="mx-auto">Download</ButtonComponent>
      </a>
    </form>
  </div>
</template>

<script setup lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue'
import { resourceGetter } from '@/model/resourceGetter/ResourceGetter'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'

const url = resourceGetter.getFileUrl()

function copy() {
  navigator.clipboard.writeText(url)
}
</script>
