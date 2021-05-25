<template>
  <div>
    <PageHeader :title="country.name" :header="country.original"></PageHeader>

    <Statistics v-if="country.stats">
      <Statistic label="odwiedzonych browarów" :value="country.stats.breweries"></Statistic>
      <Statistic label="odbytych wycieczek" :value="country.stats.trips"></Statistic>
      <Statistic label="zwiedzonych miast" :value="country.stats.cities"></Statistic>
    </Statistics>
    <hr class="my-4">

    <Breweries :breweries="country.breweries"></Breweries>
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
