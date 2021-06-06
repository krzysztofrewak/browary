<template>
  <div>
    <page-header title="Wycieczki" header="Z przynajmniej dwoma odwiedzonymi browarami"></page-header>
    <sorting-header :entries="trips"
        :left="[{ label: 'data', method: sortByDate }, { label: 'wycieczka', method: sortByName }]"
        :right="[{ label: 'liczba browarów', method: sortByBreweries }]"
    ></sorting-header>
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
import SortingHeader from '../components/Lists/SortingHeader'
import List from '../components/Lists/List'
import api from '../api'

export default {
  components: { List, PageHeader, SortingHeader },
  setup () {
    const router = useRouter()
    const trips = ref([])

    const sortByDate = (trips) => {
      trips.sort((a, b) => b.date > a.date)
    }

    const sortByName = (trips) => {
      trips.sort((a, b) => a.name.localeCompare(b.name))
    }

    const sortByBreweries = (trips) => {
      trips.sort((a, b) => b.breweries > a.breweries)
    }

    onMounted(() => {
      api.fetch(router, 'trips', (data) => {
        trips.value = Object.values(data)
      })
    })

    return {
      trips,
      sortByDate,
      sortByName,
      sortByBreweries
    }
  }
}
</script>
