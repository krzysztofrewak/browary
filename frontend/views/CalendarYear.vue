<template>
  <div class="year">
    <page-header :title="title" header="Odwiedzone browary"></page-header>

    <div class="px-4">
      <YearRow :row="year.months" :max-value="maxValue" :year="year.label" :show-months="true"></YearRow>
    </div>

    <hr class="my-4">

    <Statistics v-if="year.stats">
      <Statistic label="odwiedzonych browarów" :value="year.stats.breweries"></Statistic>
      <Statistic label="odbytych wycieczek" :value="year.stats.trips"></Statistic>
      <Statistic label="zwiedzonych państw" :value="year.stats.countries"></Statistic>
      <Statistic label="zwiedzonych miast" :value="year.stats.cities"></Statistic>
    </Statistics>

    <hr class="my-4">

    <Breweries :breweries="year.breweries"></Breweries>
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
