<!-- Component for selecting (multiple) object (from a given list) -->
<template>
  <div>
    <div
      class="relative flex h-8 w-full items-center rounded border border-black border-opacity-50 bg-transparent dark:bg-gray-800 md:w-96"
    >
      <input
        class="grow bg-transparent px-1 outline-none placeholder:text-gray-400 disabled:cursor-not-allowed"
        type="text"
        v-model="textInput"
        :placeholder="placeholder"
        @keypress.enter="addOption(textInput)"
        :disabled="selectedList.length >= props.limit"
        ref="inputRef"
        @input="hasFocus = true"
        @blur="(e) => loseFocus(e as RealFocusEvent)"
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
      <!-- Suggestions -->
      <ContainerComponent
        class="absolute z-10 flex max-h-[300px] min-h-0 w-full flex-col items-start overflow-auto bg-primary-0 !p-0 dark:bg-slate-800"
        :class="showBelow ? 'top-[100%]' : 'bottom-[100%]'"
        id="testTemp"
        v-if="showSuggestions"
      >
        <button
          v-for="option in filteredOptions"
          :key="option"
          class="selectorOption w-full p-1 text-left hover:bg-gray-200"
          @click="addOption(option)"
        >
          {{ option }}
        </button>
      </ContainerComponent>
    </div>

    <div class="flex flex-wrap">
      <div
        v-for="option in selectedList"
        :key="option"
        class="m-1 flex w-fit items-center rounded bg-primary-800 p-1 text-sm text-white first:ml-0 last:mr-0 dark:bg-primary-700"
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

const clicked = ref(false)

library.add(faShare)
library.add(faCircleXmark)

type RealFocusEvent = FocusEvent & { explicitOriginalTarget: HTMLElement | null }

const props = defineProps({
  /** List of options to use for suggestions */
  options: {
    type: Array as PropType<string[]>,
    required: true
  },
  /** If false only allow options from the options list. Otherwise any value will be accepted */
  allowNewOption: {
    type: Boolean,
    required: false,
    default: false
  },
  /** Limit of values to take */
  limit: {
    type: Number,
    required: false,
    default: Infinity
  },
  /** Placeholder of the textbox */
  placeholder: {
    type: String,
    required: false,
    default: ''
  }
})

const emit = defineEmits<{
  /** v-model for the selected options */
  (event: 'input', value: string[]): void
}>()

/** Selected options */
const selectedList: Ref<string[]> = ref([])
/** Content of the input field. Bound via v-model */
const textInput: Ref<string> = ref('')

const hasFocus = ref(false)

/** Options to display in selection based on the current text in the input */
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

/**
 * Checks if an option can be added and does so if possible
 * @param option Option to add
 */
function addOption(option: string) {
  if (
    option === '' ||
    selectedList.value.includes(option) ||
    (!props.allowNewOption && !props.options.includes(option))
  ) {
    return
  }

  clicked.value = true

  selectedList.value.push(option)
  textInput.value = ''
  emit('input', selectedList.value)
  if (inputRef.value != null && selectedList.value.length < props.limit) {
    inputRef.value.focus()
  }
}

/**
 * Removes an option from the selected list
 * @param option Option to remove
 */
function removeOption(option: string) {
  selectedList.value.splice(selectedList.value.indexOf(option), 1)
  emit('input', selectedList.value)
}

/** Indicates whether the suggestions should be displayed */
const showSuggestions = computed(() => {
  return (
    filteredOptions.value.length > 0 && selectedList.value.length < props.limit && hasFocus.value
  )
})

function loseFocus(e: RealFocusEvent) {
  console.log(e)
  let newFocusElement = e.explicitOriginalTarget
  if (newFocusElement === null) {
    newFocusElement = e.relatedTarget as HTMLElement | null
  }
  if (newFocusElement === null) {
    hasFocus.value = false
    return
  }
  const focusElementIsOption =
    newFocusElement.classList != undefined && newFocusElement.classList.contains('selectorOption')
  const focusElementParentIsOption =
    newFocusElement.parentElement != null &&
    newFocusElement.parentElement.classList != undefined &&
    newFocusElement.parentElement.classList.contains('selectorOption')
  if (!focusElementIsOption && !focusElementParentIsOption) {
    hasFocus.value = false
  }
}

// This part of the code handles the positioning of the suggestions, so they are not cutoff by the bottom of the page
/** Reference to the input tag */
const inputRef: Ref<HTMLElement | null> = ref(null)
/** Distance the input field has to the page bottom */
const inputDistanceFromBottom = ref(0)
/** Height of the page */
const pageHeight = ref(0)
/** Whether the suggestions should be shown below the input field or above */
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

// recalculate the distance to the bottom of the page when the input field changes
watch(showSuggestions, () => {
  if (inputRef.value === null) {
    return 0
  }
  const inputRect = inputRef.value.getBoundingClientRect()
  inputDistanceFromBottom.value = inputRect.bottom
})

// recalculate the page height when the window is resized
window.addEventListener('resize', () => {
  pageHeight.value = getWindowHeight()
})

// initial calculation of the page height
onMounted(() => {
  pageHeight.value = getWindowHeight()
})
</script>
