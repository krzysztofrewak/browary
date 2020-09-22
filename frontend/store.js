import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const state = {
    mapFilters: {
        id: null,
        center: null,
        bounds: null,
        filter: {
            key: null,
            value: null,
        },
    },
    ghosts: true,
    counters: null,
    defaultBounds: null,
}

const getters = {
    mapFilters: state => state.mapFilters,
    mapFilterCenter: state => state.mapFilters.center,
    mapFilterBounds: state => state.mapFilters.bounds,
    mapFilterValue: state => state.mapFilters.filter,
    counters: state => state.counters,
    ghosts: state => state.ghosts,
    defaultBounds: state => state.defaultBounds,
}

const mutations = {
    setCounters(state, counters) {
        state.counters = counters
    },
    setMapDefaultExtremes(state, extremes) {
        state.defaultBounds = [
            [extremes.west, extremes.south],
            [extremes.east, extremes.north],
        ]
    },
    resetMap(state) {
        state.mapFilters.id = Math.random()
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
    setFilter(state, payload) {
        state.mapFilters.center = null
        state.mapFilters.bounds = [
            [payload.item.extremes.west, payload.item.extremes.south],
            [payload.item.extremes.east, payload.item.extremes.north],
        ]
        state.mapFilters.filter.key = payload.type
        state.mapFilters.filter.value = payload.item.slug
    },
    toggleGhosts(state) {
        state.ghosts = !state.ghosts
    },
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
})
