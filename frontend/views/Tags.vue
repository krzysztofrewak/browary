<template>
  <div>
    <page-header title="Tagi" header="Z przynajmniej dwoma odwiedzonymi browarami"></page-header>
    <sorting-header :entries="tags"
        :left="[{ label: 'tag', method: sortByName }]"
        :right="[{ label: 'liczba', method: sortByBreweries }]"
    ></sorting-header>
    <list :entries="tags"
        :name="tag => tag.name"
        :route="tag => { return { name: 'tag', params: { slug: tag.slug }}}"
        :labels="[tag => inflectBrewery(tag.breweries)]"
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
    const tags = ref([])

    const sortByName = (tags) => {
      tags.sort((a, b) => a.name.localeCompare(b.name))
    }

    const sortByBreweries = (tags) => {
      tags.sort((a, b) => b.breweries > a.breweries)
    }

    onMounted(() => {
      api.fetch(router, 'tags', (data) => {
        tags.value = Object.values(data)
      })
    })

    return {
      tags,
      sortByName,
      sortByBreweries
    }
  }
}
</script>
