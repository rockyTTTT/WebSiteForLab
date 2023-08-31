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
      path: 'publications',
      name: 'Publications',
      component: Publications
    },
    {
      path: 'team',
      name: 'Team',
      component: Team
    },
    {
      path: 'join_us',
      name: 'JoinUs',
      component: JoinUs
    }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
