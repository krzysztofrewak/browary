<template>
	<div v-if="country">
		<page-header :country="country" :subtitle="subtitle" :title="country.name"></page-header>
		<breweries :breweries="country.breweries"></breweries>
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
				country: null,
			}
		},
		computed: {
			subtitle() {
				return "Wszystkie zwiedzone browary (" + this.country.breweriesCount + ")"
			},
		},
		mounted() {
			this.initializeView()
		},
		methods: {
			initializeView() {
				fetch("/api/countries/" + this.$route.params.slug + ".json").then(response => response.json()).then(result => {
					this.country = result
					this.$store.commit("selectCountry", this.country)
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