<template>
  <div
    class="w-fit cursor-pointer rounded border border-black border-opacity-10 bg-primary-dark p-1 text-white hover:bg-[#425D87] active:bg-[#334869]"
    :class="{
      '!cursor-not-allowed bg-[#636D7C] hover:bg-[#636D7C] active:bg-[#636D7C]': disabled
    }"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps({
  disabled: {
    type: Boolean,
    required: false,
    default: false
  }
})
</script>
