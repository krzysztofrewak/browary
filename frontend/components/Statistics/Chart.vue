<template>
  <div class="w-full chart">
    <page-header :title="title" :header="subtitle"></page-header>
    <div class="flex w-full px-8" v-if="max > 0">
      <div class="flex-1 flex flex-col justify-end" v-for="value in values" :key="value.label">
        <div class="text-gray-800 text-center text-xs">
          {{ value.value }}
        </div>
        <div class="text-gray-500 text-center text-xs">
          {{ (value.value * 100 / sum).toFixed(1) }}%
        </div>
        <div class="m-1 p-1 mb-0 bg-gray-200 hover:bg-gray-300 text-gray-800 text-center text-xs" :style="'height: ' + value.value * height / max + 'px'"></div>
        <div class="m-1 p-1 mt-0 bg-gray-400 text-gray-800 text-center text-xs">
          {{ value.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '../PageHeader'
import { ref, watch } from 'vue'

export default {
  components: { PageHeader },
  props: {
    values: Array,
    title: String,
    subtitle: String
  },
  setup (props) {
    const height = ref(150)
    const max = ref(0)
    const sum = ref(0)

    watch(() => props.values.length, () => {
      for (const value of props.values) {
        if (value.value >= max.value) {
          max.value = value.value
        }

        sum.value += value.value
      }
    })

    return {
      height,
      max,
      sum
    }
  }
}
</script>
