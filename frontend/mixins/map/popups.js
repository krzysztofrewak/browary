import mapbox from "mapbox-gl"

export default {
	methods: {
		buildPopups(layer) {
			let popup = new mapbox.Popup({
				closeButton: false,
				closeOnClick: false,
				anchor: "left",
				maxWidth: "none",
				offset: [12, -16],
				className: "map-marker-popup text-gray-700",
			})

			this.map.on("mousemove", layer, event => {
				let label = event.features[0].properties.label
				let flag = "<i class='flat " + event.features[0].properties.symbol + " flag'></i>"
				let coordinates = event.features[0].geometry.coordinates.slice()

				while(Math.abs(event.lngLat.lng - coordinates[0]) > 180) {
					coordinates[0] += event.lngLat.lng > coordinates[0] ? 360 : -360
				}

				popup.setLngLat(coordinates).setHTML(flag + " " + label).addTo(this.map)
			})

			this.map.on("mouseleave", layer, () => {
				popup.remove()
			})
		},
	},
}