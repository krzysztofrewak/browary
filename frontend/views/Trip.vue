<template>
	<div v-if="trip">
		<page-header :subtitle="subtitle" :title="trip.name"></page-header>

		<div v-if="trip">
			<breweries :breweries="trip.breweries"></breweries>
		</div>
	</div>
</template>

<script>
	import Breweries from "../components/Breweries"
	import PageHeader from "../components/PageHeader"

	export default {
		components: {
			Breweries,
			PageHeader,
		},
		data() {
			return {
				trip: null,
			}
		},
		computed: {
			subtitle() {
				return "Wszystkie zwiedzone browary"
			},
		},
		mounted() {
			this.initializeView()
		},
		methods: {
			initializeView() {
				fetch("/api/trips/" + this.$route.params.slug + ".json").then(response => response.json()).then(result => {
					this.trip = result
				})
			},
		},
		watch: {
			"$route.params.slug"() {
				this.initializeView()
			},
		},
	}
</script>