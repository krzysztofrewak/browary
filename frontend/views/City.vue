<template>
  <div>
    <page-header :title="city.name" :header="city.translation"></page-header>
    <breweries :breweries="city.breweries"></breweries>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import PageHeader from '../components/PageHeader'
import Breweries from '../components/Lists/Breweries'
import api from '../api'

export default {
  components: { Breweries, PageHeader },
  setup () {
    const route = useRoute()
    const router = useRouter()
    const store = useStore()
    const city = ref({})

    onMounted(() => {
      api.fetch(router, 'cities/' + route.params.slug, (data) => {
        store.commit('setFilter', { type: 'city', item: data })
        city.value = data
      })
    })

    return {
      city
    }
  }
}
</script>
