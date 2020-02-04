<template>
	<div v-if="brewery">
		<page-header :country="brewery.location.country" :subtitle="brewery.location.city" :title="brewery.name"></page-header>
		<hr>

		<p class="my-6 mx-2" v-if="brewery.note">{{ brewery.note }}</p>
		<p class="my-6 mx-2 text-gray-600"  v-else>Nie zapisano żadnej notatki o tym browarze.</p>
		<hr>

		<div class="my-10 w-full flex">
			<div class="w-full text-center flex-1">
				<div class="text-gray-600 uppercase text-sm">
					wizyta
				</div>
				<div class="my-3 text-gray-600">
					<i class="big clock outline icon"></i>
				</div>
				<div>
					{{ brewery.date }},<br>
					<router-link :to="{ name: 'trip', params: { slug: brewery.trip.slug } }">
						{{ brewery.trip.name}}
					</router-link>
				</div>
			</div>
			<div class="w-full text-center flex-1">
				<div class="text-gray-600 uppercase text-sm">
					adres
				</div>
				<div class="my-3 text-gray-600">
					<i class="big map signs icon"></i>
				</div>
				<div>
					{{ brewery.location.address }},
					<br>
					{{ brewery.location.city }}
				</div>
			</div>
			<div class="w-full text-center flex-1">
				<div class="text-gray-600 uppercase text-sm">
					koordynaty
				</div>
				<div class="my-3 text-gray-600">
					<a :href="mapsLink" target="_blank">
						<i class="big map marker alternate icon"></i>
					</a>
				</div>
				<div>
					{{ brewery.location.coordinates[1] }},
					<br>
					{{ brewery.location.coordinates[0] }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import PageHeader from "../components/PageHeader"

	export default {
		components: {
			PageHeader,
		},
		data() {
			return {
				brewery: null,
			}
		},
		computed: {
			mapsLink() {
				let link = "https://www.google.com/maps/place/"
				link += this.brewery.location.coordinates[1]
				link += ", "
				link += this.brewery.location.coordinates[0]
				return link
			}
		},
		mounted() {
			this.initializeView()
		},
		methods: {
			initializeView() {
				fetch("/api/breweries/" + this.$route.params.slug + ".json").then(response => response.json()).then(result => {
					this.brewery = result
					this.$store.commit("selectBrewery", this.brewery)
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