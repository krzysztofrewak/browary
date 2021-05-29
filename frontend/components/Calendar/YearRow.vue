<template>
    <div class="flex flex-grow items-center justify-between px-1">
      <router-link v-for="month in row" :key="month.slug" :to="{ name: 'calendar.month', params: { year: year, month: month.slug } }">
        <div class="w-6 h-6 border text-xs flex items-center justify-center" :class="calculateBackgroundColor(month.value, month.slug)">
          <span class="opacity-50" v-if="month.value">{{ month.value }}</span>
        </div>
        <div class="text-gray-500 text-xs text-center" v-if="showMonths">{{ month.slug }}</div>
      </router-link>
    </div>
</template>

<script>
export default {
  props: {
    row: Array,
    maxValue: Number,
    year: String,
    showMonths: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    calculateBackgroundColor (value, month) {
      if (parseInt(this.year) >= new Date().getFullYear() && (parseInt(month) > new Date().getMonth() + 1)) {
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
