import { createRouter, createWebHashHistory } from 'vue-router'
import Layout  from '../views/LayOut.vue'

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
