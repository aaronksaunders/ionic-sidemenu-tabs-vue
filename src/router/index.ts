import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/tabs'
  },
  {
    path: '/tabs',
    component: () => import ('../views/tabs/TabRoot.vue'),
    children : [
      {
        path: '',
        redirect: '/tabs/speakers'
      },
      {
        path: '/tabs/speakers',
        component: () => import ('../views/tabs/Speakers.vue')
      },
      {
        path: '/tabs/schedule',
        component: () => import ('../views/tabs/Schedule.vue')
      },
    ]
  },

  {
    path: '/other',
    component: () => import ('../views/Other.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
