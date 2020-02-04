<template>
	<div>
		<page-header title="Odwiedzone browary" :subtitle="subtitle"></page-header>
		<breweries :breweries="Object.values(breweries)"></breweries>
	</div>
</template>

<script>
	import Breweries from "../components/Breweries"
	import PageHeader from "../components/PageHeader"

	export default {
		components: { PageHeader, Breweries },
		data() {
			return {
				breweries: [],
			}
		},
		computed: {
			breweriesCount() {
				return Object.keys(this.breweries).length
			},
			subtitle() {
				return "198 browarów w 19 państwach"
			},
		},
		mounted() {
			fetch("/api/breweries.json").then(response => response.json()).then(result => {
				this.breweries = result
			})
		},
	}
</script>