<template>
  <div>
    <div class="mb-8">
      <h1 class="text-2xl text-blue-900 font-semibold leading-none">Wycieczki</h1>
      <h2 class="text-gray-600">Wszystkie wycieczki z więcej niż jednym browarem, chronologicznie</h2>
    </div>

    <div class="text-sm">
      <div class="flex text-gray-600 py-2 px-2 border-b items-center">
        <div class="cursor-pointer flex-grow" @click="sortBy('date')">data</div>
        <div class="cursor-pointer text-right" @click="sortBy('breweries')">odwiedzone browary</div>
      </div>
      <div v-for="trip in trips" class="flex py-1 px-2 border-b items-center hover:bg-gray-300">
        <div class="flex-grow mt-1 mr-3">
          <router-link v-for="country in trip.countries" :to="{ name: 'country', params: { slug: country.slug } }">
            <i :class="country.symbol" class="mr-1 flat flag"></i>
          </router-link>
          <router-link :to="{ name: 'trip', params: { slug: trip.slug } }">
            {{ trip.name }}
          </router-link>
        </div>
        <div class="text-gray-600 text-right">
          {{ inflectBrewery(trip.breweries) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../resources/Trips'

export default {
  data () {
    return {
      trips: [],
      sortKey: null,
    }
  },
  mounted () {
    api.assign(result => {
      this.trips = Object.values(result)
    })
  },
  methods: {
    sortBy (key) {
      this.trips = this.trips.sort((a, b) => Number.isInteger(a[key]) ? a[key] < b[key] : a[key] > b[key])
    },
  },
}
</script>