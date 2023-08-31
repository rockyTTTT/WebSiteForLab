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
import Journal2022 from '@/components/Publications/Journal2022.vue'
import Journal2021 from '@/components/Publications/Journal2021.vue'
import Journal2020 from '@/components/Publications/Journal2020.vue'
import Journal2019 from '@/components/Publications/Journal2019.vue'
import Journal2018 from '@/components/Publications/Journal2018.vue'
import Journal2017 from '@/components/Publications/Journal2017.vue'
import Journal2016 from '@/components/Publications/Journal2016.vue'
import Journal2015 from '@/components/Publications/Journal2015.vue'

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
            },
            {
              path: '2022',
              name: 'Journal2022',
              component: Journal2022,
            },
            {
              path: '2021',
              name: 'Journal2021',
              component: Journal2021,
            },
            {
              path: '2020',
              name: 'Journal2020',
              component: Journal2020,
            },
            {
              path: '2019',
              name: 'Journal2019',
              component: Journal2019,
            },
            {
              path: '2018',
              name: 'Journal2018',
              component: Journal2018,
            },
            {
              path: '2017',
              name: 'Journal2017',
              component: Journal2017,
            },
            {
              path: '2016',
              name: 'Journal2016',
              component: Journal2016,
            },
            {
              path: '2015',
              name: 'Journal2015',
              component: Journal2015,
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
