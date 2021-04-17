<template>
  <div v-if="country">
    <page-header :country="country" :subtitle="subtitle" :title="country.name"></page-header>
    <breweries :breweries="country.breweries"></breweries>
  </div>
</template>

<script>
import api from '../resources/Country'
import Breweries from '../components/Breweries'
import PageHeader from '../components/PageHeader'

export default {
  components: {
    Breweries,
    PageHeader,
  },
  data () {
    return {
      country: null,
    }
  },
  computed: {
    subtitle () {
      return 'Wszystkie zwiedzone browary (' + this.country.breweriesCount + ')'
    },
  },
  mounted () {
    this.initializeView()
  },
  methods: {
    initializeView () {
      api.assign(this.$route.params.slug, result => {
        this.country = result
        this.$store.commit('setFilter', { type: 'country', item: this.country })
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