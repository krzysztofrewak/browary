import Vue from "vue"
import VueRouter from "vue-router"
import store from "@/store"

Vue.use(VueRouter)

const routes = [
	{ path: "/", name: "home", redirect: { name: "breweries" } },
	{ path: "/o", name: "about", component: () => import("./views/About.vue"), meta: { resetMap: true } },
	{ path: "/browary", name: "breweries", component: () => import("./views/Breweries.vue"), meta: { resetMap: true } },
	{ path: "/browary/:slug", name: "brewery", component: () => import("./views/Brewery.vue") },
	{ path: "/kalendarz", name: "calendar", component: () => import("./views/Calendar.vue"), meta: { resetMap: true } },
	{ path: "/kalendarz/:year", name: "calendar.year", component: () => import("./views/CalendarPage.vue"), meta: { resetMap: true } },
	{ path: "/kalendarz/:year/:month", name: "calendar.month", component: () => import("./views/CalendarPage.vue"), meta: { resetMap: true } },
	{ path: "/panstwa", name: "countries", component: () => import("./views/Countries.vue") },
	{ path: "/panstwa/:slug", name: "country", component: () => import("./views/Country.vue") },
	{ path: "/wycieczki", name: "trips", component: () => import("./views/Trips.vue") },
	{ path: "/wycieczki/:slug", name: "trip", component: () => import("./views/Trip.vue") },
	{ path: "/tagi", name: "tags", component: () => import("./views/Tags.vue") },
	{ path: "/tagi/:slug", name: "tag", component: () => import("./views/Tag.vue") },
	{ path: "/notatki", name: "notes", component: () => import("./views/Notes.vue"), meta: { resetMap: true } },
	{ path: "/statystyki", name: "statistics", component: () => import("./views/Statistics.vue"), meta: { resetMap: true } },

	{ path: "/404", name: "404", redirect: { name: "none" } },
	{ path: "/*", name: "none", component: () => import("./views/404.vue"), meta: { resetMap: true } },
]

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
})

router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.resetMap)) {
		store.commit("resetMap")
	}

	next()
})

export default router
