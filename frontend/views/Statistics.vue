<template>
  <div class="statistics">
    <page-header title="Liczniki" header="Ogólne podsumowanie danych"></page-header>
    <counters>
      <counter :value="counters.breweries" :label="inflectBrewery(counters.breweries, false)"></counter>
      <counter :value="counters.countries" :label="inflectCountry(counters.countries, false)"></counter>
      <counter :value="counters.tags" :label="inflectTag(counters.tags, false)"></counter>
      <counter :value="counters.trips" :label="inflectCity(counters.trips, false)"></counter>
      <counter :value="counters.cities" :label="inflectTrip(counters.cities, false)"></counter>
    </counters>
    <hr class="my-4">

    <extremes :extremes="extremes"></extremes>
    <hr class="mt-12 my-4">

    <chart :values="weekdays" title="Zwiedzanie a dni tygodnia" subtitle="Dni tygodnia z największą liczbą odwiedzonych browarów"></chart>
    <hr class="mt-8 my-4">

    <chart :values="months" title="Zwiedzanie a miesiące" subtitle="Miesiące z największą liczbą odwiedzonych browarów"></chart>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import api from '../api'
import Extremes from '../components/Statistics/Extremes'
import Chart from '../components/Statistics/Chart'
import Counters from '../components/Counters'
import Counter from '../components/Counter'
import PageHeader from '../components/PageHeader'

export default {
  components: { PageHeader, Counter, Counters, Chart, Extremes },
  setup () {
    const router = useRouter()

    const extremes = ref({})
    const months = ref({})
    const weekdays = ref({})
    const counters = ref({})

    onMounted(() => {
      api.fetch(router, 'statistics', (data) => {
        extremes.value = data.extremes
        months.value = data.months
        weekdays.value = data.weekdays
        counters.value = data.counters
      })
    })

    return {
      extremes,
      weekdays,
      months,
      counters
    }
  }
}
</script>
