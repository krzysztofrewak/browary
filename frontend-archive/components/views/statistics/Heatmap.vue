<template>
  <section v-if="entries.length" class="w-full mb-6">
    <section-header :subtitle="subtitle" :title="title"></section-header>
    <div class="flex w-full text-center">
      <heatmap-entry v-for="entry in entries" :label="entry.label" :max="max" :value="entry.value"></heatmap-entry>
    </div>
  </section>
</template>

<script>
import HeatmapEntry from './HeatmapEntry'
import SectionHeader from '../../SectionHeader'

export default {
  components: {
    HeatmapEntry,
    SectionHeader,
  },
  computed: {
    max () {
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
