<template>
  <div>
    <page-header :title="tag.name"></page-header>

    <statistics v-if="tag.stats">
      <statistic :label="inflectBrewery(tag.stats.breweries, false)" :value="tag.stats.breweries"></statistic>
      <statistic :label="inflectCountry(tag.stats.countries, false)" :value="tag.stats.countries"></statistic>
      <statistic :label="inflectTrip(tag.stats.trips, false)" :value="tag.stats.trips"></statistic>
      <statistic :label="inflectCity(tag.stats.cities, false)" :value="tag.stats.cities"></statistic>
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
