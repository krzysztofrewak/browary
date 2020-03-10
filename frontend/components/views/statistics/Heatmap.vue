<template>
	<section class="w-full mb-6" v-if="entries.length">
		<section-header :subtitle="subtitle" :title="title"></section-header>
		<div class="flex w-full text-center">
			<heatmap-entry :label="entry.label" :max="max" :value="entry.value" v-for="entry in entries"></heatmap-entry>
		</div>
	</section>
</template>

<script>
	import HeatmapEntry from "./HeatmapEntry"
	import SectionHeader from "../../SectionHeader"

	export default {
		components: {
			HeatmapEntry,
			SectionHeader,
		},
		computed: {
			max() {
				return Math.max(...this.entries.map(value => value.value))
			},
		},
		props: {
			entries: {
				type: Array,
			},
			title: {
				type: String,
			},
			subtitle: {
				type: String,
			},
		},
	}
</script>
