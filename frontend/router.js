import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/browar/:slug',
    name: 'brewery',
    component: () => import(/* webpackChunkName: "brewery" */ './views/Brewery.vue')
  },
  {
    path: '/kalendarz',
    name: 'calendar',
    component: () => import(/* webpackChunkName: "calendar" */ './views/Calendar.vue')
  },
  {
    path: '/kalendarz/:year',
    name: 'calendar.year',
    component: () => import(/* webpackChunkName: "calendar" */ './views/CalendarYear.vue')
  },
  {
    path: '/informacje',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
  },
  {
    path: '/panstwa',
    name: 'countries',
    component: () => import(/* webpackChunkName: "countries" */ './views/Countries.vue')
  },
  {
    path: '/panstwa/:slug',
    name: 'country',
    component: () => import(/* webpackChunkName: "country" */ './views/Country.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ './views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
