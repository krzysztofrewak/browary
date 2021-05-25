<template>
  <div>
    <page-header title="Odwiedzone państwa" :header="subtitle"></page-header>

    <List :entries="countries"
        :name="c => c.name"
        :alt="c => c.original"
        :flag="c => c.symbol"
        :route="c => { return { name: 'country', params: { slug: c.slug }}}"
        :labels="[c => inflectBrewery(c.breweries)]"
    ></List>
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
  computed: {
    subtitle () {
      return 'Odwiedziliśmy do tej pory ' + this.inflectCountry(this.countries.length)
    }
  },
  setup () {
    const router = useRouter()
    const countries = ref([])

    onMounted(() => {
      api.fetch(router, 'countries', (data) => {
        countries.value = Object.values(data)
      })
    })

    return {
      countries
    }
  }
}
</script>
