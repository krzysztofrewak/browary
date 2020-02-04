<template>
	<div>
		<div class="mb-8">
			<h1 class="text-2xl text-blue-900 font-semibold leading-none">Odwiedzone państwa</h1>
			<h2 class="text-gray-600">Wszystkie państwa, alfabetycznie ({{ countriesCount }})</h2>
		</div>

		<div class="text-sm">
			<div class="flex py-1 px-2 border-b items-center hover:bg-gray-300" v-for="country in countries">
				<div class="mt-1 mr-3">
					<router-link :to="{ name: 'country', params: { slug: country.slug } }">
						<i :class="country.symbol" class="large flat flag"></i>
					</router-link>
				</div>
				<div class="flex-grow">
					<router-link :to="{ name: 'country', params: { slug: country.slug } }">{{ country.name }}</router-link>
				</div>
				<div class="text-gray-600 text-right">
					{{ inflectBrewery(country.breweries) }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				countries: [],
			}
		},
		computed: {
			countriesCount() {
				return Object.keys(this.countries).length
			},
		},
		mounted() {
			fetch("/api/countries.json").then(response => response.json()).then(result => {
				this.countries = result
			})
		},
	}
</script>