<template>
	<div class="w-full h-full" id="map"></div>
</template>

<script>
	import mapbox from "mapbox-gl"
	import geocoder from "@mapbox/mapbox-gl-geocoder"

	export default {
		mounted() {
			mapbox.accessToken = process.env.VUE_APP_MAPBOX_TOKEN
			this.buildMap()
		},
		data() {
			return {
				map: null,
				filtered: [],
			}
		},
		methods: {
			buildMap() {
				this.map = new mapbox.Map({
					container: "map",
					style: process.env.VUE_APP_MAPBOX_STYLE_URL,
				})

				this.map.addControl(new mapbox.NavigationControl(), "top-left")
				this.map.addControl(new mapbox.ScaleControl(), "bottom-left")
				this.map.addControl(
					new geocoder({
						accessToken: mapbox.accessToken,
						marker: false,
						mapboxgl: this.map,
						types: "country,region,district,place",
					}),
				)

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
						})
					})
					this.buildPopups(this.map)

					this.map.on("click", "breweries", event => {
						let slug = event.features[0].properties.slug
						this.$router.push({ name: "brewery", params: { slug: slug } })
					})
				})
			},
			buildPopups(map) {
				let popup = new mapbox.Popup({
					closeButton: false,
					closeOnClick: false,
					anchor: "left",
					maxWidth: "none",
					offset: [12, -16],
					className: "map-marker-popup text-gray-700",
				})

				map.on("mousemove", "breweries", event => {
					let label = event.features[0].properties.label
					let coordinates = event.features[0].geometry.coordinates.slice()

					while(Math.abs(event.lngLat.lng - coordinates[0]) > 180) {
						coordinates[0] += event.lngLat.lng > coordinates[0] ? 360 : -360
					}

					popup.setLngLat(coordinates).setText(label).addTo(map)
				})

				map.on("mouseleave", "breweries", () => {
					popup.remove()
				})
			},
		},
		watch: {
			"$store.getters.mapFilters": {
				deep: true,
				handler() {
					let bounds = this.$store.getters.mapFilterBounds
					let center = this.$store.getters.mapFilterCenter
					let filter = this.$store.getters.mapFilterValue

					if(this.map.isStyleLoaded()) {
						if(filter.key && filter.value) {
							this.map.setFilter("breweries", [
								"==", filter.key, filter.value,
							])
						} else {
							this.map.setFilter("breweries", null)
						}
					}

					if(bounds) {
						if(bounds[0][0] === bounds[1][0] && bounds[0][1] === bounds[1][1]) {
							this.map.jumpTo({
								center: bounds[0],
								zoom: 12,
								essential: true,
							})
							return
						}

						this.map.fitBounds(bounds, { padding: 100, duration: 0 })
						return
					}

					if(center) {
						this.map.jumpTo({
							center: center,
							zoom: 12,
							essential: true,
						})
					}
				},
			},
		},
	}
</script>

<style>
	.map-marker-popup > div:not(:first-child) {
		padding: 4px 8px;
	}
</style>