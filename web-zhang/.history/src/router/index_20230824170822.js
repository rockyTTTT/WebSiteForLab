import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout.vue'
import Research from '@/components/Research.vue'
const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout
  },
  {
    path: '/research',
    name: 'Research',
    component: Research
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
