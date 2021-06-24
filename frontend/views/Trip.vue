<template>
  <div>
    <page-header :title="trip.name"></page-header>

    <counters v-if="trip.counters">
      <counter :label="inflectVisitedBreweries(trip.counters.breweries, false)" :value="trip.counters.breweries"></counter>
      <counter :label="inflectVisitedCountries(trip.counters.countries, false)" :value="trip.counters.countries"></counter>
      <counter :label="inflectVisitedCities(trip.counters.cities, false)" :value="trip.counters.cities"></counter>
    </counters>
    <hr class="my-4">

    <breweries :breweries="trip.breweries"></breweries>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import api from '../api'
import PageHeader from '../components/PageHeader'
import Counter from '../components/Counter'
import Counters from '../components/Counters'
import Breweries from '../components/Lists/Breweries'

export default {
  components: { Breweries, Counters, Counter, PageHeader },
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
