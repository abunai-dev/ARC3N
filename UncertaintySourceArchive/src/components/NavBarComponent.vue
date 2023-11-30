<template>
  <li class="group relative z-50 h-full p-1">
    <RouterLink
      :to="link.link"
      class="rounded p-1 hover:bg-primary-200"
      :class="{ 'font-bold': isCurrentRoute() }"
      >{{ link.name }}</RouterLink
    >
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
import { router } from '@/router'
import type { PropType } from 'vue'
import { RouterLink, type RouteLocationNamedRaw, type RouteParamsRaw } from 'vue-router'

type Route = {
  link: RouteLocationNamedRaw
  name: string
}

const props = defineProps({
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

function isCurrentRoute() {
  const sameName = router.currentRoute.value.name == props.link.link.name
  if (props.link.link.params != undefined) {
    return (
      sameName &&
      Object.keys(props.link.link.params).every((key) => {
        return (
          (props.link.link.params as RouteParamsRaw)[key] == router.currentRoute.value.params[key]
        )
      })
    )
  }
  return sameName
}
</script>
