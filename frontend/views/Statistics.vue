<template>
  <div class="statistics">
    <page-header title="Liczniki" header="Ogólne podsumowanie danych"></page-header>
    <statistics>
      <statistic :value="counters.breweries" :label="inflectBrewery(counters.breweries, false)"></statistic>
      <statistic :value="counters.countries" :label="inflectCountry(counters.countries, false)"></statistic>
      <statistic :value="counters.cities" :label="inflectTrip(counters.cities, false)"></statistic>
      <statistic :value="counters.trips" :label="inflectCity(counters.trips, false)"></statistic>
      <statistic :value="counters.tags" :label="inflectTag(counters.tags, false)"></statistic>
    </statistics>
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
import Statistics from '../components/Statistics'
import Statistic from '../components/Statistic'
import PageHeader from '../components/PageHeader'

export default {
  components: { PageHeader, Statistic, Statistics, Chart, Extremes },
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
