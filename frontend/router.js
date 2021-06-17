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
    path: '/miasta',
    name: 'cities',
    component: () => import(/* webpackChunkName: "cities" */ './views/Cities.vue'),
    meta: { section: 'cities' }
  },
  {
    path: '/miasta/:slug',
    name: 'city',
    component: () => import(/* webpackChunkName: "city" */ './views/City.vue'),
    meta: { section: 'cities' }
  },
  {
    path: '/wycieczki',
    name: 'trips',
    component: () => import(/* webpackChunkName: "trips" */ './views/Trips.vue'),
    meta: { section: 'trips' }
  },
  {
    path: '/wycieczki/:slug',
    name: 'trip',
    component: () => import(/* webpackChunkName: "trip" */ './views/Trip.vue'),
    meta: { section: 'trips' }
  },
  {
    path: '/tagi',
    name: 'tags',
    component: () => import(/* webpackChunkName: "tags" */ './views/Tags.vue'),
    meta: { section: 'tags' }
  },
  {
    path: '/tagi/:slug',
    name: 'tag',
    component: () => import(/* webpackChunkName: "tag" */ './views/Tag.vue'),
    meta: { section: 'tags' }
  },
  {
    path: '/statystyki',
    name: 'statistics',
    component: () => import(/* webpackChunkName: "statistics" */ './views/Statistics.vue'),
    meta: { section: 'statistics' }
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
