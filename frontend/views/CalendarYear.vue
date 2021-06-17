<template>
  <div class="year">
    <page-header :title="title" header="Odwiedzone browary"></page-header>

    <div class="px-4">
      <year-row :row="year.months" :max-value="maxValue" :year="year.label" :show-months="true"></year-row>
    </div>

    <hr class="my-4">

    <statistics v-if="year.counters">
      <statistic label="odwiedzonych browarów" :value="year.counters.breweries"></statistic>
      <statistic label="odbytych wycieczek" :value="year.counters.trips"></statistic>
      <statistic label="zwiedzonych państw" :value="year.counters.countries"></statistic>
      <statistic label="zwiedzonych miast" :value="year.counters.cities"></statistic>
    </statistics>

    <hr class="my-4">

    <breweries :breweries="year.breweries"></breweries>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import PageHeader from '../components/PageHeader'
import Breweries from '../components/Lists/Breweries'
import Statistic from '../components/Statistic'
import Statistics from '../components/Statistics'
import api from '../api'
import YearRow from '../components/Calendar/YearRow'

export default {
  components: { YearRow, Breweries, PageHeader, Statistic, Statistics },
  setup () {
    const route = useRoute()
    const router = useRouter()
    const store = useStore()

    const title = ref('Rok')
    const year = ref({})
    const maxValue = ref(0)

    onMounted(() => {
      api.fetch(router, 'calendar/' + route.params.year, (data) => {
        store.commit('setFilter', { type: 'year', item: data })
        year.value = data
        title.value = 'Rok ' + data.label
        maxValue.value = data.maxValue
      })
    })

    return {
      year,
      title,
      maxValue
    }
  }
}
</script>
