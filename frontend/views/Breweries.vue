<template>
	<div>
		<page-header :subtitle="subtitle" title="Odwiedzone browary"></page-header>
		<breweries :breweries="breweries"></breweries>
	</div>
</template>

<script>
	import Breweries from "../components/Breweries"
	import PageHeader from "../components/PageHeader"
	import api from "../resources/Breweries"

	export default {
		components: { PageHeader, Breweries },
		data() {
			return {
				breweries: [],
			}
		},
		computed: {
			subtitle() {
				if(this.$store.getters.counters) {
					let breweries = this.$store.getters.counters.breweries
					let countries = this.$store.getters.counters.countries
					return this.inflectBrewery(breweries) + " w " + countries + " państwach"
				}
			},
		},
		mounted() {
			api.assign(result => {
				this.breweries = Object.values(result)
			})
		},
	}
</script>