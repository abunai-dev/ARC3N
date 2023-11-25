<template>
  <CategoryComponent>
    <template #heading>
      <div class="flex items-center" @click="expanded = !expanded">
        <FontAwesomeIcon
          :icon="expanded ? 'chevron-down' : 'chevron-right'"
          class="mr-2 aspect-square"
        />
        <div>
          <div v-if="!$slots.heading && heading">{{ heading }}</div>
          <slot name="heading" v-else-if="$slots.heading && !heading"></slot>
          <div v-else>Conflicting or no heading given</div>
        </div>
      </div>
    </template>

    <template #default>
      <div v-show="expanded">
        <slot></slot>
      </div>
    </template>
  </CategoryComponent>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CategoryComponent from './CategoryComponent.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronDown)
library.add(faChevronRight)

defineProps({
  heading: {
    type: String,
    required: false
  }
})

const expanded = ref(false)
</script>
