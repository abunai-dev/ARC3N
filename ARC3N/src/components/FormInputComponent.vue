<!-- Component to use in form. Has direct support for text input. Others can be inserted -->
<template>
  <div class="flex flex-col md:flex-row md:space-x-2">
    <label :for="id" class="w-52 pl-[2px] text-xs md:pl-0 md:text-base">{{ label }}</label>
    <input
      v-if="inputType == 'text'"
      :id="id"
      :name="id"
      :placeholder="placeholder"
      :required="required"
      v-model="value"
      class="h-8 w-full rounded border border-black border-opacity-50 bg-transparent px-1 outline-none placeholder:text-gray-400 dark:bg-gray-800 md:w-96"
    />
    <textarea
      v-else-if="inputType == 'multiline'"
      :id="id"
      :name="id"
      :placeholder="placeholder"
      :required="required"
      v-model="value"
      class="h-32 w-full rounded border border-black border-opacity-50 bg-transparent px-1 outline-none placeholder:text-gray-400 dark:bg-gray-800 md:w-1/2"
    ></textarea>
    <!-- Slot for other input types -->
    <slot v-else></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue'

const props = defineProps({
  /** id of the input and label */
  id: {
    type: String,
    required: true
  },
  /** Text of the label */
  label: {
    type: String,
    required: true
  },
  /** Used for text inputs v-model */
  modelValue: {
    type: String,
    required: false,
    default: ''
  },
  /** Placeholder of text input */
  placeholder: {
    type: String,
    required: false
  },
  /** Type of input to use */
  inputType: {
    type: String as PropType<'text' | 'multiline' | 'custom'>,
    required: false,
    default: 'text'
  },
  /** Whether the input is required */
  required: {
    type: Boolean,
    required: false,
    default: false
  }
})

const emit = defineEmits<{
  /** v-model for text input */
  (event: 'update:modelValue', value: string): void
  /** event emiting changed input */
  (event: 'input', value: string): void
}>()

/** Object to use in the v-model of the text components */
const value = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit('update:modelValue', value)
    emit('input', value)
  }
})
</script>
