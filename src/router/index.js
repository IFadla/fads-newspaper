import { createRouter, createWebHistory } from 'vue-router'
import Berita from '../views/Berita.vue'
import InfoDev from '../views/InfoDev.vue'

const routes = [
  {
    path: '/',
    name: 'Berita',
    component: Berita
  },
  {
    path: '/info-dev',
    name: 'InfoDeveloper',
    component: InfoDev
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
