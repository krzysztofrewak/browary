<template>
	<div>
		<div class="mb-8">
			<h1 class="text-2xl text-blue-900 font-semibold leading-none">Tagi</h1>
			<h2 class="text-gray-600">Wszystkie tagi, alfabetycznie</h2>
		</div>

		<div class="text-sm">
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
	export default {
		data() {
			return {
				tags: [],
			}
		},
		computed: {
			tagsCount() {
				return Object.keys(this.tags).length
			},
		},
		mounted() {
			fetch("/api/tags.json").then(response => response.json()).then(result => {
				this.tags = result
			})
		},
	}
</script>