import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout.vue'
import Home from '@/components/Home.vue'
import Research from '@/components/Research/Research.vue'
import Publications from '@/components/Publications/Publications.vue'
import Team from '@/components/Team.vue'
import JoinUs from '@/components/JoinUs.vue'
import Contact from '@/components/Contact.vue'
import ResearchBiology from '@/components/Research/ResearchBiology.vue'
import ResearchFund from '@/components/Research/ResearchFund.vue'
import ResearchMachine from '@/components/Research/ResearchMachine.vue'
import ResearchInterests from '@/components/Research/ResearchInterests.vue'
import PublicationsStatement from '@/components/Publications/PublicationsStatement.vue'
import PublicationsResearchMonograph from '@/components/Publications/PublicationsResearchMonograph.vue'
import PublicationsJournal from '@/components/Publications/PublicationsJournal.vue'
import Journal2023 from '@/components/Publications/Journal2023.vue'
const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children:[
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
      path: 'research',
      name: 'Research',
      component: Research,
      children:[
        {
          path: 'biology',
          name: 'ResearchBiology',
          component: ResearchBiology
        },
        {
          path: 'fund',
          name: 'ResearchFund',
          component: ResearchFund
        },
        {
          path: 'machineLearning',
          name: 'MachineLearning',
          component: ResearchMachine
        },
        {
          path: 'interests',
          name: 'ResearchInterests',
          component: ResearchInterests
        }
      ]
    },
    {
      path: 'publications',
      name: 'Publications',
      component: Publications,
      children:[
        {
          path: 'statement',
          name: 'PublicationsStatement',
          component: PublicationsStatement
        },
        {
          path: 'researchMonograph',
          name: 'PublicationsResearchMonograph',
          component: PublicationsResearchMonograph
        },
        {
          path: 'journal',
          name: 'PublicationsJournal',
          component: PublicationsJournal,
          children: [
            {
              path: '2023',
              name: 'Journal2023',
              component: Journal2023,
            }
        ]
        },
        
    ]
    },
    {
      path: 'team',
      name: 'Team',
      component: Team
    },
    {
      path: 'joinUs',
      name: 'JoinUs',
      component: JoinUs
    },
    {
      path: 'contact',
      name: 'Contact',
      component: Contact
    },
    ]
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
