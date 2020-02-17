function buildLayer(result, layer, image) {
	return {
		"id": layer,
		"type": "symbol",
		"source": {
			"type": "geojson",
			"data": result,
		},
		"layout": {
			"icon-image": image,
			"icon-allow-overlap": true,
			"icon-ignore-placement": true,
			"icon-anchor": "bottom",
		},
	}
}

export default {
	methods: {
		buildMarkers() {
			this.map.on("load", async() => {
				await this.map.loadImage(require("@/assets/ghost.png"), (error, image) => {
					this.map.addImage("ghost", image)
				})
				await this.map.loadImage(require("@/assets/marker.png"), (error, image) => {
					this.map.addImage("marker", image)
				})

				await fetch("/api/map.json").then(response => response.json()).then(result => {
					for(let layer of [{ name: "ghosts", icon: "ghost" }, { name: "breweries", icon: "marker" }]) {
						this.map.addLayer(buildLayer(result, layer.name, layer.icon))
						this.buildPopups(layer.name)
						this.linkMarkers(layer.name)
					}
					this.adjustMap()
					this.loading = false
				})
			})
		},
		linkMarkers(layer) {
			this.map.on("click", layer, event => {
				let slug = event.features[0].properties.slug
				this.$router.push({ name: "brewery", params: { slug: slug } })
			})
		},
	},
}