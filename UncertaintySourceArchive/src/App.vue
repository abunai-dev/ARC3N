<template>
  <div class="flex h-screen bg-gradient-to-br from-[#7790A7] to-[#3D567D] p-5">
    <div class="box-border grow overflow-auto rounded-lg bg-white p-2 shadow">
      <RouterView class="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>
