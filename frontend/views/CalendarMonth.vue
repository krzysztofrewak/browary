<template>
  <div class="month">
    <page-header :title="title" header="Odwiedzone browary"></page-header>
    <breweries :breweries="month.breweries"></breweries>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import Breweries from '../components/Lists/Breweries'
import PageHeader from '../components/PageHeader'
import api from '../api'

export default {
  components: { Breweries, PageHeader },
  setup () {
    const route = useRoute()
    const router = useRouter()
    const store = useStore()

    const title = ref('Miesiąc')
    const month = ref({})

    const url = 'calendar/' + route.params.year + '/' + route.params.month

    onMounted(() => {
      api.fetch(router, url, (data) => {
        data.slug = route.params.year + '-' + route.params.month

        if (data.extremes.north === '') {
          store.commit('resetMap')
        } else {
          store.commit('setFilter', { type: 'month', item: data })
        }

        month.value = data
        title.value = 'Miesiąc ' + data.label
      })
    })

    return {
      month,
      title
    }
  }
}
</script>
