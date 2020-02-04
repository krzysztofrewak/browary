<template>
	<div class="mb-8 flex items-center">
		<div class="mt-1 mr-4" v-if="country">
			<router-link :to="{ name: 'country', params: { slug: country.slug } }">
				<i :class="country.symbol" class="giant flat flag"></i>
			</router-link>
		</div>
		<div>
			<h1 class="text-2xl text-blue-900 font-semibold leading-none">{{ title }}</h1>
			<h2 class="text-gray-600" v-if="subtitle">{{ subtitle }}</h2>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				required: true,
			},
			subtitle: {
				type: String,
			},
			country: {
				type: Object,
			},
		},
	}
</script>
