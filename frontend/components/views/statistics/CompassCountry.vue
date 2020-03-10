<template>
	<div class="flex flex-1 flex-col justify-center items-center" v-if="brewery">
		<router-link :to="{ name: 'country', params: { slug: brewery.location.country.slug } }">
			<i :class="brewery.location.country.symbol" class="huge flat flag"></i>
		</router-link>
		<router-link :to="{ name: 'brewery', params: { slug: brewery.slug } }">
			{{ brewery.name }}
		</router-link>
	</div>
	<div class="flex-1" v-else>
		<slot></slot>
	</div>
</template>

<script>
	export default {
		props: {
			brewery: {
				type: Object,
				required: false,
			},
		},
	}
</script>
