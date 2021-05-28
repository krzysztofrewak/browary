<template>
  <div>
    <PageHeader title="Odwiedzone browary" header="243 browary w 19 państwach"></PageHeader>
    <Breweries :breweries="breweries"></Breweries>
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
      return 'Odwiedziliśmy do tej pory'
    }
  },
  setup () {
    const router = useRouter()
    const store = useStore()
    const breweries = ref([])

    onMounted(() => {
      api.fetch(router, 'breweries', (data) => {
        store.commit('resetMap')
        breweries.value = Object.values(data)
      })
    })

    return {
      breweries
    }
  }
}
</script>
