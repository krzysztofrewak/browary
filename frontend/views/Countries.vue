<template>
	<div>
		<div class="mb-6">
			<h1 class="text-2xl text-blue-900 font-semibold leading-none">Odwiedzone państwa</h1>
			<h2 class="text-gray-600">Wszystkie państwa z odwiedzonymi browarami ({{ countriesCount }})</h2>
		</div>

		<div class="text-sm">
			<div class="flex text-gray-600 py-2 px-2 border-b items-center">
				<div @click="sortBy('symbol')" class="cursor-pointer w-12">kod</div>
				<div @click="sortBy('name')" class="cursor-pointer flex-grow">nazwa</div>
				<div @click="sortBy('breweries')" class="cursor-pointer text-right">odwiedzone browary</div>
			</div>
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
				sortKey: null,
			}
		},
		computed: {
			countriesCount() {
				return this.countries.length
			},
		},
		mounted() {
			fetch("/api/countries.json").then(response => response.json()).then(result => {
				this.countries = Object.values(result)
			})
		},
		methods: {
			sortBy(key) {
				this.countries = this.countries.sort((a, b) => Number.isInteger(a[key]) ? a[key] < b[key] : a[key] > b[key])
			},
		},
	}
</script>