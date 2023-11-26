<template>
  <div>
    <div
      class="relative flex h-8 w-full items-center rounded border border-black border-opacity-50 bg-transparent md:w-96"
    >
      <input
        class="grow outline-none placeholder:text-gray-400 disabled:cursor-not-allowed"
        type="text"
        v-model="textInput"
        :placeholder="placeholder"
        @keypress.enter="addOption(textInput)"
        :disabled="selectedList.length >= props.limit"
        ref="inputRef"
      />
      <FontAwesomeIcon
        icon="share"
        class="mx-2 text-gray-400"
        @click="addOption(textInput)"
        :class="{
          'cursor-pointer':
            (props.allowNewOption || props.options.includes(textInput)) &&
            selectedList.length < props.limit
        }"
      />
      <ContainerComponent
        class="absolute z-10 max-h-[300px] min-h-0 w-full overflow-scroll bg-white !p-0"
        :class="showBelow ? 'top-[100%]' : 'bottom-[100%]'"
        id="testTemp"
        v-if="showSuggestions"
      >
        <div
          v-for="option in filteredOptions"
          :key="option"
          class="p-1 hover:bg-gray-200"
          @click="addOption(option)"
        >
          {{ option }}
        </div>
      </ContainerComponent>
    </div>

    <div class="flex flex-wrap">
      <div
        v-for="option in selectedList"
        :key="option"
        class="m-1 flex w-fit items-center rounded bg-primary-dark p-1 text-sm text-white first:ml-0 last:mr-0"
      >
        {{ option }}
        <FontAwesomeIcon
          icon="circle-xmark"
          class="ml-1 cursor-pointer"
          @click="removeOption(option)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ref, type PropType, type Ref, computed, onMounted, watch } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShare, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import ContainerComponent from './ContainerComponent.vue'

library.add(faShare)
library.add(faCircleXmark)

const props = defineProps({
  options: {
    type: Array as PropType<string[]>,
    required: true
  },
  allowNewOption: {
    type: Boolean,
    required: false,
    default: false
  },
  limit: {
    type: Number,
    required: false,
    default: Infinity
  },
  placeholder: {
    type: String,
    required: false,
    default: ''
  }
})

const emit = defineEmits(['input'])

const selectedList: Ref<string[]> = ref([])
const textInput: Ref<string> = ref('')

const filteredOptions = computed(() => {
  if (textInput.value === '') {
    return []
  }
  return props.options
    .filter((option) => {
      return option.toLowerCase().includes(textInput.value.toLowerCase())
    })
    .filter((option) => {
      return !selectedList.value.includes(option)
    })
})

function addOption(option: string) {
  console.log('addOption', option)
  if (
    option === '' ||
    selectedList.value.includes(option) ||
    (!props.allowNewOption && !props.options.includes(option))
  ) {
    return
  }

  selectedList.value.push(option)
  textInput.value = ''
  emit('input', selectedList.value)
}

function removeOption(option: string) {
  selectedList.value.splice(selectedList.value.indexOf(option), 1)
  emit('input', selectedList.value)
}

const showSuggestions = computed(() => {
  return filteredOptions.value.length > 0 && selectedList.value.length < props.limit
})

const inputRef: Ref<HTMLElement | null> = ref(null)
const inputDistanceFromBottom = ref(0)
const pageHeight = ref(0)
const showBelow = computed(() => {
  return pageHeight.value - inputDistanceFromBottom.value > 320
})

function getWindowHeight() {
  let body = document.body
  let html = document.documentElement

  return Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  )
}

watch(showSuggestions, () => {
  if (inputRef.value === null) {
    return 0
  }
  const inputRect = inputRef.value.getBoundingClientRect()
  inputDistanceFromBottom.value = inputRect.bottom
})

window.addEventListener('resize', () => {
  pageHeight.value = getWindowHeight()
})

onMounted(() => {
  pageHeight.value = getWindowHeight()
})
</script>
