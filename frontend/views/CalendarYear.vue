<template>
  <div class="year">
    <page-header :title="title" header="Odwiedzone browary"></page-header>

    <div class="px-4">
      <year-row :row="year.months" :max-value="maxValue" :year="year.label" :show-months="true"></year-row>
    </div>

    <hr class="my-4">

    <counters v-if="year.counters">
      <counter label="odwiedzonych browarów" :value="year.counters.breweries"></counter>
      <counter label="odbytych wycieczek" :value="year.counters.trips"></counter>
      <counter label="zwiedzonych państw" :value="year.counters.countries"></counter>
      <counter label="zwiedzonych miast" :value="year.counters.cities"></counter>
    </counters>

    <hr class="my-4">

    <breweries :breweries="year.breweries"></breweries>
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
import YearRow from '../components/Calendar/YearRow'

export default {
  components: { YearRow, Breweries, PageHeader, Counter, Counters },
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
