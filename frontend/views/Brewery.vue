<template>
  <div v-if="brewery.name">
    <PageHeader :title="brewery.name" :header="brewery.location.city"></PageHeader>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import PageHeader from '../components/PageHeader'
import api from '../api'

export default {
  components: { PageHeader },
  setup () {
    const route = useRoute()
    const router = useRouter()
    const store = useStore()
    const brewery = ref({})

    onMounted(() => {
      api.fetch(router, 'breweries/' + route.params.slug, (data) => {
        data.tags = Object.values(data.tags)

        brewery.value = data
        store.commit('selectBrewery', data)
      })
    })

    return {
      brewery
    }
  }
}
</script>
