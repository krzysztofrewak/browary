import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/informacje',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
  },
  {
    path: '/panstwa',
    name: 'countries',
    component: () => import(/* webpackChunkName: "about" */ './views/Countries.vue')
  },
  {
    path: '/panstwa/:slug',
    name: 'country',
    component: () => import(/* webpackChunkName: "about" */ './views/Country.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
