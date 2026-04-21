const SOURCE = 'trip-route'
const LAYER = 'trip-route-line'
const EMPTY = { type: 'FeatureCollection', features: [] }

function toGeojson (coordinates) {
  return {
    type: 'Feature',
    geometry: {
      type: 'LineString',
      coordinates: coordinates.map(c => c.map(Number))
    }
  }
}

export default {
  methods: {
    buildRoute () {
      const coordinates = this.$store.getters.tripRoute
      const data = coordinates && coordinates.length >= 2 ? toGeojson(coordinates) : EMPTY

      this.map.addSource(SOURCE, { type: 'geojson', data })
      this.map.addLayer({
        id: LAYER,
        type: 'line',
        source: SOURCE,
        layout: {
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': '#64748b',
          'line-width': 2,
          'line-dasharray': [2, 3]
        }
      }, 'breweries')
    },
    updateRoute (coordinates) {
      if (!this.map.getSource(SOURCE)) return
      this.map.getSource(SOURCE).setData(
        coordinates && coordinates.length >= 2 ? toGeojson(coordinates) : EMPTY
      )
    }
  }
}
