<template>
	<div class="flex-grow h-full">
		<div class="flex justify-center items-center w-full h-full bg-gray-300 text-gray-400" v-if="loading">
			<div>
				<i class="huge notched circle loading icon"></i>
			</div>
		</div>
		<div class="w-full h-full" id="map"></div>
	</div>
</template>

<script>
	import mapbox from "mapbox-gl"
	import adjuster from "@/mixins/map/adjuster"
	import controls from "@/mixins/map/controls"
	import markers from "@/mixins/map/markers"
	import popups from "@/mixins/map/popups"

	export default {
		mixins: [
			adjuster,
			controls,
			markers,
			popups,
		],
		mounted() {
			mapbox.accessToken = process.env.VUE_APP_MAPBOX_TOKEN
			this.buildMap()
		},
		data() {
			return {
				loading: true,
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

				this.addControls()
				this.buildMarkers()
			},
		},
	}
</script>

<style lang="scss">
	.map-marker-popup > div:not(:first-child) {
		padding: 4px 8px;
	}

	#map-controls {
		i {
			margin: auto;
		}
	}
</style>