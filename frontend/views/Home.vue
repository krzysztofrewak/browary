<template>
  <div>
    <page-header title="Odwiedzone browary" :header="subtitle"></page-header>
    <breweries :breweries="breweries"></breweries>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import Breweries from '../components/Lists/Breweries'
import PageHeader from '../components/PageHeader'
import api from '../api'

export default {
  components: { Breweries, PageHeader },
  computed: {
    subtitle () {
      if (this.$store.getters.counters) {
        const breweries = this.$store.getters.counters.breweries
        const countries = this.$store.getters.counters.countries
        return this.inflectBrewery(breweries) + ' w ' + this.inflectCountries(countries)
      }

      return '...'
    }
  },
  setup () {
    const router = useRouter()
    const store = useStore()
    const breweries = ref([])

    const fetchBreweries = async () => {
      await api.fetch(router, 'breweries', (data) => {
        store.commit('resetMap')
        breweries.value = Object.values(data)
      })
    }

    onMounted(() => fetchBreweries())

    return {
      breweries
    }
  }
}
</script>
