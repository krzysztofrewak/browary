<template>
  <div>
    <heatmap :entries="weekdays" subtitle="Popularność wybranych dni tygodnia"
        title="Podsumowanie tygodniowe"></heatmap>
    <hr class="mb-6">
    <heatmap :entries="months" subtitle="Popularność wybranych miesięcy" title="Podsumowanie miesięczne"></heatmap>
    <hr class="mb-6">
    <compass v-if="extremes" :extremes="extremes"></compass>
  </div>
</template>

<script>
import PageHeader from '../components/PageHeader'
import Compass from '../components/views/statistics/Compass'
import Heatmap from '../components/views/statistics/Heatmap'
import api from '../resources/Statistics'

export default {
  components: {
    Heatmap,
    Compass,
    PageHeader,
  },
  data () {
    return {
      extremes: null,
      weekdays: [],
      months: [],
    }
  },
  mounted () {
    api.assign(result => {
      this.extremes = result.extremes
      this.weekdays = Object.values(result.weekdays)
      this.months = Object.values(result.months)
    })
  },
}
</script>