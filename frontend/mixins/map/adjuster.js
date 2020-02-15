function areBoundsPoint(bounds) {
	return bounds[0][0] === bounds[1][0] && bounds[0][1] === bounds[1][1]
}

export default {
	methods: {
		adjustMap() {
			let bounds = this.$store.getters.mapFilterBounds
			let center = this.$store.getters.mapFilterCenter
			let filter = this.$store.getters.mapFilterValue

			if(filter.key && filter.value) {
				this.map.setFilter("breweries", [
					"==", filter.key, filter.value,
				])
			} else {
				this.map.setFilter("breweries", null)
			}

			if(bounds) {
				if(areBoundsPoint(bounds)) {
					this.jumpToPoint(bounds[0])
					return
				}

				this.map.fitBounds(bounds, { padding: 100, duration: 0 })
				return
			}

			if(center) {
				this.jumpToPoint(center)
			}
		},
		jumpToPoint(point) {
			this.map.jumpTo({
				center: point,
				zoom: 13,
				essential: true,
			})
		},
	},
	watch: {
		"$store.getters.mapFilters": {
			deep: true,
			handler() {
				this.adjustMap()
			},
		},
	},
}