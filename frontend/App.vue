<template>
	<div class="h-full flex flex-col items-stretch" id="app">
		<navigation></navigation>

		<div class="flex flex-row h-full w-full bg-gray-200 overflow-y-hidden">
			<div class="w-2/5 bg-gray-200 overflow-x-hidden overflow-y-hidden">
				<scroll :ops="ops">
					<div class="p-8">
						<router-view></router-view>
					</div>
				</scroll>
			</div>
			<map-panel></map-panel>
		</div>
	</div>
</template>

<script>
	import Map from "@/components/layout/Map"
	import Navigation from "@/components/layout/Navigation"
	import Scroll from "vuescroll"

	export default {
		components: {
			"map-panel": Map,
			Navigation,
			Scroll,
		},
		data() {
			return {
				ops: {
					bar: {
						background: "#2a4365",
					},
					rail: {
						gutterOfSide: "4px",
						gutterOfEnds: "8px",
					},
				},
			}
		},
	}
</script>
