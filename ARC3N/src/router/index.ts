import CategoryView from '@/views/CategoryView.vue'
import ArchiveView from '@/views/ArchiveView.vue'
import UncertaintyView from '@/views/wrapper/UncertaintyViewWrapper.vue'
import CreationViewWrapper from '@/views/wrapper/CreationViewWrapper.vue'
import ExportView from '@/views/ExportView.vue'
import HomeView from '@/views/HomeView.vue'
import ClassificationView from '@/views/ClassificationView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { resourceGetter } from '@/model/resourceGetter/ResourceGetter'

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
      component: ArchiveView,
      props: (route) => {
        const filter = route.query.filter as string | null
        return {
          filter: filter ? JSON.parse(filter) : undefined,
          search: route.query.search ?? undefined
        }
      }
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
      props: (route) => {
        const highlight = route.query.highlight as string | null
        return { category: route.params.category, highlight: highlight ?? undefined }
      }
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
    } /*,
    {
      name: 'guide',
      path: '/guide',
      component: GuideView
    }*/
  ]
})

router.afterEach((to) => {
  if (to.name == 'uncertainty') {
    const id = parseInt(to.params.id as string)
    resourceGetter
      .getBaseUncertainty(id)
      .then((uncertainty) => (document.title = `#${id} - ${uncertainty.name} - ARC3N`))
  } else {
    document.title = 'ARC3N'
  }
})

export { router }
