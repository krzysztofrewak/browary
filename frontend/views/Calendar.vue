<template>
  <div class="calendar">
    <page-header title="Kalendarz" header="Im ciemniej, tym więcej"></page-header>

    <div class="px-4">
      <div class="flex flex-col sm:flex-row items-center justify-between p-1" v-for="year in years" :key="year.label">
        <router-link :to="{ name: 'calendar.year', params: { year: year.label } }" class="mb-2 sm:mb-0 sm:pr-3 text-gray-500 text-xs">
          {{ year.label }}
        </router-link>
        <year-row :row="year.items" :max-value="maxValue" :year="year.label"></year-row>
      </div>
    </div>

    <hr class="my-4">
    <page-header title="Podsumowanie" header="Zaliczone browary, państwa, wycieczki i miasta"></page-header>

    <div class="m-4">
      <table class="w-full text-xs leading-loose divide-y divide-gray-100 text-left">
        <thead>
          <tr class="py-2">
            <th class="w-1/6">rok</th>
            <th class="w-1/6 font-normal">browarów</th>
            <th class="w-1/6 font-normal">państw</th>
            <th class="w-1/6 font-normal">wycieczek</th>
            <th class="w-1/6 font-normal">miast</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
          <tr v-for="year in years" :key="year.label" class="odd:bg-gray-50">
            <td>
              <router-link :to="{ name: 'calendar.year', params: { year: year.label } }">
                {{ year.label }}
              </router-link>
            </td>
            <td>{{ year.counters.breweries }}</td>
            <td>{{ year.counters.countries }}</td>
            <td>{{ year.counters.trips }}</td>
            <td>{{ year.counters.cities }}</td>
          </tr>
        </tbody>
      </table>
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
    const tableOrder = ref('year')

    onMounted(() => {
      api.fetch(router, 'calendar', (data) => {
        maxValue.value = data.maxValue
        years.value = data.groups.reverse()
      })
    })

    return {
      years,
      maxValue,
      tableOrder
    }
  },
  methods: {
    reorder (column) {
      this.tableOrder = column
    }
  }
}
</script>
