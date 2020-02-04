<template>
	<div class="h-full flex flex-col items-stretch" id="app">
		<navigation></navigation>

		<div class="flex flex-row h-full w-full bg-gray-200 overflow-y-hidden">
			<div class="w-2/5 p-8 bg-gray-200 overflow-x-hidden overflow-y-scroll">
				<router-view></router-view>
				<div class="h-8 w-full"></div>
			</div>
			<map-panel></map-panel>
		</div>
	</div>
</template>

<script>
	import Map from "@/components/layout/Map"
	import Navigation from "@/components/layout/Navigation"

	export default {
		components: {
			"map-panel": Map,
			Navigation,
		},
	}
</script>
