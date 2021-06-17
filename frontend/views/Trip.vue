<template>
  <div>
    <page-header :title="trip.name"></page-header>

    <statistics v-if="trip.counters">
      <statistic :label="inflectVisitedBreweries(trip.counters.breweries, false)" :value="trip.counters.breweries"></statistic>
      <statistic :label="inflectVisitedCountries(trip.counters.countries, false)" :value="trip.counters.countries"></statistic>
      <statistic :label="inflectVisitedCities(trip.counters.cities, false)" :value="trip.counters.cities"></statistic>
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
