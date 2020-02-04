import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const state = {
	mapFilters: {
		center: null,
		bounds: null,
		filter: {
			key: null,
			value: null,
		},
	},
	defaultBounds: null,
}

const getters = {
	mapFilters: state => state.mapFilters,
	mapFilterCenter: state => state.mapFilters.center,
	mapFilterBounds: state => state.mapFilters.bounds,
	mapFilterValue: state => state.mapFilters.filter,
	defaultBounds: state => state.defaultBounds,
}

const mutations = {
	setMapDefaultExtremes(state, extremes) {
		state.defaultBounds = [
			[extremes.west, extremes.south],
			[extremes.east, extremes.north],
		]
	},
	resetMap(state) {
		state.mapFilters.center = null
		state.mapFilters.bounds = state.defaultBounds
		state.mapFilters.filter.key = null
		state.mapFilters.filter.value = null
	},
	selectBrewery(state, brewery) {
		state.mapFilters.center = brewery.location.coordinates
		state.mapFilters.bounds = null
		state.mapFilters.filter.key = null
		state.mapFilters.filter.value = null
	},
	selectCountry(state, country) {
		state.mapFilters.center = null
		state.mapFilters.bounds = [
			[country.extremes.west, country.extremes.south],
			[country.extremes.east, country.extremes.north],
		]
		state.mapFilters.filter.key = "country"
		state.mapFilters.filter.value = country.slug
	},
}

export default new Vuex.Store({
	state,
	getters,
	mutations,
})
