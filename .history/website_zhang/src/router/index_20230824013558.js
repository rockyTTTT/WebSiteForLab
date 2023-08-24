import { createRouter, createWebHashHistory } from 'vue-router'
import LayOut  from '../views/LayOut.vue'

const routes = [
  {
    path: '/',
    name: 'LayOut',
    component: Layout
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
