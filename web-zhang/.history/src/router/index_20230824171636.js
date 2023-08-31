import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout.vue'
import Research from '@/components/Research.vue'
import Publications from '@/components/Publications.vue'
import Team from '@/components/Team.vue'
import JoinUs from '@/components/JoinUs.vue'
const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children:[
      {
      path: 'research',
      name: 'Research',
      component: Research
    },
    {

    }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
