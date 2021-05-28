<template>
  <div class="calendar">
    <page-header title="Kalendarz" header="Im ciemniej, tym więcej"></page-header>

    <div class="px-4">
      <div class="flex items-center justify-between p-1" v-for="year in years" :key="year.label">
        <router-link :to="{ name: 'calendar.year', params: { year: year.label } }" class="pr-2 text-gray-500 text-xs">
          {{ year.label }}
        </router-link>
        <div class="w-6 h-6 border text-xs flex items-center justify-center" v-for="month in year.items"
            :key="month.slug"
            :class="calculateBackgroundColor(month.value, month.slug, year.label)"
            :title="month.value">
          <span class="opacity-50" v-if="month.value">{{ month.value }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '../components/PageHeader'
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import api from '../api'

export default {
  components: { PageHeader },
  setup () {
    const router = useRouter()

    const maxValue = ref(0)
    const years = ref([])

    onMounted(() => {
      api.fetch(router, 'calendar', (data) => {
        maxValue.value = data.maxValue
        years.value = data.groups.reverse()
      })
    })

    return {
      maxValue,
      years
    }
  },
  methods: {
    calculateBackgroundColor (value, month, year) {
      if (parseInt(year) >= new Date().getFullYear() && (parseInt(month) > new Date().getMonth() + 1)) {
        return 'bg-white'
      }

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
