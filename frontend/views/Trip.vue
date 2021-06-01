<template>
  <div>
    <page-header :title="trip.name"></page-header>

    <statistics v-if="trip.stats">
      <statistic :label="inflectVisitedBreweries(trip.stats.breweries, false)" :value="trip.stats.breweries"></statistic>
      <statistic :label="inflectVisitedCountries(trip.stats.countries, false)" :value="trip.stats.countries"></statistic>
      <statistic :label="inflectVisitedCities(trip.stats.cities, false)" :value="trip.stats.cities"></statistic>
    </statistics>
    <hr class="my-4">

    <breweries :breweries="trip.breweries"></breweries>
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
    const trip = ref({})

    onMounted(() => {
      api.fetch(router, 'trips/' + route.params.slug, (data) => {
        store.commit('setFilter', { type: 'trip', item: data })
        trip.value = data
      })
    })

    return {
      trip
    }
  }
}
</script>
