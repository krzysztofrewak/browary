<template>
  <div>
    <page-header :title="country.name" :header="country.original"></page-header>

    <statistics v-if="country.stats">
      <statistic :label="inflectVisitedBreweries(country.stats.breweries, false)" :value="country.stats.breweries"></statistic>
      <statistic :label="inflectVisitedTrips(country.stats.trips, false)" :value="country.stats.trips"></statistic>
      <statistic :label="inflectVisitedCities(country.stats.cities, false)" :value="country.stats.cities"></statistic>
    </statistics>
    <hr class="my-4">

    <breweries :breweries="country.breweries"></breweries>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import PageHeader from '../components/PageHeader'
import Statistic from '../components/Statistic'
import Statistics from '../components/Statistics'
import Breweries from '../components/Lists/Breweries'
import api from '../api'

export default {
  components: { Breweries, Statistics, Statistic, PageHeader },
  setup () {
    const route = useRoute()
    const router = useRouter()
    const store = useStore()
    const country = ref({})

    onMounted(() => {
      api.fetch(router, 'countries/' + route.params.slug, (data) => {
        store.commit('setFilter', { type: 'country', item: data })
        country.value = data
      })
    })

    return {
      country
    }
  }
}
</script>
