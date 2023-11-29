<template>
  <li class="group relative z-50 h-full p-1">
    <RouterLink :to="link.link" class="rounded p-1 hover:bg-slate-200">{{ link.name }}</RouterLink>
    <ul
      v-if="children.length > 0"
      class="absolute left-0 top-full hidden w-full min-w-fit flex-col rounded-b border bg-white p-1 group-hover:flex"
    >
      <NavBarComponent
        v-for="child in children"
        :key="child.name"
        :link="child"
        class="w-full min-w-fit max-w-full grow"
      />
    </ul>
  </li>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { RouterLink, type RouteLocationRaw } from 'vue-router'

type Route = {
  link: RouteLocationRaw
  name: string
}

defineProps({
  link: {
    type: Object as PropType<Route>,
    required: true
  },
  children: {
    type: Array as PropType<Route[]>,
    required: false,
    default: () => []
  }
})
</script>
