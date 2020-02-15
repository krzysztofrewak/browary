export default {
	methods: {
		buildMarkers() {
			this.map.on("load", () => {
				this.map.loadImage(require("@/assets/marker.png"), (error, image) => {
					this.map.addImage("marker", image)

					fetch("/api/map.json").then(response => response.json()).then(result => {
						this.map.addLayer({
							"id": "breweries",
							"type": "symbol",
							"source": {
								"type": "geojson",
								"data": result,
							},
							"layout": {
								"icon-image": "marker",
								"icon-allow-overlap": true,
								"icon-ignore-placement": true,
								"icon-anchor": "bottom",
							},
						})

						this.buildPopups()
						this.adjustMap()
					})
				})

				this.map.on("click", "breweries", event => {
					let slug = event.features[0].properties.slug
					this.$router.push({ name: "brewery", params: { slug: slug } })
				})
			})
		},
	},
}