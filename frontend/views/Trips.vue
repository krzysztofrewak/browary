<template>
	<div>
		<div class="mb-8">
			<h1 class="text-2xl text-blue-900 font-semibold leading-none">Wycieczki</h1>
			<h2 class="text-gray-600">Wszystkie wycieczki z więcej niż jednym browarem, chronologicznie</h2>
		</div>

		<div class="text-sm">
			<div class="flex py-1 px-2 border-b items-center hover:bg-gray-300" v-for="trip in trips">
				<div class="flex-grow mt-1 mr-3">
					<router-link :to="{ name: 'country', params: { slug: country.slug } }" v-for="country in trip.countries">
						<i :class="country.symbol" class="mr-1 flat flag"></i>
					</router-link>
					<router-link :to="{ name: 'trip', params: { slug: trip.slug } }">
						{{ trip.name }}
					</router-link>
				</div>
				<div class="text-gray-600 text-right">
					{{ inflectBrewery(trip.breweries) }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				trips: [],
			}
		},
		computed: {
			tripsCount() {
				return Object.keys(this.trips).length
			},
		},
		mounted() {
			fetch("/api/trips.json").then(response => response.json()).then(result => {
				this.trips = result
			})
		},
	}
</script>