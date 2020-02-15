import mapbox from "mapbox-gl"
import geocoder from "@mapbox/mapbox-gl-geocoder"

export default {
	methods: {
		addControls() {
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
		},
	},
}