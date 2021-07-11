<template>
  <div>
    <page-header title="Browarnicze miasta" header="Z przynajmniej dwoma odwiedzonymi browarami"></page-header>
    <sorting-header :entries="cities"
        :left="[{ label: 'państwo', method: sortByCountry }, { label: 'miasto', method: sortByName }]"
        :right="[{ label: 'liczba browarów', method: sortByBreweries }, { label: 'wycieczek', method: sortByTrips }]"
    ></sorting-header>
    <list :entries="cities"
        :name="city => city.name"
        :additional="city => city.translation"
        :alt="city => city.country.name"
        :route="city => { return { name: 'city', params: { slug: city.slug }}}"
        :flag="city => city.country.symbol"
        :labels="[city => inflectBrewery(city.breweries), city => inflectTrip(city.trips)]"
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
  components: { SortingHeader, List, PageHeader },
  setup () {
    const router = useRouter()
    const cities = ref([])

    const sortByName = (cities) => {
      cities.sort((a, b) => a.name.localeCompare(b.name))
    }

    const sortByBreweries = (cities) => {
      cities.sort((a, b) => b.breweries > a.breweries)
    }

    const sortByTrips = (cities) => {
      cities.sort((a, b) => b.trips > a.trips)
    }

    const sortByCountry = (cities) => {
      cities.sort((a, b) => a.country.name.localeCompare(b.country.name))
    }

    onMounted(() => {
      api.fetch(router, 'cities', (data) => {
        cities.value = Object.values(data)
      })
    })

    return {
      cities,
      sortByName,
      sortByCountry,
      sortByBreweries,
      sortByTrips
    }
  }
}
</script>
