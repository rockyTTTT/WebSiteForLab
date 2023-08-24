import { createRouter, createWebHashHistory } from 'vue-router'
import Layout  from '../views/Layout.vue'
import Home from '../views/Home/Home.vue'
const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '/',
        component: Home
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
