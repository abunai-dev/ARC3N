<template>
  <li class="group relative z-50 h-full p-2">
    <RouterLink
      :to="link.link"
      class="rounded p-1 hover:bg-primary-200 dark:hover:bg-primary-900"
      :class="{ 'font-bold': isCurrentRoute() }"
      >{{ link.name }}</RouterLink
    >
    <ul
      v-if="children.length > 0"
      class="left-0 top-full w-full min-w-fit flex-col bg-primary-0 p-1 dark:border-primary-950 dark:bg-primary-975 md:absolute md:hidden md:rounded-b md:border md:border-t-0 md:group-hover:flex"
      :class="
        isCurrentRoute() || children.some((child) => isCurrentRoute(child)) ? 'flex' : 'hidden'
      "
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

function isCurrentRoute(route?: Route) {
  const link = route ?? props.link
  const sameName = router.currentRoute.value.name == link.link.name
  if (link.link.params != undefined) {
    return (
      sameName &&
      Object.keys(link.link.params).every((key) => {
        return (link.link.params as RouteParamsRaw)[key] == router.currentRoute.value.params[key]
      })
    )
  }
  return sameName
}
</script>
