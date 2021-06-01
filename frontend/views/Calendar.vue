<template>
  <div class="calendar">
    <page-header title="Kalendarz" header="Im ciemniej, tym więcej"></page-header>

    <div class="px-4">
      <div class="flex items-center justify-between p-1" v-for="year in years" :key="year.label">
        <router-link :to="{ name: 'calendar.year', params: { year: year.label } }" class="pr-3 text-gray-500 text-xs">
          {{ year.label }}
        </router-link>
        <year-row :row="year.items" :max-value="maxValue" :year="year.label"></year-row>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '../components/PageHeader'
import YearRow from '../components/Calendar/YearRow'
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import api from '../api'

export default {
  components: { YearRow, PageHeader },
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
  }
}
</script>
