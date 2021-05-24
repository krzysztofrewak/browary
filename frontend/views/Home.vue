<template>
  <div>
    <PageHeader title="Odwiedzone browary" header="243 browary w 19 państwach"></PageHeader>
    <Breweries :breweries="breweries"></Breweries>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import Breweries from '../components/Breweries'
import PageHeader from '../components/PageHeader'

export default {
  components: { Breweries, PageHeader },
  computed: {
    subtitle () {
      return 'Odwiedziliśmy do tej pory'
    }
  },
  setup () {
    const breweries = ref([])

    onMounted(() => [
      fetch('/api/breweries.json').then(response => response.json()).then(data => {
        breweries.value = Object.values(data)
      })
    ])

    return {
      breweries
    }
  }
}
</script>
