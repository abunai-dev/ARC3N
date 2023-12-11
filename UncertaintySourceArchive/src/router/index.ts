import CategoryView from '@/views/CategoryView.vue'
import ArchiveView from '@/views/ArchiveView.vue'
import UncertaintyView from '@/views/wrapper/UncertaintyViewWrapper.vue'
import CreationViewWrapper from '@/views/wrapper/CreationViewWrapper.vue'
import ExportView from '@/views/ExportView.vue'
import HomeView from '@/views/HomeView.vue'
import GuideView from '@/views/GuideView.vue'
import ClassificationView from '@/views/ClassificationView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: HomeView
    },
    {
      name: 'archive',
      path: '/archive',
      component: ArchiveView
    },
    {
      name: 'uncertainty',
      path: '/uncertainty/:id',
      component: UncertaintyView,
      props: true
    },
    {
      name: 'category',
      path: '/category/:category',
      component: CategoryView,
      props: true
    },
    {
      name: 'classification',
      path: '/category',
      component: ClassificationView
    },
    {
      name: 'create',
      path: '/create',
      component: CreationViewWrapper
    },
    {
      name: 'export',
      path: '/export',
      component: ExportView
    },
    {
      name: 'guide',
      path: '/guide',
      component: GuideView
    }
  ]
})

export { router }
