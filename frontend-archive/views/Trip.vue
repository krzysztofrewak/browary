<template>
  <div v-if="trip">
    <page-header :subtitle="subtitle" :title="trip.name"></page-header>

    <div v-if="trip">
      <breweries :breweries="trip.breweries"></breweries>
    </div>
  </div>
</template>

<script>
import api from '../resources/Trip'
import Breweries from '../components/Breweries'
import PageHeader from '../components/PageHeader'

export default {
  components: {
    Breweries,
    PageHeader,
  },
  data () {
    return {
      trip: null,
    }
  },
  computed: {
    subtitle () {
      return 'Wszystkie zwiedzone browary'
    },
  },
  mounted () {
    this.initializeView()
  },
  methods: {
    initializeView () {
      api.assign(this.$route.params.slug, result => {
        this.trip = result
        this.$store.commit('setFilter', { type: 'trip', item: this.trip })
      }, this.router)
    },
  },
  watch: {
    '$route.params.slug' () {
      this.initializeView()
    },
  },
}
</script>