import OverviewView from '@/views/OverviewView.vue'
import UncertaintyView from '@/views/wrapper/UncertaintyViewWrapper.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: OverviewView
    },
    {
      path: '/uncertainty/:id',
      component: UncertaintyView,
      props: true
    }
  ]
})

export { router }
