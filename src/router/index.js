import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView'
import ContactView from '@/views/ContactView'
import CyberAttackView from '@/views/CyberAttackView'
import DataBreachView from '@/views/DataBreachView'
import PageNotFoundView from '@/views/PageNotFoundView'
import VulnerabilitiesView from '@/views/VulnerabilitiesView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/vulnerabilities',
    name: 'vulnerabilities',
    component: VulnerabilitiesView
  },
  {
    path: '/data-breach',
    name: 'databreach',
    component: DataBreachView
  },
  {
    path: '/cyber-attack',
    name: 'cyberattack',
    component: CyberAttackView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/:catchAll(.*)',
    name: 'notfound',
    component: PageNotFoundView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
