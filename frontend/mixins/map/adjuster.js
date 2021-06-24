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
        if (filter.key === 'tag') {
          this.map.setFilter('breweries', ['has', 'tag_' + filter.value])
          this.map.setFilter('ghosts', ['!has', 'tag_' + filter.value])
        } else {
          this.map.setFilter('breweries', ['==', filter.key, filter.value])
          this.map.setFilter('ghosts', ['!=', filter.key, filter.value])
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
      this.map.setFilter('ghosts', ['==', 'key', 'value'])
    }
  },
  watch: {
    '$store.getters.mapFilters': {
      deep: true,
      handler () {
        if (this.map.isStyleLoaded()) {
          this.adjustMap()
        }
      }
    },
    '$store.getters.ghosts' (ghosts) {
      if (!ghosts) {
        this.resetMarkers()
      } else {
        this.setFilters(this.$store.getters.mapFilterValue)
      }
    }
  }
}
