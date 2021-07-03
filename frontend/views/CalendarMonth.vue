<template>
  <div class="month">
    <page-header :title="title" header="Kartka z kalendarza"></page-header>

    <counters v-if="month.counters">
      <counter :label="inflectVisitedBreweries(month.counters.breweries, false)" :value="month.counters.breweries"></counter>
      <counter :label="inflectVisitedTrips(month.counters.trips, false)" :value="month.counters.trips"></counter>
      <counter :label="inflectVisitedCountries(month.counters.countries, false)" :value="month.counters.countries"></counter>
      <counter :label="inflectVisitedCities(month.counters.cities, false)" :value="month.counters.cities"></counter>
    </counters>

    <hr class="my-4">

    <breweries :breweries="month.breweries"></breweries>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import Breweries from '../components/Lists/Breweries'
import PageHeader from '../components/PageHeader'
import Counter from '../components/Counter'
import Counters from '../components/Counters'
import api from '../api'

export default {
  components: { Breweries, PageHeader, Counter, Counters },
  setup () {
    const route = useRoute()
    const router = useRouter()
    const store = useStore()

    const title = ref('Miesiąc')
    const month = ref({})

    const url = 'calendar/' + route.params.year + '/' + route.params.month

    onMounted(() => {
      api.fetch(router, url, (data) => {
        data.slug = route.params.year + '-' + route.params.month

        if (data.extremes.north === '') {
          store.commit('resetMap')
        } else {
          store.commit('setFilter', { type: 'month', item: data })
        }

        month.value = data
        title.value = data.label.charAt(0).toUpperCase() + data.label.slice(1)
      })
    })

    return {
      month,
      title
    }
  }
}
</script>
