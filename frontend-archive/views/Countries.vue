<template>
  <div>
    <div class="mb-6">
      <h1 class="text-2xl text-blue-900 font-semibold leading-none">Odwiedzone państwa</h1>
      <h2 class="text-gray-600">Wszystkie państwa z odwiedzonymi browarami ({{ countriesCount }})</h2>
    </div>

    <div class="text-sm">
      <div class="flex text-gray-600 py-2 px-2 border-b items-center">
        <div class="cursor-pointer w-12" @click="sortBy('symbol')">kod</div>
        <div class="cursor-pointer flex-grow" @click="sortBy('name')">nazwa</div>
        <div class="cursor-pointer text-right" @click="sortBy('breweries')">odwiedzone browary</div>
      </div>
      <div v-for="country in countries" class="flex py-1 px-2 border-b items-center hover:bg-gray-300">
        <div class="mt-1 mr-3">
          <router-link :to="{ name: 'country', params: { slug: country.slug } }">
            <i :class="country.symbol" class="large flat flag"></i>
          </router-link>
        </div>
        <div class="flex-grow">
          <router-link :to="{ name: 'country', params: { slug: country.slug } }">{{ country.name }}</router-link>
        </div>
        <div class="text-gray-600 text-right">
          {{ inflectBrewery(country.breweries) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../resources/Countries'

export default {
  data () {
    return {
      countries: [],
      sortKey: null,
    }
  },
  computed: {
    countriesCount () {
      return this.countries.length
    },
  },
  mounted () {
    api.assign(result => {
      this.countries = Object.values(result)
    })
  },
  methods: {
    sortBy (key) {
      this.countries = this.countries.sort((a, b) => Number.isInteger(a[key]) ? a[key] < b[key] : a[key] > b[key])
    },
  },
}
</script>