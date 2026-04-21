function areBoundsPoint (bounds) {
  return bounds[0][0] === bounds[1][0] && bounds[0][1] === bounds[1][1]
}

export default {
  methods: {
    adjustMap () {
      const bounds = this.$store.getters.mapFilterBounds
      const center = this.$store.getters.mapFilterCenter
      const filter = this.$store.getters.mapFilterValue
      const padding = window.innerWidth > 1024 ? 120 : 30

      this.setFilters(filter)
      this.updateRoute(this.$store.getters.tripRoute)

      if (bounds) {
        if (areBoundsPoint(bounds)) {
          this.jumpToPoint(bounds[0])
          return
        }

        this.map.fitBounds(bounds, { padding: padding, duration: 0 })
        return
      }

      if (center) {
        this.setFilters({ key: 'slug', value: this.$route.params.slug })
        this.jumpToPoint(center)
      }
    },
    setFilters (filter) {
      if (filter && filter.key && filter.value) {
        this.map.setLayoutProperty('inactives', 'visibility', 'visible')
        if (filter.key === 'tag') {
          this.map.setFilter('breweries', ['has', 'tag_' + filter.value])
          this.map.setFilter('inactives', ['!has', 'tag_' + filter.value])
        } else {
          this.map.setFilter('breweries', ['==', filter.key, filter.value])
          this.map.setFilter('inactives', ['!=', filter.key, filter.value])
        }
      } else {
        this.resetMarkers()
      }
    },
    jumpToPoint (point) {
      this.map.jumpTo({
        center: point,
        zoom: 13,
        essential: true
      })
    },
    resetMarkers () {
      this.map.setFilter('breweries', null)
      this.map.setFilter('inactives', null)
      this.map.setLayoutProperty('inactives', 'visibility', 'none')
    }
  },
  watch: {
    '$store.getters.mapFilters': {
      deep: true,
      handler () {
        if (!this.loading) {
          this.adjustMap()
        }
      }
    },
    '$store.getters.inactives' (inactives) {
      if (this.loading) return
      if (!inactives) {
        this.resetMarkers()
      } else {
        this.setFilters(this.$store.getters.mapFilterValue)
      }
    }
  }
}
