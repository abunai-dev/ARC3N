<!-- Stylized div for everything clickable -->
<template>
  <div
    class="w-fit cursor-pointer rounded border border-black border-opacity-10 bg-primary-800 p-1 text-white hover:bg-primary-700 active:bg-primary-900 dark:bg-primary-700 dark:hover:bg-primary-600 dark:active:bg-primary-950"
    :class="{
      '!hover:bg-slate-[#636D7C] !active:bg-[#636D7C] !cursor-not-allowed !bg-[#636D7C]': disabled
    }"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps({
  /** Whether to display the disabled style */
  disabled: {
    type: Boolean,
    required: false,
    default: false
  }
})
</script>
