<template>
  <div class="statistics">
    <extremes :extremes="extremes"></extremes>
    <hr class="mt-12 my-4">
    <chart :values="weekdays" title="Zwiedzanie a dni tygodnia" subtitle="Dni tygodnia z największą liczbą odwiedzonych browarów"></chart>
    <hr class="mt-8 my-4">
    <chart :values="months" title="Zwiedzanie a miesiące" subtitle="Miesiące z największą liczbą odwiedzonych browarów"></chart>
  </div>
</template>

<script>
import Extremes from '../components/Statistics/Extremes'
import { onMounted, ref } from 'vue'
import api from '../api'
import { useRouter } from 'vue-router'
import Chart from '../components/Statistics/Chart'

export default {
  components: { Chart, Extremes },
  setup () {
    const router = useRouter()

    const extremes = ref({})
    const months = ref({})
    const weekdays = ref({})

    onMounted(() => {
      api.fetch(router, 'statistics', (data) => {
        extremes.value = data.extremes
        months.value = data.months
        weekdays.value = data.weekdays
      })
    })

    return {
      extremes,
      weekdays,
      months
    }
  }
}
</script>
