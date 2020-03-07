<template>
	<div v-if="brewery">
		<page-header :country="brewery.location.country" :subtitle="brewery.location.city" :title="brewery.name"></page-header>
		<hr>
		<infobox :brewery="brewery"></infobox>
		<hr>
		<description :note="brewery.note"></description>
		<hr>
		<tags :tags="brewery.tags"></tags>
	</div>
</template>

<script>
	import api from "../resources/Brewery"
	import PageHeader from "../components/PageHeader"
	import Description from "../components/views/brewery/Description"
	import Infobox from "../components/views/brewery/Infobox"
	import Tags from "../components/views/brewery/Tags"

	export default {
		components: {
			Tags,
			Infobox,
			Description,
			PageHeader,
		},
		data() {
			return {
				brewery: null,
			}
		},
		mounted() {
			this.buildView()
		},
		methods: {
			buildView() {
				api.assign(this.$route.params.slug, result => {
					this.brewery = result
					this.$store.commit("selectBrewery", this.brewery)
				}, this.$router)
			},
		},
		watch: {
			"$route.params.slug"() {
				this.buildView()
			},
		},
	}
</script>