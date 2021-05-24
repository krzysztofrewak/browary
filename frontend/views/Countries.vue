<template>
  <div>
    <page-header title="Odwiedzone państwa" :header="subtitle"></page-header>

    <ul class="divide-y divide-gray-200">
      <router-link :to="{ name: 'country', params: { slug: country.slug }}" v-for="country in countries" :key="country.name" class="py-2 px-1 flex hover:bg-gray-100">
        <div class="flex justify-center items-center mx-1">
          <i class="large flat flag shadow-lg" :class="country.symbol"></i>
        </div>
        <div class="ml-3 w-full text-xs flex items-center">
          <div class="text-gray-900 flex-1">
            {{ country.name }}
            <div class="text-gray-500">{{ country.original }}</div>
          </div>
          <div class="text-gray-500">{{ inflectBrewery(country.breweries) }}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import PageHeader from '../components/PageHeader'

export default {
  components: { PageHeader },
  computed: {
    subtitle () {
      return 'Odwiedziliśmy do tej pory ' + this.inflectCountry(this.countries.length)
    }
  },
  setup () {
    const countries = ref([])
    onMounted(() => [
      fetch('/api/countries.json').then(response => response.json()).then(data => {
        countries.value = Object.values(data)
      })
    ])

    return {
      countries
    }
  }
}
</script>
