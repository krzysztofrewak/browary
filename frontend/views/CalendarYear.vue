<template>
  <div class="year">
    <page-header :title="title" header="Im ciemniej, tym więcej"></page-header>

    <Statistics v-if="year.stats">
      <Statistic label="odwiedzonych browarów" :value="year.stats.breweries"></Statistic>
      <Statistic label="odbytych wycieczek" :value="year.stats.trips"></Statistic>
      <Statistic label="zwiedzonych państw" :value="year.stats.countries"></Statistic>
      <Statistic label="zwiedzonych miast" :value="year.stats.cities"></Statistic>
    </Statistics>

    <div class="px-4">
      <div class="flex items-center justify-between p-1">
        <div class="w-6 h-6 border text-xs flex items-center justify-center" v-for="month in year.months"
            :key="month.slug"
            :class="calculateBackgroundColor(month.value, month.slug)"
            :title="month.value">
          <span class="opacity-50" v-if="month.value">{{ month.value }}</span>
        </div>
      </div>
    </div>

    <hr class="my-4">

    <Breweries :breweries="year.breweries"></Breweries>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import PageHeader from '../components/PageHeader'
import Breweries from '../components/Lists/Breweries'
import Statistic from '../components/Statistic'
import Statistics from '../components/Statistics'
import api from '../api'

export default {
  components: { Breweries, PageHeader, Statistic, Statistics },
  setup () {
    const route = useRoute()
    const router = useRouter()
    const store = useStore()

    const title = ref('Rok')
    const year = ref({})
    const maxValue = ref(0)

    onMounted(() => {
      api.fetch(router, 'calendar/' + route.params.year, (data) => {
        store.commit('setFilter', { type: 'year', item: data })
        year.value = data
        title.value = 'Rok ' + data.label
        maxValue.value = data.maxValue
      })
    })

    return {
      year,
      title,
      maxValue
    }
  },
  methods: {
    calculateBackgroundColor (value) {
      if (value === this.maxValue) {
        return 'bg-gray-900 text-white'
      }

      const thresholds = [
        { threshold: 0.85, class: 'bg-gray-800 text-white' },
        { threshold: 0.66, class: 'bg-gray-700 text-white' },
        { threshold: 0.5, class: 'bg-gray-600 text-white' },
        { threshold: 0.33, class: 'bg-gray-500' },
        { threshold: 0.15, class: 'bg-gray-400' }
      ]

      for (const t of thresholds) {
        if (value >= this.maxValue * t.threshold) {
          return t.class
        }
      }

      if (value >= 1) {
        return 'bg-gray-300'
      }

      return 'bg-gray-100'
    }
  }
}
</script>
