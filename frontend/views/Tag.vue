<template>
  <div>
    <page-header :title="tag.name"></page-header>

    <statistics v-if="tag.counters">
      <statistic :label="inflectBrewery(tag.counters.breweries, false)" :value="tag.counters.breweries"></statistic>
      <statistic :label="inflectCountry(tag.counters.countries, false)" :value="tag.counters.countries"></statistic>
      <statistic :label="inflectTrip(tag.counters.trips, false)" :value="tag.counters.trips"></statistic>
      <statistic :label="inflectCity(tag.counters.cities, false)" :value="tag.counters.cities"></statistic>
    </statistics>
    <hr class="my-4">

    <breweries :breweries="tag.breweries"></breweries>
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
    const tag = ref({})

    onMounted(() => {
      api.fetch(router, 'tags/' + route.params.slug, (data) => {
        store.commit('setFilter', { type: 'tag', item: data })
        tag.value = data
      })
    })

    return {
      tag
    }
  }
}
</script>
