import { createStore } from 'vuex'

const state = {
  mapFilters: {
    id: null,
    center: null,
    bounds: null,
    filter: {
      key: null,
      value: null
    }
  },
  inactives: true,
  counters: null,
  defaultBounds: null,
  tripRoute: null
}

const getters = {
  mapFilters: state => state.mapFilters,
  mapFilterCenter: state => state.mapFilters.center,
  mapFilterBounds: state => state.mapFilters.bounds,
  mapFilterValue: state => state.mapFilters.filter,
  counters: state => state.counters,
  inactives: state => state.inactives,
  defaultBounds: state => state.defaultBounds,
  tripRoute: state => state.tripRoute
}

const mutations = {
  setCounters (state, counters) {
    state.counters = counters
  },
  setMapDefaultExtremes (state, extremes) {
    state.defaultBounds = [
      [extremes.west, extremes.south],
      [extremes.east, extremes.north]
    ]
  },
  resetMap (state) {
    state.mapFilters.id = Math.random()
    state.mapFilters.center = null
    state.mapFilters.bounds = state.defaultBounds
    state.mapFilters.filter.key = null
    state.mapFilters.filter.value = null
    state.tripRoute = null
  },
  selectBrewery (state, brewery) {
    state.mapFilters.center = brewery.location.coordinates
    state.mapFilters.bounds = null
    state.mapFilters.filter.key = null
    state.mapFilters.filter.value = null
  },
  setFilter (state, payload) {
    state.mapFilters.center = null
    state.mapFilters.bounds = payload.item.extremes
      ? [
          [payload.item.extremes.west, payload.item.extremes.south],
          [payload.item.extremes.east, payload.item.extremes.north]
        ]
      : state.defaultBounds
    state.mapFilters.filter.key = payload.type
    state.mapFilters.filter.value = payload.item.slug
  },
  setTripRoute (state, coordinates) {
    state.tripRoute = coordinates
  },
  clearTripRoute (state) {
    state.tripRoute = null
  },
  toggleInactives (state) {
    state.inactives = !state.inactives
  }
}

export default createStore({
  state,
  getters,
  mutations
})
