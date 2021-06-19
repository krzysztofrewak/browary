<template>
  <div>
    <page-header :title="country.name" :header="country.original"></page-header>

    <counters v-if="country.counters">
      <counter :label="inflectVisitedBreweries(country.counters.breweries, false)" :value="country.counters.breweries"></counter>
      <counter :label="inflectVisitedTrips(country.counters.trips, false)" :value="country.counters.trips"></counter>
      <counter :label="inflectVisitedCities(country.counters.cities, false)" :value="country.counters.cities"></counter>
    </counters>
    <hr class="my-4">

    <breweries :breweries="country.breweries"></breweries>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import api from '../api'
import PageHeader from '../components/PageHeader'
import Breweries from '../components/Lists/Breweries'
import Counter from '../components/Counter'
import Counters from '../components/Counters'

export default {
  components: { Breweries, Counters, Counter, PageHeader },
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
