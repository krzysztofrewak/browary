<template>
	<div>
		<page-header subtitle="Wszystkie tagi, alfabetycznie" title="Tagi"></page-header>

		<div class="text-sm">
			<div class="flex text-gray-600 py-2 px-2 border-b items-center">
				<div @click="sortBy('symbol')" class="cursor-pointer flex-grow">nazwa</div>
				<div @click="sortBy('breweries')" class="cursor-pointer text-right">odwiedzone browary</div>
			</div>
			<div class="flex py-1 px-2 border-b items-center hover:bg-gray-300" v-for="tag in tags">
				<div class="flex-grow mt-1 mr-3">
					<router-link :to="{ name: 'tag', params: { slug: tag.slug } }">
						<i class="text-gray-600 fitted hashtag icon"></i>
						{{ tag.name }}
					</router-link>
				</div>
				<div class="text-gray-600 text-right">
					{{ inflectBrewery(tag.breweries) }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import PageHeader from "../components/PageHeader"

	export default {
		components: { PageHeader },
		data() {
			return {
				tags: [],
				sortKey: null,
			}
		},
		mounted() {
			fetch("/api/tags.json").then(response => response.json()).then(result => {
				this.tags = Object.values(result)
			})
		},
		methods: {
			sortBy(key) {
				this.tags = this.tags.sort((a, b) => Number.isInteger(a[key]) ? a[key] < b[key] : a[key] > b[key])
			},
		},
	}
</script>