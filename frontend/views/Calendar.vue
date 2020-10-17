<template>
  <div>
    <div class="mb-8">
      <h1 class="text-2xl text-blue-900 font-semibold leading-none">Kalendarz</h1>
      <h2 class="text-gray-600">Wszystkie lata i miesiące zwiedzania browarów</h2>
    </div>

    <div class="flex w-full flex-col">
      <div class="flex w-full justify-content items-center" v-for="year in years">
        <div class="flex items-center">
          <router-link :to="{ name: 'calendar.year', params: { year: year.label } }" class="flex-1 h-full p-2"
                       :title="year.count">
            {{ year.label }}
          </router-link>
        </div>
        <div class="mx-1 flex items-center flex-grow">
          <router-link :class="getHeatMap(item.value)" :title="item.value"
                       :to="{ name: 'calendar.month', params: { year: year.label, month: item.slug } }"
                       class="flex-1 border m-1 p-3" v-for="item in year.items"></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      maxValue: 0,
      years: [],
    }
  },
  mounted () {
    fetch('api/calendar.json').then(response => response.json()).then(result => {
      this.maxValue = result.maxValue
      this.years = result.groups.reverse()
    })
  },
  methods: {
    getHeatMap (value) {
      if (value >= this.maxValue) {
        return 'bg-gray-900'
      }
      if (value > this.maxValue * .5) {
        return 'bg-gray-800'
      }
      if (value > this.maxValue * .33) {
        return 'bg-gray-700'
      }
      if (value > this.maxValue * .1) {
        return 'bg-gray-600'
      }
      if (value > 0) {
        return 'bg-gray-500'
      }
      return 'bg-gray-300'
    },
  },
}
</script>