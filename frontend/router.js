import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { section: 'home' }
  },
  {
    path: '/browar/:slug',
    name: 'brewery',
    component: () => import(/* webpackChunkName: "brewery" */ './views/Brewery.vue'),
    meta: { section: 'home' }
  },
  {
    path: '/kalendarz',
    name: 'calendar',
    component: () => import(/* webpackChunkName: "calendar" */ './views/Calendar.vue'),
    meta: { section: 'calendar' }
  },
  {
    path: '/kalendarz/:year',
    name: 'calendar.year',
    component: () => import(/* webpackChunkName: "year" */ './views/CalendarYear.vue'),
    meta: { section: 'calendar' }
  },
  {
    path: '/kalendarz/:year/:month',
    name: 'calendar.month',
    component: () => import(/* webpackChunkName: "month" */ './views/CalendarMonth.vue'),
    meta: { section: 'calendar' }
  },
  {
    path: '/informacje',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    meta: { section: 'about' }
  },
  {
    path: '/panstwa',
    name: 'countries',
    component: () => import(/* webpackChunkName: "countries" */ './views/Countries.vue'),
    meta: { section: 'countries' }
  },
  {
    path: '/panstwa/:slug',
    name: 'country',
    component: () => import(/* webpackChunkName: "country" */ './views/Country.vue'),
    meta: { section: 'countries' }
  },
  {
    path: '/wycieczki/:slug',
    name: 'trip',
    component: () => import(/* webpackChunkName: "trip" */ './views/Home.vue'),
    meta: { section: 'trips' }
  },
  {
    path: '/tagi/:slug',
    name: 'tag',
    component: () => import(/* webpackChunkName: "tag" */ './views/Home.vue'),
    meta: { section: 'tags' }
  },
  {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ './views/NotFound.vue'),
    meta: { section: 'error' }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
