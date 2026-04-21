<template>
  <div class="statistics">
    <page-header title="Statystyki" header="Ogólne podsumowanie danych"></page-header>

    <page-sub-header title="Liczniki" header="Ile i czego od początku zwiedzania"></page-sub-header>
    <counters>
      <counter :value="counters.breweries" :label="inflectBrewery(counters.breweries, false)"></counter>
      <counter :value="counters.countries" :label="inflectCountry(counters.countries, false)"></counter>
      <counter :value="counters.cities" :label="inflectCity(counters.cities, false)"></counter>
      <counter :value="counters.trips" :label="inflectTrip(counters.trips, false)"></counter>
      <counter :value="counters.tags" :label="inflectTag(counters.tags, false)"></counter>
    </counters>
    <hr class="my-4">

    <page-sub-header title="Rekordy" header="Najwięcej i najmocniej"></page-sub-header>
    <counters>
      <counter :value="records.mostBreweriesInOneDay?.counter" label="browarów w dzień" :sublabel="records.mostBreweriesInOneDay?.description"></counter>
      <counter :value="records.longestStreak?.counter" label="najdłuższy ciąg" :sublabel="records.longestStreak?.description"></counter>
      <counter :value="records.longestTrip?.counter" label="najdł. wycieczka" :sublabel="records.longestTrip?.description"></counter>
    </counters>
    <hr class="my-4">

    <extremes :extremes="extremes"></extremes>
    <hr class="mt-12 my-4">

    <chart :values="weekdays" title="Zwiedzanie a dni tygodnia" subtitle="Liczba odwiedzonych browarów per dzień tygodnia"></chart>
    <hr class="mt-8 my-4">

    <chart :values="months" title="Zwiedzanie a miesiące" subtitle="Liczbą odwiedzonych browarów per miesiąc"></chart>
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
import PageSubHeader from '../components/PageSubHeader'

export default {
  components: { PageHeader, PageSubHeader, Counter, Counters, Chart, Extremes },
  setup () {
    const router = useRouter()

    const extremes = ref({})
    const months = ref({})
    const weekdays = ref({})
    const counters = ref({})
    const records = ref({})

    onMounted(() => {
      api.fetch(router, 'statistics', (data) => {
        extremes.value = data.extremes
        months.value = data.months
        weekdays.value = data.weekdays
        counters.value = data.counters
        records.value = data.records
      })
    })

    return {
      extremes,
      weekdays,
      months,
      counters,
      records
    }
  }
}
</script>
