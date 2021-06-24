<template>
  <div>
    <page-header :title="tag.name"></page-header>

    <counters v-if="tag.counters">
      <counter :label="inflectBrewery(tag.counters.breweries, false)" :value="tag.counters.breweries"></counter>
      <counter :label="inflectCountry(tag.counters.countries, false)" :value="tag.counters.countries"></counter>
      <counter :label="inflectTrip(tag.counters.trips, false)" :value="tag.counters.trips"></counter>
      <counter :label="inflectCity(tag.counters.cities, false)" :value="tag.counters.cities"></counter>
    </counters>
    <hr class="my-4">

    <breweries :breweries="tag.breweries"></breweries>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import api from '../api'
import PageHeader from '../components/PageHeader'
import Counter from '../components/Counter'
import Counters from '../components/Counters'
import Breweries from '../components/Lists/Breweries'

export default {
  components: { Breweries, Counters, Counter, PageHeader },
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
