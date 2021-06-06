<template>
  <div>
    <page-header title="Odwiedzone państwa" :header="subtitle"></page-header>
    <sorting-header :entries="countries"
        :left="[
            { label: 'nazwa', method: sortByName },
            { label: 'nomine', method: sortByOriginalName },
            { label: 'kod', method: sortByCode }
        ]"
        :right="[{ label: 'liczba browarów', method: sortByBreweries }]"
    ></sorting-header>
    <list :entries="countries"
        :name="c => c.name"
        :alt="c => c.original"
        :flag="c => c.symbol"
        :route="c => { return { name: 'country', params: { slug: c.slug }}}"
        :labels="[c => inflectBrewery(c.breweries)]"
    ></list>
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
  computed: {
    subtitle () {
      return 'Odwiedziliśmy do tej pory ' + this.inflectCountry(this.countries.length)
    }
  },
  setup () {
    const router = useRouter()
    const countries = ref([])

    const sortByName = (countries) => {
      countries.sort((a, b) => a.name.localeCompare(b.name))
    }

    const sortByOriginalName = (countries) => {
      countries.sort((a, b) => a.original.localeCompare(b.original))
    }

    const sortByCode = (countries) => {
      countries.sort((a, b) => a.symbol.localeCompare(b.symbol))
    }

    const sortByBreweries = (countries) => {
      countries.sort((a, b) => b.breweries > a.breweries)
    }

    onMounted(() => {
      api.fetch(router, 'countries', (data) => {
        countries.value = Object.values(data)
      })
    })

    return {
      countries,
      sortByName,
      sortByOriginalName,
      sortByCode,
      sortByBreweries
    }
  }
}
</script>
