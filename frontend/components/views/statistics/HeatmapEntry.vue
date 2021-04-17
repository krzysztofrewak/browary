<template>
  <div class="flex-1 flex flex-col mr-1 justify-end">
    <div :style="'height: ' + value * barHeight / max + 'px'" class="bg-gray-600"></div>
    <div class="bg-gray-500 text-gray-800 p-2">{{ value }}</div>
    <div class="text-sm text-gray-600">{{ label }}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      barHeight: 180,
    }
  },
  props: {
    value: {
      type: Number,
    },
    label: {
      type: String,
    },
    max: {
      type: Number,
    },
  },
}
</script>
