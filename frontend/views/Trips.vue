<template>
  <div>
    <page-header title="Wycieczki" header="Z przynajmniej dwoma odwiedzonymi browarami"></page-header>
    <list :entries="trips"
        :name="trip => trip.name"
        :alt="trip => trip.original"
        :flags="trip => trip.countries"
        :route="trip => { return { name: 'trip', params: { slug: trip.slug }}}"
        :labels="[trip => inflectBrewery(trip.breweries)]"
        padding="0.5"
    >
    </list>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import PageHeader from '../components/PageHeader'
import List from '../components/Lists/List'
import api from '../api'

export default {
  components: { List, PageHeader },
  setup () {
    const router = useRouter()
    const trips = ref([])

    onMounted(() => {
      api.fetch(router, 'trips', (data) => {
        trips.value = Object.values(data)
      })
    })

    return {
      trips
    }
  }
}
</script>
