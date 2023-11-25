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
      class="h-8 w-full rounded border border-black border-opacity-50 bg-transparent outline-none placeholder:text-gray-400 md:w-96"
    />
    <textarea
      v-else-if="inputType == 'multiline'"
      :id="id"
      :name="id"
      :placeholder="placeholder"
      :required="required"
      v-model="value"
      class="h-32 w-full rounded border border-black border-opacity-50 bg-transparent outline-none placeholder:text-gray-400 md:w-1/2"
    ></textarea>
    <slot v-else></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue'

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  modelValue: {
    type: String,
    required: false,
    default: ''
  },
  placeholder: {
    type: String,
    required: false
  },
  inputType: {
    type: String as PropType<'text' | 'multiline' | 'custom'>,
    required: false,
    default: 'text'
  },
  required: {
    type: Boolean,
    required: false,
    default: false
  }
})

const emit = defineEmits(['update:modelValue', 'input'])

const value = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit('update:modelValue', value)
    emit('input', value)
  }
})
</script>
