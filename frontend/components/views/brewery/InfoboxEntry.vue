<template>
	<div class="w-1/4 mb-4">
		<div class="text-gray-600 uppercase text-sm">
			{{ label }}
		</div>
		<div class="my-3 text-gray-600">
			<i :class="icon" class="large icon"></i>
		</div>
		<div class="text-sm mx-2">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			label: {
				type: String,
				required: true,
			},
			icon: {
				type: String,
				required: true,
			},
		},
	}
</script>
